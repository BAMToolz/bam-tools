import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GEMINI_API_KEY" },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();

    const base64Image =
      Buffer.from(bytes).toString("base64");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are BAM Scan™ created by BAMLabs™.

Analyze this equipment image.

Return a professional industrial report:

BAM Scan™ Report
━━━━━━━━━━━━

◈ Asset Intelligence
Manufacturer:
Equipment Type:
Model:
Serial:
Ratings:
Location:

◈ Safety Intelligence
Hazards:
Energy Sources:
Lockout / Tagout:

◈ Parts Intelligence
Components:
Replacement Parts:
Critical Spares:

◈ Troubleshooting
Observed Issues:
Tests:
Recommended Action:

◈ BAM Hub™ Machine Memory
Repair Notes:
Knowledge Captured:
Future Prevention:

Do not invent unreadable numbers.
Say if information is unclear.
                  `,
                },

                {
                  inline_data: {
                    mime_type: image.type,
                    data: base64Image,
                  },
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "BAM Scan completed but no text returned.";

    return NextResponse.json({
      result: text,
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}