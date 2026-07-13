"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PasswordScreen from "../components/PasswordScreen";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [freigeschaltet, setFreigeschaltet] = useState(false);
  const [seite, setSeite] = useState("dashboard");
  const [handbuch, setHandbuch] = useState("Handbuch wird geladen...");

  useEffect(() => {
    fetch("/handbuch.md")
      .then(async (res) => {
        const text = await res.text();
        setHandbuch(text);
      })
      .catch(() => {
        setHandbuch("Fehler beim Laden des Handbuchs.");
      });
  }, []);

  if (!freigeschaltet) {
    return (
      <PasswordScreen
        onSuccess={() => setFreigeschaltet(true)}
      />
    );
  }

  if (seite === "dashboard") {
  return (
    <Dashboard
      onNavigate={(ziel) => setSeite(ziel)}
    />
  );
}
if (seite === "handbuch") {
  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <button
        onClick={() => setSeite("dashboard")}
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
return null;
}