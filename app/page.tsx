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
    background: "rgba(15, 23, 42, 0.94)",
    border: "1px solid rgba(56,189,248,.45)",
    borderRadius: 24,
    padding: 24,
    boxShadow: "0 0 30px rgba(14,165,233,.16)",
  };

  const smallCard = {
    background: "#020617",
    border: "1px solid rgba(56,189,248,.3)",
    borderRadius: 18,
    padding: 18,
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
          "radial-gradient(circle at top, #0ea5e9 0%, #020617 34%, #000814 100%)",
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
          {[
            ["Platform™", "platform"],
            ["Products™", "products"],
            ["Robotics™", "robotics"],
            ["Scan™", "scanner"],
            ["Support™", "support"],
          ].map(([label, id]) => (
            <button
              key={label}
              style={button}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      <div style={{ maxWidth: 1150, margin: "0 auto" }}>
        <section style={card}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            THE FUTURE OF INDUSTRIAL INTELLIGENCE™
          </p>

          <h2 style={{ fontSize: 56, lineHeight: 1, margin: "14px 0" }}>
            Connecting Machines,
            <br />
            Robotics, Technicians
            <br />
            and AI.
          </h2>

          <p style={{ color: "#dbeafe", fontSize: 18, maxWidth: 780 }}>
            BAMToolz™ is being built as an industrial intelligence platform for
            maintenance teams, manufacturing facilities, hospitals, robotics,
            machine controls, parts, manuals, repair history, and technician knowledge.
          </p>
        </section>

        <section id="platform" style={{ ...card, marginTop: 22 }}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            BAM PLATFORM™
          </p>

          <h3 style={{ fontSize: 38, margin: "8px 0" }}>
            One system for the machine side of the world.
          </h3>

          <p style={{ color: "#cbd5e1", fontSize: 17 }}>
            BAMToolz™ is designed to turn scattered machine information into an
            organized AI-powered maintenance brain. Instead of manuals, notes,
            photos, parts lists, and repair history being spread everywhere,
            BAM Hub™ connects it all to the equipment profile.
          </p>

          <div style={{ display: "grid", gap: 14, marginTop: 18 }}>
            {[
              "Equipment profiles by machine, line, department, facility, and customer.",
              "Manuals, photos, nameplates, wiring notes, parts lists, and PM records.",
              "Repair history that grows stronger every time a technician fixes a problem.",
              "AI-assisted troubleshooting built around real machine data, not guesswork.",
            ].map((text) => (
              <div key={text} style={smallCard}>
                <p style={{ margin: 0, color: "#dbeafe" }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="products"
          style={{
            marginTop: 22,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {[
            [
              "BAM Scan™",
              "The field tool.",
              "A technician-facing scanner experience for equipment tags, machine photos, panel labels, QR/barcodes, robotic cells, and maintenance documentation.",
            ],
            [
              "BAM Hub™",
              "The knowledge center.",
              "A central machine intelligence hub that stores manuals, parts, repair notes, photos, failures, PMs, and facility history by equipment.",
            ],
            [
              "BAM AI™",
              "The reasoning layer.",
              "AI that reads machine data, compares history, suggests likely causes, recommends next checks, and turns every repair into reusable knowledge.",
            ],
            [
              "BAM Systems™",
              "The industrial integration side.",
              "Support for controls, robotics, PLC/I/O, automation, sensors, wiring documentation, panel data, and machine-system workflows.",
            ],
          ].map(([title, tag, text]) => (
            <div key={title} style={card}>
              <h3 style={{ color: "#38bdf8", fontSize: 25, marginTop: 0 }}>
                {title}
              </h3>
              <p style={{ color: "#bfdbfe", fontWeight: 900 }}>{tag}</p>
              <p style={{ color: "#cbd5e1" }}>{text}</p>
            </div>
          ))}
        </section>

        <section id="robotics" style={{ ...card, marginTop: 22 }}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            BAM ROBOTIC CONTROLS™
          </p>

          <h3 style={{ fontSize: 38, margin: "8px 0" }}>
            Robotics • PLC • I/O • Automation • Controls
          </h3>

          <p style={{ color: "#cbd5e1", fontSize: 17 }}>
            BAMToolz™ is not only a scanner. The brand includes the controls and
            automation side: robotic systems, sensors, actuators, PLC inputs and
            outputs, control panels, wiring documentation, fault history, and
            technician-guided troubleshooting.
          </p>

          <div
            style={{
              display: "grid",
              gap: 14,
              marginTop: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            {[
              ["Robotic Cells", "Robot labels, alarms, teach points, safety zones, and service notes."],
              ["PLC / I/O", "Inputs, outputs, sensors, relays, drives, and troubleshooting steps."],
              ["Control Panels", "Panel photos, wire labels, terminal notes, and electrical repair history."],
              ["Automation Support", "Machine sequences, fault patterns, downtime causes, and repair actions."],
            ].map(([title, text]) => (
              <div key={title} style={smallCard}>
                <h4 style={{ color: "#38bdf8", marginTop: 0 }}>{title}</h4>
                <p style={{ color: "#cbd5e1", marginBottom: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="scanner" style={{ ...card, marginTop: 22 }}>
          <p style={{ color: "#7dd3fc", fontWeight: 900 }}>
            BAM SCAN™ DEMO
          </p>

          <h3 style={{ fontSize: 36, margin: "8px 0" }}>
            Scan equipment into the BAM ecosystem.
          </h3>

          <p style={{ color: "#cbd5e1" }}>
            This demo shows the workflow: capture a machine photo, create a
            machine profile, then connect that profile to manuals, parts, repair
            history, controls notes, and BAM AI™ recommendations.
          </p>

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

          <div style={{ ...smallCard, marginTop: 20 }}>
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
                  Next step: attach manuals, add parts list, document repair
                  history, connect controls notes, and store it inside BAM Hub™.
                </p>
              </div>
            )}
          </div>
        </section>

        <section id="support" style={{ ...card, marginTop: 22 }}>
          <h3 style={{ color: "#38bdf8", fontSize: 30 }}>Support™</h3>

          <p style={{ color: "#cbd5e1" }}>
            BAMToolz™ support will cover machine profiles, scanner issues,
            manuals, parts, robotic controls, PLC/I/O notes, repair history,
            and BAM Hub™ setup.
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