"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function scan() {
    if (!file) return;

    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/scan", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setResult(data.result);
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>BAMToolz</h1>
      <h3>Ball Advanced Maintenance Tools</h3>

      <p>AI Powered Manufacturing Maintenance</p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <br /><br />

      <button onClick={scan}>
        Scan Equipment
      </button>

      <pre>{result}</pre>
    </main>
  );
}