export default function TermsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#e8f4ff",
        padding: "28px",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <h1 style={{ color: "#0077ff" }}>BAMToolz™ Terms of Use</h1>

      <p>
        BAMToolz™ is a prototype industrial maintenance intelligence platform.
        It is designed to support equipment identification, safety awareness,
        documentation access, and maintenance knowledge organization.
      </p>

      <h2>Ownership</h2>
      <p>
        BAMToolz™, BAM Scan™, BAM Hub™, BAM Safety™, Preserving Presence™,
        Every Machine Gets a Memory™, and No Breaks In The Future™ are brand
        assets of BAMToolz.
      </p>

      <h2>Customer Data</h2>
      <p>
        Customer equipment data belongs to the customer. BAMToolz is built to
        respect facility ownership, privacy, and control of equipment
        information.
      </p>

      <h2>Safety</h2>
      <p>
        BAMToolz does not replace qualified maintenance judgment, safety
        procedures, Lockout / Tagout, OSHA requirements, employer policies, or
        manufacturer instructions.
      </p>

      <h2>No Warranty</h2>
      <p>
        BAMToolz is provided as a prototype without warranty. Users are
        responsible for verifying all information before performing maintenance
        work.
      </p>

      <a href="/" style={{ color: "#0077ff", fontWeight: "bold" }}>
        ← Back Home
      </a>
    </main>
  );
}