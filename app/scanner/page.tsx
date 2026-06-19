"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function runScan() {
    if (!file) {
      setResult("Upload equipment image first.");
      return;
    }

    setResult("🔵 BAM Scan™ analyzing equipment...");

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
          data.error ||
          "No equipment data returned."
      );
    } catch {
      setResult("BAM Scan connection failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000000",
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
          boxShadow: "0 0 40px rgba(0,119,255,0.45)",
        }}
      >

        <div
          style={{
            margin: "0 auto 25px",
            width: "285px",
            maxWidth: "92%",
            padding: "18px",
            borderRadius: "999px",
            border: "4px solid #0077ff",
            background: "#000",
            boxShadow: "0 0 25px #0077ff",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#0077ff",
              fontSize: "42px",
              fontStyle: "italic",
              fontWeight: "900",
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
          Scan machine tags, barcodes, motors,
          panels, fault screens, and equipment labels.
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
            fontSize: "17px",
            boxShadow: "0 0 22px #0077ff",
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
            minHeight: "120px",
            textAlign: "left",
            whiteSpace: "pre-wrap",
            boxShadow:
              "inset 0 0 20px rgba(0,119,255,.25)",
          }}
        >
          {result || "Waiting for equipment scan..."}
        </div>

        <section
          style={{
            marginTop: "30px",
            textAlign: "left",
          }}
        >
          <h2 style={{ color: "#0077ff" }}>
            Machine Memory
          </h2>

          <p>🏷 Asset identification</p>
          <p>🔧 Parts recognition</p>
          <p>📚 Manuals & schematics</p>
          <p>🧠 Technician knowledge capture</p>
          <p>⚙ Maintenance intelligence</p>
        </section>

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