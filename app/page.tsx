"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PasswordScreen from "../components/PasswordScreen";
import Dashboard from "../components/Dashboard";
import Handbuch from "../components/Handbuch";
import Tagebuch from "../components/Tagebuch";
import GPS from "../components/GPS";

export default function Home() {
  const [freigeschaltet, setFreigeschaltet] = useState(false);
  const [seite, setSeite] = useState("dashboard");
  const [handbuch, setHandbuch] = useState("Handbuch wird geladen...");
  const [tagebuch, setTagebuch] = useState("Tagebuch wird geladen...");
  const [gps, setGps] = useState("GPS wird geladen...");

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
  useEffect(() => {
  fetch("/tagebuch.md")
    .then(async (res) => {
      const text = await res.text();
      setTagebuch(text);
    })
    .catch(() => {
      setTagebuch("Fehler beim Laden des Tagebuchs.");
    });
}, []);
useEffect(() => {
  fetch("/gps.md")
    .then(async (res) => {
      const text = await res.text();
      setGps(text);
    })
    .catch(() => {
      setGps("Fehler beim Laden des GPS.");
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
    <Handbuch
      handbuch={handbuch}
      onBack={() => setSeite("dashboard")}
    />
  );
}
if (seite === "tagebuch") {
  return (
<Tagebuch
  tagebuch={tagebuch}
  onBack={() => setSeite("dashboard")}
/>
  );
}
if (seite === "gps") {
  return (
    <GPS
      gps={gps}
      onBack={() => setSeite("dashboard")}
    />
  );
}
return null;
}