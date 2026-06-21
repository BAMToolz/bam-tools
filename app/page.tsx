export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <header className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 text-white font-black text-2xl px-4 py-2 rounded-xl shadow-lg shadow-blue-500/30">
                BAM
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-wide">
                  BAMToolz
                </h1>
                <p className="text-blue-300 text-sm">
                  Ball Advanced Maintenance Tools
                </p>
              </div>
            </div>

            <button className="bg-white text-slate-950 font-bold px-5 py-2 rounded-lg">
              Start Scan
            </button>
          </header>

          <section className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-400 font-bold mb-3">
                THE FUTURE OF MAINTENANCE INTELLIGENCE
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Scan Machines.
                <br />
                Find Answers.
                <br />
                Fix Faster.
              </h2>

              <p className="text-slate-300 text-lg mb-8">
                BAMToolz uses AI to read equipment data, organize manuals,
                identify parts, track repair history, and guide technicians
                through smarter troubleshooting.
              </p>

              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/30">
                  Scan Equipment
                </button>

                <button className="border border-blue-400 text-blue-300 font-bold px-6 py-3 rounded-xl">
                  View BAM Hub
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-blue-500/40 rounded-3xl p-6 shadow-2xl shadow-blue-500/20">
              <div className="border border-blue-400/30 rounded-2xl p-5 bg-slate-950">
                <p className="text-blue-300 font-bold mb-4">
                  BAM AI CORE
                </p>

                <div className="bg-slate-900 rounded-xl p-4 mb-4">
                  <p className="text-sm text-slate-400">Detected Equipment</p>
                  <h3 className="text-2xl font-black text-white">
                    15 HP Motor
                  </h3>
                  <p className="text-blue-300 mt-2">
                    Confidence: 98%
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Data Sources</p>
                    <p className="text-3xl font-black text-blue-400">142</p>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">Health Score</p>
                    <p className="text-3xl font-black text-blue-400">72%</p>
                  </div>
                </div>

                <div className="mt-4 bg-blue-500/10 border border-blue-400/30 rounded-xl p-4">
                  <p className="font-bold text-blue-300">Recommended Action</p>
                  <p className="text-slate-300 text-sm mt-2">
                    Inspect bearings, check alignment, lubricate, and monitor vibration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-4 gap-4 mt-16">
            {[
              "Scan",
              "Recognize",
              "Analyze",
              "Repair",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 text-center"
              >
                <p className="text-blue-400 text-3xl font-black mb-2">
                  {item}
                </p>
                <p className="text-slate-400 text-sm">
                  BAMToolz turns machine data into technician action.
                </p>
              </div>
            ))}
          </section>

          <section className="mt-16 bg-slate-900 border border-blue-500/30 rounded-3xl p-8">
            <h3 className="text-3xl font-black mb-4">
              Built for Real Machines. Real Data. Real Results.
            </h3>

            <p className="text-slate-300 mb-6">
              BAM Hub stores equipment profiles, manuals, parts, repair history,
              technician notes, and AI insights so every repair makes the facility smarter.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-950 rounded-xl p-5">
                <h4 className="font-bold text-blue-300 mb-2">BAM Scan</h4>
                <p className="text-slate-400 text-sm">
                  Capture equipment tags, photos, manuals, and repair details.
                </p>
              </div>

              <div className="bg-slate-950 rounded-xl p-5">
                <h4 className="font-bold text-blue-300 mb-2">BAM Hub</h4>
                <p className="text-slate-400 text-sm">
                  Organize facility knowledge into one searchable AI system.
                </p>
              </div>

              <div className="bg-slate-950 rounded-xl p-5">
                <h4 className="font-bold text-blue-300 mb-2">BAM AI</h4>
                <p className="text-slate-400 text-sm">
                  Suggest fixes, parts, checks, and troubleshooting steps.
                </p>
              </div>
            </div>
          </section>

          <footer className="mt-16 text-center text-slate-500 text-sm">
            © 2026 BAMToolz — Building Smarter. Fixing Faster.
          </footer>
        </div>
      </section>
    </main>
  );
}