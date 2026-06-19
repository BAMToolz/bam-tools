"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  function runScan() {
    if (!fileName) {
      setResult("Choose a photo first.");
      return;
    }

    setResult("✅ BAMToolz test scan working. Photo selected: " + fileName);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#003b73",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1>BAMToolz</h1>
      <h2>AI Equipment Scanner</h2>

      <p>Upload a photo of a machine tag, motor plate, panel, or fault screen.</p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
      />

      <br />
      <br />

      <button onClick={runScan}>📸 RUN SCAN</button>

      <h3>Result:</h3>
      <p>{result}</p>

      <br />

      <a href="/" style={{ color: "white" }}>
        ← Back Home
      </a>
    </main>
  );
}