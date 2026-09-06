import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ScanResult = {
  machine: string;
  manufacturer: string;
  model: string;
  serial: string;
  equipment_type: string;
  visible_details: string[];
  observations: string[];
  issues: string[];
  recommended_actions: string[];
  confidence: number;
  summary: string;
};

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        {
          success: false,
          error: "OPENAI_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const formData = await req.formData();

    const file = formData.get("image");

    const mode =
      (formData.get("mode") as string | null) || "industrial";

    if (!(file instanceof File)) {
      return Response.json(
        {
          success: false,
          error: "No image uploaded.",
        },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return Response.json(
        {
          success: false,
          error: "Uploaded file must be an image.",
        },
        { status: 400 }
      );
    }

    if (file.size === 0) {
      return Response.json(
        {
          success: false,
          error: "Uploaded image is empty.",
        },
        { status: 400 }
      );
    }

    // Keep uploads reasonable for the MVP.
    const maxFileSize = 20 * 1024 * 1024;

    if (file.size > maxFileSize) {
      return Response.json(
        {
          success: false,
          error: "Image is too large. Maximum size is 20 MB.",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const base64 = Buffer.from(bytes).toString("base64");

    const imageUrl = `data:${file.type};base64,${base64}`;

    const industrialPrompt = `
You are BAM Scan™, the industrial equipment identification and maintenance intelligence system for BAMToolz™.

Analyze the supplied image.

Your primary job is to identify equipment, machines, components, labels, nameplates, model numbers, serial numbers, manufacturer information, and other useful maintenance information that is actually visible in the image.

IMPORTANT RULES:

1. Do not invent information.
2. Do not guess a model, serial number, manufacturer, or machine identity.
3. If information cannot be clearly determined, return "Not visible".
4. Carefully read visible text from nameplates, labels, decals, stickers, displays, tags, and markings.
5. Preserve model numbers and serial numbers exactly when they are readable.
6. If only part of a model or serial number is visible, say "Partially visible" rather than completing it yourself.
7. Do not diagnose a mechanical failure solely from appearance.
8. Separate visible observations from possible issues.
9. Keep the result concise but useful to a technician.
10. Confidence must represent confidence in the overall equipment identification, from 0 to 1.

The scan may contain:

- Heavy equipment
- Skid steers
- Excavators
- Loaders
- Tractors
- Mowers
- Generators
- Pumps
- Engines
- Motors
- Electrical equipment
- Hydraulic equipment
- Tools
- Parts
- Control panels
- Nameplates
- Safety labels
- Warning labels
- Damaged components
- Maintenance documentation

Return only the requested structured data.
`;

    const consumerPrompt = `
You are BAM Scan™, the visual identification assistant for BAMToolz™.

Analyze the supplied image.

Identify the object, product, part, label, tool, equipment, or visible issue.

IMPORTANT RULES:

1. Do not invent information.
2. Do not guess a manufacturer or model.
3. If something cannot be determined, return "Not visible".
4. Read visible labels and markings carefully.
5. Keep observations factual.
6. Do not claim that an object is damaged unless the damage is actually visible.
7. Confidence must represent confidence in the identification.

Return only the requested structured data.
`;

    const prompt =
      mode === "industrial"
        ? industrialPrompt
        : consumerPrompt;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",

      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: prompt,
            },
            {
              type: "input_image",
              image_url: imageUrl,
              detail: "high",
            },
          ],
        },
      ],

      text: {
        format: {
          type: "json_schema",
          name: "bam_scan_result",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              machine: {
                type: "string",
              },

              manufacturer: {
                type: "string",
              },

              model: {
                type: "string",
              },

              serial: {
                type: "string",
              },

              equipment_type: {
                type: "string",
              },

              visible_details: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              observations: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              issues: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              recommended_actions: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              confidence: {
                type: "number",
              },

              summary: {
                type: "string",
              },
            },

            required: [
              "machine",
              "manufacturer",
              "model",
              "serial",
              "equipment_type",
              "visible_details",
              "observations",
              "issues",
              "recommended_actions",
              "confidence",
              "summary",
            ],
          },
        },
      },
    });

    const output = response.output_text;

    if (!output) {
      throw new Error("OpenAI returned no scan result.");
    }

    let scan: ScanResult;

    try {
      scan = JSON.parse(output);
    } catch {
      console.error("BAM Scan JSON parse error:", output);

      throw new Error(
        "BAM Scan returned invalid structured data."
      );
    }

    // Keep confidence safely between 0 and 1.
    scan.confidence = Math.max(
      0,
      Math.min(1, Number(scan.confidence) || 0)
    );

    const analysis = buildAnalysis(scan);

    return Response.json({
      success: true,

      mode,

      analysis,

      result: analysis,

      name:
        scan.machine &&
        scan.machine !== "Not visible"
          ? scan.machine
          : "Scanned Equipment",

      manufacturer: scan.manufacturer,

      model: scan.model,

      serial: scan.serial,

      equipment_type: scan.equipment_type,

      confidence: scan.confidence,

      scan: {
        machine: scan.machine,
        manufacturer: scan.manufacturer,
        model: scan.model,
        serial: scan.serial,
        equipment_type: scan.equipment_type,
        visible_details: scan.visible_details,
        observations: scan.observations,
        issues: scan.issues,
        recommended_actions:
          scan.recommended_actions,
        confidence: scan.confidence,
        summary: scan.summary,
      },
    });
  } catch (error) {
    console.error("BAM Scan error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Unknown BAM Scan error.";

    return Response.json(
      {
        success: false,
        error: "BAM Scan failed.",
        details:
          process.env.NODE_ENV === "development"
            ? message
            : undefined,
      },
      { status: 500 }
    );
  }
}

function buildAnalysis(scan: ScanResult): string {
  const lines: string[] = [];

  lines.push("BAM Scan™");
  lines.push("");

  lines.push(`Machine: ${scan.machine}`);
  lines.push(`Manufacturer: ${scan.manufacturer}`);
  lines.push(`Model: ${scan.model}`);
  lines.push(`Serial: ${scan.serial}`);
  lines.push(`Equipment Type: ${scan.equipment_type}`);

  if (scan.summary) {
    lines.push("");
    lines.push("Summary:");
    lines.push(scan.summary);
  }

  if (scan.visible_details.length > 0) {
    lines.push("");
    lines.push("Visible Details:");

    for (const detail of scan.visible_details) {
      lines.push(`• ${detail}`);
    }
  }

  if (scan.observations.length > 0) {
    lines.push("");
    lines.push("Observations:");

    for (const observation of scan.observations) {
      lines.push(`• ${observation}`);
    }
  }

  if (scan.issues.length > 0) {
    lines.push("");
    lines.push("Possible Issues:");

    for (const issue of scan.issues) {
      lines.push(`• ${issue}`);
    }
  }

  if (scan.recommended_actions.length > 0) {
    lines.push("");
    lines.push("Recommended Next Steps:");

    for (const action of scan.recommended_actions) {
      lines.push(`• ${action}`);
    }
  }

  lines.push("");
  lines.push(
    `Identification Confidence: ${Math.round(
      scan.confidence * 100
    )}%`
  );

  lines.push("");
  lines.push("BAM AI Assist™");

  return lines.join("\n");
}