import { NextResponse } from "next/server";

function demoReport() {
  return `BAM Scan™ Demo Report
━━━━━━━━━━━━

◈ Asset Intelligence
Manufacturer: Demo mode
Equipment Type: Industrial equipment / asset tag
Model: Add AI credits to read live model data
Serial: Add AI credits to read live serial data
Ratings: Voltage / HP / amps detected when AI is active

◈ Safety Intelligence
Hazards: Verify electrical, mechanical, hydraulic, and pneumatic energy
Energy Sources: Confirm before service
Lockout / Tagout: Required before repair or panel access

◈ Parts Intelligence
Components: Motor, tag, panel, sensor, pump, or machine components
Replacement Parts: AI will suggest visible parts when active
Critical Spares: Bearings, belts, sensors, fuses, contactors, motors

◈ Troubleshooting
Observed Issues: Demo mode cannot inspect the image yet
Tests: Check power, fuses, overloads, sensors, wiring, and fault codes
Recommended Action: Add AI credits or quota to enable live image reading

◈ BAM Hub™ Machine Memory
Repair Notes: Save technician notes here
Knowledge Captured: Machine history stays with the asset
Future Prevention: Build repeatable repair knowledge`;
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    if (!apiKey) {
      return NextResponse.json({
        result: demoReport(),
      });
    }

    const bytes = await image.arrayBuffer();
    const base64Image = Buffer.from(bytes).toString("base64");

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

◈ BAM Hub™ Machine Memory
Repair Notes:
Knowledge Captured:
Future Prevention:

Do not invent unreadable numbers. Say clearly if text is blurry or unclear.`,
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
      return NextResponse.json({
        result: demoReport(),
      });
    }

    const text = data?.candidates?.[0]?.content?.parts
      ?.map((part: any) => part.text)
      ?.filter(Boolean)
      ?.join("\n");

    return NextResponse.json({
      result: text || demoReport(),
    });
  } catch {
    return NextResponse.json({
      result: demoReport(),
    });
  }
}