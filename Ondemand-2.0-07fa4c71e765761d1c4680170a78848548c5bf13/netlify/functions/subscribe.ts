import { Config } from "@netlify/functions"

interface SubscribeRequest {
  email: string
  name: string
  source: string
  magnet_type?: string
}

const handler = async (req: Request) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const body = (await req.json()) as SubscribeRequest
    const { email, name, source, magnet_type } = body

    // Validate
    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: "Email and name are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Get Brevo API key from env
    const brevoApiKey = process.env.BREVO_API_KEY
    if (!brevoApiKey) {
      console.error("BREVO_API_KEY not configured")
      return new Response(JSON.stringify({ error: "Service not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Subscribe to Brevo list
    // List ID: 2 = "Lead Magnet - Marketing Guide"
    const brevoResponse = await fetch(
      "https://api.brevo.com/v3/contacts",
      {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name.split(" ")[0],
            LASTNAME: name.split(" ").slice(1).join(" "),
            SOURCE: source,
            MAGNET_TYPE: magnet_type || "unknown",
            SUBSCRIBED_AT: new Date().toISOString(),
          },
          listIds: [2], // Lead Magnet list
          updateEnabled: true, // Update if exists
        }),
      },
    )

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text()
      console.error("Brevo error:", errorData)
      return new Response(
        JSON.stringify({ error: "Failed to subscribe" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Log to analytics/CRM
    console.warn(`[Subscribe] ${email} from ${source}`)

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed",
        email,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("Subscribe function error:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export default handler

export const config: Config = {
  path: "/api/subscribe",
}
