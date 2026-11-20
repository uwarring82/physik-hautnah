# Physik Hautnah

Eine illustrierte Gatsby-Webseite für Kinder, Eltern, Lehrkräfte, Tutorinnen, Tutoren und Hochschulgruppen. Die Ballfalle führt in vier frei zugängliche Versuche ein. Jede Projektseite enthält eine Frage, einen Versuch, eine fachliche Vertiefung und einen Link zur zugehörigen Materialliste.

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
- `src/pages/index.jsx` organisiert die Startseite, `src/templates/experiment.jsx` die Vertiefungen.
- `static/bilder/` enthält die für das Projekt erstellten Illustrationen. Sie zeigen die Versuche schematisch.
- GitHub Actions baut bei jedem Push auf `main` mit Gatsby und veröffentlicht das Ergebnis auf GitHub Pages. Die Veröffentlichungsquelle ist **GitHub Actions**.

Die Inhalte greifen die Unterrichtsunterlagen „Physik Hautnah“, das Entdeckerbuch und das Whitepaper auf. Die Motorstation verwendet für Zuhause und Grundschule einen gekapselten Kleinmotor. Die Stationsauswahl legt weder Gruppengröße noch Personalbedarf fest.
