"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function runScan() {
    if (!file) {
      setResult("Select equipment photo first.");
      return;
    }

    setResult("🔵 BAM Scan™ AI analyzing equipment...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResult(
        data.result ||
          `🦺 BAM Safety™
Safety check first:
• Review Lockout / Tagout
• Verify stored energy
• Check electrical, hydraulic, pneumatic hazards

🏷 Asset Identification:
Waiting for equipment data

🔧 Parts Intelligence:
Ready to identify components

📚 Documentation:
Manuals and schematics ready

🧠 Machine Memory:
Capture technician knowledge`
      );
    } catch {
      setResult("BAM Scan connection failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#e8f4ff",
        padding: "22px",
        fontFamily:
          "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          textAlign: "center",
          border: "2px solid #0077ff",
          borderRadius: "28px",
          padding: "30px 18px",
          background: "#03070d",
          boxShadow: "0 0 40px rgba(0,119,255,.45)",
        }}
      >
        <div
          style={{
            border: "4px solid #0077ff",
            borderRadius: "999px",
            padding: "18px",
            boxShadow: "0 0 25px #0077ff",
          }}
        >
          <h1
            style={{
              color: "#0077ff",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            BAMToolz™
          </h1>
        </div>

        <h2 style={{ color: "#0077ff" }}>
          BAM Scan™ AI
        </h2>

        <h3>
          Preserving Presence™
        </h3>

        <p>
          Scan equipment tags, barcodes,
          fault screens, motors, and panels.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(e.target.files?.[0] || null)
          }
        />

        <br />
        <br />

        <button
          onClick={runScan}
          style={{
            background: "#0077ff",
            color: "#000",
            padding: "17px 32px",
            borderRadius: "999px",
            border: "none",
            fontWeight: "900",
          }}
        >
          📸 RUN AI SCAN
        </button>

        <div
          style={{
            marginTop: "30px",
            border: "2px solid #0077ff",
            borderRadius: "20px",
            padding: "20px",
            background: "#000",
            textAlign: "left",
            whiteSpace: "pre-wrap",
            minHeight: "200px",
          }}
        >
          {result ||
            `🦺 BAM Safety™
Ready for safety intelligence.

🏷 Asset Identification
🔧 Parts Intelligence
📚 Manuals
🧠 Machine Memory`}
        </div>

        <a
          href="/"
          style={{
            display: "block",
            marginTop: "30px",
            color: "#0077ff",
            fontWeight: "900",
          }}
        >
          ← Back Home
        </a>
      </section>
    </main>
  );
}