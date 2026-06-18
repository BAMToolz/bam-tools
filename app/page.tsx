export default function Home() {
  return (
    <main style={{padding:"30px"}}>
      <h1>BAMToolz</h1>

      <h3>AI Maintenance Scanner</h3>

      <p>
        Upload equipment tags, machine plates,
        wiring diagrams, and maintenance logs.
      </p>

      <input
        type="file"
        accept="image/*"
        capture="environment"
      />

      <br/><br/>

      <button>
        Scan Equipment
      </button>
    </main>
  );
}
