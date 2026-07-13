"use client";

type DashboardProps = {
  onNavigate: (seite: string) => void;
};

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        📈 Günther-Patrick-System
      </h1>

      <p style={{ textAlign: "center", color: "#888" }}>
        Trading Dashboard
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          display: "grid",
          gap: "20px",
        }}
      >
        <Button
          titel="📘 Handbuch"
          text="Trading-Handbuch öffnen"
          onClick={() => onNavigate("handbuch")}
        />

        <Button
          titel="📓 Tagebuch"
          text="Trading-Tagebuch"
          onClick={() => onNavigate("tagebuch")}
        />

        <Button
          titel="🧠 GPS"
          text="Günther-Patrick-System"
          onClick={() => onNavigate("gps")}
        />

        <Button
          titel="📈 Traden"
          text="Charts hochladen & Analyse"
          onClick={() => onNavigate("traden")}
        />

        <Button
          titel="🎯 Kandidaten"
          text="Neue Trading-Kandidaten"
          onClick={() => onNavigate("kandidaten")}
        />
      </div>

      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
          color: "#888",
        }}
      >
        <p>📊 Aktive Trades: 0</p>
        <p>🎯 Kandidaten: 0</p>
        <p>📅 Handbuch-Version: aktuell</p>
      </div>
    </main>
  );
}

function Button({
  titel,
  text,
  onClick,
}: {
  titel: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "#1d1d1d",
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "20px",
        color: "white",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <h2>{titel}</h2>
      <p>{text}</p>
    </button>
  );
}