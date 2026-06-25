export default function AccessPage() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-5 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-5 rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-5 shadow-2xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex rounded-lg bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
              BAM Access™
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Secure Platform Access™
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              Account access, roles, permissions, and protected BAM™ workspaces.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {[
              ["Home™", "/"],
              ["BAM Scan™", "/scan"],
              ["BAMToolz™", "/toolz/scan"],
              ["BAM Hub™", "/hub"],
              ["Work Orders™", "/workorders"],
              ["Metrics™", "/metrics"],
              ["Machines™", "/machines"],
              ["Support™", "/support"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl border border-cyan-400/40 bg-slate-900 px-4 py-3 text-center text-xs font-black text-cyan-200 shadow-lg hover:bg-slate-800"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-950 p-6 shadow-2xl sm:p-10">
          <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full border border-cyan-300/30" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-wide text-cyan-300">
                SECURE INTELLIGENCE GATEWAY™
              </p>

              <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
                Control who can access
                <br />
                your BAM™ workspace.
              </h2>

              <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
                BAM Access™ protects connected tools, machine intelligence,
                facility records, work orders, analytics, team roles, and
                AI-powered support across the BAM™ ecosystem.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <StatusPill text="Encrypted Workspace" />
                <StatusPill text="Role-Based Access" />
                <StatusPill text="Team Permissions" />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-cyan-300">
                  Workspace Status
                </p>

                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">
                  ● Online
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <AccessStatusRow label="Access Layer" value="Active" />
                <AccessStatusRow label="Machine Records" value="Protected" />
                <AccessStatusRow label="Team Roles" value="Enabled" />
                <AccessStatusRow label="AI Support" value="Secured" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              ACCOUNT ACCESS™
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              Access your BAM™ workspace
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Securely sign in to access your BAM™ workspace, connected tools,
              facility records, machine intelligence, work orders, analytics,
              and protected support.
            </p>

            <div className="mt-8 grid gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-cyan-400/40 bg-slate-900 p-4 text-white placeholder:text-slate-500 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-2xl border border-cyan-400/40 bg-slate-900 p-4 text-white placeholder:text-slate-500 outline-none"
              />

              <button className="rounded-2xl bg-cyan-300 px-8 py-4 font-black text-slate-950 shadow-xl hover:bg-cyan-200">
                Access Workspace™
              </button>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href="/support"
                  className="rounded-2xl border border-cyan-400/30 bg-slate-900 px-4 py-3 text-center text-sm font-black text-cyan-200 hover:bg-slate-800"
                >
                  Request Access™
                </a>

                <a
                  href="/support"
                  className="rounded-2xl border border-cyan-400/30 bg-slate-900 px-4 py-3 text-center text-sm font-black text-cyan-200 hover:bg-slate-800"
                >
                  Account Support™
                </a>
              </div>
            </div>
          </div>          <div className="rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
            <p className="text-sm font-black tracking-wide text-cyan-300">
              ACCESS LEVELS™
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              Workspace Permissions
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <AccessCard
                title="Individual Access™"
                text="Personal workspace, saved scans, AI assistance, and connected services."
              />

              <AccessCard
                title="Technician Access™"
                text="Maintenance tools, troubleshooting, machine records, and repair workflows."
              />

              <AccessCard
                title="Business Access™"
                text="Facilities, BAM Hub™, work orders, analytics, teams, and reporting."
              />

              <AccessCard
                title="Administrator Access™"
                text="Organizations, permissions, users, security policies, and connected systems."
              />
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-950/90 p-6 shadow-2xl sm:p-8">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            PROTECTED BAM™ WORKSPACE
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            Everything secured through BAM Access™
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <AccessCard
              title="Machine Memory™"
              text="Equipment profiles, scans, manuals, notes, serial numbers, parts, and repair history."
            />

            <AccessCard
              title="Facility Workflows™"
              text="Work orders, technician activity, maintenance schedules, inspections, and operational records."
            />

            <AccessCard
              title="Provider Network™"
              text="Service providers, customers, organizations, and account relationships."
            />

            <AccessCard
              title="Business Intelligence™"
              text="BAM Metrics™, downtime trends, KPI dashboards, and protected operational reporting."
            />
          </div>
        </section>

        <footer className="mt-8 border-t border-cyan-300/20 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Access™ | BAMToolz™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function StatusPill({ text }: { text: string }) {
  return (
    <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-center text-xs font-black text-cyan-200">
      {text}
    </div>
  );
}

function AccessStatusRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-cyan-400/20 bg-slate-900 p-4">
      <span className="text-sm text-slate-300">{label}</span>

      <span className="font-black text-cyan-300">{value}</span>
    </div>
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
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-5 shadow-xl transition-all hover:border-cyan-300/40 hover:bg-slate-800">
      <h3 className="text-xl font-black text-cyan-300">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-300">
        {text}
      </p>
    </div>
  );
}