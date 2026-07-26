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
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "20px",
    minHeight: "600px",
    background: "#181818",
    marginTop: "20px",
  }}
>
  <p style={{ color: "#888" }}>
    Hier erscheint später der komplette Verlauf zwischen dir und dem Günther-Motor.
  </p>
</div>
    </main>
  );
}