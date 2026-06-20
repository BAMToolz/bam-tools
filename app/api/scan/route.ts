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
              text: `You are BAM Scan™, an AI equipment intelligence system for maintenance technicians.

Analyze the uploaded equipment image and return a clean modern maintenance report.

Use this exact format:

BAM Scan™ Report
━━━━━━━━━━━━━━━━━━━━

◈ Asset Intelligence
Manufacturer:
Equipment Type:
Model:
Serial:
Visible Ratings:
Location Clues:

◈ Safety Analysis
Risk Level:
Energy Sources:
Required Safety Actions:
Lockout / Tagout Notes:

◈ Component Intelligence
Visible Components:
Likely Replacement Parts:
Part Numbers Seen:
Critical Spares:

◈ Troubleshooting
Observed Condition:
What To Check First:
Recommended Tests:
Next Technician Action:

◈ Documentation Clues
Manual Search Terms:
Nameplate Data:
Missing Photo Needed:

◈ Technician Notes
Machine Memory:
Confidence:
Limitations:

If the text in the image is blurry, say what cannot be read clearly. Do not invent serial numbers or model numbers.`,
            },
            {
              type: "input_image",
              image_url: `data:${image.type};base64,${base64}`,
              detail: "auto",
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
      { error: error?.message || "AI scan failed." },
      { status: 500 }
    );
  }
}