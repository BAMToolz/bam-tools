export default function WorkOrdersPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Work Orders™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Protected maintenance workflow | Ball AI Metrics™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-full bg-white px-4 py-2 text-sm font-bold text-cyan-700">
              Home
            </a>
            <a href="/scan" className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
              BAM Scan™
            </a>
            <a href="/hub" className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-800">
              Hub
            </a>
            <a href="/access" className="rounded-full bg-cyan-950 px-4 py-2 text-sm font-black text-cyan-200">
              Login
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-[2rem] border border-white/20 bg-slate-950/95 p-8 shadow-2xl sm:p-12">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            ACCESS REQUIRED™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Work Orders™ are protected facility maintenance records.
          </h2>

          <p className="mt-6 max-w-4xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Work Orders™ is designed for authorized technicians, facility
            teams, and maintenance leaders to manage machine issues, repair
            activity, assignments, notes, parts, and work history.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/access"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center font-black text-slate-950 hover:bg-cyan-400"
            >
              Login to Continue
            </a>

            <a
              href="/support"
              className="rounded-xl border border-cyan-400 px-6 py-3 text-center font-black text-cyan-200 hover:bg-cyan-950"
            >
              Request Access
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard
            title="Create"
            text="Turn machine issues and facility requests into organized maintenance work."
          />

          <InfoCard
            title="Track"
            text="Follow work order status, priority, assignments, and repair progress."
          />

          <InfoCard
            title="Remember"
            text="Preserve repair history and technician knowledge inside the BAM ecosystem."
          />
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Work Orders™ | BAM Hub™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/20 bg-white/15 p-6 shadow-xl">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-cyan-50">{text}</p>
    </div>
  );
}