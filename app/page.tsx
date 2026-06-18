"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("Ready. Choose a photo.");

  async function scan() {
    if (!file) {
      setResult("No photo selected.");
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
      setResult("Upload failed. Try a smaller photo.");
    }
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>BAMToolz 🔧</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const picked = e.target.files?.[0] || null;
          setFile(picked);
          setResult(
            picked
              ? `Photo loaded: ${picked.name}`
              : "No photo selected."
          );
        }}
      />

      <br />
      <br />

      <button onClick={scan}>Scan Equipment</button>

      <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
    </main>
  );
}
