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
              Protected Intelligence Gateway™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Home™</a>
            <a href="/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Scan™</a>
            <a href="/toolz/scan" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAMToolz™</a>
            <a href="/hub" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">BAM Hub™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            SECURE ACCOUNT LAYER
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            One access layer for users, providers, businesses, and admins.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Access™ will connect BAM Scan™ users, repair providers,
            BAMToolz™ business accounts, protected machine intelligence,
            service workflows, facility data, and customer dashboards.
          </p>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AccessCard
            title="User Account™"
            text="Everyday users can access BAM Scan™, identify products or issues, use BAM Assist™, and prepare the next repair path."
          />

          <AccessCard
            title="Provider Account™"
            text="Repair professionals and service companies can receive requests, review scan details, and connect with users."
          />

          <AccessCard
            title="Business Account™"
            text="Companies can use BAMToolz™ for machine scanning, BAM Hub™, work orders, metrics, and protected facility intelligence."
          />

          <AccessCard
            title="Admin Account™"
            text="Admins can manage users, providers, businesses, permissions, assets, roles, and protected BAM ecosystem data."
          />
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/40 bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Future Protected Login™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300">
            Future authentication will connect BAM Scan™ user accounts, BAM
            Provider Network™ profiles, BAMToolz™ business dashboards, admin
            controls, repair requests, machine records, and protected facility data.
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