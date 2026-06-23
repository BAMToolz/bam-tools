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