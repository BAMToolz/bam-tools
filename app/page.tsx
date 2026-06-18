"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState(
    "BAMToolz ready. Take a photo."
  );

  async function scan() {
    if (!file) {
      setResult("Please take a photo first.");
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

      setResult(
        data.result || data.error || "Scan finished."
      );

    } catch (error) {
      setResult(
        "Connection error. Scanner did not answer."
      );
    }
  }

  return (
    <main
      style={{
        padding: 30,
        fontFamily: "Arial",
      }}
    >
      <h1>BAMToolz 🔧</h1>

      <h3>
        Ball Advanced Maintenance Tools
      </h3>

      <p>
        AI Manufacturing Maintenance Assistant
      </p>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const picked =
            e.target.files?.[0] || null;

          setFile(picked);

          if (picked) {
            setResult(
              "Photo loaded. Press Scan Equipment."
            );
          }
        }}
      />

      <br />
      <br />

      <button
        onClick={scan}
        style={{
          padding: 15,
          fontSize: 18,
        }}
      >
        Scan Equipment
      </button>

      <pre
        style={{
          marginTop: 20,
          whiteSpace: "pre-wrap",
        }}
      >
        {result}
      </pre>
    </main>
  );
}
