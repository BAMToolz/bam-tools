export default function Home() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Ball AI Metrics™ | Connected Intelligence Platform™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/scan" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg hover:bg-cyan-400">
              BAM Scan™
            </a>

            <a href="/toolz/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              BAMToolz™
            </a>

            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Hub™
            </a>

            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Work Orders™
            </a>

            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Metrics™
            </a>

            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Access™
            </a>

            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Machines™
            </a>

            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            CONNECTED INTELLIGENCE PLATFORM™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Transforming real-world information into intelligent action.
          </h2>

          <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ connects people, technology, and industry through intelligent
            scanning, AI assistance, knowledge capture, and data-driven insights.
            From everyday questions to advanced manufacturing, Ball AI Metrics™
            turns information into action.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/scan" className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400">
              Launch BAM Scan™
            </a>
          </div>
        </section>

        <section id="platform" className="mt-8 grid gap-5 md:grid-cols-5">
          <Card
            title="BAM Scan™"
            href="/scan"
            text="Universal AI scanning for products, parts, labels, repair questions, and everyday problem solving."
          />

          <Card
            title="BAMToolz™"
            href="/toolz/scan"
            text="Industrial tools for technicians, equipment identity, machine records, and maintenance workflows."
          />

          <Card
            title="BAM Hub™"
            href="/hub"
            text="Machine memory that preserves equipment profiles, repairs, knowledge, documents, and history."
          />

          <Card
            title="BAM Metrics™"
            href="/metrics"
            text="Facility intelligence built from scans, work orders, reliability data, and machine history."
          />

          <Card
            title="BAM Machines™"
            href="/machines"
            text="Industrial builds, automation systems, rugged hardware, and future connected technician technology."
          />
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/scan" className="hover:text-white">BAM Scan™</a>
            <a href="/toolz/scan" className="hover:text-white">BAMToolz™</a>
            <a href="/hub" className="hover:text-white">BAM Hub™</a>
            <a href="/machines" className="hover:text-white">BAM Machines™</a>
            <a href="/metrics" className="hover:text-white">Metrics™</a>
            <a href="/access" className="hover:text-white">Access™</a>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Card({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <a href={href} className="rounded-xl border border-cyan-400/30 bg-slate-950/95 p-6 shadow-xl hover:bg-slate-900">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </a>
  );
}