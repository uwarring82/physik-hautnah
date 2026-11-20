import React, { useState } from "react";

const colors = { Weiß: "#ffffff", Rot: "#ff0000", Grün: "#00ff00", Blau: "#0000ff" };

export default function ColorSample() {
  const [chosen, setChosen] = useState("Weiß");
  return <section className="sample"><h2>Farbprobe fürs Mikroskop</h2>
    <p>Wähle eine Farbe und richte die Optik auf die Fläche darunter.</p>
    <div className="swatches" role="group" aria-label="Farbe wählen">
      {Object.keys(colors).map(name => <button key={name} type="button" aria-pressed={chosen === name} onClick={() => setChosen(name)}>{name}</button>)}
    </div>
    <div className="color-field" role="img" aria-label={"Farbfläche " + chosen} style={{ backgroundColor: colors[chosen] }} />
  </section>;
}
