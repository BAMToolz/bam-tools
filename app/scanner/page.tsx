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

    setResult("BAM Scan™ is analyzing equipment intelligence...");

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
      <section style={panel}>
        <div style={topLine}>BAM INTELLIGENCE SYSTEM</div>

        <h1 style={logo}>BAM Scan™</h1>
        <p style={subtitle}>Equipment intelligence for modern maintenance</p>

        <div style={statusGrid}>
          <div style={statusCard}>
            <span style={statusLabel}>SYSTEM</span>
            <strong>ONLINE</strong>
          </div>
          <div style={statusCard}>
            <span style={statusLabel}>MODE</span>
            <strong>VISION AI</strong>
          </div>
          <div style={statusCard}>
            <span style={statusLabel}>OUTPUT</span>
            <strong>REPORT</strong>
          </div>
        </div>

        <div style={uploadBox}>
          <p style={sectionTitle}>◈ Equipment Image</p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <button onClick={runScan} style={button}>
            RUN EQUIPMENT SCAN
          </button>
        </div>

        <div style={reportBox}>
          <p style={sectionTitle}>◈ BAM Scan™ Report</p>

          <div style={reportText}>
            {result ||
              `Awaiting equipment image.

◈ Asset Intelligence
Manufacturer:
Model:
Serial:
Location:

◈ Safety Analysis
Risk Level:
Energy Sources:
Required Actions:

◈ Component Intelligence
Detected Parts:
Replacement Data:
Critical Spares:

◈ Troubleshooting
Observed Issue:
Next Test:
Recommended Action:

◈ Technician Notes
Machine Memory:
Confidence:`}
          </div>
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
  background:
    "radial-gradient(circle at top, #062444 0%, #020711 45%, #000 100%)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const panel = {
  border: "1px solid rgba(0,119,255,.8)",
  borderRadius: "30px",
  padding: "26px",
  background: "rgba(3, 7, 13, .88)",
  boxShadow: "0 0 45px rgba(0,119,255,.35)",
};

const topLine = {
  color: "#8fc7ff",
  fontSize: "12px",
  letterSpacing: "3px",
  fontWeight: "900",
};

const logo = {
  color: "#0077ff",
  fontSize: "48px",
  marginBottom: "4px",
  fontStyle: "italic",
  letterSpacing: "1px",
};

const subtitle = {
  color: "#b9dcff",
  marginTop: 0,
};

const statusGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  margin: "24px 0",
};

const statusCard = {
  border: "1px solid rgba(0,119,255,.7)",
  borderRadius: "16px",
  padding: "12px",
  background: "rgba(0,119,255,.08)",
  textAlign: "center" as const,
};

const statusLabel = {
  display: "block",
  color: "#8fc7ff",
  fontSize: "10px",
  letterSpacing: "2px",
};

const uploadBox = {
  border: "1px solid rgba(0,119,255,.7)",
  borderRadius: "22px",
  padding: "18px",
  background: "#02050a",
};

const sectionTitle = {
  color: "#8fc7ff",
  fontWeight: "900",
  letterSpacing: "1px",
};

const button = {
  display: "block",
  width: "100%",
  marginTop: "18px",
  background: "linear-gradient(90deg, #0077ff, #5bb6ff)",
  color: "#000",
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  fontWeight: "900",
  letterSpacing: "1px",
};

const reportBox = {
  marginTop: "24px",
  border: "1px solid rgba(0,119,255,.7)",
  borderRadius: "22px",
  padding: "18px",
  background: "rgba(0,0,0,.75)",
};

const reportText = {
  whiteSpace: "pre-wrap" as const,
  lineHeight: "1.6",
  color: "#e8f4ff",
};

const backLink = {
  display: "block",
  marginTop: "26px",
  color: "#8fc7ff",
  fontWeight: "900",
};