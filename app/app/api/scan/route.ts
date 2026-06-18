import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      result: `
BAMToolz Scan Complete ✅

File received:
${image.name}

AI Maintenance System Ready:

• Equipment Tag Reading
• Model & Serial Numbers
• Parts Identification
• Manuals
• Troubleshooting
• Controls Support
      `,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "BAMToolz scan failed" },
      { status: 500 }
    );
  }
}
