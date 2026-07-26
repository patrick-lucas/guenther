import ReactMarkdown from "react-markdown";

type Props = {
  tagebuch: string;
  onBack: () => void;
};

export default function Tagebuch({ tagebuch, onBack }: Props) {
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

      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ReactMarkdown>{tagebuch}</ReactMarkdown>
      </div>
    </main>
  );
}