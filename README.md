# Physik Hautnah

Projektseite zum Grundschulprogramm „Physik Hautnah“ für Lehrkräfte und Schulen, Eltern und Kinder sowie Tutorinnen und Tutoren. Sie führt in drei Ebenen von allgemein zu genau:

1. **Einstieg** (`/`): das Angebot für Schulen, die vier Stationen, der Ablauf des Besuchs.
2. **Experimentseiten** (`/experimente/<name>/`): die Kinderfrage, „Das siehst du“, „Probier es aus“ und „Warum ist das so?“.
3. **Tutorenseiten** (`/experimente/<name>/tutoren/`): Material mit Status, Aufbau, Fragen für den Tisch, fachlicher Hintergrund, Hinweise und offene Punkte.

[Webseite](https://uwarring82.github.io/physik-hautnah/)

## Stand

Entwurf 0.3. Text in [Klammern] ist ein Platzhalter. Die Erklärtexte sind als „Entwurf, fachlich noch zu prüfen“ markiert. Material und Status stammen aus der Versuchsliste, der Ablauf aus dem Unterrichtsplan, die Kinderfragen aus dem Entdeckerbuch.

## Lokal arbeiten

Mit Node.js 22 und npm:

```sh
npm ci
npm run dev
```

Gatsby zeigt die Entwicklungsfassung unter http://localhost:8000/ an. Für die Produktionsvorschau `npm run build` und danach `npm run serve` ausführen. Der Produktionspfad lautet `/physik-hautnah/`.

## Inhalte bearbeiten

- `src/data/stations.json` enthält alle Texte der vier Stationen für Ebene 2 und 3.
- `src/pages/index.jsx` ist der Einstieg, `src/templates/experiment.jsx` die Experimentseite, `src/templates/tutor.jsx` die Tutorenseite. Eine fünfte Station braucht nur einen weiteren Eintrag in `stations.json` und eine Farbzuordnung in `site.css`.
- `static/bilder/` enthält Illustrationen der früheren Fassung. Die Seite bindet sie derzeit nicht ein.
- GitHub Actions baut bei jedem Push auf `main` mit Gatsby und veröffentlicht das Ergebnis auf GitHub Pages.

## Gestaltung

Farben und Satzregeln folgen dem Corporate Design der Universität Freiburg (https://cd.uni-freiburg.de/). Die Farbwerte stehen als Variablen am Anfang von `src/styles/site.css`. Die vier Zusatzfarben kennzeichnen die vier Stationen. Die Hausschrift Social ist lizenzpflichtig und wird nicht eingebettet. Die Seite verwendet Arial, die das Corporate Design für den Arbeitsalltag vorsieht. Das Universitätslogo ist nicht enthalten: Die offiziellen Dateien liegen im Intranet der Universität. Im Fuß der Seite ist der Platz dafür markiert.
