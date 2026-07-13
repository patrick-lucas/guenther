import ReactMarkdown from "react-markdown";

type Props = {
  handbuch: string;
  onBack: () => void;
};

export default function Handbuch({ handbuch, onBack }: Props) {
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

      <h1>📘 Handbuch</h1>

      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <ReactMarkdown>{handbuch}</ReactMarkdown>
      </div>
    </main>
  );
}