export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cyan-600 px-4 py-6 text-white">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/40 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-900 p-6 shadow-2xl">

        <a
          href="/"
          className="inline-block rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-cyan-200"
        >
          ← BAMToolz™ Home
        </a>

        <section className="mt-8 rounded-2xl bg-slate-950/95 p-8 shadow-2xl">

          <p className="text-sm font-black tracking-wide text-cyan-300">
            BALL AI METRICS™
          </p>

          <h1 className="mt-4 text-4xl font-black">
            Terms of Service
          </h1>

          <p className="mt-6 text-slate-300">
            These Terms apply to the use of BAM™, BAMToolz™,
            BAM Scan™, BAM AI™, BAM Hub™, and related
            Ball AI Metrics™ technology.
          </p>


          <Section
            title="BAM™ Platform"
            text="BAM™ is an industrial AI ecosystem designed to assist with equipment documentation, maintenance workflows, machine history, automation support, and facility intelligence."
          />


          <Section
            title="AI Assistance"
            text="BAM AI™ provides informational support based on available information. Users must verify recommendations before performing repairs, modifications, or equipment changes."
          />


          <Section
            title="Safety Responsibility"
            text="Always follow OEM documentation, company procedures, OSHA requirements, lockout/tagout practices, PPE rules, and applicable safety standards before working on equipment."
          />


          <Section
            title="Facility Data"
            text="Machine information, scan history, repair records, manuals, and technician notes stored inside BAM Hub™ are intended to remain controlled by authorized facility users."
          />


          <Section
            title="No Replacement for Professionals"
            text="BAMToolz™ supports technicians and organizations but does not replace trained professionals, engineering review, safety approval, or required inspections."
          />


          <Section
            title="Development Notice"
            text="Features, integrations, AI capabilities, hardware, and services may change as Ball AI Metrics™ continues development."
          />


          <Section
            title="Contact"
            text="For support, partnerships, or questions contact BAMToolzsupport@gmail.com"
          />


          <footer className="mt-10 border-t border-cyan-400/30 pt-5 text-sm text-cyan-100">
            © 2026 BAM™ | BAMToolz™ | Ball AI Metrics™
          </footer>

        </section>
      </div>
    </main>
  );
}


function Section({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-black text-cyan-300">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-slate-300">
        {text}
      </p>
    </div>
  );
}