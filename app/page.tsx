"use client";

import { useEffect, useState } from "react";
import { supabase } from "../data/supabase";
import PasswordScreen from "../components/PasswordScreen";
import Dashboard from "../components/Dashboard";
import Handbuch from "../components/Handbuch";
import Tagebuch from "../components/Tagebuch";
import GPS from "../components/GPS";
import Trading from "../components/Trading";

export default function Home() {
  const [freigeschaltet, setFreigeschaltet] = useState(false);
  const [seite, setSeite] = useState("dashboard");

  const [handbuch, setHandbuch] = useState("Handbuch wird geladen...");
  const [tagebuch, setTagebuch] = useState("Tagebuch wird geladen...");
  const [gps, setGps] = useState("GPS wird geladen...");

  // Handbuch aus Supabase laden
  useEffect(() => {
    async function ladeHandbuch() {
      const { data, error } = await supabase
        .from("handbuch")
        .select("inhalt")
        .order("reihenfolge", { ascending: true });

          if (error) {
      console.log(error);
      setHandbuch("Fehler beim Laden des Handbuchs.");
      return;
    }

    if (data) {
      const komplett = data
        .map((eintrag) => eintrag.inhalt)
        .join("\n\n");

      setHandbuch(komplett);
    }
  }

    ladeHandbuch();
  }, []);

  // Tagebuch laden
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

  // GPS laden
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

  // Verbindung zu Supabase testen
  useEffect(() => {
    async function test() {
      const { data, error } = await supabase
        .from("benutzer")
        .select("*");

      console.log("DATEN:", data);
      console.log("FEHLER:", error);

      if (!error && data && data.length === 0) {
        await supabase.from("benutzer").insert([
          {
            name: "Patrick",
            budget: 1000,
            broker: "Flatex",
            waehrung: "EUR",
            administrator: true,
          },
        ]);

        console.log("Patrick wurde angelegt.");
      } else if (!error) {
        console.log("Patrick existiert bereits.");
      }
    }

    test();
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

  if (seite === "traden") {
    return (
      <Trading
        onBack={() => setSeite("dashboard")}
      />
    );
  }

  return null;
}