export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#02050a,#061629,#000000)",
        color: "#e8f4ff",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <section
        style={{
          textAlign: "center",
          border: "1px solid #0a84ff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 0 35px rgba(10,132,255,0.35)",
        }}
      >
        <div style={{ fontSize: "55px" }}>⚙️</div>

        <h1
          style={{
            fontSize: "90px",
            margin: "0",
            letterSpacing: "10px",
            color: "#0a84ff",
            fontWeight: "900",
          }}
        >
          BAM
        </h1>

        <h1
          style={{
            fontSize: "52px",
            margin: "0",
            letterSpacing: "12px",
            color: "#e8f4ff",
            fontWeight: "900",
          }}
        >
          TOOLZ™
        </h1>

        <p style={{ color: "#8fc7ff" }}>
          Ball Advanced Maintenance Tools
        </p>

        <h2>Preserving Presence™</h2>
        <h3 style={{ color: "#0a84ff" }}>In Every Machine</h3>

        <p>
          AI-powered equipment intelligence for manufacturing, aerospace,
          hospitals, and critical facilities.
        </p>

        <a
          href="/scanner"
          style={{
            background: "#0a84ff",
            color: "black",
            padding: "16px 30px",
            borderRadius: "10px",
            display: "inline-block",
            marginTop: "20px",
            fontWeight: "900",
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(10,132,255,0.8)",
          }}
        >
          📸 Launch BAM Scan™
        </a>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "1px solid #0a84ff",
          borderRadius: "18px",
          padding: "25px",
          background: "rgba(10,132,255,0.08)",
        }}
      >
        <h2>🏷 Existing Tag Integration</h2>
        <p>
          BAMToolz works with barcodes, QR codes, asset tags, serial plates,
          and equipment IDs already used by facilities.
        </p>
        <h3>Don’t replace facility knowledge. Unlock it.</h3>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "1px solid #0a84ff",
          borderRadius: "18px",
          padding: "25px",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <h2 style={{ color: "#0a84ff" }}>🏭 BAM Hub™</h2>
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
          marginTop: "35px",
          border: "1px solid #0a84ff",
          borderRadius: "18px",
          padding: "25px",
          background: "rgba(10,132,255,0.08)",
        }}
      >
        <h2>💰 Asset-Based Pricing</h2>

        <p>
          BAMToolz scales by the number of machines protected in each facility.
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

      <section
        style={{
          marginTop: "35px",
          borderTop: "1px solid #0a84ff",
          paddingTop: "25px",
        }}
      >
        <h2>BAMToolz™ Trust</h2>
        <p>🔒 Customer equipment data belongs to the customer.</p>
        <p>Built by maintenance. For maintenance.</p>
      </section>

      <footer style={{ textAlign: "center", marginTop: "50px", color: "#8fc7ff" }}>
        © 2026 BAMToolz™
      </footer>
    </main>
  );
}