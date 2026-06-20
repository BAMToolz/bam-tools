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

    setResult("BAM Scan™ sending photo to AI...");

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
          "BAM Scan connected, but no result text returned."
      );
    } catch (error: any) {
      setResult(error?.message || "BAM Scan connection failed.");
    }
  }

  return (
    <main style={main}>
      <section style={card}>
        <h1 style={logo}>BAMToolz™</h1>
        <h2 style={blue}>BAM Scan™ AI</h2>

        <div style={systemBadge}>
          <h3 style={badgeTitle}>◈ Equipment Intelligence ◈</h3>
          <p style={badgeText}>Scan. Identify. Protect. Remember.</p>
        </div>

        <p>Scan equipment tags, motors, fault screens, and panels.</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <br />
        <br />

        <button onClick={runScan} style={button}>
          RUN AI SCAN
        </button>

        <div style={resultBox}>
          {result ||
            `BAM Safety™
Ready for safety intelligence.

Asset Identification
Parts Intelligence
Manuals
Machine Memory`}
        </div>

        <a href="/" style={backLink}>
          ← Back Home
        </a>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#000",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const card = {
  textAlign: "center" as const,
  border: "1px solid #0077ff",
  borderRadius: "28px",
  padding: "30px 18px",
  background: "linear-gradient(180deg, #04111f, #02050a)",
  boxShadow: "0 0 35px rgba(0,119,255,.35)",
};

const logo = {
  color: "#0077ff",
  fontStyle: "italic",
  margin: 0,
  letterSpacing: "1px",
};

const blue = {
  color: "#0077ff",
};

const systemBadge = {
  margin: "22px 0",
  padding: "16px",
  border: "1px solid #0077ff",
  borderRadius: "18px",
  background: "rgba(0,119,255,.08)",
};

const badgeTitle = {
  margin: 0,
  color: "#e8f4ff",
};

const badgeText = {
  marginBottom: 0,
  color: "#8fc7ff",
};

const button = {
  background: "#0077ff",
  color: "#000",
  padding: "16px 30px",
  borderRadius: "999px",
  border: "none",
  fontWeight: "900",
};

const resultBox = {
  marginTop: "30px",
  border: "1px solid #0077ff",
  borderRadius: "20px",
  padding: "20px",
  background: "#000",
  textAlign: "left" as const,
  whiteSpace: "pre-wrap" as const,
  minHeight: "200px",
};

const backLink = {
  display: "block",
  marginTop: "30px",
  color: "#0077ff",
  fontWeight: "900",
};