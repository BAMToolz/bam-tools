"use client";

import { useState } from "react";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setAnswer(data.result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#04162b] text-white p-6">

      <section className="max-w-4xl mx-auto">

        <a href="/" className="text-cyan-300 font-bold">
          ← BAMToolz™ Home
        </a>

        <h1 className="text-5xl font-black mt-8">
          BAM Support AI™
        </h1>

        <p className="text-gray-300 mt-4">
          Industrial support powered by Ball Advanced Management™.
        </p>


        <textarea
          className="mt-8 w-full min-h-40 rounded-xl p-4 text-black"
          placeholder="Ask BAM Support AI™..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />


        <button
          onClick={askAI}
          className="mt-4 bg-cyan-500 text-black font-black px-6 py-3 rounded-xl"
        >
          {loading ? "Thinking..." : "Ask BAM AI™"}
        </button>


        {answer && (
          <div className="mt-8 rounded-xl bg-slate-900 border border-cyan-400 p-5 whitespace-pre-wrap">
            {answer}
          </div>
        )}

      </section>

    </main>
  );
}