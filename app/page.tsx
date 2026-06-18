"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("Ready");

  async function scan() {
    setText("Button clicked...");

    const res = await fetch("/api/scan", {
      method: "POST",
      body: new FormData(),
    });

    const data = await res.json();

    setText(JSON.stringify(data));
  }

  return (
    <main style={{ padding: 30 }}>
      <h1>BAMToolz 🔧</h1>

      <button onClick={scan}>
        TEST SCANNER
      </button>

      <h2>{text}</h2>
    </main>
  );
}
