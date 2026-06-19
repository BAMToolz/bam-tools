export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #003b73 0%, #001f3f 100%)",
        color: "white",
        padding: "28px",
        fontFamily: "Arial",
      }}
    >
      <section style={{ textAlign: "center" }}>
        <div
          style={{
            background: "#d9e3ec",
            color: "#003b73",
            display: "inline-block",
            padding: "10px 18px",
            borderRadius: "20px",
            fontWeight: "900",
          }}
        >
          PROTOTYPE 2026
        </div>

        <h1
          style={{
            fontSize: "78px",
            margin: "20px 0 0",
            letterSpacing: "6px",
          }}
        >
          BAM
        </h1>

        <h1
          style={{
            fontSize: "55px",
            margin: "0",
            letterSpacing: "8px",
          }}
        >
          TOOLZ™
        </h1>

        <h2>Ball Advanced Maintenance Tools</h2>

        <h3>AI Maintenance Intelligence Platform</h3>

        <p style={{ fontSize: "20px" }}>
          AI-powered equipment intelligence for manufacturing,
          aerospace, hospitals, and critical facilities.
        </p>

        <p>
          Turning decades of maintenance knowledge into instant
          equipment intelligence.
        </p>

        <a
          href="/scanner"
          style={{
            display: "inline-block",
            marginTop: "25px",
            background: "#d9e3ec",
            color: "#003b73",
            padding: "18px 35px",
            borderRadius: "15px",
            textDecoration: "none",
            fontWeight: "900",
          }}
        >
          📸 LAUNCH BAM SCAN™
        </a>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>⚙ Equipment ID</h2>
        <p>Identify machines, motors, panels, and assets.</p>

        <h2>🔧 Parts Intelligence</h2>
        <p>Find parts and maintenance information faster.</p>

        <h2>📚 Knowledge Hub</h2>
        <p>Capture manuals, repairs, and technician knowledge.</p>

        <h2>⚡ Controls Support</h2>
        <p>PLC, VFD, sensors, wiring, and troubleshooting.</p>
      </section>

      <section
        style={{
          marginTop: "45px",
          background: "#d9e3ec",
          color: "#003b73",
          padding: "25px",
          borderRadius: "18px",
          fontWeight: "bold",
        }}
      >
        <h2>🏭 BAM Hub™</h2>

        <h3>Every Machine Gets a Memory.</h3>

        <p>
          A facility intelligence hub that keeps equipment knowledge
          organized, searchable, and available instantly.
        </p>

        <p>⚙ Equipment profiles and asset history</p>
        <p>📍 Facility maps, locations, and asset tracking</p>
        <p>🏢 Building, floor, room, and machine location</p>
        <p>📚 Manuals, schematics, and documentation</p>
        <p>🔧 Spare parts and replacement information</p>
        <p>🛠 Technician repair notes and tribal knowledge</p>
        <p>⚡ Faster troubleshooting and reduced downtime</p>

        <h3>BAM Scan™ + BAM Hub™</h3>

        <p>
          Scan equipment → identify asset → locate machine →
          access history → solve problems faster.
        </p>
      </section>

      <section
        style={{
          marginTop: "45px",
          border: "2px solid #d9e3ec",
          borderRadius: "18px",
          padding: "22px",
        }}
      >
        <h2>BAMToolz™ Trust Principles</h2>

        <p>🔒 Customer equipment data belongs to the customer.</p>
        <p>🏭 Built from real maintenance experience.</p>
        <p>🛠 Designed for technicians first.</p>
        <p>📚 Protects facility knowledge.</p>
        <p>⚡ Built to reduce downtime safely.</p>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        © 2026 BAMToolz™
        <br />
        Built by maintenance. For maintenance.
      </footer>
    </main>
  );
}