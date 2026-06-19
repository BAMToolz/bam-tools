import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    if (!(image instanceof File)) {
      return NextResponse.json(
        { error: "No image uploaded." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY missing in Vercel." },
        { status: 500 }
      );
    }

    const bytes = await image.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const mimeType = image.type || "image/jpeg";

    const aiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "user",
            content: [
              {
                type: "input_text",
                text:
                  "You are BAMToolz, an industrial maintenance AI assistant. Analyze this equipment image. Read any visible tag, nameplate, model, serial number, manufacturer, voltage, amps, HP, RPM, part number, fault code, warning label, or useful maintenance information. Give a clear technician-friendly response. If something is unclear, say unclear. Do not invent missing information.",
              },
              {
                type: "input_image",
                image_url: `data:${mimeType};base64,${base64}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await aiResponse.json();

    if (!aiResponse.ok) {
      return NextResponse.json(
        {
          error: data.error?.message || "OpenAI vision scan failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: data.output_text || "No AI result returned.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "BAM Scan API failed.",
      },
      { status: 500 }
    );
  }
}