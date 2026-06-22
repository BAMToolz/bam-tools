import { NextResponse } from "next/server";

let machines: any[] = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    service: "BAM Hub™",
    message:
      "Machine memory is protected. Facility equipment data requires secure access.",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const machineProfile = {
      id: crypto.randomUUID(),

      equipment: {
        name: body.name || "Unnamed Equipment",
        location: body.location || "",
        manufacturer: body.manufacturer || "",
        model: body.model || "",
        serial: body.serial || "",
      },

      memory: {
        notes: body.notes || "",
        createdAt: new Date().toISOString(),
      },
    };

    machines.push(machineProfile);

    return NextResponse.json({
      success: true,
      service: "BAM Hub™",
      message: "Machine memory captured successfully.",
      machineId: machineProfile.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "BAM Hub™ could not process machine memory.",
      },
      { status: 500 }
    );
  }
}