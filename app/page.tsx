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
              Ball AI Metrics™ | The future is now.
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
            BALL AI METRICS™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            The future is now. AI powered knowledge for people, machines, and industry.
          </h2>

          <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ connects artificial intelligence with real world problems.
            BAM Scan™ helps identify products, parts, issues, and questions.
            BAMToolz™ expands into industrial maintenance, machine intelligence,
            equipment memory, and facility performance.
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
              Open BAMToolz™
            </a>

            <a
              href="/metrics"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              View BAM Metrics™
            </a>
          </div>
        </section>        <section id="platform" className="mt-8 grid gap-5 md:grid-cols-4">
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
        </section>


        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            The BAM™ Intelligence System
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <Step
              number="01"
              title="Scan"
              text="Capture products, issues, parts, machines, or equipment information."
            />

            <Step
              number="02"
              title="Assist"
              text="BAM Assist™ researches answers, information, repairs, and next steps."
            />

            <Step
              number="03"
              title="Remember"
              text="BAM Hub™ preserves machine knowledge and technician experience."
            />

            <Step
              number="04"
              title="Improve"
              text="BAM Metrics™ turns history into intelligence and better decisions."
            />
          </div>
        </section>


        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Built under Ball AI Metrics™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM™ brings together scanning, assistance, knowledge capture,
            industrial tools, and intelligence systems. From everyday problems
            to advanced manufacturing, the goal is simple: capture information,
            preserve knowledge, and make better decisions.
          </p>
        </section>


        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            BAM™ Support
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            For BAM Scan™, BAMToolz™, facility intelligence, support,
            partnerships, or platform questions, contact Ball AI Metrics™.
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
        </section>


        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          <p>© 2026 BAM™ | BAMToolz™ | Ball AI Metrics™</p>

          <div className="mt-4 flex flex-wrap justify-center gap-6">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/scan">BAM Scan™</a>
            <a href="/toolz/scan">BAMToolz™</a>
            <a href="/hub">BAM Hub™</a>
            <a href="/metrics">Metrics™</a>
            <a href="/access">Access™</a>
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
  href: string;
}) {
  return (
    <a
      href={href}
      className="rounded-xl border border-cyan-400/30 bg-slate-950/95 p-6 shadow-xl hover:bg-slate-900"
    >
      <h3 className="text-xl font-black text-cyan-300">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {text}
      </p>
    </a>
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
      <p className="text-sm font-black text-cyan-400">
        {number}
      </p>

      <h3 className="mt-2 text-xl font-black text-cyan-300">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        {text}
      </p>
    </div>
  );
}