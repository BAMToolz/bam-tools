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
      <section
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
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
            fontWeight: "900",
          }}
        >
          BAM
        </h1>

        <h1
          style={{
            fontSize: "55px",
            margin: "0",
            letterSpacing: "8px",
            fontWeight: "900",
          }}
        >
          TOOLZ™
        </h1>

        <h2>Ball Advanced Maintenance Tools</h2>

        <h3>
          AI Maintenance Intelligence Platform
        </h3>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.5",
          }}
        >
          AI-powered equipment intelligence for manufacturing,
          aerospace, and critical facilities.
        </p>

        <p>
          Turning decades of maintenance knowledge into
          instant equipment intelligence.
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
          📸 LAUNCH BAM SCAN
        </a>
      </section>

      <section
        style={{
          marginTop: "50px",
          display: "grid",
          gap: "18px",
        }}
      >
        {[
          ["⚙ Equipment ID", "Identify machines, motors, tags, and assets."],
          ["🔧 Parts Intelligence", "Find parts and maintenance information faster."],
          ["📚 Knowledge Hub", "Store manuals, notes, and repair history."],
          ["⚡ Controls Support", "Assist PLC, VFD, sensors, and troubleshooting."],
        ].map(([title, text]) => (
          <div
            key={title}
            style={{
              background: "#d9e3ec",
              color: "#003b73",
              padding: "22px",
              borderRadius: "18px",
              fontWeight: "bold",
            }}
          >
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
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