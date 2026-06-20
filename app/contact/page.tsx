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

◈ Scanner Support
Check image upload, connection, AI status,
and deployment.

◈ Equipment Support
Provide:
• Machine type
• Model number
• Fault code
• Recent changes

◈ Facility Support
BAMSystems™ can assist with:
• Automation
• Controls
• Integration
• Machine intelligence

Human Support:
Justin Ball
(239) 672-5938

Email:
BAMToolzsupport@gmail.com`);

    setQuestion("");
  }


  return (
    <main style={main}>

      <section style={panel}>

        <p style={topLine}>
          BAM™ • BALL ADVANCED MANAGEMENT
        </p>

        <h1 style={logo}>
          BAM Support Center™
        </h1>

        <h2 style={blue}>
          AI Help • Human Support • Facility Solutions
        </h2>


        <section style={box}>

          <h2 style={blue}>
            ◈ BAM Support AI™
          </h2>

          <p>
            Ask for help with BAM Scan™,
            BAM Assist™, BAM Hub™,
            accounts, or setup.
          </p>


          <textarea
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            placeholder="Type your support question..."
            style={textArea}
          />


          <button
            onClick={askSupport}
            style={button}
          >
            Ask BAM Support AI™
          </button>


          <pre style={answerBox}>
            {answer}
          </pre>

        </section>



        <section style={box}>

          <h2 style={blue}>
            ◈ Human Support
          </h2>


          <p>
            Founder:
            <br />
            Justin Ball
          </p>


          <p>
            Phone:
            <br />

            <a
              href="tel:2396725938"
              style={link}
            >
              (239) 672-5938
            </a>

          </p>


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
            Artificial intelligence,
            research, prototypes,
            and future technology.
          </p>

        </section>



        <section style={box}>

          <h2 style={blue}>
            ◈ BAMSystems™
          </h2>

          <p>
            Automation • Controls • Sensors
            • Industrial Integration
          </p>

        </section>



        <a href="/" style={button}>
          Back Home
        </a>


      </section>

    </main>
  );
}



const main = {
  minHeight:"100vh",
  background:
    "radial-gradient(circle at top,#082b52,#020711,#000)",
  color:"#e8f4ff",
  padding:"22px",
  fontFamily:"Arial",
};



const panel = {
  border:"2px solid #0077ff",
  borderRadius:"32px",
  padding:"26px",
  background:
    "linear-gradient(180deg,#06192d,#02050a)",
  boxShadow:
    "0 0 40px rgba(0,119,255,.4)",
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
  background:
    "rgba(0,119,255,.08)",
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
  background:
    "linear-gradient(90deg,#0077ff,#5bb6ff)",
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
  border:
    "1px solid rgba(0,119,255,.7)",
};



const link = {
  color:"#8fc7ff",
  fontWeight:"900",
  textDecoration:"none",
};