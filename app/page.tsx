export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#e8f4ff",
        padding: "22px",
        fontFamily:
          "Arial Rounded MT Bold, Arial, Helvetica, sans-serif",
      }}
    >

      <section style={card}>
        <h1
          style={{
            color:"#0077ff",
            fontSize:"46px",
            fontStyle:"italic",
          }}
        >
          BAMToolz™
        </h1>

        <h2 style={{color:"#0077ff"}}>
          Preserving Presence™
        </h2>

        <h3>In Every Machine</h3>

        <p>
          AI-powered equipment intelligence for manufacturing,
          hospitals, aerospace, and critical facilities.
        </p>

        <a href="/scanner" style={button}>
          📸 Launch BAM Scan™
        </a>
      </section>


      <section style={card}>
        <h2>🏷 Existing Tag Integration</h2>

        <p>
          Connect existing barcodes, QR codes,
          asset tags, serial plates, and equipment IDs.
        </p>

        <h3 style={{color:"#0077ff"}}>
          Don’t replace facility knowledge. Unlock it.
        </h3>
      </section>


      <section style={card}>
        <h2 style={{color:"#0077ff"}}>
          🏭 BAM Hub™
        </h2>

        <h3>Every Machine Gets a Memory™</h3>

        <p>⚙ Equipment Profiles</p>
        <p>📍 Locations</p>
        <p>📚 Manuals & Schematics</p>
        <p>🔧 Parts Intelligence</p>
        <p>🛠 Repair History</p>
        <p>🧠 Technician Knowledge</p>
      </section>


      <section style={card}>
        <h2 style={{color:"#0077ff"}}>
          🏥 Tagged Repair Tracking™
        </h2>

        <h3>
          Tag It. Track It. Return It Safely.
        </h3>

        <p>
          Designed for hospitals, manufacturing floors,
          and critical facilities where equipment moves.
        </p>

        <p>🏷 Scan asset tags and barcodes</p>
        <p>📍 Track room, department, and location</p>
        <p>🛠 Needs Repair</p>
        <p>⏳ Waiting On Parts</p>
        <p>🔧 Under Repair</p>
        <p>✅ Back In Service</p>
        <p>👷 Technician assignment</p>
        <p>📋 Repair notes and timestamps</p>
        <p>🔒 Chain of custody tracking</p>

        <h3 style={{color:"#0077ff"}}>
          Know what is down, where it is,
          and when it returns.
        </h3>
      </section>


      <section style={card}>
        <h2 style={{color:"#0077ff"}}>
          🦺 BAM Safety™
        </h2>

        <h3>
          Safety Intelligence Before The Repair Starts
        </h3>

        <p>🔒 Lockout / Tagout</p>
        <p>⚡ Electrical Hazards</p>
        <p>💨 Hydraulic & Pneumatic Energy</p>
        <p>🔥 Machine Hazards</p>
        <p>📋 Procedures</p>

        <h3 style={{color:"#0077ff"}}>
          Protect The Technician.
          Protect The Facility.
        </h3>
      </section>


      <section style={card}>
        <h2>💰 Asset-Based Pricing</h2>

        <p>
          BAMToolz scales by machines protected.
        </p>

        <h3 style={{color:"#0077ff"}}>
          Starter Facility
        </h3>
        <p>100 assets</p>
        <p>$5 per asset / month</p>

        <h3 style={{color:"#0077ff"}}>
          Medium Facility
        </h3>
        <p>1,000 assets</p>
        <p>$3 per asset / month</p>

        <h3 style={{color:"#0077ff"}}>
          Large Facility
        </h3>
        <p>10,000 assets</p>
        <p>$1.50 per asset / month</p>
      </section>


      <section style={card}>
        <h2>No Breaks In The Future™</h2>

        <p>
          Machines should not lose history.
          Facilities should not lose knowledge.
          Technicians should not start from zero.
        </p>
      </section>


      <footer
        style={{
          textAlign:"center",
          marginTop:"50px",
          color:"#8fc7ff",
          fontWeight:"bold",
        }}
      >
        <p>
          © 2026 BAMToolz™. All Rights Reserved.
        </p>

        <p>
          BAM Scan™ • BAM Hub™ • BAM Safety™
        </p>

        <p>
          <a href="/terms" style={link}>Terms</a>
          {" | "}
          <a href="/privacy" style={link}>Privacy</a>
          {" | "}
          <a href="/contact" style={link}>Contact</a>
        </p>

        <p>
          Ball Advanced Maintenance Tools
        </p>
      </footer>

    </main>
  );
}


const card = {
  marginTop:"35px",
  border:"2px solid #0077ff",
  borderRadius:"24px",
  padding:"25px",
  background:"#03070d",
};


const button = {
  display:"inline-block",
  background:"#0077ff",
  color:"#000",
  padding:"17px 32px",
  borderRadius:"999px",
  fontWeight:"900",
  textDecoration:"none",
};


const link = {
  color:"#0077ff",
};