export default function AccessPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">

        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              BAM Access™
            </h1>

            <p className="mt-2 text-sm font-medium text-cyan-50">
              Protected Facility Intelligence Gateway™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              Home™
            </a>

            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">
              BAM Scan™
            </a>

            <a href="/hub" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">
              BAM Hub™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            SECURE ACCESS LAYER
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Protecting the knowledge that keeps facilities running.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Access™ controls entry into protected machine intelligence,
            maintenance history, AI assistance, work orders, documents,
            and facility data stored inside BAM Hub™.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">

          <AccessCard
            title="Technician Access™"
            text="Scan equipment, view repair history, create notes, and receive BAM AI™ troubleshooting support."
          />

          <AccessCard
            title="Supervisor Access™"
            text="Manage teams, approve workflows, review downtime trends, and monitor facility performance."
          />

          <AccessCard
            title="Admin Access™"
            text="Control users, permissions, company assets, machines, and protected facility information."
          />

        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/40 bg-slate-950/95 p-8 shadow-2xl">

          <h2 className="text-3xl font-black text-cyan-300">
            Future Protected Login™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300">
            Account authentication, company profiles, encrypted machine
            records, technician roles, and customer dashboards will connect
            through this secure access layer.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-black text-slate-950 opacity-70">
            Login Coming Soon™
          </button>

        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Access™ | BAMToolz™ | Ball AI Metrics™
        </footer>

      </div>
    </main>
  );
}

function AccessCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-300/30 bg-slate-950/95 p-6 shadow-xl">

      <h3 className="text-2xl font-black text-cyan-300">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {text}
      </p>

    </div>
  );
}