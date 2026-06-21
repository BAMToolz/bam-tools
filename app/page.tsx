export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 text-center">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-300">
          BALL ADVANCED MANAGEMENT™
        </p>

        <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">
          BAMToolz™
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          Industrial intelligence for maintenance teams, service technicians,
          equipment support, automation, controls, and facility knowledge.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/scanner"
            className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-600"
          >
            Open Private AI Scanner
          </a>

          <a
            href="mailto:BAMToolzsupport@gmail.com"
            className="rounded-xl border border-blue-400 px-6 py-3 font-bold text-blue-300 hover:bg-blue-950"
          >
            Contact BAMToolz™ Support
          </a>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/30 bg-slate-900 p-8">
          <h2 className="text-3xl font-black text-blue-300">The BAM™ Core</h2>

          <p className="mt-4 text-slate-300">
            BAM™ stands for Ball Advanced Management™ — the company ecosystem.
            BAMToolz™ is the technician platform built to connect equipment,
            maintenance, troubleshooting, controls, repair history, manuals,
            parts, and facility intelligence.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-950 p-5">
              <h3 className="text-xl font-bold">BAMToolz™</h3>
              <p className="mt-2 text-sm text-slate-400">
                The main platform for technicians, facilities, and equipment
                support.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <h3 className="text-xl font-bold">BAM Scan™</h3>
              <p className="mt-2 text-sm text-slate-400">
                AI equipment scanning for tags, logs, panels, parts, and machine
                information.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <h3 className="text-xl font-bold">BAM Hub™</h3>
              <p className="mt-2 text-sm text-slate-400">
                Preserving technician presence, knowledge, repair notes, and
                facility memory.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-5">
              <h3 className="text-xl font-bold">BAM Systems™</h3>
              <p className="mt-2 text-sm text-slate-400">
                Automation, controls, robotics, integrations, and industrial
                equipment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-3xl font-black text-blue-300">
            Products in Development
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-6">
              <h3 className="text-xl font-bold">AI Equipment Scanner</h3>
              <p className="mt-3 text-slate-400">
                Scan machine tags, labels, electrical panels, and equipment logs
                to help identify machine data and support troubleshooting.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6">
              <h3 className="text-xl font-bold">Maintenance Knowledge Hub</h3>
              <p className="mt-3 text-slate-400">
                Store repair notes, manuals, part numbers, technician knowledge,
                downtime history, and machine profiles.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-950 p-6">
              <h3 className="text-xl font-bold">Controls & Integration Tools</h3>
              <p className="mt-3 text-slate-400">
                Built for future PLC, HMI, I/O mapping, control panels, robotics,
                and industrial automation support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-10">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-500/40 bg-slate-900 p-8">
          <h2 className="text-3xl font-black text-blue-300">
            Contact BAMToolz™ Support
          </h2>

          <p className="mt-4 text-slate-300">
            For support, facility demos, manufacturer integrations, partnerships,
            equipment workflows, or private AI scanner questions, contact
            BAMToolz™.
          </p>

          <p className="mt-6 text-lg">
            Email:{" "}
            <a
              href="mailto:BAMToolzsupport@gmail.com"
              className="font-bold text-blue-300 underline"
            >
              BAMToolzsupport@gmail.com
            </a>
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:BAMToolzsupport@gmail.com?subject=BAMToolz%20Support%20Request"
              className="rounded-xl bg-blue-500 px-6 py-3 text-center font-bold text-white hover:bg-blue-600"
            >
              Email Support
            </a>

            <a
              href="/scanner"
              className="rounded-xl border border-blue-400 px-6 py-3 text-center font-bold text-blue-300 hover:bg-blue-950"
            >
              Open AI Scanner
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 BAMToolz™ | Ball Advanced Management™</p>

        <div className="mt-4 flex justify-center gap-6">
          <a href="/privacy" className="hover:text-blue-300">
            Privacy
          </a>
          <a href="/terms" className="hover:text-blue-300">
            Terms
          </a>
          <a href="mailto:BAMToolzsupport@gmail.com" className="hover:text-blue-300">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}