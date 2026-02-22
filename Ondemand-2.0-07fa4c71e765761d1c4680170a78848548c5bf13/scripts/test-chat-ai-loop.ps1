param(
  [ValidateSet("real", "mock")]
  [string]$Mode = "real",
  [int]$Count = 50,
  [int]$Port = 8888,
  [int]$DelayMs = 300,
  [switch]$KeepServerRunning
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if ($Count -lt 1) {
  throw "Count must be >= 1"
}

$projectRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $projectRoot

$reportDir = Join-Path $projectRoot "test-reports"
if (-not (Test-Path $reportDir)) {
  New-Item -ItemType Directory -Path $reportDir | Out-Null
}

$now = Get-Date -Format "yyyyMMdd-HHmmss"
$jsonReport = Join-Path $reportDir "chat-ai-loop-$now.json"
$mdReport = Join-Path $reportDir "chat-ai-loop-$now.md"
$endpoint = "http://localhost:$Port/api/chat-ai"

$promptPool = @(
  "Oi, sou dona de uma clinica odontologica em BH. Voces atendem esse nicho?",
  "Quero gerar mais agendamentos no WhatsApp para harmonizacao facial.",
  "Qual o investimento minimo para comecar com voces?",
  "Tenho uma clinica com 2 unidades. Da para escalar campanhas locais?",
  "Meu principal problema e no-show. O que voces recomendam primeiro?",
  "Quero reduzir CPL no Meta Ads sem perder qualidade do lead.",
  "Atendemos so particular. Isso muda a estrategia?",
  "Quero aumentar faturamento em 90 dias. E possivel?",
  "Vocês fazem funil completo ou so trafego pago?",
  "Nosso ticket medio e R$ 1.200. Isso ajuda na qualificacao?",
  "Atendemos em Sao Paulo capital e ABC. Da para segmentar bem?",
  "Minha secretaria nao da conta de responder todos os leads.",
  "Tenho verba de R$ 4.000/mes. Vale iniciar agora?",
  "Ja testei agencia e nao tive resultado. O que muda com voces?",
  "Quero mais pacientes para implante dentario. Qual seria o plano?",
  "Quanto tempo para ver resultados consistentes?",
  "Vocês integram com CRM e automacao?",
  "Consigo captar lead e qualificar antes de falar com vendedor?",
  "Quero lotar agenda de avaliacao gratuita. Como estruturam isso?",
  "Tenho baixa taxa de comparecimento em consultas iniciais.",
  "Atendemos estetica premium. Voces trabalham ticket alto?",
  "Meu WhatsApp vira bagunca. Voces resolvem esse fluxo?",
  "Quero saber se meu negocio se qualifica para o servico.",
  "Meu objetivo e 80 leads qualificados por mes. E realista?",
  "Vocês atendem apenas clinicas ou outros segmentos tambem?"
)

function Get-Question {
  param([int]$Index)
  return $promptPool[$Index % $promptPool.Count]
}

function Test-QualificationSignal {
  param([string]$Text)
  $safeText = if ($null -eq $Text) { "" } else { $Text }
  $normalized = $safeText.ToLowerInvariant()

  $asksQuestion = $normalized.Contains("?")
  $hasQualificationIntent = $normalized -match "(segmento|nicho|objetivo|orcamento|verba|ticket|prazo|urgenc|localiza|canal|whatsapp|agendar)"
  $hasAdvanceIntent = $normalized -match "(proximo passo|posso te ajudar|prefere|agendar|whatsapp|me conta|qual|como)"

  [pscustomobject]@{
    asks_question = $asksQuestion
    has_qualification_intent = [bool]$hasQualificationIntent
    has_advance_intent = [bool]$hasAdvanceIntent
    qualified_like = ($asksQuestion -and ($hasQualificationIntent -or $hasAdvanceIntent))
  }
}

if ($Mode -eq "real" -and [string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
  throw "Mode=real requires OPENAI_API_KEY in your environment. Example: `$env:OPENAI_API_KEY='sk-...'"
}

if ($Mode -eq "mock" -and [string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
  $env:OPENAI_API_KEY = "mock-local-key"
}

$netlifyProcess = $null
try {
  Write-Host "Starting Netlify dev on port $Port..."
  $netlifyProcess = Start-Process -FilePath "npx.cmd" `
    -ArgumentList @("netlify", "dev", "--port", "$Port", "--target-port", "3000", "--framework", "#custom") `
    -WorkingDirectory $projectRoot `
    -PassThru

  $ready = $false
  for ($i = 0; $i -lt 90; $i++) {
    Start-Sleep -Milliseconds 1000
    try {
      $probe = Invoke-WebRequest -Method Get -Uri $endpoint -UseBasicParsing -TimeoutSec 5
      if ($probe.StatusCode -ge 200) {
        $ready = $true
        break
      }
    } catch {
      if ($_.Exception.Response -and [int]$_.Exception.Response.StatusCode -eq 405) {
        $ready = $true
        break
      }
    }
  }

  if (-not $ready) {
    throw "Netlify dev did not become ready in time at $endpoint"
  }

  Write-Host "Server ready. Running $Count requests in mode: $Mode"
  $results = @()

  for ($i = 1; $i -le $Count; $i++) {
    $message = Get-Question -Index ($i - 1)
    $payload = @{
      message = $message
      context = "Teste automatizado de qualificacao. Iteracao $i/$Count."
    } | ConvertTo-Json -Depth 5

    $headers = @{}
    if ($Mode -eq "mock") {
      $headers["x-mock-ai"] = "1"
    }

    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    $status = 0
    $responseText = ""
    $errorText = ""

    try {
      $resp = Invoke-RestMethod -Method Post -Uri $endpoint -ContentType "application/json" -Headers $headers -Body $payload -TimeoutSec 60
      $sw.Stop()
      $status = 200
      $responseText = [string]$resp.message
    } catch {
      $sw.Stop()
      if ($_.Exception.Response) {
        $status = [int]$_.Exception.Response.StatusCode
        try {
          $reader = New-Object IO.StreamReader($_.Exception.Response.GetResponseStream())
          $errorText = $reader.ReadToEnd()
        } catch {
          $errorText = $_.Exception.Message
        }
      } else {
        $status = -1
        $errorText = $_.Exception.Message
      }
    }

    $signals = Test-QualificationSignal -Text $responseText

    $results += [pscustomobject]@{
      index = $i
      prompt = $message
      status = $status
      latency_ms = [int]$sw.ElapsedMilliseconds
      response = $responseText
      error = $errorText
      asks_question = $signals.asks_question
      has_qualification_intent = $signals.has_qualification_intent
      has_advance_intent = $signals.has_advance_intent
      qualified_like = $signals.qualified_like
    }

    Start-Sleep -Milliseconds $DelayMs
  }

  $ok = @($results | Where-Object { $_.status -eq 200 }).Count
  $errors = @($results | Where-Object { $_.status -ne 200 }).Count
  $qualified = @($results | Where-Object { $_.qualified_like }).Count
  $avgLatency = [math]::Round((($results | Measure-Object latency_ms -Average).Average), 2)

  $summary = [pscustomobject]@{
    timestamp = (Get-Date).ToString("s")
    mode = $Mode
    endpoint = $endpoint
    total_requests = $Count
    success_200 = $ok
    non_200 = $errors
    success_rate = [math]::Round((100.0 * $ok / $Count), 2)
    qualified_like_count = $qualified
    qualified_like_rate = [math]::Round((100.0 * $qualified / $Count), 2)
    avg_latency_ms = $avgLatency
  }

  $output = [pscustomobject]@{
    summary = $summary
    results = $results
  }

  $output | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 $jsonReport

  $topErrors = $results | Where-Object { $_.status -ne 200 } | Select-Object -First 5
  $sampleGood = $results | Where-Object { $_.status -eq 200 } | Select-Object -First 5

  $md = @()
  $md += "# Chat AI Loop Test"
  $md += ""
  $md += "- Timestamp: $($summary.timestamp)"
  $md += "- Mode: $Mode"
  $md += "- Endpoint: $endpoint"
  $md += "- Requests: $Count"
  $md += "- Success (200): $ok"
  $md += "- Errors (!200): $errors"
  $md += "- Success rate: $($summary.success_rate)%"
  $md += "- Qualified-like responses: $qualified ($($summary.qualified_like_rate)%)"
  $md += "- Average latency: $avgLatency ms"
  $md += ""
  $md += "## Sample Successful Responses"
  foreach ($row in $sampleGood) {
    $md += "- #$($row.index) prompt: $($row.prompt)"
    $md += "  - response: $($row.response)"
  }
  $md += ""
  $md += "## Sample Errors"
  if (@($topErrors).Count -eq 0) {
    $md += "- No errors."
  } else {
    foreach ($row in $topErrors) {
      $md += "- #$($row.index) status=$($row.status) error=$($row.error)"
    }
  }

  $md -join "`r`n" | Set-Content -Encoding UTF8 $mdReport

  Write-Host ""
  Write-Host "Done."
  Write-Host "JSON report: $jsonReport"
  Write-Host "MD report:   $mdReport"
  Write-Host ""
  Write-Host ($summary | ConvertTo-Json -Depth 4)
}
finally {
  if ($netlifyProcess -and -not $KeepServerRunning) {
    try {
      if (-not $netlifyProcess.HasExited) {
        Stop-Process -Id $netlifyProcess.Id -Force
      }
    } catch {
      Write-Warning "Could not stop netlify dev process: $($_.Exception.Message)"
    }
  }
}
