"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("Ready. Take a photo first.");

  async function scan() {
    if (!file) {
      setResult("No photo selected. Tap Choose File first.");
      return;
    }

    setResult("Scanning... please wait.");

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (!res.ok) {
        setResult(data.error || "Scan failed.");
        return;
      }

      setResult(data.result || "Scan finished.");
    } catch {
      setResult("Scanner connection failed. API route may not be live.");
    }
  }

  return (
    <main style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>BAMToolz 🔧</h1>
      <h3>Ball Advanced Maintenance Tools</h3>

      <p>{file ? `Photo selected: ${file.name}` : "No photo selected yet."}</p>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const selected = e.target.files?.[0] || null;
          setFile(selected);
          setResult(selected ? "Photo loaded. Now tap Scan Equipment." : "No photo selected.");
        }}
      />

      <br />
      <br />

      <button
        onClick={scan}
        style={{ padding: 15, fontSize: 18 }}
      >
        Scan Equipment
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>{result}</pre>
    </main>
  );
}
