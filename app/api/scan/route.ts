import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is missing in Vercel." },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded." },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    const ai = await client.responses.create({
      model: "gpt-4o-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: "Analyze this equipment image for a maintenance technician. Identify visible text, equipment type, safety risks, parts, and troubleshooting notes.",
            },
            {
              type: "input_image",
              image_url: `data:${image.type};base64,${base64}`,
            },
          ],
        },
      ],
    });

    return NextResponse.json({
      result: ai.output_text || "AI returned no text.",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error?.message || "AI scan failed.",
      },
      { status: 500 }
    );
  }
}