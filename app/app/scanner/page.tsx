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
      const res = await fetch("/app/api/scan", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      setResult(
        data.result ||
          data.error ||
          "No scanner response."
      );
    } catch {
      setResult(
        "Scanner connection failed. Check API route."
      );
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
      <h1>BAMToolz Scanner</h1>

      <p>
        Upload equipment tags, motors,
        panels, or machine plates.
      </p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <br />
      <br />

      <button onClick={scan}>
        📸 RUN SCAN
      </button>

      <h3>Result:</h3>

      <p>{result}</p>

      <br />

      <a
        href="/"
        style={{ color: "white" }}
      >
        ← Back Home
      </a>
    </main>
  );
}