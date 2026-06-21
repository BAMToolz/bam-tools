"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

export default function ScannerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bam",
      text: "BAM Assist™ ready. Upload an equipment image, run BAM Scan™, then ask follow-up troubleshooting questions.",
    },
  ]);

  async function runScan() {
    if (!file) {
      setResult("Select an equipment photo first.");
      return;
    }

    setResult("BAM Scan™ analyzing equipment intelligence...");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResult(
        data.result ||
          data.message ||
          "BAM Scan™ connected, but no result text returned."
      );
    } catch (error: any) {
      setResult(error?.message || "BAM Scan™ connection failed.");
    }
  }

  function sendMessage() {
    if (!input.trim()) return;

    const techText = input.trim();

    const bamReply = `BAM Assist™
━━━━━━━━━━━━

◈ Technician Question
${techText}

◈ Based On Current BAM Scan™
Review the BAM Scan™ report above and compare the symptom to the asset, safety risks, visible components, and troubleshooting notes.

◈ Follow-Up Questions
1. Does the issue happen at startup, under load, or after running?
2. Is there heat, noise, vibration, smell, or a fault code?
3. Has anything recently changed?
4. What was the last repair?

◈ Next Technician Action
Send the model number, fault code, amp reading, photo, or what changed before the failure.

◈ BAM Hub™ Memory
This conversation can later be saved as repair history and technician knowledge for the asset.`;

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: techText },
      { role: "bam", text: bamReply },
    ]);

    setInput("");
  }

  return (
    <main style={main}>
      <section style={panel}>
        <header style={header}>
          <div>
            <p style={topLine}>BALL ADVANCED MANAGEMENT™</p>
            <h1 style={logo}>BAM Scan™</h1>
            <h2 style={blue}>AI Equipment Intelligence™</h2>
            <p style={subText}>
              Connecting machines, technicians, facilities and AI.
            </p>
          </div>

          <nav style={nav}>
            <a href="/" style={navButton}>
              Home
            </a>
            <a href="/support" style={navButton}>
              AI Support
            </a>
            <a href="mailto:BAMToolzsupport@gmail.com" style={navButton}>
              Contact
            </a>
          </nav>
        </header>

        <div style={statusGrid}>
          <div style={statusCard}>
            <span style={statusLabel}>BAM SCAN™</span>
            <strong>IMAGE</strong>
          </div>
          <div style={statusCard}>
            <span style={statusLabel}>BAM ASSIST™</span>
            <strong>CHAT</strong>
          </div>
          <div style={statusCard}>
            <span style={statusLabel}>BAM HUB™</span>
            <strong>MEMORY</strong>
          </div>
        </div>

        <div style={box}>
          <p style={sectionTitle}>◈ Equipment Image</p>
          <p style={helperText}>
            Upload a machine tag, equipment label, panel, log, or component photo.
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            style={fileInput}
          />

          <button onClick={runScan} style={button}>
            RUN BAM SCAN™
          </button>
        </div>

        <div style={box}>
          <p style={sectionTitle}>◈ BAM Scan™ Report</p>

          <div style={reportText}>
            {result ||
              `Awaiting equipment image.

◈ Asset Intelligence
Manufacturer:
Equipment Type:
Model:
Serial:
Ratings:

◈ Safety Intelligence
Hazards:
Energy Sources:
Lockout / Tagout:

◈ Parts Intelligence
Components:
Replacement Parts:

◈ Troubleshooting
Observed Issues:
Tests:
Recommended Action:

◈ BAM Hub™ Machine Memory
Repair Notes:
Knowledge Captured:
Future Prevention:`}
          </div>
        </div>

        <div style={box}>
          <p style={sectionTitle}>◈ BAM Assist™ Chat</p>
          <p style={helperText}>
            Ask follow-up questions after the scan. This is where technician knowledge becomes BAM Hub™ memory.
          </p>

          <div style={chatBox}>
            {messages.map((msg, index) => (
              <div key={index} style={msg.role === "tech" ? techBubble : bamBubble}>
                <strong>{msg.role === "tech" ? "Technician" : "BAM Assist™"}</strong>
                <p style={messageText}>{msg.text}</p>
              </div>
            ))}
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a follow-up troubleshooting question..."
            style={textArea}
          />

          <button onClick={sendMessage} style={button}>
            SEND QUESTION
          </button>
        </div>

        <div style={supportBox}>
          <p style={sectionTitle}>◈ BAMToolz™ Support</p>
          <p style={helperText}>
            Founder: Justin Ball | Company: Ball Advanced Management™
          </p>
          <p style={helperText}>
            Email:{" "}
            <a href="mailto:BAMToolzsupport@gmail.com" style={inlineLink}>
              BAMToolzsupport@gmail.com
            </a>
          </p>
        </div>

        <footer style={footer}>
          <a href="/" style={backLink}>
            ← BAMToolz™ Home
          </a>
          <a href="/privacy" style={backLink}>
            Privacy
          </a>
          <a href="/terms" style={backLink}>
            Terms
          </a>
          <a href="/support" style={backLink}>
            BAMToolz™ AI Support
          </a>
        </footer>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#0a8bd9,#04345f,#020711,#000)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const panel = {
  maxWidth: "1100px",
  margin: "0 auto",
  border: "1px solid rgba(143,199,255,.65)",
  borderRadius: "32px",
  padding: "24px",
  background: "linear-gradient(180deg,#05294a,#04111f,#02050a)",
  boxShadow: "0 0 40px rgba(0,119,255,.45)",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  flexWrap: "wrap" as const,
};

const nav = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap" as const,
  alignItems: "flex-start",
};

const navButton = {
  border: "1px solid rgba(143,199,255,.65)",
  borderRadius: "12px",
  padding: "10px 14px",
  background: "rgba(0,0,0,.55)",
  color: "#8fc7ff",
  textDecoration: "none",
  fontWeight: "900",
};

const topLine = {
  color: "#8fc7ff",
  fontSize: "12px",
  letterSpacing: "3px",
  fontWeight: "900",
};

const logo = {
  marginTop: "10px",
  color: "#5bb6ff",
  fontSize: "48px",
  fontStyle: "italic",
  fontWeight: "900",
};

const blue = {
  color: "#8fc7ff",
  marginTop: "-8px",
};

const subText = {
  maxWidth: "650px",
  color: "#c8e7ff",
  lineHeight: "1.6",
};

const statusGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  margin: "24px 0",
};

const statusCard = {
  border: "1px solid rgba(0,119,255,.7)",
  borderRadius: "16px",
  padding: "12px",
  background: "rgba(0,119,255,.12)",
  textAlign: "center" as const,
};

const statusLabel = {
  display: "block",
  color: "#8fc7ff",
  fontSize: "10px",
  letterSpacing: "2px",
};

const box = {
  marginTop: "24px",
  border: "1px solid rgba(0,119,255,.7)",
  borderRadius: "22px",
  padding: "18px",
  background: "rgba(0,0,0,.72)",
};

const supportBox = {
  marginTop: "24px",
  border: "1px solid rgba(143,199,255,.55)",
  borderRadius: "22px",
  padding: "18px",
  background: "rgba(0,119,255,.08)",
};

const sectionTitle = {
  color: "#8fc7ff",
  fontWeight: "900",
  letterSpacing: "1px",
};

const helperText = {
  color: "#b9dfff",
  lineHeight: "1.6",
};

const fileInput = {
  marginTop: "12px",
  width: "100%",
};

const button = {
  display: "block",
  width: "100%",
  marginTop: "18px",
  background: "linear-gradient(90deg,#00b7ff,#5bb6ff)",
  color: "#00111f",
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  fontWeight: "900",
};

const reportText = {
  whiteSpace: "pre-wrap" as const,
  lineHeight: "1.6",
};

const chatBox = {
  marginTop: "15px",
};

const bamBubble = {
  marginBottom: "14px",
  border: "1px solid rgba(0,119,255,.6)",
  borderRadius: "18px",
  padding: "14px",
  background: "rgba(0,119,255,.1)",
};

const techBubble = {
  marginBottom: "14px",
  border: "1px solid rgba(143,199,255,.6)",
  borderRadius: "18px",
  padding: "14px",
  background: "rgba(255,255,255,.05)",
};

const messageText = {
  whiteSpace: "pre-wrap" as const,
  lineHeight: "1.6",
};

const textArea = {
  width: "100%",
  minHeight: "90px",
  marginTop: "12px",
  borderRadius: "18px",
  border: "1px solid #0077ff",
  padding: "14px",
  background: "#000",
  color: "#e8f4ff",
  fontSize: "16px",
};

const inlineLink = {
  color: "#8fc7ff",
  fontWeight: "900",
};

const footer = {
  display: "flex",
  gap: "18px",
  flexWrap: "wrap" as const,
  marginTop: "26px",
};

const backLink = {
  color: "#8fc7ff",
  fontWeight: "900",
  textDecoration: "none",
};