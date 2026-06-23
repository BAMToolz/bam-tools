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
              Ball AI Metrics™
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
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg hover:bg-slate-900">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            AI SCANNING FOR PEOPLE AND INDUSTRY
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Scan anything. Assist people. Power industrial intelligence.
          </h2>

          <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ connects everyday visual identification with professional
            industrial intelligence. BAM Scan™ helps users identify products,
            parts, problems, and next steps. BAMToolz™ supports technicians,
            machines, maintenance workflows, and facility intelligence.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/scan"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Launch BAM Scan™
            </a>

            <a
              href="/toolz/scan"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Open BAMToolz™ Scan
            </a>

            <a
              href="/hub"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              View BAM Hub™
            </a>
          </div>
        </section>

        <section id="platform" className="mt-8 grid gap-5 md:grid-cols-4">
          <Card
            title="BAM Scan™"
            href="/scan"
            text="Take a picture to identify products, parts, labels, problems, repair questions, and possible next steps with BAM Assist™."
          />

          <Card
            title="BAMToolz™ Scan"
            href="/toolz/scan"
            text="Technicians can capture machine images, nameplates, tags, fault screens, and components for equipment intelligence."
          />

          <Card
            title="BAM Hub™"
            href="/hub"
            text="Store machine profiles, repair history, technician notes, manuals, parts data, and equipment memory."
          />

          <Card
            title="BAM Metrics™"
            href="/metrics"
            text="Track downtime, recurring failures, saved scans, work orders, reliability patterns, and improvement opportunities."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            The BAM™ Ecosystem
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step number="01" title="Capture" text="Upload or take a picture of a product, issue, part, or machine." />
            <Step number="02" title="Identify" text="Use BAM Assist™ to understand what the image shows." />
            <Step number="03" title="Assist" text="Research possible answers, parts, repairs, manuals, or next steps." />
            <Step number="04" title="Scale" text="BAMToolz™ turns industrial scans into machine memory, work orders, and metrics." />
          </div>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Built for the future of repair and maintenance.
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Scan™ is the universal scan and assist layer. BAMToolz™ is the
            industrial platform layer for machine identity, BAM Hub™, work orders,
            metrics, and facility intelligence.
          </p>
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Support
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            For BAM Scan™, BAMToolz™, machine identification, facility demos,
            support, partnerships, or platform questions, contact BAM™.
          </p>

          <p className="mt-5 text-lg">
            Email:{" "}
            <a href="mailto:BAMToolzsupport@gmail.com" className="font-black text-cyan-300 underline">
              BAMToolzsupport@gmail.com
            </a>
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/scan" className="hover:text-white">BAM Scan™</a>
            <a href="/toolz/scan" className="hover:text-white">BAMToolz™</a>
            <a href="/hub" className="hover:text-white">BAM Hub™</a>
            <a href="/workorders" className="hover:text-white">Work Orders</a>
            <a href="/metrics" className="hover:text-white">Metrics</a>
            <a href="/access" className="hover:text-white">Access™</a>
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
    <div className="rounded-xl border border-cyan-400/30 bg-slate-950/95 p-6 shadow-xl">
      {heading}
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-cyan-400/30 bg-slate-900 p-5">
      <p className="text-sm font-black text-cyan-400">{number}</p>
      <h3 className="mt-2 text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}