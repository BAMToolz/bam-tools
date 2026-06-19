import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded." },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString("base64");
    const mimeType = image.type || "image/jpeg";

    const response = await fetch("https://api.openai.com/v1/responses", {
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
                text: "You are BAMToolz, an industrial maintenance assistant. Analyze this equipment photo. Read any visible nameplate, model, serial number, voltage, amps, HP, RPM, manufacturer, fault code, part number, or label. Give useful maintenance notes. Do not invent missing data.",
              },
              {
                type: "input_image",
                image_url: `data:${mimeType};base64,${base64Image}`,
              },
            ],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "OpenAI scan failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: data.output_text || "No AI result returned.",
    });
  } catch {
    return NextResponse.json(
      { error: "BAM Scan API failed." },
      { status: 500 }
    );
  }
}