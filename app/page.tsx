export default function Home() {
  return (
    <main style={styles.page}>

      <section style={styles.hero}>

        <h1 style={styles.logoText}>
          BAMToolz™
        </h1>

        <h2 style={styles.subtitle}>
          Ball Advanced Management
        </h2>

        <p style={styles.text}>
          AI Industrial Intelligence Platform built by BAMLabs™.
          Bringing machine intelligence, technician support,
          and industrial knowledge together.
        </p>


        <div style={styles.productBox}>

          <h2>
            BAMToolz™ AI Industrial Scanner
          </h2>

          <p>
            Rugged handheld industrial scanner designed
            for technicians, manufacturing, aerospace,
            and facility maintenance.
          </p>

          <h3>◈ BAM Scan™</h3>
          <p>
            Scan equipment tags, QR codes, manuals,
            parts, and machine information.
          </p>

          <h3>◈ BAM Assist™</h3>
          <p>
            AI troubleshooting assistant that asks questions,
            guides repairs, and helps diagnose failures.
          </p>

          <h3>◈ BAM Hub™</h3>
          <p>
            Machine memory storing repairs, history,
            documents, and technician knowledge.
          </p>

          <h3>◈ BAM Safety™</h3>
          <p>
            Safety awareness, lockout reminders,
            and protection for people and facilities.
          </p>

        </div>


        <div style={styles.card}>
          <h2>BAMLabs™</h2>
          <p>
            Research • AI Development • Prototypes • Future Technology
          </p>
        </div>


        <div style={styles.card}>
          <h2>BAMSystems™</h2>
          <p>
            Automation • Controls • PLC Integration • Industrial Solutions
          </p>
        </div>


        <footer style={styles.footer}>

          © BAMLabs™
          <br />
          Ball Advanced Management
          <br />
          Support:
          <br />
          BAMToolzsupport@gmail.com

        </footer>

      </section>

    </main>
  );
}


const styles = {

  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(#020202,#00111f)",
    color: "white",
    padding: "25px",
    fontFamily: "Arial",
  },

  hero: {
    maxWidth: "900px",
    margin: "auto",
    textAlign: "center" as const,
  },

  logoText: {
    fontSize: "55px",
    color: "#168cff",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "24px",
    color: "#cccccc",
  },

  text: {
    fontSize: "19px",
    lineHeight: "1.6",
  },

  productBox: {
    background: "#050505",
    border: "2px solid #168cff",
    borderRadius: "25px",
    padding: "25px",
    marginTop: "30px",
    textAlign: "left" as const,
    boxShadow:
      "0 0 40px rgba(22,140,255,.35)",
  },

  card: {
    background: "#111",
    border:
      "1px solid rgba(22,140,255,.5)",
    borderRadius: "20px",
    padding: "20px",
    marginTop: "20px",
  },

  footer: {
    marginTop: "40px",
    color: "#999",
    fontSize: "15px",
  },
};