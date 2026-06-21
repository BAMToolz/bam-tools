export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-5 py-6">
      <section className="mx-auto max-w-6xl rounded-3xl border-4 border-white bg-gradient-to-br from-cyan-500 via-blue-800 to-slate-950 p-6 md:p-10">
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-block rounded-xl bg-white px-5 py-1 text-2xl font-black text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-4xl font-black md:text-6xl">
              BAMToolz™
            </h1>

            <p className="mt-2 font-bold text-blue-100">
              Ball Advanced Management™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a className="nav-btn" href="/scanner">BAM Scan™</a>
            <a className="nav-btn" href="/hub">Hub™</a>
            <a className="nav-btn" href="/metrics">Metrics™</a>
            <a className="nav-btn" href="/support">Support™</a>
          </nav>
        </header>

        <div className="mt-10 rounded-3xl border border-cyan-300 bg-slate-950/90 p-6 md:p-10">
          <p className="font-black text-cyan-300">
            INDUSTRIAL SAFETY & MAINTENANCE INTELLIGENCE™
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Connecting machines, technicians, facilities and AI.
          </h2>

          <p className="mt-6 max-w-4xl text-gray-200">
            BAMToolz™ is an industrial intelligence platform designed for equipment data,
            maintenance history, safety, manuals, parts, controls, technician knowledge,
            and advanced facility metrics.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard title="BAM Scan™" text="AI scanning tools for equipment, parts, manuals, and troubleshooting." />
          <InfoCard title="BAM Hub™" text="Facility knowledge, repair notes, machine data, and maintenance history." />
          <InfoCard title="BAM Metrics™" text="Downtime analytics, machine efficiency, failure trends, and ROI reporting." />
          <InfoCard title="BAM Safety™" text="Safety information, inspections, hazards, and procedures." />
          <InfoCard title="BAM Systems™" text="Controls, robotics, automation, PLCs, and industrial integrations." />
          <InfoCard title="Knowledge Preservation™" text="Saving technician experience before it disappears." />
        </div>

        <footer className="mt-10 border-t border-cyan-300/40 pt-8 text-center">
          <h3 className="text-2xl font-black">BAMToolz™</h3>
          <p className="mt-2 text-blue-100">
            © 2026 Ball Advanced Management™
          </p>
        </footer>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-cyan-300/40 bg-slate-950 p-5">
      <h3 className="text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-2 text-gray-300">{text}</p>
    </article>
  );
}