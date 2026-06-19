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
        position: "relative",
      }}
    >
      <a
        href="mailto:your-email@example.com?subject=BAMToolz%20Live%20Chat%20Request"
        style={{
          position: "fixed",
          right: "18px",
          bottom: "18px",
          background: "#0077ff",
          color: "black",
          padding: "14px 18px",
          borderRadius: "999px",
          fontWeight: "900",
          textDecoration: "none",
          boxShadow: "0 0 25px #0077ff",
          zIndex: 999,
        }}
      >
        💬 Chat
      </a>

      <section
        style={{
          textAlign: "center",
          border: "2px solid #0077ff",
          borderRadius: "28px",
          padding: "30px 18px",
          background: "#03070d",
          boxShadow: "0 0 40px rgba(0,119,255,0.45)",
        }}
      >
        <div
          style={{
            margin: "0 auto 24px",
            width: "285px",
            maxWidth: "92%",
            padding: "18px",
            borderRadius: "999px",
            border: "4px solid #0077ff",
            background: "#000",
            boxShadow: "0 0 26px #0077ff",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#0077ff",
              fontSize: "44px",
              fontStyle: "italic",
              fontWeight: "900",
            }}
          >
            BAMToolz™
          </h1>
        </div>

        <h2 style={{ color: "#0077ff" }}>Preserving Presence™</h2>
        <h3>In Every Machine</h3>

        <p style={{ color: "#8fc7ff" }}>Ball Advanced Maintenance Tools</p>

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
          BAMToolz connects existing barcodes, QR codes, asset tags, serial
          plates, and equipment IDs.
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
        <h3>Every Machine Gets a Memory™</h3>
        <p>⚙ Equipment profiles</p>
        <p>📍 Facility locations</p>
        <p>📚 Manuals & schematics</p>
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
        <p>BAMToolz scales by the number of machines protected.</p>

        <h3 style={{ color: "#0077ff" }}>Starter Facility</h3>
        <p>100 assets</p>
        <p>$5 per asset / month</p>

        <h3 style={{ color: "#0077ff" }}>Medium Facility</h3>
        <p>1,000 assets</p>
        <p>$3 per asset / month</p>

        <h3 style={{ color: "#0077ff" }}>Large Facility</h3>
        <p>10,000 assets</p>
        <p>$1.50 per asset / month</p>
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
        <p>© 2026 BAMToolz™. All Rights Reserved.</p>
        <p>BAM Scan™ • BAM Hub™ • Preserving Presence™</p>
        <p>Ball Advanced Maintenance Tools</p>
      </footer>
    </main>
  );
}