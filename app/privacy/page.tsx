export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-6 text-slate-300">
            This Privacy Policy explains how BAM™, BAMToolz™, BAM Scan™,
            BAM AI™, BAM Hub™, and related Ball AI Metrics™ services are intended
            to handle information.
          </p>

          <Section
            title="Information You Provide"
            text="BAMToolz™ may process information you enter, upload, scan, or submit, including equipment photos, machine labels, technician notes, support questions, contact information, and facility workflow details."
          />

          <Section
            title="Equipment & Facility Data"
            text="Machine data, serial numbers, repair history, manuals, parts information, scan records, and technician notes are intended to remain protected inside BAM Hub™ and controlled by authorized facility users."
          />

          <Section
            title="AI Processing"
            text="BAM AI™ may analyze submitted text, images, equipment information, and technician questions to provide maintenance support, documentation assistance, and workflow guidance."
          />

          <Section
            title="No Public Machine Memory"
            text="Public-facing pages should not expose stored machine history or facility records. Secure machine memory belongs behind BAM Hub™ access controls."
          />

          <Section
            title="Data Security Direction"
            text="Future versions are intended to support login, company accounts, user roles, facility permissions, RFID or badge access, and protected data separation between organizations."
          />

          <Section
            title="Support Contact"
            text="When you contact support, the information you provide may be used to respond to your request, improve the product, troubleshoot issues, or evaluate partnership opportunities."
          />

          <Section
            title="Development Notice"
            text="BAMToolz™ is under active development. Privacy features, security controls, integrations, and data handling practices may evolve as the platform grows."
          />

          <Section
            title="Contact"
            text="For privacy, support, or data questions contact BAMToolzsupport@gmail.com"
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