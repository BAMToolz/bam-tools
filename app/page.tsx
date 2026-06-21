export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAMToolz™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball Advanced Management™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="#platform" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Platform™
            </a>
            <a href="#machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machines™
            </a>
            <a href="#automation" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Automation™
            </a>
            <a href="#safety" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Safety™
            </a>
            <a href="#hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Hub™
            </a>
            <a href="#roadmap" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Roadmap™
            </a>
            <a href="#support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            INDUSTRIAL SAFETY, MAINTENANCE & AUTOMATION INTELLIGENCE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Connecting machines, technicians, facilities and AI.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAMToolz™ is an industrial intelligence platform by Ball Advanced
            Management™ designed for equipment data, maintenance history,
            safety, manuals, parts, controls, machine building, plant automation,
            and technician knowledge.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Launch BAM Scan™
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAMToolz™ AI Support
            </a>

            <a
              href="mailto:BAMToolzsupport@gmail.com"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Contact Support
            </a>
          </div>
        </section>

        <section id="platform" className="mt-8 grid gap-5 md:grid-cols-3">
          <div id="hub" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Hub™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Facility knowledge, equipment data, and maintenance intelligence.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Scan™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              AI scanning tools for machines, parts, labels, logs, and troubleshooting.
            </p>
          </div>

          <div id="safety" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Safety™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Safety information, inspections, hazards, procedures, and safety-first workflows.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Systems™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Controls, robotics, automation, and integration support.
            </p>
          </div>

          <div id="machines" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Machines™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Custom machine building, equipment concepts, fixtures, controls-ready systems,
              technician-built tools, and production support equipment.
            </p>
          </div>

          <div id="automation" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Automation™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Complete plant automation, PLC/HMI support, robotics, system integration,
              process upgrades, and facility-wide control solutions.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAMToolz™ Platform</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Tools built for technicians, industrial maintenance teams, and facility leaders.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">Knowledge Preservation™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Saving experience before it disappears from the facility floor.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">Industrial Growth™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Built to expand from equipment intelligence into machine builds,
              automation projects, plant modernization, and industrial partnerships.
            </p>
          </div>
        </section>

        <section id="roadmap" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">BAMToolz™ Roadmap</h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAMToolz™ is being developed as a scalable industrial platform for
            maintenance intelligence, AI equipment scanning, safety workflows,
            repair history, parts lookup, manuals, controls, machine building,
            complete plant automation, and future facility integrations.
          </p>
        </section>

        <section id="support" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAMToolz™ Support
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            For support, facility demos, machine building, complete plant automation,
            manufacturer integrations, partnerships, equipment workflows, BAM Scan™
            questions, or AI Support help, contact BAMToolz™.
          </p>

          <p className="mt-5 text-lg">
            Email:{" "}
            <a
              href="mailto:BAMToolzsupport@gmail.com"
              className="font-black text-cyan-300 underline"
            >
              BAMToolzsupport@gmail.com
            </a>
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:BAMToolzsupport@gmail.com?subject=BAMToolz%20Support%20Request"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Email Support
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAMToolz™ AI Support
            </a>

            <a
              href="/scanner"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAM Scan™
            </a>
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAMToolz™ | Ball Advanced Management™</p>

          <div className="mt-4 flex justify-center gap-6">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="mailto:BAMToolzsupport@gmail.com" className="hover:text-white">
              Contact
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}