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

    setResult("🔵 BAM Scan™ sending photo...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setResult(data.error || "BAM Scan failed.");
        return;
      }

      setResult(
        data.result ||
          data.message ||
          `✅ BAM Scan connected.
Image reached the API route.`
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
        fontFamily: "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
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
        <h1 style={{ color: "#0077ff", fontStyle: "italic" }}>
          BAMToolz™
        </h1>

        <h2 style={{ color: "#0077ff" }}>BAM Scan™ AI</h2>

        <h3>Preserving Presence™</h3>

        <p>Scan equipment tags, motors, fault screens, and panels.</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
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