"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState("");

  function runScan() {
    if (!fileName) {
      setResult("Choose a photo first.");
      return;
    }

    setResult(
      "✅ BAMToolz test scan working. Photo selected: " +
        fileName +
        ". Next step: connect AI equipment reading."
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #003b73, #001f3f)",
        color: "white",
        padding: "28px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "22px",
          padding: "28px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#d9e3ec",
            color: "#003b73",
            padding: "8px 14px",
            borderRadius: "999px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          PROTOTYPE SCANNER
        </div>

        <h1 style={{ fontSize: "46px", margin: "0 0 8px" }}>BAMToolz</h1>

        <h2 style={{ marginTop: 0 }}>AI Equipment Scanner</h2>

        <p style={{ fontSize: "18px", lineHeight: 1.5 }}>
          Upload a photo of a machine tag, motor plate, panel, fault screen, or
          equipment nameplate.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          style={{
            marginTop: "18px",
            fontSize: "16px",
          }}
        />

        <br />
        <br />

        <button
          onClick={runScan}
          style={{
            background: "#d9e3ec",
            color: "#003b73",
            border: "none",
            borderRadius: "14px",
            padding: "16px 28px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          📸 RUN BAM SCAN
        </button>

        <div
          style={{
            marginTop: "28px",
            background: "#d9e3ec",
            color: "#003b73",
            borderRadius: "16px",
            padding: "18px",
            minHeight: "80px",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Result</h3>
          <p>{result || "No scan yet."}</p>
        </div>

        <br />

        <a href="/" style={{ color: "white", fontWeight: "bold" }}>
          ← Back Home
        </a>
      </div>
    </main>
  );
}