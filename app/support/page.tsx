"use client";

import { useState } from "react";

export default function SupportPage() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    try {
      setLoading(true);
      setAnswer("");

      const res = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setAnswer(data.result || data.error || "No response from BAM Support AI.");
    } catch (error) {
      setAnswer("BAM Support AI connection failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#04162b] text-white p-6">
      <section className="mx-auto max-w-4xl">
        <a href="/" className="font-bold text-cyan-300">
          ← BAMToolz™ Home
        </a>

        <h1 className="mt-8 text-5xl font-black">BAM Support AI™</h1>

        <p className="mt-4 text-gray-300">
          Industrial support powered by Ball Advanced Management™.
        </p>

        <textarea
          className="mt-8 min-h-40 w-full rounded-xl p-4 text-black"
          placeholder="Ask BAM Support AI™..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={askAI}
          disabled={loading || !message.trim()}
          className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-black text-black disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask BAM AI™"}
        </button>

        {answer && (
          <div className="mt-8 whitespace-pre-wrap rounded-xl border border-cyan-400 bg-slate-900 p-5">
            {answer}
          </div>
        )}
      </section>
    </main>
  );
}