# Physik Hautnah

Eine illustrierte Gatsby-Webseite für Lehrkräfte und Schulen, Eltern und Kinder sowie Tutorinnen und Tutoren. Sie führt in drei Ebenen von allgemein zu genau:

1. **Einstieg** (`/`): das Angebot für Schulen, die vier Stationen, der Ablauf des Besuchs.
2. **Versuchsseiten** (`/versuche/<name>/`): Frage, Versuch zum Nachmachen, fachliche Vertiefung, Link zur Materialliste.
3. **Stationsseiten** (`/versuche/<name>/station/`): Material mit Status, Aufbau und Hinweise für alle, die den Tisch beim Schulbesuch betreuen.

[Webseite](https://uwarring82.github.io/physik-hautnah/) · [Materialliste](https://uwarring82.github.io/physik-hautnah/material/)

## Lokal arbeiten

Mit Node.js 22 und npm:

```sh
npm ci
npm run dev
```

Gatsby zeigt die Entwicklungsfassung unter http://localhost:8000/ an. Für die Produktionsvorschau `npm run build` und danach `npm run serve` ausführen. Der Produktionspfad lautet `/physik-hautnah/`.

## Inhalte bearbeiten

- `src/data/experiments.json` enthält die Texte und Quellen zu allen vier Versuchen.
- `src/data/material.json` enthält Einkaufsmengen, Leihalternativen und datierte Preisbeispiele.
- `src/data/stations.json` enthält die Angaben für die Stationsseiten: Fragen im Entdeckerbuch, Material mit Status, Hinweise für den Tisch und offene Punkte.
- `src/pages/index.jsx` organisiert die Startseite, `src/templates/experiment.jsx` die Versuchsseiten und `src/templates/station.jsx` die Stationsseiten.
- Text in [Klammern] ist ein Platzhalter und wird noch ergänzt.
- `static/bilder/` enthält die für das Projekt erstellten Illustrationen. Sie zeigen die Versuche schematisch.
- GitHub Actions baut bei jedem Push auf `main` mit Gatsby und veröffentlicht das Ergebnis auf GitHub Pages. Die Veröffentlichungsquelle ist **GitHub Actions**.

Die Inhalte greifen die Unterrichtsunterlagen „Physik Hautnah“, das Entdeckerbuch und das Whitepaper auf. Die Versuchsseite zum Elektromotor verwendet für Zuhause und Grundschule einen gekapselten Kleinmotor. Die Stationsseite beschreibt den Selbstbau aus dem Unterrichtsplan und führt die Wahl der Variante als offenen Punkt. Die Stationsauswahl legt weder Gruppengröße noch Personalbedarf fest.

## Gestaltung

Farben und Schriftregeln folgen dem Corporate Design der Universität Freiburg (https://cd.uni-freiburg.de/). Die Farbwerte stehen als Variablen am Anfang von `src/styles/site.css`. Die Hausschrift Social ist lizenzpflichtig und wird nicht eingebettet. Die Seite verwendet Arial, die das Corporate Design für den Arbeitsalltag vorsieht. Das Universitätslogo ist nicht enthalten: Die offiziellen Dateien liegen im Intranet der Universität.
