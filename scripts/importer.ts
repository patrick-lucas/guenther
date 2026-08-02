import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  console.log("Starte Handbuch-Import...");

  const datei = path.join(process.cwd(), "daten", "handbuch.md");

  const markdown = fs.readFileSync(datei, "utf8");

  const kapitel = markdown.split(/\n(?=#\s+\d+)/g);

  console.log(`${kapitel.length} Kapitel gefunden.`);

  const { error: deleteError } = await supabase
    .from("handbuch")
    .delete()
    .neq("id", 0);

  if (deleteError) {
    console.error(deleteError);
    return;
  }

  let reihenfolge = 1;
    for (const abschnitt of kapitel) {
    const zeilen = abschnitt.trim().split("\n");

    const titel = zeilen[0]
      .replace(/^#\s*/, "")
      .trim();

    const inhalt = abschnitt.trim();

    const { error } = await supabase
      .from("handbuch")
      .insert({
        kapitel: titel,
        inhalt: inhalt,
        reihenfolge: reihenfolge,
      });

    if (error) {
      console.error(`Fehler bei ${titel}:`, error);
      return;
    }

    console.log(`✓ ${titel} importiert`);

    reihenfolge++;
  }
    console.log("================================");
  console.log("Handbuch erfolgreich importiert.");
  console.log("================================");
}

main().catch((error) => {
  console.error(error);
});
