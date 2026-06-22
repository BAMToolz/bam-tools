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
            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Scan™
            </a>
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Hub™
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
            AI-POWERED INDUSTRIAL METRICS & MACHINE INTELLIGENCE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Turning machine knowledge into measurable intelligence.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ by Ball AI Metrics™ connects equipment scanning, technician
            assistance, secure facility access, machine history, automation, and
            industrial metrics into one AI-driven ecosystem.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scanner"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Launch BAM Scan™
            </a>

            <a
              href="/metrics"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              View BAM Metrics™
            </a>

            <a
              href="/login"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAM Access™
            </a>

            <a
              href="/hub"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              View BAM Hub™
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAM Support™
            </a>
          </div>
        </section>

        <section id="platform" className="mt-8 grid gap-5 md:grid-cols-3">
          <Card
            title="BAM Scan™"
            href="/scanner"
            text="AI equipment scanning for machine tags, components, panels, logs, labels, and field documentation."
          />

          <Card
            title="BAM AI™"
            text="Technician intelligence connected to scanned equipment data for troubleshooting, safety checks, parts, documentation, and next-step guidance."
          />

          <Card
            title="BAM Hub™"
            href="/hub"
            text="The secure facility intelligence core for machine profiles, manuals, photos, repairs, technician notes, and machine history."
          />

          <Card
            title="BAM Metrics™"
            href="/metrics"
            text="Industrial metrics for downtime, repair history, recurring failures, reliability, parts usage, safety trends, saved scans, and improvement tracking."
          />

          <Card
            title="BAM Access™"
            href="/login"
            text="Secure facility access layer designed for technician accounts, RFID badge login, company permissions, user roles, and protected BAM Hub™ machine data."
          />

          <Card
            title="BAMToolz™"
            text="The technician software toolkit inside the BAM™ ecosystem for repair workflows, documentation, manuals, parts lookup, and knowledge capture."
          />

          <Card
            title="BAM Safety™"
            text="Safety intelligence built around LOTO mindset, PPE awareness, hazard recognition, procedure support, and safer technician decisions."
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
            title="BAMLabs™"
            text="AI research, prototypes, scanner concepts, hardware development, RFID access concepts, and future industrial technology."
          />
        </section>

        <section id="roadmap" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Roadmap
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ is being developed as a scalable industrial AI ecosystem where
            BAM Scan™ captures, BAM AI™ supports, BAM Access™ protects,
            BAM Hub™ remembers, BAM Metrics™ measures, BAM Machines™ builds,
            and BAM Automation™ connects the facility.
          </p>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            Current build path: BAM Scan™ captures equipment data, BAM Hub™
            stores machine memory, and BAM Metrics™ converts saved scans into
            measurable facility intelligence.
          </p>
        </section>

        <section id="support" className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Support
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            For support, facility demos, machine builds, automation concepts,
            partnerships, equipment workflows, BAM Scan™ questions, access
            workflows, or product support, contact BAM™.
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
              href="/metrics"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAM Metrics™
            </a>

            <a
              href="/login"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              BAM Access™
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open Support™
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
          <p>© 2026 BAM™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/metrics" className="hover:text-white">
              Metrics
            </a>
            <a href="/login" className="hover:text-white">
              Access
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