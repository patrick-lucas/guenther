type Props = {
  onBack: () => void;
};

export default function Trading({ onBack }: Props) {
  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        ← Dashboard
      </button>

      <h1>📈 Trading</h1>

      <div
  style={{
    border: "2px dashed #555",
    borderRadius: "12px",
    padding: "40px",
    textAlign: "center",
    marginBottom: "30px",
  }}
>
  <h2>📷 Chart hochladen</h2>

  <p>Hier wird später ein Chart ausgewählt.</p>

  <button
    style={{
      padding: "12px 24px",
      cursor: "pointer",
      marginTop: "15px",
    }}
  >
    Bild auswählen
  </button>
</div>
<div
  style={{
    marginBottom: "30px",
  }}
>
  <h2>💬 Nachricht</h2>

  <textarea
    placeholder="z.B. NVIDIA Long analysieren..."
    rows={5}
    style={{
      width: "100%",
      padding: "15px",
      borderRadius: "12px",
      border: "1px solid #555",
      background: "#1d1d1d",
      color: "white",
      resize: "vertical",
      fontSize: "16px",
      boxSizing: "border-box",
    }}
  />
</div>
<div
  style={{
    textAlign: "center",
    marginBottom: "40px",
  }}
>
  <button
    style={{
      padding: "15px 40px",
      fontSize: "18px",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      background: "#2d7ff9",
      color: "white",
      fontWeight: "bold",
    }}
  >
    ▶ Analyse starten
  </button>
</div>
<div
  style={{
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "20px",
    minHeight: "250px",
    background: "#181818",
  }}
>
  <h2>📊 Analyse</h2>

  <p style={{ color: "#888" }}>
    Hier erscheint später die Analyse des Günther-Motors.
  </p>
</div>
    </main>
  );
}