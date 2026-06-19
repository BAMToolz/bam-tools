"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");

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

      if (!res.ok) {
        setResult(data.error || "Scanner connection failed.");
        return;
      }

      setResult(data.result || "No result returned.");
    } catch {
      setResult("Scanner connection failed. API route may not be live.");
    }
  }

  return (
    <main className="page">
      <section className="hero">
        <div className="badge">AI SCANNER</div>

        <h1>Scan Equipment</h1>

        <p className="description">
          Upload a photo of a tag, motor plate, panel label, fault screen, or
          machine nameplate.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <br />
        <br />

        <button className="scanButton" onClick={scan}>
          📸 RUN SCAN
        </button>

        <p className="description">{result}</p>

        <a className="scanButton" href="/">
          ← BACK HOME
        </a>
      </section>
    </main>
  );
}