import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const base64Image = Buffer.from(bytes).toString("base64");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `You are BAM Scan™ created by BAMLabs™.

Analyze this equipment image and return:

BAM Scan™ Report
━━━━━━━━━━━━

◈ Asset Intelligence
Manufacturer:
Equipment Type:
Model:
Serial:
Ratings:

◈ Safety Intelligence
Hazards:
Energy Sources:
Lockout / Tagout:

◈ Parts Intelligence
Components:
Replacement Parts:

◈ Troubleshooting
Observed Issues:
Tests:
Recommended Action:

Do not invent unreadable numbers.`,
                },
                {
                  inline_data: {
                    mime_type: image.type || "image/jpeg",
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

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "Gemini API error" },
        { status: response.status }
      );
    }

    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part: any) => part.text)
      ?.filter(Boolean)
      ?.join("\n");

    return NextResponse.json({
      result: text || JSON.stringify(data, null, 2),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Gemini scan failed" },
      { status: 500 }
    );
  }
}