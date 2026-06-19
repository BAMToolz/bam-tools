export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#e8f4ff",
        padding: "22px",
        fontFamily: "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
        overflowX: "hidden",
      }}
    >
      <section
        style={{
          textAlign: "center",
          border: "2px solid #0077ff",
          borderRadius: "28px",
          padding: "30px 18px",
          boxShadow: "0 0 40px rgba(0,119,255,0.45)",
          background: "#03070d",
        }}
      >
        <div
          style={{
            margin: "0 auto 24px",
            width: "285px",
            maxWidth: "92%",
            padding: "18px 24px",
            borderRadius: "999px",
            border: "4px solid #0077ff",
            background: "#000000",
            boxShadow: "0 0 26px rgba(0,119,255,0.9)",
          }}
        >
          <div
            style={{
              color: "#0077ff",
              fontSize: "45px",
              fontWeight: "900",
              fontStyle: "italic",
              letterSpacing: "-2px",
            }}
          >
            BAMToolz™
          </div>
        </div>

        <h2 style={{ color: "#0077ff" }}>Preserving Presence™</h2>
        <h3>In Every Machine</h3>

        <p style={{ color: "#8fc7ff", fontWeight: "bold" }}>
          Ball Advanced Maintenance Tools
        </p>

        <p>
          AI-powered equipment intelligence for manufacturing, aerospace,
          hospitals, and critical facilities.
        </p>

        <a
          href="/scanner"
          style={{
            background: "#0077ff",
            color: "black",
            padding: "17px 32px",
            borderRadius: "999px",
            display: "inline-block",
            marginTop: "20px",
            fontWeight: "900",
            textDecoration: "none",
            boxShadow: "0 0 22px rgba(0,119,255,0.9)",
            fontSize: "18px",
          }}
        >
          📸 Launch BAM Scan™
        </a>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "2px solid #0077ff",
          borderRadius: "24px",
          padding: "25px",
          background: "#03070d",
        }}
      >
        <h2>🏷 Existing Tag Integration</h2>
        <p>
          BAMToolz works with barcodes, QR codes, asset tags, serial plates,
          and equipment IDs already used by facilities.
        </p>
        <h3 style={{ color: "#0077ff" }}>
          Don’t replace facility knowledge. Unlock it.
        </h3>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "2px solid #0077ff",
          borderRadius: "24px",
          padding: "25px",
          background: "#03070d",
        }}
      >
        <h2 style={{ color: "#0077ff" }}>🏭 BAM Hub™</h2>
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
          border: "2px solid #0077ff",
          borderRadius: "24px",
          padding: "25px",
          background: "#03070d",
        }}
      >
        <h2>💰 Asset-Based Pricing</h2>

        <p>
          BAMToolz scales by the number of machines protected in each facility.
        </p>

        <h3 style={{ color: "#0077ff" }}>Starter Facility</h3>
        <p>100 assets</p>
        <p>$5 per asset / month</p>

        <h3 style={{ color: "#0077ff" }}>Medium Facility</h3>
        <p>1,000 assets</p>
        <p>$3 per asset / month</p>

        <h3 style={{ color: "#0077ff" }}>Large Facility</h3>
        <p>10,000 assets</p>
        <p>$1.50 per asset / month</p>

        <p>
          Every machine gets a memory. Every asset becomes searchable,
          traceable, and easier to maintain.
        </p>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "2px solid #0077ff",
          borderRadius: "24px",
          padding: "25px",
          background: "#03070d",
        }}
      >
        <h2>No Breaks In The Future™</h2>
        <p>
          Machines should not lose their history. Facilities should not lose
          their knowledge. Technicians should not start from zero.
        </p>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "2px solid #0077ff",
          borderRadius: "24px",
          padding: "25px",
          background: "#03070d",
        }}
      >
        <h2>BAMToolz™ Trust</h2>
        <p>🔒 Customer equipment data belongs to the customer.</p>
        <p>Built by maintenance. For maintenance.</p>
      </section>

      <footer
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#8fc7ff",
          fontWeight: "bold",
        }}
      >
        © 2026 BAMToolz™
      </footer>
    </main>
  );
}