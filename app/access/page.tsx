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
            <a href="/hub" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">BAM Hub™</a>
            <a href="/workorders" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Work Orders™</a>
            <a href="/metrics" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Metrics™</a>
            <a href="/machines" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Machines™</a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200 shadow-lg">Support™</a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            SECURE ACCOUNT & PERMISSION LAYER™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Protect access to BAM Hub™ machine memory.
          </h2>

          <p className="mt-6 max-w-6xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Access™ is the protected gateway for users, providers,
            businesses, technicians, admins, and facility accounts across the
            BAM™ ecosystem. It is designed to manage sign-in, roles,
            permissions, provider workflows, and access to BAM Hub™ machine
            memory, BAMToolz™, Work Orders™, and BAM Metrics™.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-cyan-300/40 bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Sign in
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Prototype access screen for future authenticated accounts,
            protected facility data, provider workflows, and role-based
            permissions.
          </p>

          <div className="mt-8 grid gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white placeholder:text-slate-400 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-cyan-400 bg-slate-900 p-4 text-white placeholder:text-slate-400 outline-none"
            />

            <button className="rounded-xl bg-cyan-500 px-8 py-4 font-black text-slate-950 hover:bg-cyan-400">
              Sign In™
            </button>

            <a href="/support" className="text-center text-sm font-bold text-cyan-300 underline">
              Need access? Contact BAM Support™
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AccessCard title="User Account™" text="BAM Scan™ users, repair questions, provider requests, and guided assistance." />
          <AccessCard title="Provider Account™" text="Verified technicians, repair professionals, service companies, and protected service workflows." />
          <AccessCard title="Business Account™" text="BAMToolz™, BAM Hub™ machine memory, Work Orders™, facility data, and BAM Metrics™." />
          <AccessCard title="Admin Account™" text="Users, providers, businesses, permissions, facility records, and protected data controls." />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            What BAM Access™ Protects
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <AccessCard title="Machine Memory™" text="Equipment profiles, scans, manuals, notes, parts, serials, and repair history." />
            <AccessCard title="Facility Workflows™" text="Work orders, technician activity, maintenance status, and operational records." />
            <AccessCard title="Provider Network™" text="Future verified repair providers, service requests, account roles, and customer workflows." />
            <AccessCard title="Business Intelligence™" text="BAM Metrics™, downtime insights, repair trends, and protected facility reporting." />
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Access™ | BAMToolz™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function AccessCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-cyan-300/30 bg-slate-950/95 p-6 shadow-xl">
      <h3 className="text-2xl font-black text-cyan-300">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}