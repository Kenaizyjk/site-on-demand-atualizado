"use client"

import React, { useEffect, useRef, useState, useCallback } from "react"

// ─── Node type colors (n8n brand exact) ──────────────────────────────────────
const NODE_COLORS: Record<string, string> = {
  webhook:  "#FF6D5A",
  sheets:   "#0F9D58",
  if:       "#FF9800",
  whatsapp: "#25D366",
  wait:     "#9C27B0",
  http:     "#2196F3",
}

const NODE_W = 180
const NODE_H = 56
const ICON_W = 36

// ─── Workflow nodes ───────────────────────────────────────────────────────────
const NODES = [
  {
    id: "webhook",
    type: "webhook",
    label: "Webhook",
    sublabel: "Novo lead do site",
    x: 52,
    y: 172,
    isTrigger: true,
  },
  {
    id: "sheets",
    type: "sheets",
    label: "Google Sheets",
    sublabel: "Salvar lead",
    x: 272,
    y: 172,
  },
  {
    id: "if",
    type: "if",
    label: "IF",
    sublabel: "Horário comercial?",
    x: 492,
    y: 172,
    hasOutputs: true,
  },
  {
    id: "whatsapp",
    type: "whatsapp",
    label: "WhatsApp",
    sublabel: "Enviar mensagem",
    x: 712,
    y: 72,
  },
  {
    id: "wait",
    type: "wait",
    label: "Wait",
    sublabel: "Até amanhã 9h",
    x: 712,
    y: 272,
  },
  {
    id: "http",
    type: "http",
    label: "HTTP Request",
    sublabel: "Atualizar CRM",
    x: 932,
    y: 172,
  },
] as const

type NodeId = typeof NODES[number]["id"]
type NodeDef = typeof NODES[number]

// ─── Connections ──────────────────────────────────────────────────────────────
const EDGES = [
  { from: "webhook",  to: "sheets",   branch: null },
  { from: "sheets",   to: "if",       branch: null },
  { from: "if",       to: "whatsapp", branch: "true" },
  { from: "if",       to: "wait",     branch: "false" },
  { from: "whatsapp", to: "http",     branch: null },
  { from: "wait",     to: "http",     branch: null },
] as const

// ─── Execution sequence ───────────────────────────────────────────────────────
const EXEC_SEQUENCE: NodeId[] = ["webhook", "sheets", "if", "whatsapp", "wait", "http"]

// Simulated execution times per node (ms) for log panel
const EXEC_TIMES: Record<NodeId, number> = {
  webhook:  12,
  sheets:   148,
  if:       8,
  whatsapp: 231,
  wait:     4,
  http:     89,
}

// items per node
const EXEC_ITEMS: Record<NodeId, number> = {
  webhook:  1,
  sheets:   1,
  if:       1,
  whatsapp: 1,
  wait:     1,
  http:     1,
}

function getOutputPort(node: NodeDef, branch: string | null) {
  if ((node as { hasOutputs?: boolean }).hasOutputs) {
    if (branch === "true")  return { x: node.x + NODE_W, y: node.y + 16 }
    if (branch === "false") return { x: node.x + NODE_W, y: node.y + NODE_H - 16 }
  }
  return { x: node.x + NODE_W, y: node.y + NODE_H / 2 }
}

function getInputPort(node: NodeDef) {
  return { x: node.x, y: node.y + NODE_H / 2 }
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function IconWebhook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10H13L13 2Z" fill="white" fillOpacity="0.9" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
    </svg>
  )
}
function IconSheets() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <rect x="4" y="2" width="16" height="20" rx="2" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
      <path d="M4 8h16M9 8v12M15 8v12" stroke="white" strokeWidth="1.3"/>
      <rect x="9" y="11" width="6" height="3" fill="white" fillOpacity="0.35"/>
      <rect x="9" y="15" width="6" height="3" fill="white" fillOpacity="0.2"/>
    </svg>
  )
}
function IconIF() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <path d="M12 4L20 12L12 20L4 12L12 4Z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.1"/>
      <path d="M12 8.5v4M12 14.5v1" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <path d="M4.6 17.9L3 21l3.2-.85A9 9 0 1012 21a9 9 0 01-7.4-3.1z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.1"/>
      <path d="M9.5 10.5c.3.7.8 1.4 1.5 2 .7.7 1.4 1.1 2.1 1.4l.7-.7c.2-.2.5-.3.8-.1.6.3 1.1.5 1.4.6.3.1.4.5.2.8l-.8 1c-.3.4-.8.6-1.3.5-1-.2-3.2-1.1-4.7-2.6C7.9 12 7 9.8 6.8 8.8c-.1-.5.1-1 .5-1.3l1-.8c.3-.2.7-.1.9.2.1.3.3.8.6 1.4.2.3.1.6-.1.8l-.7.7z" fill="white"/>
    </svg>
  )
}
function IconWait() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
      <path d="M12 6v6.5l3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconHTTP() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <rect x="2" y="5" width="20" height="14" rx="3" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.1"/>
      <path d="M7 12h10M14 9l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const NODE_ICONS: Record<string, React.ReactElement> = {
  webhook:  <IconWebhook />,
  sheets:   <IconSheets />,
  if:       <IconIF />,
  whatsapp: <IconWhatsApp />,
  wait:     <IconWait />,
  http:     <IconHTTP />,
}

// ─── Toolbar SVG Icons ────────────────────────────────────────────────────────
function IconPointer() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 2l10 6.5-5 1.5-3 4.5V2z" fill="currentColor" fillOpacity="0.85"/>
    </svg>
  )
}
function IconHand() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M6 2a1 1 0 011 1v4h.5a1 1 0 011-1h.5a1 1 0 011 1v.5a1 1 0 011-1h.5a1 1 0 011 1v4a4 4 0 01-4 4H7A4 4 0 013 12V8l3-3V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}
function IconZoomIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M7 5v4M5 7h4M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
function IconZoomOut() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7h4M11 11l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}
function IconFitScreen() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M2 5V2h3M11 2h3v3M2 11v3h3M11 14h3v-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Bezier Edge ──────────────────────────────────────────────────────────────
function BezierEdge({
  from,
  to,
  branch,
  animPhase,
  isCompleted,
  nodeColor,
}: {
  from: { x: number; y: number }
  to: { x: number; y: number }
  branch: string | null
  animPhase: "idle" | "marching" | "done"
  isCompleted: boolean
  nodeColor: string
}) {
  const dx = Math.abs(to.x - from.x) * 0.5
  const c1x = from.x + dx
  const c1y = from.y
  const c2x = to.x - dx
  const c2y = to.y
  const d = `M ${from.x} ${from.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${to.x} ${to.y}`

  // Approximate path length for dasharray
  const approxLen = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)) * 1.2

  // Arrowhead: small, clean, at tip
  const arrowSize = 5
  // Tangent at end of bezier
  const tx = to.x - c2x
  const ty = to.y - c2y
  const tlen = Math.sqrt(tx * tx + ty * ty) || 1
  const nx = tx / tlen
  const ny = ty / tlen
  const perpX = -ny
  const perpY = nx
  const arrowP1 = `${to.x - nx * arrowSize + perpX * (arrowSize * 0.45)},${to.y - ny * arrowSize + perpY * (arrowSize * 0.45)}`
  const arrowP2 = `${to.x - nx * arrowSize - perpX * (arrowSize * 0.45)},${to.y - ny * arrowSize - perpY * (arrowSize * 0.45)}`
  const arrowPath = `M ${to.x},${to.y} L ${arrowP1} L ${arrowP2} Z`

  const edgeColor = animPhase === "marching" ? nodeColor : isCompleted ? "#6b6b78" : "#5c5c66"
  const strokeOpacity = animPhase === "marching" ? 0.9 : 1

  return (
    <g>
      {/* Base line */}
      <path
        d={d}
        stroke="#5c5c66"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Marching ants overlay */}
      {animPhase === "marching" && (
        <path
          d={d}
          stroke={nodeColor}
          strokeWidth="1.5"
          fill="none"
          strokeOpacity={strokeOpacity}
          strokeDasharray={`${approxLen * 0.25} ${approxLen * 0.75}`}
          style={{
            animation: "n8n-march 0.6s linear infinite",
          }}
        />
      )}
      {/* Completed line highlight */}
      {isCompleted && (
        <path
          d={d}
          stroke="#6b6b78"
          strokeWidth="1.5"
          fill="none"
          opacity={0.7}
        />
      )}
      {/* Arrowhead */}
      <path
        d={arrowPath}
        fill={edgeColor}
        opacity={animPhase === "marching" ? strokeOpacity : 1}
      />
      {/* Branch labels outside card (true/false) */}
      {branch && (() => {
        const mx = (from.x + to.x) * 0.35
        const my = branch === "true"
          ? from.y - 12
          : from.y + 16
        const labelColor = branch === "true" ? "#22c55e" : "#f87171"
        return (
          <g>
            <rect
              x={from.x + 8}
              y={my - 8}
              width={branch === "true" ? 26 : 30}
              height={14}
              rx={3}
              fill="#1f1f23"
              stroke={labelColor}
              strokeWidth="0.8"
              opacity="0.9"
            />
            <text
              x={from.x + 8 + (branch === "true" ? 13 : 15)}
              y={my + 2}
              textAnchor="middle"
              fill={labelColor}
              fontSize="8"
              fontFamily="'Inter', -apple-system, sans-serif"
              fontWeight="500"
            >
              {branch}
            </text>
          </g>
        )
      })()}
    </g>
  )
}

// ─── Node Card ────────────────────────────────────────────────────────────────
function N8NNode({
  node,
  execState,
}: {
  node: NodeDef
  execState: "idle" | "running" | "done" | "pending"
}) {
  const color = NODE_COLORS[node.type] || "#52525b"
  const isRunning = execState === "running"
  const isDone = execState === "done"
  const hasOutputs = (node as { hasOutputs?: boolean }).hasOutputs
  const isTrigger = (node as { isTrigger?: boolean }).isTrigger

  const borderColor = isRunning
    ? color
    : isDone
    ? color + "55"
    : "#3a3a3c"
  const boxShadow = isRunning
    ? `0 0 0 2px ${color}44, 0 0 16px ${color}33`
    : "none"

  return (
    <g>
      {/* Card via foreignObject */}
      <foreignObject x={node.x} y={node.y} width={NODE_W} height={NODE_H}>
        <div
          style={{
            width: NODE_W,
            height: NODE_H,
            borderRadius: 8,
            border: `1px solid ${borderColor}`,
            background: "#252529",
            boxShadow,
            display: "flex",
            alignItems: "stretch",
            overflow: "hidden",
            transition: "border-color 0.25s, box-shadow 0.25s",
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          {/* Icon strip — 36px */}
          <div
            style={{
              width: ICON_W,
              minWidth: ICON_W,
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              position: "relative",
            }}
          >
            {NODE_ICONS[node.type]}
            {/* Trigger lightning badge */}
            {isTrigger && (
              <div
                style={{
                  position: "absolute",
                  bottom: 3,
                  right: 3,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 8 8" width="7" height="7">
                  <path d="M5 1L2 4.5H4.5L3 7L6 3.5H3.5L5 1Z" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
            )}
          </div>
          {/* Text area */}
          <div
            style={{
              flex: 1,
              padding: "0 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: 0,
            }}
          >
            <div
              style={{
                color: "#e4e4e7",
                fontSize: 12,
                fontWeight: 500,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {node.label}
            </div>
            <div
              style={{
                color: "#71717a",
                fontSize: 10,
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                marginTop: 2,
                lineHeight: 1.2,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {node.sublabel}
            </div>
          </div>
        </div>
      </foreignObject>

      {/* Spinner — overlaid top-center of card, outside foreignObject */}
      {isRunning && (
        <g>
          <circle cx={node.x + NODE_W / 2} cy={node.y - 7} r={7} fill="#252529" stroke={color} strokeWidth="1"/>
          <circle
            cx={node.x + NODE_W / 2}
            cy={node.y - 7}
            r={5}
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeDasharray="16 6"
            style={{ transformOrigin: `${node.x + NODE_W / 2}px ${node.y - 7}px`, animation: "n8n-spin 0.7s linear infinite" }}
          />
        </g>
      )}

      {/* Success badge — overlaid top-right corner, outside card */}
      {isDone && (
        <g style={{ animation: "n8n-badge-pop 0.2s ease-out forwards" }}>
          <circle
            cx={node.x + NODE_W + 6}
            cy={node.y - 6}
            r={10}
            fill="#22c55e"
          />
          <path
            d={`M ${node.x + NODE_W + 1} ${node.y - 6} L ${node.x + NODE_W + 5} ${node.y - 2} L ${node.x + NODE_W + 11} ${node.y - 10}`}
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      )}

      {/* Items badge — bottom-right corner */}
      {isDone && (
        <g>
          <rect
            x={node.x + NODE_W - 28}
            y={node.y + NODE_H + 2}
            width={28}
            height={13}
            rx={3}
            fill="#3a3a3e"
          />
          <text
            x={node.x + NODE_W - 14}
            y={node.y + NODE_H + 12}
            textAnchor="middle"
            fill="#909096"
            fontSize="8"
            fontFamily="'Inter', -apple-system, sans-serif"
          >
            1 item
          </text>
        </g>
      )}

      {/* Input port (left) */}
      {!isTrigger && (
        <circle
          cx={node.x}
          cy={node.y + NODE_H / 2}
          r={4}
          fill="#252529"
          stroke={isDone || isRunning ? color + "99" : "#5c5c66"}
          strokeWidth="1.5"
        />
      )}

      {/* Output port(s) (right) */}
      {hasOutputs ? (
        <>
          <circle
            cx={node.x + NODE_W}
            cy={node.y + 16}
            r={4}
            fill="#252529"
            stroke={isDone ? "#22c55e" : "#5c5c66"}
            strokeWidth="1.5"
          />
          <circle
            cx={node.x + NODE_W}
            cy={node.y + NODE_H - 16}
            r={4}
            fill="#252529"
            stroke={isDone ? "#f87171" : "#5c5c66"}
            strokeWidth="1.5"
          />
        </>
      ) : (
        <circle
          cx={node.x + NODE_W}
          cy={node.y + NODE_H / 2}
          r={4}
          fill="#252529"
          stroke={isDone ? color + "cc" : "#5c5c66"}
          strokeWidth="1.5"
        />
      )}
    </g>
  )
}

// ─── Log Panel Item ───────────────────────────────────────────────────────────
function LogEntry({ nodeId, delay }: { nodeId: NodeId; delay: number }) {
  const color = NODE_COLORS[nodeId]
  const label = NODES.find((n) => n.id === nodeId)?.label ?? nodeId
  const ms = EXEC_TIMES[nodeId]
  const items = EXEC_ITEMS[nodeId]
  const now = new Date()
  const ts = `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds() + delay).padStart(2,"0")}`

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "3px 12px",
        borderBottom: "1px solid #232327",
        animation: "n8n-fadein 0.25s ease forwards",
      }}
    >
      <span style={{ color: "#4d4d54", fontSize: 9, fontFamily: "monospace", minWidth: 52 }}>{ts}</span>
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#22c55e",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 2,
          background: color,
          flexShrink: 0,
        }}
      />
      <span style={{ color: "#c4c4ce", fontSize: 10, fontFamily: "'Inter', -apple-system, sans-serif", flex: 1 }}>
        {label}
      </span>
      <span style={{ color: "#6b6b78", fontSize: 9, fontFamily: "monospace" }}>
        {items} item
      </span>
      <span style={{ color: "#4d4d54", fontSize: 9, fontFamily: "monospace" }}>
        {ms}ms
      </span>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function AutomationN8NShowcase() {
  const [stepIndex, setStepIndex] = useState(-1)
  const [edgeStates, setEdgeStates] = useState<Record<string, "idle" | "marching" | "done">>({})
  const [running, setRunning] = useState(false)
  const [executionDone, setExecutionDone] = useState(false)
  const [logEntries, setLogEntries] = useState<NodeId[]>([])
  const [activeTool, setActiveTool] = useState<"select" | "pan">("select")
  const [zoom] = useState(100)

  const rafRef = useRef<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const startedRef = useRef(false)
  const marchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const CANVAS_W = 1160
  const CANVAS_H = 400

  // ─── Execution engine ────────────────────────────────────────────────────
  const startExecution = useCallback(() => {
    setStepIndex(-1)
    setEdgeStates({})
    setExecutionDone(false)
    setLogEntries([])
    setRunning(true)
    runStep(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function runStep(i: number) {
    if (i >= EXEC_SEQUENCE.length) {
      setRunning(false)
      setExecutionDone(true)
      setTimeout(() => {
        startedRef.current = false
        startExecution()
      }, 5000)
      return
    }

    const nodeId = EXEC_SEQUENCE[i]
    setStepIndex(i)

    // Find incoming edge
    const inEdge = EDGES.find((e) => e.to === nodeId)
    const edgeKey = inEdge ? `${inEdge.from}->${inEdge.to}` : null

    if (edgeKey) {
      // Start marching animation on the edge
      setEdgeStates((prev) => ({ ...prev, [edgeKey]: "marching" }))
      // After 700ms, edge becomes done, node logs
      marchTimerRef.current = setTimeout(() => {
        setEdgeStates((prev) => ({ ...prev, [edgeKey]: "done" }))
        // Node "runs" for 500ms then done
        setTimeout(() => {
          setLogEntries((prev) => [...prev, nodeId])
          // Move to next step
          setTimeout(() => runStep(i + 1), 300)
        }, 500)
      }, 700)
    } else {
      // First node — just run with spinner for 800ms
      setTimeout(() => {
        setLogEntries((prev) => [...prev, nodeId])
        setTimeout(() => runStep(i + 1), 300)
      }, 800)
    }
  }

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          setTimeout(() => startExecution(), 700)
        }
      },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [startExecution])

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (marchTimerRef.current) clearTimeout(marchTimerRef.current)
    }
  }, [])

  // Derive node states
  function getNodeState(nodeId: NodeId): "idle" | "running" | "done" | "pending" {
    const idx = EXEC_SEQUENCE.indexOf(nodeId)
    const doneSet = new Set(logEntries)
    if (doneSet.has(nodeId)) return "done"
    if (EXEC_SEQUENCE[stepIndex] === nodeId) return "running"
    return "idle"
  }

  // Edge animation state
  function getEdgeAnimPhase(from: string, to: string): "idle" | "marching" | "done" {
    const key = `${from}->${to}`
    return edgeStates[key] ?? "idle"
  }

  return (
    <section
      ref={sectionRef}
      id="como-trabalhamos"
      className="od-section bg-[#09090b] relative overflow-hidden"
    >

      <div className="od-container px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">
            Automação real com n8n
          </p>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4">
            Do lead ao CRM{" "}
            <span className="text-[#06b6d4]">
              em segundos
            </span>
          </h2>
          <p className="text-[#b4b4bc] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Cada contato captado dispara um fluxo automático. WhatsApp, planilha e CRM sincronizados, sem intervenção manual.
          </p>
        </div>

        {/* n8n Window */}
        <div
          className="relative rounded-xl overflow-hidden border border-[#2d2d30] shadow-2xl shadow-black/70"
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          {/* ── Top bar / Header ── */}
          <div
            className="flex items-center gap-3 border-b border-[#2d2d30] px-4 h-11"
            style={{ background: "#1b1b1f" }}
          >
            {/* n8n logo */}
            <svg width="20" height="20" viewBox="0 0 60 60" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="30" cy="30" r="30" fill="#EA4B71"/>
              <text x="50%" y="57%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">n8n</text>
            </svg>

            {/* Breadcrumb */}
            <div className="flex items-center gap-1 mr-auto" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
              <span style={{ color: "#6b6b78", fontSize: 12 }}>My workflows</span>
              <span style={{ color: "#4d4d54", fontSize: 12, margin: "0 2px" }}>›</span>
              <span style={{ color: "#e4e4e7", fontSize: 12, fontWeight: 500 }}>
                Lead → CRM → Follow-up
              </span>
              <span
                style={{
                  marginLeft: 8,
                  fontSize: 10,
                  padding: "1px 6px",
                  borderRadius: 4,
                  background: executionDone ? "#14532d" : "#27272a",
                  color: executionDone ? "#4ade80" : "#6b6b78",
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  transition: "all 0.3s",
                }}
              >
                {executionDone ? "Saved" : running ? "Saving..." : "Saved"}
              </span>
            </div>

            {/* Share button */}
            <button
              className="text-xs px-3 py-1 rounded border border-[#3a3a3c] text-[#9b9ba4] hover:text-white hover:border-[#52525b] transition-colors"
              style={{ fontFamily: "'Inter', -apple-system, sans-serif", fontSize: 11 }}
            >
              Share
            </button>

            {/* Execute button */}
            <button
              onClick={() => { startedRef.current = false; startExecution() }}
              className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold transition-all"
              style={{
                background: running ? "#2d2d30" : "#FF6D5A",
                color: running ? "#6b6b78" : "#fff",
                cursor: running ? "not-allowed" : "pointer",
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d={running ? "M3 2h1.5v6H3V2zM5.5 2H7v6H5.5V2z" : "M2 1.5l7 3.5-7 3.5V1.5z"} fill="currentColor"/>
              </svg>
              <span>{running ? "Executando..." : executionDone ? "Executar novamente" : "Executar workflow"}</span>
            </button>
          </div>

          {/* ── Toolbar ── */}
          <div
            className="flex items-center gap-0.5 border-b border-[#232327] px-2"
            style={{ background: "#18181c", height: 36 }}
          >
            {/* Tool buttons — pointer and hand */}
            <button
              onClick={() => setActiveTool("select")}
              title="Selecionar"
              className="flex items-center justify-center w-7 h-7 rounded transition-colors"
              style={{
                color: activeTool === "select" ? "#e4e4e7" : "#6b6b78",
                background: activeTool === "select" ? "#2d2d30" : "transparent",
              }}
            >
              <IconPointer />
            </button>
            <button
              onClick={() => setActiveTool("pan")}
              title="Mover canvas"
              className="flex items-center justify-center w-7 h-7 rounded transition-colors"
              style={{
                color: activeTool === "pan" ? "#e4e4e7" : "#6b6b78",
                background: activeTool === "pan" ? "#2d2d30" : "transparent",
              }}
            >
              <IconHand />
            </button>

            <div style={{ width: 1, height: 16, background: "#2d2d30", margin: "0 4px" }} />

            {/* Zoom controls */}
            <button
              className="flex items-center justify-center w-7 h-7 rounded text-[#6b6b78] hover:text-[#9b9ba4] transition-colors"
              title="Zoom out"
            >
              <IconZoomOut />
            </button>
            <span style={{ color: "#6b6b78", fontSize: 11, minWidth: 36, textAlign: "center", fontFamily: "monospace" }}>
              {zoom}%
            </span>
            <button
              className="flex items-center justify-center w-7 h-7 rounded text-[#6b6b78] hover:text-[#9b9ba4] transition-colors"
              title="Zoom in"
            >
              <IconZoomIn />
            </button>

            <div style={{ width: 1, height: 16, background: "#2d2d30", margin: "0 4px" }} />

            <button
              className="flex items-center justify-center w-7 h-7 rounded text-[#6b6b78] hover:text-[#9b9ba4] transition-colors"
              title="Ajustar ao canvas"
            >
              <IconFitScreen />
            </button>

            <div className="ml-auto flex items-center gap-3" style={{ paddingRight: 4 }}>
              <span style={{ color: "#4d4d54", fontSize: 10, fontFamily: "monospace" }}>
                {NODES.length} nodes
              </span>
            </div>
          </div>

          {/* ── Canvas ── */}
          <div
            className="relative overflow-hidden"
            style={{
              backgroundColor: "#1b1b1f",
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              height: 400,
            }}
          >
            {/* Sticky note */}
            <div
              style={{
                position: "absolute",
                right: 16,
                top: 14,
                width: 118,
                background: "#F5D565",
                borderRadius: 4,
                padding: "7px 9px",
                zIndex: 10,
                boxShadow: "1px 2px 6px rgba(0,0,0,0.4)",
                transform: "rotate(1.5deg)",
              }}
            >
              <p style={{ fontSize: 9, color: "#3d3000", fontFamily: "'Inter', -apple-system, sans-serif", lineHeight: 1.45, margin: 0 }}>
                <strong style={{ display: "block", marginBottom: 2 }}>Horário comercial</strong>
                Seg–Sex 08h–18h<br/>
                → WhatsApp imediato<br/>
                → Wait fora do horário
              </p>
            </div>

            <svg
              width="100%"
              height={CANVAS_H}
              viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
              preserveAspectRatio="xMidYMid meet"
              style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
            >
              {/* Render edges first (below nodes) */}
              {EDGES.map((edge) => {
                const fromNode = NODES.find((n) => n.id === edge.from)!
                const toNode = NODES.find((n) => n.id === edge.to)!
                const fromPort = getOutputPort(fromNode as NodeDef, edge.branch ?? null)
                const toPort = getInputPort(toNode as NodeDef)
                const phase = getEdgeAnimPhase(edge.from, edge.to)
                const isCompleted = logEntries.includes(edge.from as NodeId)
                const nodeColor = NODE_COLORS[fromNode.type] || "#5c5c66"

                return (
                  <BezierEdge
                    key={`${edge.from}->${edge.to}`}
                    from={fromPort}
                    to={toPort}
                    branch={edge.branch ?? null}
                    animPhase={phase}
                    isCompleted={isCompleted}
                    nodeColor={nodeColor}
                  />
                )
              })}

              {/* Render nodes */}
              {NODES.map((node) => (
                <N8NNode
                  key={node.id}
                  node={node as NodeDef}
                  execState={getNodeState(node.id as NodeId)}
                />
              ))}
            </svg>
          </div>

          {/* ── Execution Log Panel ── */}
          <div
            style={{
              background: "#18181c",
              borderTop: "1px solid #232327",
              minHeight: 80,
              maxHeight: 100,
              overflowY: "auto",
            }}
          >
            {/* Log header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "5px 12px 4px",
                borderBottom: "1px solid #232327",
              }}
            >
              <span style={{ color: "#4d4d54", fontSize: 9, fontFamily: "monospace", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Execution Log
              </span>
              {running && (
                <span style={{ color: "#FF6D5A", fontSize: 9, fontFamily: "monospace" }}>
                  · running
                </span>
              )}
              {executionDone && (
                <span style={{ color: "#22c55e", fontSize: 9, fontFamily: "monospace" }}>
                  · success
                </span>
              )}
              {logEntries.length > 0 && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: 9,
                    fontFamily: "monospace",
                    color: "#4d4d54",
                  }}
                >
                  {logEntries.length}/{EXEC_SEQUENCE.length} nodes
                </span>
              )}
            </div>

            {/* Log entries */}
            {logEntries.length === 0 && !running && (
              <div style={{ color: "#3d3d44", fontSize: 10, fontFamily: "'Inter', -apple-system, sans-serif", padding: "10px 12px" }}>
                Aguardando execução...
              </div>
            )}
            {logEntries.map((nodeId, i) => (
              <LogEntry key={`${nodeId}-${i}`} nodeId={nodeId} delay={i} />
            ))}
          </div>

          {/* ── Status bar ── */}
          <div
            className="flex items-center justify-between border-t border-[#232327] px-4"
            style={{ background: "#1b1b1f", height: 28 }}
          >
            <div className="flex items-center gap-2">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: running ? "#22c55e" : executionDone ? "#22c55e" : "#3d3d44",
                  display: "inline-block",
                  boxShadow: running ? "0 0 6px #22c55e88" : "none",
                  transition: "all 0.3s",
                }}
              />
              <span style={{ color: "#4d4d54", fontSize: 10, fontFamily: "'Inter', -apple-system, sans-serif" }}>
                {running
                  ? `Executando: ${NODES.find((n) => n.id === EXEC_SEQUENCE[stepIndex])?.label ?? "..."}`
                  : executionDone
                  ? "Workflow executado com sucesso"
                  : "Pronto"}
              </span>
            </div>
            <div className="flex items-center gap-3" style={{ color: "#3d3d44", fontSize: 10, fontFamily: "monospace" }}>
              <span>n8n</span>
              <span>·</span>
              <span>{zoom}%</span>
              <span>·</span>
              <span>{NODES.length} nodes</span>
            </div>
          </div>
        </div>

        {/* ── CTA below panel ── */}
        <div className="text-center mt-10 space-y-3">
          <p className="text-[#6b6b78] text-sm" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
            Esse fluxo roda para clínicas, restaurantes e e-commerces, personalizado para o seu negócio.
          </p>
          <a
            href="https://wa.me/5531996966686?text=Oi%2C+quero+entender+como+a+automacao+n8n+pode+funcionar+no+meu+negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="od-cta-button inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all hover:scale-105"
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quero esse fluxo no meu negócio
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes n8n-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes n8n-march {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -40; }
        }
        @keyframes n8n-badge-pop {
          from { transform: scale(0.4); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes n8n-fadein {
          from { opacity: 0; transform: translateY(3px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
