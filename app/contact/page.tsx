"use client";

import { useState } from "react";

export default function ContactPage() {
  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState(
    "BAM Support AI™ online. Ask about BAM Scan™, BAM Assist™, BAM Hub™, setup, or support."
  );

  function askSupport() {
    if (!question.trim()) {
      setAnswer("Enter a support question to continue.");
      return;
    }

    setAnswer(`BAM Support AI™
━━━━━━━━━━━━

Question:
${question}

Recommended Support Path:

◈ BAM Scan™
• Equipment scanning
• AI analysis
• Image processing
• Machine identification

◈ BAM Hub™
• Machine memory
• Facility intelligence
• Maintenance history
• Documentation

◈ BAM Machines™
• Industrial equipment
• Automation concepts
• Controls-ready systems
• Manufacturing solutions

Support Contact:
BAMToolzsupport@gmail.com`);

    setQuestion("");
  }

  return (
    <main style={main}>
      <section style={panel}>

        <p style={topLine}>
          BAM™ • BALL AI METRICS™
        </p>

        <h1 style={logo}>
          BAM Support Center™
        </h1>

        <h2 style={blue}>
          AI Support • Machine Intelligence • Facility Solutions
        </h2>


        <section style={box}>
          <h2 style={blue}>
            ◈ BAM Support AI™
          </h2>

          <p>
            Support for BAM Scan™, BAM Assist™,
            BAM Hub™, equipment intelligence,
            and facility workflows.
          </p>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your support question..."
            style={textArea}
          />

          <button onClick={askSupport} style={button}>
            Ask BAM Support AI™
          </button>

          <pre style={answerBox}>
            {answer}
          </pre>
        </section>


        <section style={box}>
          <h2 style={blue}>
            ◈ Contact Support
          </h2>

          <p>
            Email:
            <br />

            <a
              href="mailto:BAMToolzsupport@gmail.com"
              style={link}
            >
              BAMToolzsupport@gmail.com
            </a>
          </p>
        </section>


        <section style={box}>
          <h2 style={blue}>
            ◈ BAMLabs™
          </h2>

          <p>
            Artificial intelligence research,
            prototypes, future technology,
            and product development.
          </p>
        </section>


        <section style={box}>
          <h2 style={blue}>
            ◈ BAM Machines™
          </h2>

          <p>
            Industrial machines • Automation •
            Controls-ready equipment • Manufacturing solutions
          </p>
        </section>


        <a href="/" style={button}>
          Back Home™
        </a>


        <footer style={footer}>
          © 2026 BAM Support™ | BAMToolz™ | Ball AI Metrics™
        </footer>

      </section>
    </main>
  );
}


const main = {
  minHeight:"100vh",
  background:"radial-gradient(circle at top,#082b52,#020711,#000)",
  color:"#e8f4ff",
  padding:"22px",
  fontFamily:"Arial",
};


const panel = {
  border:"2px solid #0077ff",
  borderRadius:"32px",
  padding:"26px",
  background:"linear-gradient(180deg,#06192d,#02050a)",
  boxShadow:"0 0 40px rgba(0,119,255,.4)",
};


const topLine = {
  color:"#8fc7ff",
  textAlign:"center" as const,
  letterSpacing:"3px",
  fontWeight:"900",
};


const logo = {
  color:"#0077ff",
  textAlign:"center" as const,
  fontSize:"42px",
};


const blue = {
  color:"#0077ff",
};


const box = {
  marginTop:"24px",
  padding:"20px",
  border:"1px solid #0077ff",
  borderRadius:"22px",
  background:"rgba(0,119,255,.08)",
};


const textArea = {
  width:"100%",
  minHeight:"100px",
  background:"#000",
  color:"#e8f4ff",
  border:"1px solid #0077ff",
  borderRadius:"16px",
  padding:"14px",
};


const button = {
  display:"block",
  marginTop:"18px",
  background:"linear-gradient(90deg,#0077ff,#5bb6ff)",
  color:"#000",
  padding:"15px",
  borderRadius:"999px",
  textAlign:"center" as const,
  fontWeight:"900",
  textDecoration:"none",
  border:"none",
};


const answerBox = {
  whiteSpace:"pre-wrap" as const,
  background:"#000",
  marginTop:"18px",
  padding:"15px",
  borderRadius:"18px",
  border:"1px solid rgba(0,119,255,.7)",
};


const link = {
  color:"#8fc7ff",
  fontWeight:"900",
  textDecoration:"none",
};


const footer = {
  marginTop:"35px",
  textAlign:"center" as const,
  color:"#8fc7ff",
};