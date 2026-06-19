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
          data.error ||
          "No response returned."
      );
    } catch (error) {
      setResult("BAM Scan connection failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#003b73,#001f3f)",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "55px",
          marginBottom: 0,
        }}
      >
        BAM
      </h1>

      <h1
        style={{
          marginTop: 0,
          letterSpacing: "5px",
        }}
      >
        TOOLZ™
      </h1>

      <h2>BAM Scan™ AI</h2>

      <p>
        Scan equipment tags, motors, panels,
        fault screens, and machine labels.
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
          padding: "15px",
          fontWeight: "bold",
        }}
      >
        📸 RUN AI SCAN
      </button>

      <div
        style={{
          marginTop: "25px",
          background: "#d9e3ec",
          color: "#003b73",
          padding: "20px",
          borderRadius: "15px",
          whiteSpace: "pre-wrap",
        }}
      >
        {result || "Waiting for scan."}
      </div>

      <br />

      <a href="/" style={{ color: "white" }}>
        ← Back Home
      </a>
    </main>
  );
}