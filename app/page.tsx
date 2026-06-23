export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAMToolz™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAMToolz™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="#platform" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Platform™
            </a>
            <a href="/scanner" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">
              BAM Scan™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Hub™
            </a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Work Orders™
            </a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Metrics™
            </a>
            <a href="/login" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Access™
            </a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Machines™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            BAMTOOLZ™ INDUSTRIAL AI TOOLKIT
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Identify machines. Assist technicians. Preserve machine memory.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAMToolz™ by Ball AI Metrics™ connects machine identification,
            BAM AI™ technician assistance, secure BAM Access™, protected
            BAM Hub™ machine memory, work orders, metrics, automation, and
            industrial support tools into one connected workflow.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Launch BAM Scan™
            </a>
          </div>
        </section>

        <section id="platform" className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="BAMToolz™"
            text="The technician software toolkit for machine identification, repair workflows, documentation, parts research, and knowledge capture."
          />

          <Card
            title="BAM Scan™"
            href="/scanner"
            text="The machine identification entry point. Start with a nameplate, tag, label, or equipment image, then connect BAM AI™."
          />

          <Card
            title="BAM AI™"
            text="Technician assistance connected to scanned machine identity for verification, first checks, profile building, notes, and next-step guidance."
          />

          <Card
            title="BAM Access™"
            href="/login"
            text="Secure access layer for technicians, engineers, admins, RFID badge concepts, user roles, and protected facility tools."
          />

          <Card
            title="BAM Hub™"
            href="/hub"
            text="Protected facility intelligence core for machine profiles, scan records, manuals, repair history, technician notes, and machine memory."
          />

          <Card
            title="BAM Work Orders™"
            href="/workorders"
            text="Protected maintenance workflow for machine issues, technician assignments, priority levels, repair notes, and history capture."
          />

          <Card
            title="BAM Metrics™"
            href="/metrics"
            text="Industrial metrics for downtime, recurring failures, reliability, parts usage, saved scans, work orders, and improvement tracking."
          />

          <Card
            title="BAM Machines™"
            href="/machines"
            text="Industrial machine builds including take-ups, payoffs, custom equipment, controls-ready systems, and automation-ready production support."
          />

          <Card
            title="BAM Automation™"
            href="/automation"
            text="Automation concepts for PLCs, HMIs, robotics, sensors, controls, process upgrades, and facility-wide industrial integration."
          />

          <Card
            title="BAM Safety™"
            text="Safety intelligence built around LOTO mindset, PPE awareness, hazard recognition, procedure support, and safer technician decisions."
          />

          <Card
            title="BAMLabs™"
            text="AI research, scanner prototypes, rugged hardware concepts, RFID access ideas, and future industrial technology development."
          />
        </section>

        <section id="roadmap" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAMToolz™ Workflow
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAMToolz™ starts with machine identification. BAM Scan™ identifies
            the asset, BAM AI™ assists the technician, BAM Access™ protects the
            workflow, BAM Hub™ stores machine memory, BAM Work Orders™ organize
            maintenance action, and BAM Metrics™ turns activity into measurable
            facility intelligence.
          </p>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            Current build path: polish BAM Scan™ as the primary technician tool,
            save clean machine identity into BAM Hub™, protect facility records
            behind BAM Access™, and connect work orders and metrics into the
            larger BAMToolz™ platform.
          </p>
        </section>

        <section id="support" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAMToolz™ Support
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            For BAMToolz™ support, facility demos, BAM Scan™ questions, machine
            identification workflows, secure access, work orders, metrics,
            machine builds, automation concepts, or partnerships, contact
            BAMToolz™.
          </p>

          <p className="mt-5 text-lg">
            Email:{" "}
            <a href="mailto:BAMToolzsupport@gmail.com" className="font-black text-cyan-300 underline">
              BAMToolzsupport@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/scanner" className="hover:text-white">BAM Scan</a>
            <a href="/workorders" className="hover:text-white">Work Orders</a>
            <a href="/metrics" className="hover:text-white">Metrics</a>
            <a href="/login" className="hover:text-white">Access</a>
            <a href="mailto:BAMToolzsupport@gmail.com" className="hover:text-white">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Card({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href?: string;
}) {
  const heading = href ? (
    <a href={href} className="text-xl font-black text-cyan-300 hover:text-white">
      {title}
    </a>
  ) : (
    <h3 className="text-xl font-black text-cyan-300">{title}</h3>
  );

  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      {heading}
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}