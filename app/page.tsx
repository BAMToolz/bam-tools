export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#003b73",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <section style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "72px",
            margin: "0",
            fontWeight: "900",
            letterSpacing: "5px",
          }}
        >
          BAM
        </h1>

        <h1
          style={{
            fontSize: "54px",
            margin: "0",
            fontWeight: "900",
            letterSpacing: "7px",
          }}
        >
          TOOLZ™
        </h1>

        <h2>Ball Advanced Maintenance Tools</h2>

        <p style={{ fontSize: "20px" }}>
          AI powered manufacturing, hospital facility, and industrial
          maintenance intelligence.
        </p>

        <a
          href="/scanner"
          style={{
            display: "inline-block",
            background: "#d9e3ec",
            color: "#003b73",
            padding: "18px 35px",
            borderRadius: "15px",
            fontWeight: "bold",
            textDecoration: "none",
            marginTop: "25px",
          }}
        >
          📸 SCAN EQUIPMENT
        </a>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>⚙ Equipment ID</h2>
        <p>Scan machine tags, motors, panels, and equipment information.</p>

        <h2>🔧 Parts Finder</h2>
        <p>Identify components and build spare parts lists.</p>

        <h2>📚 Manuals</h2>
        <p>Store equipment manuals and troubleshooting history.</p>

        <h2>⚡ Controls Support</h2>
        <p>PLC, VFD, sensors, wiring, and industrial automation support.</p>
      </section>

      <section
        style={{
          marginTop: "50px",
          background: "#d9e3ec",
          color: "#003b73",
          padding: "25px",
          borderRadius: "18px",
        }}
      >
        <h2>BAMToolz™ Trust Principles</h2>
        <p>🔒 Customer equipment data belongs to the customer.</p>
        <p>🏭 Built from real maintenance and manufacturing experience.</p>
        <p>🛠 Designed for technicians first.</p>
        <p>📚 Improves access to knowledge without using private data.</p>
        <p>⚡ Built to reduce downtime safely and responsibly.</p>
      </section>

      <footer style={{ marginTop: "50px", textAlign: "center" }}>
        © 2026 BAMToolz™ — Built by maintenance. For maintenance.
      </footer>
    </main>
  );
}