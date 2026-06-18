"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function scan() {
    if (!file) {
      setResult("Take a photo first");
      return;
    }

    setResult("Scanning...");

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        body: form,
      });

      const data = await res.json();
      setResult(data.result || data.error);
    } catch {
      setResult("Scanner connection failed");
    }
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>BAMToolz 🔧</h1>
      <h3>Ball Advanced Maintenance Tools</h3>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br />
      <br />

      <button onClick={scan}>Scan Equipment</button>

      <pre>{result}</pre>
    </main>
  );
}
