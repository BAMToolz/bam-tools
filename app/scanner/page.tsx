"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function runScan() {
    if (!file) {
      setResult("Choose a photo first.");
      return;
    }

    setResult("Scanning with BAMToolz AI...");

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      setResult(data.result || data.error || "No AI result returned.");
    } catch {
      setResult("BAM Scan connection failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #003b73, #001f3f)",
        color: "white",
        padding: "28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "22px",
          padding: "28px",
        }}
      >
        <h1>BAMToolz™</h1>
        <h2>AI Equipment Scanner</h2>

        <p>
          Upload a machine tag, motor plate, panel label, or fault screen.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <br />
        <br />

        <button onClick={runScan}>📸 RUN AI SCAN</button>

        <h3>Result:</h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{result}</p>

        <a href="/" style={{ color: "white" }}>
          ← Back Home
        </a>
      </div>
    </main>
  );
}