import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
    const base64 = Buffer.from(bytes).toString("base64");

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text:
                "You are BAM Scan AI. Analyze this equipment image for a maintenance technician. Identify visible equipment tags, model numbers, serial numbers, voltage, HP, part numbers, safety risks, likely components, and next troubleshooting steps. If text is unclear, say what is unclear. Format with sections: Safety, Asset Identification, Parts Intelligence, Troubleshooting, Technician Notes.",
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
      result: response.output_text,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI scan failed. Check API key and deployment logs." },
      { status: 500 }
    );
  }
}