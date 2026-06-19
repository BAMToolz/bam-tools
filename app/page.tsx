export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#02050a,#061629,#000000)",
        color: "#e8f4ff",
        padding: "22px",
        fontFamily:
          "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
        overflowX: "hidden",
      }}
    >
      <section
        style={{
          textAlign: "center",
          border: "2px solid #0a84ff",
          borderRadius: "28px",
          padding: "30px 18px",
          boxShadow: "0 0 40px rgba(10,132,255,0.45)",
          background: "rgba(0,20,45,0.75)",
        }}
      >
        <div
          style={{
            margin: "0 auto 24px",
            width: "285px",
            maxWidth: "92%",
            padding: "18px 24px",
            borderRadius: "999px",
            border: "4px solid #dff3ff",
            background:
              "linear-gradient(180deg,#063d91,#001a4d)",
            boxShadow:
              "0 0 22px rgba(10,132,255,0.9), inset 0 0 18px rgba(255,255,255,0.25)",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "45px",
              fontWeight: "900",
              fontStyle: "italic",
              letterSpacing: "-2px",
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            BAMToolz
          </div>
        </div>

        <h2
          style={{
            marginTop: "10px",
            color: "#0a84ff",
            letterSpacing: "2px",
            fontWeight: "900",
          }}
        >
          Preserving Presence™
        </h2>

        <h3
          style={{
            fontWeight: "900",
            fontSize: "24px",
          }}
        >
          In Every Machine
        </h3>

        <p style={{ color: "#8fc7ff", fontWeight: "bold" }}>
          Ball Advanced Maintenance Tools
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.45",
          }}
        >
          AI-powered equipment intelligence for manufacturing,
          aerospace, hospitals, and critical facilities.
        </p>

        <a
          href="/scanner"
          style={{
            background: "#0a84ff",
            color: "black",
            padding: "17px 32px",
            borderRadius: "999px",
            display: "inline-block",
            marginTop: "20px",
            fontWeight: "900",
            textDecoration: "none",
            boxShadow: "0 0 22px rgba(10,132,255,0.9)",
            fontSize: "18px",
          }}
        >
          📸 Launch BAM Scan™
        </a>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "2px solid #0a84ff",
          borderRadius: "24px",
          padding: "25px",
          background: "rgba(10,132,255,0.08)",
        }}
      >
        <h2>🏷 Existing Tag Integration</h2>
        <p>
          BAMToolz works with barcodes, QR codes, asset tags,
          serial plates, and equipment IDs already used by facilities.
        </p>
        <h3>Don’t replace facility knowledge. Unlock it.</h3>
      </section>

      <section
        style={{
          marginTop: "35px",
          border: "2px solid #0a84ff",
          borderRadius: "24px",
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
          border: "2px solid #0a84ff",
          borderRadius: "24px",
          padding: "25px",
          background: "rgba(10,132,255,0.08)",
        }}
      >
        <h2>💰 Asset-Based Pricing</h2>

        <p>
          BAMToolz scales by the number of machines protected
          in each facility.
        </p>

        <h3>Starter Facility</h3>
        <p>100 assets</p>
        <p>$5 per asset / month</p>

        <h3>Medium Facility</h3>
        <p>1,000 assets</p>
        <p>$3 per asset / month</p>

        <h3>Large Facility</h3>
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
          border: "2px solid #0a84ff",
          borderRadius: "24px",
          padding: "25px",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <h2>No Breaks In The Future™</h2>

        <p>
          Machines should not lose their history. Facilities should not
          lose their knowledge. Technicians should not start from zero.
        </p>
      </section>

      <section
        style={{
          marginTop: "35px",
          borderTop: "2px solid #0a84ff",
          paddingTop: "25px",
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