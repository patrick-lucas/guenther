type Props = {
  onBack: () => void;
};

export default function Tagebuch({ onBack }: Props) {
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

      <h1>📒 Tagebuch</h1>

      <p>Hier erscheint später das Trading-Tagebuch.</p>
    </main>
  );
}