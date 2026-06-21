export default function MetricsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-5 py-6">
      <section className="mx-auto max-w-5xl rounded-3xl border border-cyan-300/40 bg-slate-900 p-6">
        <a href="/" className="text-cyan-300 font-bold">← Back to BAMToolz™</a>

        <h1 className="mt-6 text-4xl font-black">BAM Metrics™</h1>

        <p className="mt-4 text-gray-300">
          BAM Metrics™ will track downtime, machine failures, repair history,
          technician notes, priority, and facility health scores.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Downtime Risk" value="Coming Soon" />
          <Card title="Priority Score" value="Coming Soon" />
          <Card title="Facility Health" value="Coming Soon" />
        </div>
      </section>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-cyan-300/30 bg-slate-950 p-5">
      <h2 className="font-black text-cyan-300">{title}</h2>
      <p className="mt-3 text-2xl font-black">{value}</p>
    </div>
  );
}