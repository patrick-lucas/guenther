"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"
import PasswordScreen from "../components/PasswordScreen";

export default function Home() {
  const [freigeschaltet, setFreigeschaltet] = useState(false);
  const [handbuch, setHandbuch] = useState("Handbuch wird geladen...");

useEffect(() => {
  fetch("/handbuch.md")
    .then(async (res) => {
      console.log("Status:", res.status);

      const text = await res.text();

      console.log("Textlänge:", text.length);

      setHandbuch(text);
    })
    .catch((err) => {
      console.error(err);
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

return (
    <main
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>📘 Günther-Patrick-System</h1>

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