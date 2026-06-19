"use client";

import { useState } from "react";

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");

  async function runScan() {
    if (!file) {
      setResult("Select equipment photo first.");
      return;
    }

    setResult("🔵 BAM Scan™ AI analyzing equipment...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResult(data.result || data.error || "No response returned.");
    } catch {
      setResult("BAM Scan connection failed.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#02050a,#061629,#000000)",
        color: "#e8f4ff",
        padding: "22px",
        fontFamily: "Arial",
        overflowX: "hidden",
      }}
    >
      <section
        style={{
          textAlign: "center",
          border: "1px solid #0a84ff",
          borderRadius: "22px",
          padding: "28px 18px",
          boxShadow: "0 0 35px rgba(10,132,255,0.35)",
        }}
      >
        <div
          style={{
            margin: "0 auto 22px",
            width: "145px",
            height: "95px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "8px",
              top: "5px",
              width: "62px",
              height: "85px",
              background: "#0a84ff",
              clipPath: "polygon(0 0, 100% 25%, 100% 75%, 0 100%)",
              boxShadow: "0 0 25px rgba(10,132,255,0.8)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: "8px",
              top: "16px",
              width: "50px",
              height: "65px",
              background: "#4db5ff",
              clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0 80%)",
              boxShadow: "0 0 18px rgba(77,181,255,0.8)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "58px",
              top: "32px",
              width: "38px",
              height: "34px",
              border: "6px solid #9bd7ff",
              transform: "rotate(-18deg)",
              background: "#061629",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "64px",
            margin: "0",
            lineHeight: "0.9",
            letterSpacing: "7px",
            fontWeight: "900",
          }}
        >
          BAM
        </h1>

        <h1
          style={{
            fontSize: "40px",
            margin: "8px 0 0",
            lineHeight: "1",
            letterSpacing: "6px",
            fontWeight: "900",
          }}
        >
          TOOLZ™
        </h1>

        <h2 style={{ color: "#0a84ff" }}>BAM Scan™ AI</h2>

        <p>
          Scan equipment tags, motors, panels, fault screens,
          serial plates, and machine labels.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <br />
        <br />

        <button
          onClick={runScan}
          style={{
            background: "#0a84ff",
            color: "black",
            padding: "16px 30px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "900",
            boxShadow: "0 0 20px rgba(10,132,255,0.8)",
          }}
        >
          📸 RUN AI SCAN
        </button>

        <div
          style={{
            marginTop: "25px",
            background: "rgba(10,132,255,0.08)",
            border: "1px solid #0a84ff",
            color: "#e8f4ff",
            padding: "20px",
            borderRadius: "15px",
            whiteSpace: "pre-wrap",
            textAlign: "left",
          }}
        >
          {result || "Waiting for scan."}
        </div>

        <br />

        <a href="/" style={{ color: "#8fc7ff", fontWeight: "bold" }}>
          ← Back Home
        </a>
      </section>
    </main>
  );
}