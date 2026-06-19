import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const hasKey = !!process.env.OPENAI_API_KEY;

    const formData = await req.formData();
    const image = formData.get("image") as File | null;

    if (!image) {
      return NextResponse.json({
        error: "No image uploaded.",
        hasKey,
      });
    }

    return NextResponse.json({
      result: "✅ API reached successfully.",
      hasKey,
      imageName: image.name,
      imageType: image.type,
      imageSize: image.size,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "BAM Scan API failed.",
        details: String(error?.message || error),
      },
      { status: 500 }
    );
  }
}