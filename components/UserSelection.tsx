"use client";

type Props = {
  onSelect: (benutzer: string) => void;
};

export default function UserSelection({ onSelect }: Props) {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
        color: "white",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          borderRadius: "12px",
          background: "#222",
          textAlign: "center",
        }}
      >
        <h1>👤 Benutzer wählen</h1>

        <button
          onClick={() => onSelect("Patrick")}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Patrick
        </button>

        <button
          onClick={() => onSelect("Lucas")}
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Lucas
        </button>
      </div>
    </main>
  );
}