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

      setAnswer(data.result || data.error || "No response from BAMToolz™ AI Support.");
    } catch (error) {
      setAnswer("BAMToolz™ AI Support connection failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <a href="/" className="inline-block rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-cyan-200">
          ← BAMToolz™ Home
        </a>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BALL ADVANCED MANAGEMENT™
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            BAMToolz™ AI Support
          </h1>

          <p className="mt-4 max-w-3xl text-slate-300">
            Industrial support for BAM Scan™, BAM Hub™, BAM Safety™, BAM Systems™,
            equipment workflows, facility intelligence, and support requests.
          </p>

          <div className="mt-6 rounded-xl border border-cyan-400/40 bg-slate-900 p-5">
            <p className="font-bold text-cyan-300">Support Contact</p>
            <p className="mt-2 text-slate-300">
              Email:{" "}
              <a
                href="mailto:BAMToolzsupport@gmail.com"
                className="font-bold text-cyan-300 underline"
              >
                BAMToolzsupport@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Founder: Justin Ball | Company: Ball Advanced Management™
            </p>
          </div>

          <textarea
            className="mt-8 min-h-40 w-full rounded-xl border border-cyan-400 bg-white p-4 text-black outline-none"
            placeholder="Ask BAMToolz™ AI Support about BAM Scan™, equipment workflows, integrations, support, or partnerships..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={askAI}
            disabled={loading || !message.trim()}
            className="mt-4 rounded-xl bg-cyan-500 px-6 py-3 font-black text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
          >
            {loading ? "Thinking..." : "Ask BAMToolz™ AI Support"}
          </button>

          {answer && (
            <div className="mt-8 whitespace-pre-wrap rounded-xl border border-cyan-400 bg-slate-900 p-5 text-slate-100">
              {answer}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}