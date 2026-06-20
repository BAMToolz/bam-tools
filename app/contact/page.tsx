"use client";

import { useState } from "react";

export default function ContactPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "BAM Support AI™ online. Ask about BAM Scan™, BAM Assist™, BAM Hub™, support, setup, or troubleshooting."
  );

  function askSupport() {
    if (!question.trim()) {
      setAnswer("Type your support question first.");
      return;
    }

    setAnswer(`BAM Support AI™
━━━━━━━━━━━━

Question:
${question}

Suggested Next Step:
• If this is a scanner issue, check photo upload, API key, and deployment status.
• If this is equipment help, include machine type, model, fault, and what changed.
• If this is facility setup, contact BAMToolz support.

Human Support:
BAMToolzsupport@gmail.com`);
    setQuestion("");
  }

  return (
    <main style={main}>
      <section style={panel}>
        <p style={topLine}>BAM™ • BALL ADVANCED MANAGEMENT</p>

        <h1 style={logo}>BAM Support Center™</h1>
        <h2 style={blue}>AI Help • Human Support • Facility Setup</h2>

        <section style={box}>
          <h2 style={blue}>◈ BAM Support AI™</h2>
          <p>Ask for help with BAM Scan™, BAM Assist™, BAM Hub™, or setup.</p>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your support question..."
            style={textArea}
          />

          <button onClick={askSupport} style={button}>
            Ask BAM Support AI™
          </button>

          <pre style={answerBox}>{answer}</pre>
        </section>

        <section style={box}>
          <h2 style={blue}>◈ Human Support</h2>
          <a href="mailto:BAMToolzsupport@gmail.com" style={email}>
            BAMToolzsupport@gmail.com
          </a>
        </section>

        <section style={box}>
          <h2 style={blue}>◈ Facility / Business Support</h2>
          <p>BAMSystems™ integration, automation, controls, and facility setup.</p>
        </section>

        <a href="/" style={button}>Back Home</a>
      </section>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#082b52,#020711,#000)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial",
};

const panel = {
  border: "2px solid #0077ff",
  borderRadius: "32px",
  padding: "26px",
  background: "linear-gradient(180deg,#06192d,#02050a)",
  boxShadow: "0 0 40px rgba(0,119,255,.4)",
};

const topLine = {
  color: "#8fc7ff",
  textAlign: "center" as const,
  letterSpacing: "3px",
  fontWeight: "900",
};

const logo = {
  textAlign: "center" as const,
  color: "#0077ff",
  fontSize: "42px",
};

const blue = {
  color: "#0077ff",
};

const box = {
  marginTop: "24px",
  padding: "20px",
  border: "1px solid #0077ff",
  borderRadius: "22px",
  background: "rgba(0,119,255,.08)",
};

const textArea = {
  width: "100%",
  minHeight: "100px",
  borderRadius: "16px",
  border: "1px solid #0077ff",
  padding: "14px",
  background: "#000",
  color: "#e8f4ff",
  fontSize: "16px",
};

const button = {
  display: "block",
  marginTop: "15px",
  background: "linear-gradient(90deg,#0077ff,#5bb6ff)",
  color: "#000",
  padding: "15px",
  borderRadius: "999px",
  textAlign: "center" as const,
  fontWeight: "900",
  textDecoration: "none",
  border: "none",
};

const answerBox = {
  whiteSpace: "pre-wrap" as const,
  marginTop: "18px",
  padding: "16px",
  borderRadius: "18px",
  background: "#000",
  border: "1px solid rgba(0,119,255,.7)",
  color: "#e8f4ff",
};

const email = {
  color: "#8fc7ff",
  fontWeight: "900",
  textDecoration: "none",
};