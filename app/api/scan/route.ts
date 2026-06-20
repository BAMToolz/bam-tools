import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { error: "No image uploaded" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Test scanner works. Image reached the API route.",
      equipment: {
        name: "Test Equipment",
        status: "Scanner connected",
        nextStep: "Now we connect AI image reading."
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Scanner failed" },
      { status: 500 }
    );
  }
}