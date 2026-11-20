import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, Sources, imagePath } from "../components/layout";
import ColorSample from "../components/color-sample";
import materials from "../data/material.json";

export default function ExperimentPage({ pageContext: { experiment: ex } }) {
  const material = materials.find(item => item.slug === ex.slug);
  return <Layout><div className="shell">
    <p className="crumb"><Link to="/">Physik Hautnah</Link> / {ex.name}</p>
    <div className="project-hero"><div><p className="eyebrow">{ex.name} · {ex.field}</p><h1>{ex.question}</h1><p className="lead">{ex.intro}</p></div>
      <img alt={ex.alt} src={imagePath(ex.image)} /></div>
    <div className="reading-grid"><div className="reading">
      <section><h2>Probier es aus</h2><ol className="steps">{ex.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
      {ex.slug === "mikroskopie" && <ColorSample />}
      <details><summary>Was steckt dahinter?</summary><p>{ex.explain}</p></details>
      <section className="follow"><h2>Deine nächste Frage</h2><p>{ex.next}</p></section>
      <details><summary>Weiterlesen</summary><Sources links={ex.sources} /></details>
    </div><aside className="kit"><p className="eyebrow">Für diesen Versuch</p><h2>Das brauchst du</h2><p>{material.home}</p><Link className="textlink" to={"/material/#" + ex.slug}>Material und Kosten</Link><h3>Für die Begleitung</h3><p>{ex.care}</p></aside></div>
    <p className="back"><Link to="/#versuche">Weitere Versuche entdecken</Link></p>
  </div></Layout>;
}
export const Head = ({ pageContext: { experiment } }) => <Meta title={experiment.name} description={experiment.intro} />;
