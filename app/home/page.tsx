export default function HomeModePage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-5 shadow-2xl sm:p-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="inline-flex rounded-md bg-white px-4 py-1 text-sm font-black tracking-wide text-cyan-600">
              BAM
            </div>

            <h1 className="mt-3 text-5xl font-black">
              BAM Home™
            </h1>

            <p className="mt-2 text-cyan-50">
              Everyday AI repair assistance
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>
            <a href="/scanner" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950">
              BAM Scan™
            </a>
            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Access™
            </a>
            <a href="/support" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Support™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            CONSUMER MODE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
            Take a picture. Ask BAM AI™. Start the repair path.
          </h2>

          <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Home™ is the future consumer side of the BAM ecosystem. Everyday
            users can scan appliances, vehicles, tools, home equipment, and repair
            issues, then use BAM AI™ to understand the problem and prepare the next step.
          </p>

          <a
            href="/scanner"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-black text-slate-950 hover:bg-cyan-400"
          >
            Start With BAM Scan™
          </a>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-4">
          <ModeCard number="01" title="Picture" text="Capture the issue, label, part, warning screen, or broken equipment." />
          <ModeCard number="02" title="Identify" text="BAM Scan™ helps recognize what the user is looking at." />
          <ModeCard number="03" title="Assist" text="BAM AI™ explains possible causes, safety notes, and next steps." />
          <ModeCard number="04" title="Repair" text="Future BAM Provider Network™ can connect users with service help." />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Future User Accounts™
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-6 text-slate-300">
            Later, BAM Access™ can store user repair history, saved scans,
            service requests, appliance records, vehicle records, and provider
            connections under protected customer accounts.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Home™ | BAMToolz™ | Ball AI Metrics™
        </footer>
      </div>
    </main>
  );
}

function ModeCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl bg-slate-950/95 p-6 shadow-xl">
      <p className="font-black text-cyan-300">{number}</p>
      <h3 className="mt-3 text-xl font-black text-cyan-300">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}