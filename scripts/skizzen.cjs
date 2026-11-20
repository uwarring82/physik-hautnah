// Erzeugt die Bleistiftskizzen der vier Stationen als statische SVG-Dateien.
// Aufruf: node scripts/skizzen.cjs
// Die Skizzen stehen an den Fotoplätzen, bis Fotos der echten Aufbauten vorliegen.
const fs = require("node:fs");
const path = require("node:path");
const roughjs = require("roughjs");
const rough = roughjs.default || roughjs;

const OUT = path.join(__dirname, "..", "static", "bilder", "skizzen");
const W = 640, H = 420;
const PENCIL = "#333333";
const SOFT = "#7a7a7a";
const SHADE = { fill: "#8c8c8c", fillStyle: "hachure", hachureGap: 6, fillWeight: 0.7 };
const DARK = { fill: "#555555", fillStyle: "hachure", hachureGap: 3.5, fillWeight: 0.9 };
const LIGHT = { fill: "#a8a8a8", fillStyle: "hachure", hachureGap: 9, fillWeight: 0.6 };
const THIN = { stroke: SOFT, strokeWidth: 1 };

function sketch(name, seed, draw) {
  const gen = rough.generator({ options: { seed, roughness: 1.25, bowing: 1.1, stroke: PENCIL, strokeWidth: 1.5 } });
  const parts = [];
  const add = drawable => {
    for (const p of gen.toPaths(drawable)) {
      const d = p.d.replace(/-?\d+\.\d+/g, n => Number(n).toFixed(1));
      parts.push(`<path d="${d}" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" fill="${p.fill || "none"}"/>`);
    }
  };
  const arrow = (x, y, angle, size = 11, opts = THIN) => {
    for (const turn of [2.6, -2.6]) add(gen.line(x, y, x + size * Math.cos(angle + turn), y + size * Math.sin(angle + turn), opts));
  };
  draw(gen, add, arrow);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" fill="none" stroke-linecap="round" stroke-linejoin="round">\n<rect width="${W}" height="${H}" fill="#ffffff"/>\n${parts.join("\n")}\n</svg>\n`;
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, name + ".svg"), svg);
  console.log(name, Math.round(svg.length / 1024) + " kB");
}

const question = (gen, add, x, y, s = 1) => {
  add(gen.path(`M${x} ${y} q0 ${-16 * s} ${14 * s} ${-16 * s} q${14 * s} 0 ${14 * s} ${13 * s} q0 ${9 * s} ${-10 * s} ${14 * s} q${-5 * s} ${3 * s} ${-5 * s} ${10 * s}`, { strokeWidth: 2 }));
  add(gen.circle(x + 13 * s, y + 31 * s, 4 * s, { fill: PENCIL, fillStyle: "solid" }));
};

// Ballfalle: Gebläse mit Schlauch, senkrechtes Rohr am Stativ, ein Ball im Luftstrom.
sketch("ballfalle", 11, (gen, add, arrow) => {
  add(gen.line(50, 352, 590, 352));
  add(gen.rectangle(112, 282, 124, 70, SHADE));
  for (const y of [300, 312, 324]) add(gen.line(128, y, 170, y, THIN));
  add(gen.curve([[236, 306], [268, 308], [300, 322]]));
  add(gen.curve([[236, 330], [268, 334], [300, 346]]));
  add(gen.rectangle(300, 196, 48, 156, LIGHT));
  add(gen.line(384, 104, 384, 340));
  add(gen.rectangle(360, 340, 56, 12, DARK));
  add(gen.line(348, 252, 384, 252, { strokeWidth: 2.2 }));
  add(gen.curve([[310, 190], [304, 158], [284, 120], [296, 66]], THIN));
  add(gen.curve([[338, 190], [344, 158], [364, 120], [352, 66]], THIN));
  add(gen.line(324, 190, 324, 152, THIN));
  arrow(296, 66, -1.35);
  arrow(352, 66, -1.8);
  add(gen.circle(324, 112, 62, SHADE));
  add(gen.circle(486, 326, 52, LIGHT));
  add(gen.curve([[410, 150], [440, 164], [458, 194]], THIN));
  arrow(458, 194, 1.1);
  question(gen, add, 478, 150);
});

// Elektromotor: Batterie auf dem Magneten, darüber der gebogene Draht.
sketch("elektromotor", 23, (gen, add, arrow) => {
  add(gen.line(50, 352, 590, 352));
  add(gen.rectangle(272, 326, 96, 26, DARK));
  add(gen.rectangle(290, 150, 60, 176, LIGHT));
  add(gen.rectangle(310, 138, 20, 12));
  add(gen.line(290, 188, 350, 188));
  add(gen.line(311, 169, 329, 169, { strokeWidth: 2 }));
  add(gen.line(320, 160, 320, 178, { strokeWidth: 2 }));
  add(gen.path("M320 134 C 212 116, 192 300, 270 338", { strokeWidth: 2.2 }));
  add(gen.path("M320 134 C 428 116, 448 300, 370 338", { strokeWidth: 2.2 }));
  add(gen.arc(320, 96, 190, 46, Math.PI * 1.08, Math.PI * 1.92, false, THIN));
  arrow(411, 90, 0.9);
  add(gen.ellipse(150, 344, 64, 16, DARK));
  add(gen.curve([[470, 346], [486, 326], [500, 348], [516, 326], [530, 348], [546, 330]]));
});

// Wärmebildkamera: Kamera von hinten, gerichtet auf ein Gesicht mit Brille.
sketch("waermebildkamera", 37, (gen, add, arrow) => {
  add(gen.rectangle(84, 118, 180, 152));
  add(gen.rectangle(100, 134, 148, 104, LIGHT));
  question(gen, add, 160, 190, 1.5);
  add(gen.circle(216, 254, 10));
  add(gen.circle(236, 254, 10));
  add(gen.polygon([[148, 270], [200, 270], [192, 368], [158, 368]], SHADE));
  add(gen.circle(470, 205, 176));
  add(gen.curve([[392, 172], [426, 150], [452, 126], [492, 150], [548, 170]]));
  add(gen.curve([[400, 150], [430, 108], [510, 104], [540, 150]], THIN));
  add(gen.circle(436, 207, 58, { strokeWidth: 2.2 }));
  add(gen.circle(504, 207, 58, { strokeWidth: 2.2 }));
  add(gen.line(465, 204, 475, 204, { strokeWidth: 2.2 }));
  add(gen.line(407, 204, 384, 196, { strokeWidth: 2 }));
  add(gen.line(533, 204, 556, 196, { strokeWidth: 2 }));
  add(gen.circle(436, 209, 7, { fill: PENCIL, fillStyle: "solid" }));
  add(gen.circle(504, 209, 7, { fill: PENCIL, fillStyle: "solid" }));
  add(gen.curve([[442, 258], [470, 272], [498, 258]]));
  add(gen.path("M424 286 C 414 322, 372 334, 348 384"));
  add(gen.path("M516 286 C 526 322, 568 334, 592 384"));
  for (const y of [168, 205, 242]) {
    add(gen.curve([[368, y], [350, y - 8], [332, y + 8], [314, y - 8], [292, y]], THIN));
    arrow(292, y, Math.PI);
  }
});

// Mikroskop: Handy auf dem Objekttisch, daneben der vergrößerte Ausschnitt des Bildschirms.
sketch("mikroskop", 41, (gen, add) => {
  add(gen.line(50, 352, 590, 352));
  add(gen.rectangle(206, 330, 204, 22, SHADE));
  add(gen.path("M390 330 C 434 250, 432 150, 350 116"));
  add(gen.path("M360 330 C 396 250, 394 174, 350 150"));
  add(gen.rectangle(300, 92, 50, 112, LIGHT));
  add(gen.rectangle(310, 66, 30, 26));
  add(gen.rectangle(314, 204, 22, 34, SHADE));
  add(gen.rectangle(232, 264, 152, 12, SHADE));
  add(gen.rectangle(250, 253, 118, 11, DARK));
  add(gen.circle(410, 236, 30, LIGHT));
  add(gen.line(338, 248, 456, 180, THIN));
  add(gen.circle(520, 150, 144, { strokeWidth: 2 }));
  const fills = [DARK, { fill: "#777777", fillStyle: "cross-hatch", hachureGap: 5, fillWeight: 0.6 }, {}];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) add(gen.rectangle(476 + col * 15, 104 + row * 24, 10, 18, { strokeWidth: 1, ...fills[col % 3] }));
  }
});
