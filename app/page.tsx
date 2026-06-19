export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#003b73,#001f3f)",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <section style={{ textAlign: "center" }}>
        <div style={{ fontSize: "55px" }}>⚙️</div>

        <h1 style={{ fontSize: "88px", margin: "0", letterSpacing: "8px" }}>
          BAM
        </h1>

        <h1 style={{ fontSize: "50px", margin: "0", letterSpacing: "10px" }}>
          TOOLZ™
        </h1>

        <p>Ball Advanced Maintenance Tools</p>

        <h2>Preserving Presence™</h2>
        <h3>In Every Machine</h3>

        <p>
          AI-powered equipment intelligence for manufacturing, aerospace,
          hospitals, and critical facilities.
        </p>

        <a
          href="/scanner"
          style={{
            background: "#d9e3ec",
            color: "#003b73",
            padding: "16px 28px",
            borderRadius: "14px",
            display: "inline-block",
            marginTop: "20px",
            fontWeight: "900",
            textDecoration: "none",
          }}
        >
          📸 Launch BAM Scan™
        </a>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>🏷 Existing Tag Integration</h2>
        <p>
          BAMToolz works with barcodes, QR codes, asset tags, serial plates, and
          equipment IDs already used by facilities.
        </p>
        <h3>Don’t replace facility knowledge. Unlock it.</h3>
      </section>

      <section
        style={{
          marginTop: "40px",
          background: "#d9e3ec",
          color: "#003b73",
          padding: "25px",
          borderRadius: "18px",
          fontWeight: "bold",
        }}
      >
        <h2>🏭 BAM Hub™</h2>
        <h3>Every Machine Gets a Memory.</h3>

        <p>⚙ Equipment profiles</p>
        <p>📍 Facility locations and asset tracking</p>
        <p>🏢 Building, floor, room, and machine location</p>
        <p>📚 Manuals and schematics</p>
        <p>🔧 Parts intelligence</p>
        <p>🛠 Repair history</p>
        <p>🧠 Technician knowledge</p>
      </section>

      <section
        style={{
          marginTop: "40px",
          border: "2px solid #d9e3ec",
          borderRadius: "18px",
          padding: "25px",
        }}
      >
        <h2>💰 Asset-Based Pricing</h2>

        <p>
          BAMToolz is designed to scale by the number of machines protected in
          each facility.
        </p>

        <h3>Starter Facility</h3>
        <p>100 assets × $5 per asset/month = $500/month</p>

        <h3>Medium Facility</h3>
        <p>1,000 assets × $3 per asset/month = $3,000/month</p>

        <h3>Large Facility</h3>
        <p>10,000 assets × $1.50 per asset/month = $15,000/month</p>

        <p>
          Every machine gets a memory. Every asset becomes searchable,
          traceable, and easier to maintain.
        </p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>BAMToolz™ Trust</h2>
        <p>🔒 Customer equipment data belongs to the customer.</p>
        <p>Built by maintenance. For maintenance.</p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "50px" }}>
        © 2026 BAMToolz™
      </footer>
    </main>
  );
}