export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold">BAMToolz™</h1>
        <p className="mt-4 text-lg text-slate-300">
          Ball Advanced Management tools for maintenance, equipment scanning, troubleshooting, and facility intelligence.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/scanner"
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
          >
            Open AI Scanner
          </a>

          <a
            href="mailto:BAMToolzsupport@gmail.com"
            className="rounded-xl border border-blue-400 px-6 py-3 font-semibold text-blue-300 hover:bg-blue-950"
          >
            Contact Support
          </a>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-blue-300">BAMToolz™ Platform</h2>
          <p className="mt-4 text-slate-300">
            BAMToolz™ is being built for industrial maintenance teams, service technicians,
            manufacturers, and facilities that need faster equipment information, smarter
            troubleshooting, and better downtime documentation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-950 p-5">
              <h3 className="font-bold text-white">AI Equipment Scan</h3>
              <p className="mt-2 text-sm text-slate-400">
                Scan equipment tags, labels, panels, and logs to help identify machine information.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-5">
              <h3 className="font-bold text-white">Maintenance Intelligence</h3>
              <p className="mt-2 text-sm text-slate-400">
                Build repair notes, parts lists, manuals, and technician history by machine.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-5">
              <h3 className="font-bold text-white">Facility Workflow</h3>
              <p className="mt-2 text-sm text-slate-400">
                Designed for downtime tracking, troubleshooting, controls work, and equipment support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-12">
        <div className="mx-auto max-w-5xl rounded-2xl border border-blue-500/40 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-blue-300">Contact BAMToolz™ Support</h2>

          <p className="mt-4 text-slate-300">
            For support, partnerships, manufacturer integrations, facility demos, or equipment
            workflow questions, contact BAMToolz™ below.
          </p>

          <div className="mt-6 space-y-4">
            <p className="text-lg">
              Email:{" "}
              <a
                href="mailto:BAMToolzsupport@gmail.com"
                className="font-semibold text-blue-300 underline"
              >
                BAMToolzsupport@gmail.com
              </a>
            </p>

            <a
              href="mailto:BAMToolzsupport@gmail.com?subject=BAMToolz%20Support%20Request"
              className="inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
            >
              Email BAMToolz™ Support
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