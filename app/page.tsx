"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("Ready. Take a photo.");

  async function scan() {
    if (!file) {
      setResult("No photo selected.");
      return;
    }

    setResult("Scanning... please wait.");

    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/scan", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setResult(data.result || data.error);
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>BAMToolz 🔧</h1>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const picked = e.target.files?.[0] || null;
          setFile(picked);
          setResult("Photo loaded. Tap Scan Equipment.");
        }}
      />

      <br />
      <br />

      <button onClick={scan}>Scan Equipment</button>

      <pre>{result}</pre>
    </main>
  );
}
