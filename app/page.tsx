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
              BAM™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="#platform" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Platform™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machines™
            </a>
            <a href="/automation" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Automation™
            </a>
            <a href="#safety" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Safety™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
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
            AI-POWERED INDUSTRIAL METRICS & FACTORY INTELLIGENCE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Turning factory knowledge into measurable intelligence.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ by Ball AI Metrics™ is being built to connect machines,
            technicians, automation, safety, and data into one industrial AI
            ecosystem. BAM™ captures equipment knowledge, preserves machine
            history, assists technicians, and turns factory information into
            measurable improvement.
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
              BAM AI Support™
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
          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM AI™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The intelligence engine designed to analyze equipment information,
              support technicians, detect patterns, and connect human knowledge
              with machine data.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Metrics™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Factory performance intelligence for downtime, repair time,
              failure history, reliability, parts usage, safety trends, and
              measurable improvement.
            </p>
          </div>

          <div id="hub" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <a href="/hub" className="text-xl font-black text-cyan-300 hover:text-white">
              BAM Hub™
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The facility knowledge core that stores machine profiles, manuals,
              photos, repairs, technician notes, parts, controls information,
              and machine history.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <a href="/scanner" className="text-xl font-black text-cyan-300 hover:text-white">
              BAM Scan™
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The future physical AI scanner device for equipment identification,
              nameplates, components, QR/barcode data, photos, and field
              documentation.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAMToolz™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The technician software toolkit inside the BAM ecosystem for
              troubleshooting, repair workflows, manuals, parts lookup, wiring
              support, and knowledge capture.
            </p>
          </div>

          <div id="safety" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Safety™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Safety intelligence built into the system with hazard awareness,
              LOTO mindset, PPE reminders, procedure support, and safer
              technician decisions.
            </p>
          </div>

          <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <h3 className="text-xl font-black text-cyan-300">BAM Systems™</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Controls, robotics, automation, machine integration, connected
              equipment support, and future industrial systems development.
            </p>
          </div>

          <div id="machines" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <a href="/machines" className="text-xl font-black text-cyan-300 hover:text-white">
              BAM Machines™
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Machine manufacturing for payoffs, take-ups, custom equipment,
              fixtures, controls-ready systems, smart machines, and AI-ready
              production equipment.
            </p>
          </div>

          <div id="automation" className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
            <a href="/automation" className="text-xl font-black text-cyan-300 hover:text-white">
              BAM Automation™
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Complete plant automation including PLC, HMI, robotics, sensors,
              data collection, process upgrades, controls, and facility-wide
              industrial integration.
            </p>
          </div>
        </section>

        <section id="roadmap" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Roadmap
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ is being developed as a scalable industrial AI ecosystem where
            BAM Scan™ captures, BAM Hub™ remembers, BAM AI™ understands,
            BAMToolz™ guides, BAM Metrics™ measures, BAM Machines™ builds, and
            BAM Automation™ connects the factory.
          </p>
        </section>

        <section id="support" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Support
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            For support, facility demos, machine building, complete plant
            automation, manufacturer integrations, partnerships, equipment
            workflows, BAM Scan™ questions, or AI Support help, contact BAM™.
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
              href="mailto:BAMToolzsupport@gmail.com?subject=BAM%20Support%20Request"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Email Support
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAM AI Support™
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
          <p>© 2026 BAM™ | Ball AI Metrics™</p>

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