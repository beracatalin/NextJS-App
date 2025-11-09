export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const webhookURL = process.env.DISCORD_WEBHOOK_URL;


    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "Vezi, patroane că ai primit un mesaj:",
            color: 16753920,
            fields: [
              { name: "👤 Nume", value: name, inline: false },
              { name: "📧 Email", value: email, inline: false },
              { name: "💬 Mesaj", value: message, inline: false },
            ],
            timestamp: new Date(),
          },
        ],
      }),
    });

    return Response.json({ success: true });
  } catch (e) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
