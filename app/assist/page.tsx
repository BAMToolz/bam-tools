"use client";

import { useState } from "react";

type Message = {
  role: "tech" | "bam";
  text: string;
};

export default function AssistPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bam",
      text:
        "BAM Assist™ online.\n\nTell me the equipment and the problem.\nExample: Motor trips after 10 minutes under load.",
    },
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;

    const userText = input.trim();

    setMessages((prev) => [
      ...prev,
      { role: "tech", text: userText },
      { role: "bam", text: buildReply(userText) },
    ]);

    setInput("");
  }

  function buildReply(text: string) {
    return `BAM Assist™
━━━━━━━━━━━━

◈ Symptom Received
${text}

◈ First Questions
1. What equipment is this?
2. Does the issue happen at startup, under load, or after running?
3. Any fault code, alarm, smell, heat, noise, or vibration?
4. Has anything recently changed?

◈ Safety First
Verify Lockout / Tagout before touching wiring, guards, belts, panels, or moving parts.

◈ Next Technician Step
Send the model number, fault code, or what changed before the failure.

◈ BAM Hub™
This conversation can later become machine memory for the asset.`;
  }

  return (
    <main style={main}>
      <section style={panel}>
        <p style={topLine}>BAM™ • BALL ADVANCED MANAGEMENT</p>

        <h1 style={logo}>BAM Assist™</h1>
        <h2 style={blue}>Technician Troubleshooting Companion</h2>

        <div style={chatBox}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={msg.role === "tech" ? techBubble : bamBubble}
            >
              <strong>{msg.role === "tech" ? "Technician" : "BAM"}</strong>
              <p style={messageText}>{msg.text}</p>
            </div>
          ))}
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the equipment problem..."
          style={textArea}
        />

        <button onClick={sendMessage} style={button}>
          SEND TO BAM ASSIST™
        </button>

        <a href="/" style={backLink}>
          ← Back Home
        </a>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#062444,#020711,#000)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const panel = {
  border: "1px solid #0077ff",
  borderRadius: "28px",
  padding: "24px",
  background: "linear-gradient(180deg,#04111f,#02050a)",
  boxShadow: "0 0 35px rgba(0,119,255,.35)",
};

const topLine = {
  color: "#8fc7ff",
  fontSize: "12px",
  letterSpacing: "3px",
  fontWeight: "900",
};

const logo = {
  color: "#0077ff",
  fontSize: "42px",
  fontStyle: "italic",
};

const blue = {
  color: "#0077ff",
};

const chatBox = {
  marginTop: "24px",
  border: "1px solid rgba(0,119,255,.7)",
  borderRadius: "20px",
  padding: "16px",
  background: "#000",
  minHeight: "320px",
};

const bamBubble = {
  marginBottom: "16px",
  border: "1px solid rgba(0,119,255,.6)",
  borderRadius: "18px",
  padding: "14px",
  background: "rgba(0,119,255,.08)",
};

const techBubble = {
  marginBottom: "16px",
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
  minHeight: "100px",
  marginTop: "18px",
  borderRadius: "18px",
  border: "1px solid #0077ff",
  padding: "14px",
  background: "#000",
  color: "#e8f4ff",
  fontSize: "16px",
};

const button = {
  width: "100%",
  marginTop: "14px",
  background: "linear-gradient(90deg,#0077ff,#5bb6ff)",
  color: "#000",
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  fontWeight: "900",
};

const backLink = {
  display: "block",
  marginTop: "26px",
  color: "#8fc7ff",
  fontWeight: "900",
};