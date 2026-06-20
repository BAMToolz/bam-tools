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

        <div style={scannerWrap}>
          <div style={scanner}>
            <div style={scannerHead}>
              <div style={camera}></div>
              <div style={cameraSmall}></div>
            </div>

            <div style={screen}>
              <h2 style={screenLogo}>BAMToolz™</h2>
              <p style={screenSub}>AI Industrial Scanner</p>

              <div style={screenTile}>BAM Scan™</div>
              <div style={screenTile}>BAM Assist™</div>
              <div style={screenTile}>BAM Hub™</div>
              <div style={screenTile}>BAM Safety™</div>
            </div>

            <div style={trigger}></div>
            <div style={handle}></div>
          </div>

          <h2 style={blue}>Prototype Handheld Scanner</h2>
          <p>
            Rugged concept device for scanning equipment tags, QR codes,
            fault screens, panels, motors, and asset records.
          </p>
        </div>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAM Scan™</h2>
        <p>Scans equipment images and creates asset intelligence.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAM Assist™</h2>
        <p>Asks follow-up questions and guides troubleshooting.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAM Hub™</h2>
        <p>Stores machine memory, repair history, manuals, parts, and notes.</p>
      </section>

      <section style={card}>
        <h2 style={blue}>◈ BAMSystems™</h2>
        <p>Future integration with automation, controls, sensors, and PLC data.</p>
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

const scannerWrap = {
  marginTop: "28px",
  padding: "24px",
  border: "1px solid #0077ff",
  borderRadius: "26px",
  background: "rgba(0,119,255,.08)",
  textAlign: "center" as const,
};

const scanner = {
  position: "relative" as const,
  width: "230px",
  height: "430px",
  margin: "10px auto 30px",
};

const scannerHead = {
  position: "absolute" as const,
  top: "0",
  left: "35px",
  width: "160px",
  height: "70px",
  borderRadius: "28px",
  background: "#05070a",
  border: "3px solid #0077ff",
  boxShadow: "0 0 25px rgba(0,119,255,.55)",
};

const camera = {
  position: "absolute" as const,
  top: "18px",
  left: "42px",
  width: "34px",
  height: "34px",
  borderRadius: "999px",
  background: "#111",
  border: "2px solid #8fc7ff",
};

const cameraSmall = {
  position: "absolute" as const,
  top: "24px",
  right: "38px",
  width: "22px",
  height: "22px",
  borderRadius: "999px",
  background: "#0077ff",
};

const screen = {
  position: "absolute" as const,
  top: "58px",
  left: "25px",
  width: "180px",
  minHeight: "250px",
  borderRadius: "24px",
  background: "#03070d",
  border: "3px solid #1b2c3f",
  padding: "18px",
  boxShadow: "inset 0 0 20px rgba(0,119,255,.25)",
};

const screenLogo = {
  color: "#0077ff",
  margin: "0",
};

const screenSub = {
  color: "#8fc7ff",
  fontSize: "12px",
};

const screenTile = {
  marginTop: "12px",
  padding: "10px",
  border: "1px solid #0077ff",
  borderRadius: "14px",
  background: "rgba(0,119,255,.12)",
  fontWeight: "900",
};

const trigger = {
  position: "absolute" as const,
  top: "280px",
  left: "95px",
  width: "42px",
  height: "34px",
  borderRadius: "14px",
  background: "#0077ff",
};

const handle = {
  position: "absolute" as const,
  top: "305px",
  left: "76px",
  width: "78px",
  height: "120px",
  borderRadius: "16px 16px 32px 32px",
  background: "linear-gradient(180deg,#111,#030303)",
  border: "3px solid #1b2c3f",
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