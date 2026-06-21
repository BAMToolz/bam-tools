"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(false);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setResult(false);
  }

  function runScan() {
    if (!image) {
      alert("Take or upload a machine photo first.");
      return;
    }

    setScanning(true);
    setResult(false);

    setTimeout(() => {
      setScanning(false);
      setResult(true);
    }, 1500);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a, #001f4d)",
        color: "white",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ marginBottom: 32 }}>
        <div
          style={{
            display: "inline-block",
            background: "#0ea5e9",
            color: "white",
            fontWeight: 900,
            fontSize: 34,
            padding: "10px 18px",
            borderRadius: 14,
            boxShadow: "0 0 30px #0ea5e9",
          }}
        >
          BAM
        </div>

        <h1 style={{ fontSize: 42, margin: "16px 0 4px", fontWeight: 900 }}>
          BAMToolz™
        </h1>

        <p style={{ color: "#93c5fd", fontWeight: 700 }}>
          Ball Advanced Maintenance Tools™
        </p>
      </header>

      <section
        style={{
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid #38bdf8",
          borderRadius: 24,
          padding: 24,
          boxShadow: "0 0 35px rgba(14,165,233,.25)",
        }}
      >
        <p style={{ color: "#38bdf8", fontWeight: 900 }}>
          BAM SCAN™ • MAINTENANCE AI SCANNER
        </p>

        <h2 style={{ fontSize: 48, lineHeight: 1, margin: "12px 0" }}>
          Scan.
          <br />
          Recognize.
          <br />
          Fix Faster.
        </h2>

        <p style={{ color: "#cbd5e1", fontSize: 17 }}>
          Upload or take a photo of equipment. BAMToolz™ builds a machine
          profile, connects manuals, tracks parts, and creates technician
          knowledge.
        </p>

        <label
          style={{
            display: "block",
            marginTop: 24,
            padding: 24,
            border: "2px dashed #38bdf8",
            borderRadius: 18,
            textAlign: "center",
            background: "#020617",
            cursor: "pointer",
          }}
        >
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />

          <strong style={{ color: "#38bdf8", fontSize: 20 }}>
            Tap to Take / Upload Machine Photo
          </strong>

          <p style={{ color: "#94a3b8" }}>
            Equipment tag, motor plate, panel label, or machine photo
          </p>
        </label>

        {image && (
          <img
            src={image}
            alt="Machine preview"
            style={{
              marginTop: 20,
              width: "100%",
              maxHeight: 300,
              objectFit: "cover",
              borderRadius: 18,
              border: "1px solid #38bdf8",
            }}
          />
        )}

        <button
          onClick={runScan}
          disabled={scanning}
          style={{
            width: "100%",
            marginTop: 20,
            padding: 18,
            borderRadius: 16,
            border: "none",
            background: scanning ? "#64748b" : "#0ea5e9",
            color: "white",
            fontSize: 20,
            fontWeight: 900,
            boxShadow: "0 0 25px rgba(14,165,233,.5)",
          }}
        >
          {scanning ? "Scanning Machine..." : "Run BAM Scan™"}
        </button>
      </section>

      <section
        style={{
          marginTop: 24,
          background: "rgba(15, 23, 42, 0.9)",
          border: "1px solid #38bdf8",
          borderRadius: 24,
          padding: 24,
        }}
      >
        <h3 style={{ color: "#38bdf8", fontSize: 28 }}>BAM AI™ Result</h3>

        {!result && !scanning && (
          <p style={{ color: "#cbd5e1" }}>
            No scan yet. Upload a machine photo and press Run BAM Scan™.
          </p>
        )}

        {scanning && (
          <p style={{ color: "#93c5fd", fontWeight: 800 }}>
            Reading equipment data...
          </p>
        )}

        {result && (
          <div>
            <h4 style={{ fontSize: 30, marginBottom: 8 }}>
              Industrial Motor / Machine Tag
            </h4>

            <p style={{ color: "#93c5fd", fontWeight: 800 }}>
              Confidence: Demo Mode — 92%
            </p>

            <div
              style={{
                marginTop: 16,
                padding: 16,
                borderRadius: 16,
                background: "#020617",
                border: "1px solid #38bdf8",
              }}
            >
              <strong>Recommended Action:</strong>
              <p>
                Save this machine profile, attach manuals, add parts list, and
                build repair history inside BAM Hub™.
              </p>
            </div>
          </div>
        )}
      </section>

      <section
        style={{
          marginTop: 24,
          display: "grid",
          gap: 14,
        }}
      >
        {["BAM Scan™", "BAM Hub™", "BAM AI™", "BAM Systems™"].map((item) => (
          <div
            key={item}
            style={{
              background: "rgba(15, 23, 42, 0.9)",
              border: "1px solid rgba(56,189,248,.35)",
              borderRadius: 18,
              padding: 18,
            }}
          >
            <h4 style={{ color: "#38bdf8", fontSize: 22, margin: 0 }}>
              {item}
            </h4>
            <p style={{ color: "#cbd5e1", marginBottom: 0 }}>
              Building the future maintenance intelligence system.
            </p>
          </div>
        ))}
      </section>

      <footer
        style={{
          marginTop: 30,
          textAlign: "center",
          color: "#94a3b8",
          fontSize: 13,
        }}
      >
        © 2026 BAMToolz™ — Building Smarter. Fixing Faster.
      </footer>
    </main>
  );
}