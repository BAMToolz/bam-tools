"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  function scan() {
    if (!fileName) {
      setResult("Choose a photo first.");
      return;
    }

    setResult(
      "✅ BAMToolz scanner page is working. Photo selected: " +
        fileName +
        ". Next step is reconnecting the API."
    );
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

      <p>Upload equipment tags, motors, panels, or machine plates.</p>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
      />

      <br />
      <br />

      <button onClick={scan}>📸 RUN SCAN</button>

      <h3>Result:</h3>
      <p>{result}</p>

      <br />

      <a href="/" style={{ color: "white" }}>
        ← Back Home
      </a>
    </main>
  );
}