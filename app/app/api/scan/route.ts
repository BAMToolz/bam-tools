"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function scanFile() {
    if (!file) return alert("Choose a picture first");

    setLoading(true);
    setResult("");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/scan", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data.result || data.error || "No result");
    setLoading(false);
  }

  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>BAMToolz</h1>
      <h3>AI Maintenance Scanner</h3>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br /><br />

      <button onClick={scanFile}>
        {loading ? "Reading..." : "Read Picture / File"}
      </button>

      <pre style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
        {result}
      </pre>
    </main>
  );
}
