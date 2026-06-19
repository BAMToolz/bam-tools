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

    setResult("🔵 BAM Scan AI analyzing equipment...");

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
          "No scan result returned."
      );
    } catch (error) {
      setResult("Scanner connection failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#123b70",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>BAMToolz™</h1>

      <h2>BAM Scan™ AI</h2>

      <p>
        Upload machine tags, motors, panels,
        fault screens, or equipment labels.
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

      <button onClick={runScan}>
        📸 RUN AI SCAN
      </button>

      <pre
        style={{
          marginTop: "25px",
          whiteSpace: "pre-wrap",
        }}
      >
        {result}
      </pre>

      <a href="/" style={{ color: "white" }}>
        ← Back Home
      </a>
    </main>
  );
}