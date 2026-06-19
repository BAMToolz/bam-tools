import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    result: "✅ BAM Scan API route is live. Correct folder."
  });
}