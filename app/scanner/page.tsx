"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [result, setResult] = useState("");

  async function runScan() {
    setResult("Testing BAM Scan connection...");

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
      });

      const text = await res.text();

      setResult(
        "STATUS: " +
          res.status +
          "\n\nRESPONSE:\n" +
          text
      );
    } catch (error) {
      setResult("BAM Scan connection failed before reaching API.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #003b73, #001f3f)",
        color: "white",
        padding: "28px",
        fontFamily: "Arial",
      }}
    >
      <h1>BAMToolz™</h1>
      <h2>BAM Scan™ API Test</h2>

      <button onClick={runScan}>TEST API CONNECTION</button>

      <pre
        style={{
          marginTop: "25px",
          background: "#d9e3ec",
          color: "#003b73",
          padding: "18px",
          borderRadius: "12px",
          whiteSpace: "pre-wrap",
        }}
      >
        {result || "No test yet."}
      </pre>

      <a href="/" style={{ color: "white" }}>
        ← Back Home
      </a>
    </main>
  );
}