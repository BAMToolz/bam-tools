export default function BamHomePage() {
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
              Everyday repair intelligence powered by BAM Scan™
            </p>
          </div>

          <nav className="flex flex-wrap gap-3">
            <a href="/" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Home™
            </a>

            <a href="/scanner/home" className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-black text-slate-950">
              Home Scan™
            </a>

            <a href="/scanner" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Industrial Scan™
            </a>

            <a href="/access" className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-cyan-200">
              Access™
            </a>
          </nav>
        </header>

        <section className="mt-10 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <p className="text-sm font-black tracking-wide text-cyan-300">
            CONSUMER REPAIR ASSISTANCE™
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
            Take a picture. Understand the problem. Find the next step.
          </h2>

          <p className="mt-6 max-w-5xl text-sm leading-6 text-slate-300 sm:text-base">
            BAM Home™ brings BAM Scan™ technology to everyday users.
            Scan appliances, equipment, vehicles, tools, home systems,
            and more. BAM AI™ helps identify issues, explain problems,
            and guide the repair process.
          </p>

          <a
            href="/scanner/home"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-black text-slate-950 hover:bg-cyan-400"
          >
            Start Home Repair Scan™
          </a>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-4">
          <Card
            number="01"
            title="Capture"
            text="Take a picture of the problem, label, part, or equipment."
          />

          <Card
            number="02"
            title="Identify"
            text="BAM AI™ helps understand what you are looking at."
          />

          <Card
            number="03"
            title="Assist"
            text="Get repair guidance, information, and next steps."
          />

          <Card
            number="04"
            title="Connect"
            text="Future BAM providers can help complete repairs."
          />
        </section>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">
          <h2 className="text-3xl font-black text-cyan-300">
            Future BAM Provider Network™
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Future accounts can connect homeowners, technicians,
            service companies, and specialists while preserving repair
            knowledge inside the BAM ecosystem.
          </p>
        </section>

        <footer className="mt-8 border-t border-cyan-300/30 pt-6 text-center text-sm text-cyan-50">
          © 2026 BAM Home™ | BAMToolz™ | Ball AI Metrics™
        </footer>

      </div>
    </main>
  );
}

function Card({
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
      <h3 className="mt-3 text-xl font-black text-cyan-300">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        {text}
      </p>
    </div>
  );
}