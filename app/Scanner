"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function scan() {
    if (!file) {
      setResult("Choose a photo first.");
      return;
    }

    setResult("Scanning equipment...");

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      setResult(data.result || data.error || "No result returned.");
    } catch {
      setResult("Scanner connection failed.");
    }
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
      <h1>Scan Equipment</h1>

      <p>Upload a photo of a machine tag, motor plate, panel, or fault screen.</p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br />
      <br />

      <button onClick={scan}>📸 RUN SCAN</button>

      <p>{result}</p>

      <a href="/" style={{ color: "white" }}>
        ← Back Home
      </a>
    </main>
  );
}