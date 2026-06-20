export default function ExamplesPage() {
  return (
    <main style={main}>
      <section style={hero}>
        <p style={topLine}>BAM™ • BALL ADVANCED MANAGEMENT</p>

        <h1 style={logo}>BAMToolz™ Examples</h1>

        <h2 style={blue}>Industrial Intelligence In Action</h2>

        <p>
          Built by BAMLabs™ to turn equipment, facilities, and technician
          knowledge into connected intelligence systems.
        </p>

        <img
          src="/bam-scanner.png"
          alt="BAMToolz prototype handheld scanner"
          style={prototypeImage}
        />
      </section>

      <section style={card}>
        <h2 style={blue}>◈ Prototype Scanner</h2>
        <p>
          A rugged handheld scanner concept designed for equipment tags,
          barcodes, QR codes, fault screens, panels, motors, and asset records.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAM Scan™</h2>
        <p>
          Scans equipment images and creates asset intelligence for technicians.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAM Assist™</h2>
        <p>
          Asks follow-up troubleshooting questions and guides the technician.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAM Hub™</h2>
        <p>
          Stores machine memory, repair history, manuals, parts, and notes.
        </p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAMSystems™</h2>
        <p>
          Future integration with automation, controls, sensors, PLC data, and
          smart facilities.
        </p>
      </section>

      <footer style={footer}>
        <a href="/" style={button}>Back Home</a>
      </footer>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top,#062444,#020711,#000)",
  color: "#e8f4ff",
  padding: "22px",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const hero = {
  border: "1px solid #0077ff",
  borderRadius: "28px",
  padding: "28px",
  background: "linear-gradient(180deg,#04111f,#02050a)",
  boxShadow: "0 0 35px rgba(0,119,255,.35)",
};

const prototypeImage = {
  width: "100%",
  marginTop: "24px",
  borderRadius: "24px",
  border: "1px solid #0077ff",
  boxShadow: "0 0 35px rgba(0,119,255,.35)",
};

const topLine = {
  color: "#8fc7ff",
  fontSize: "12px",
  letterSpacing: "3px",
  fontWeight: "900",
};

const card = {
  marginTop: "28px",
  border: "1px solid #0077ff",
  borderRadius: "24px",
  padding: "24px",
  background: "#03070d",
};

const logo = {
  color: "#0077ff",
  fontSize: "42px",
  fontStyle: "italic",
};

const blue = {
  color: "#0077ff",
};

const footer = {
  textAlign: "center" as const,
  marginTop: "40px",
};

const button = {
  display: "inline-block",
  background: "#0077ff",
  color: "#000",
  padding: "15px 30px",
  borderRadius: "999px",
  fontWeight: "900",
  textDecoration: "none",
};