"use client";

import { useState } from "react";

type Props = {
  onSuccess: () => void;
};

const PASSWORT = "1310";

export default function PasswordScreen({ onSuccess }: Props) {
  const [eingabe, setEingabe] = useState("");
  const [fehler, setFehler] = useState("");

  function anmelden() {
    if (eingabe === PASSWORT) {
      onSuccess();
    } else {
      setFehler("Falsches Passwort.");
    }
  }

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
        <h1>🔒 Günther</h1>

        <input
          type="password"
          placeholder="Passwort"
          value={eingabe}
          onChange={(e) => setEingabe(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          onClick={anmelden}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Anmelden
        </button>

        <p style={{ color: "red" }}>{fehler}</p>
      </div>
    </main>
  );
}