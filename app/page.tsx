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

  const card = {
    background: "rgba(15, 23, 42, 0.92)",
    border: "1px solid rgba(56,189,248,.45)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 0 30px rgba(14,165,233,.18)",
  };

  const button = {
    padding: "14px 18px",
    borderRadius: 14,
    border: "1px solid #38bdf8",
    background: "#020617",
    color: "#38bdf8",
    fontWeight: 900,
    cursor: "pointer",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0ea5e9 0%, #020617 35%, #000814 100%)",
        color: "white",
        padding: 24,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          maxWidth: 1150,
          margin: "0 auto 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "white",
              color: "#0284c7",
              fontWeight: 900,
              fontSize: 34,
              padding: "10px 18px",
              borderRadius: 16,
              boxShadow: "0 0 35px rgba(255,255,255,.45)",
            }}
          >
            BAM
          </div>

          <h1 style={{ fontSize: 42, margin: "14px 0 2px", fontWeight: 900 }}>
            BAMToolz™
          </h1>

          <p style={{ color: "#bfdbfe", fontWeight: 800 }}>
            Ball Advanced Maintenance Tools™
          </p>
        </div>

        <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button style={button} onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
            Products™
          </button>
          <button style={button} onClick={() => document.getElementById("robotics")?.scrollIntoView({ behavior: "smooth" })}>
            Robotics™
          </button>
          <button style={button} onClick={() => document.getElementById("scanner")?.scrollIntoView({ behavior: "smooth" })}>
            Scan™
          </button>
          <button style={button} onClick={() => document.getElementById("support")?.scrollIntoView({ behavior: "smooth" })}>
            Support™
          </button>
        </nav>
      </header>

      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <section style={card}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            THE FUTURE OF INDUSTRIAL INTELLIGENCE™
          </p>

          <h2
            style={{
              fontSize: 56,
              lineHeight: 1,
              margin: "14px 0",
              fontWeight: 900,
            }}
          >
            Connecting Machines,
            <br />
            Robotics, Technicians
            <br />
            and AI.
          </h2>

          <p style={{ color: "#dbeafe", fontSize: 18, maxWidth: 760 }}>
            BAMToolz™ is an industrial AI platform for maintenance teams,
            manufacturing facilities, hospitals, robotics, machine controls,
            repair history, parts intelligence, and technician knowledge.
          </p>
        </section>

        <section
          id="products"
          style={{
            marginTop: 22,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          }}
        >
          {[
            ["BAM Scan™", "Handheld AI scanner for equipment tags, photos, panels, and machine data."],
            ["BAM Hub™", "The machine knowledge center for manuals, parts, repair history, and facility intelligence."],
            ["BAM AI™", "Diagnosis support, troubleshooting paths, repair recommendations, and learned fixes."],
            ["BAM Systems™", "Industrial integration for controls, robotics, automation, sensors, and machine systems."],
          ].map(([title, text]) => (
            <div key={title} style={card}>
              <h3 style={{ color: "#38bdf8", fontSize: 25, marginTop: 0 }}>
                {title}
              </h3>
              <p style={{ color: "#cbd5e1" }}>{text}</p>
            </div>
          ))}
        </section>

        <section id="robotics" style={{ ...card, marginTop: 22 }}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            BAM ROBOTIC CONTROLS™
          </p>

          <h3 style={{ fontSize: 38, margin: "8px 0" }}>
            Robotics • PLC • I/O • Automation
          </h3>

          <p style={{ color: "#cbd5e1", fontSize: 17 }}>
            BAMToolz™ supports robotic controls, machine automation, sensors,
            actuators, control panels, wiring documentation, PLC troubleshooting,
            and repair history for real industrial environments.
          </p>
        </section>

        <section id="scanner" style={{ ...card, marginTop: 22 }}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            BAM SCAN™ DEMO
          </p>

          <h3 style={{ fontSize: 36, margin: "8px 0" }}>
            Scan equipment into the BAM ecosystem.
          </h3>

          <label
            style={{
              display: "block",
              marginTop: 20,
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
              Equipment tag, motor plate, control panel, robot label, or machine photo
            </p>
          </label>

          {image && (
            <img
              src={image}
              alt="Machine preview"
              style={{
                marginTop: 20,
                width: "100%",
                maxHeight: 320,
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
              cursor: "pointer",
            }}
          >
            {scanning ? "Scanning Machine..." : "Run BAM Scan™"}
          </button>

          <div
            style={{
              marginTop: 20,
              padding: 18,
              borderRadius: 18,
              background: "#020617",
              border: "1px solid rgba(56,189,248,.35)",
            }}
          >
            <h4 style={{ color: "#38bdf8", marginTop: 0 }}>BAM AI™ Result</h4>

            {!result && !scanning && (
              <p style={{ color: "#cbd5e1" }}>
                No scan yet. Upload a machine photo and press Run BAM Scan™.
              </p>
            )}

            {scanning && (
              <p style={{ color: "#bfdbfe", fontWeight: 800 }}>
                Reading equipment data...
              </p>
            )}

            {result && (
              <div>
                <h4 style={{ fontSize: 28, marginBottom: 8 }}>
                  Industrial Machine Profile Created
                </h4>

                <p style={{ color: "#93c5fd", fontWeight: 800 }}>
                  Confidence: Demo Mode — 92%
                </p>

                <p style={{ color: "#cbd5e1" }}>
                  Save this machine profile, attach manuals, add parts lists,
                  document repair history, and connect it to BAM Hub™.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="support" style={{ ...card, marginTop: 22 }}>
          <h3 style={{ color: "#38bdf8", fontSize: 30 }}>Support™</h3>

          <p style={{ color: "#cbd5e1" }}>
            Support for machine profiles, scanner issues, controls,
            robotics, manuals, parts, repair history, and BAM Hub™ setup.
          </p>

          <button
            onClick={() => {
              window.location.href =
                "mailto:support@bamtoolz.com?subject=BAMToolz Support Request";
            }}
            style={{
              width: "100%",
              marginTop: 12,
              padding: 16,
              borderRadius: 16,
              border: "1px solid #38bdf8",
              background: "#0ea5e9",
              color: "white",
              fontSize: 18,
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Contact BAMToolz™ Support
          </button>
        </section>

        <footer
          style={{
            marginTop: 30,
            textAlign: "center",
            color: "#bfdbfe",
            fontSize: 13,
          }}
        >
          © 2026 BAMToolz™ — Building Smarter. Fixing Faster.
        </footer>
      </div>
    </main>
  );
}