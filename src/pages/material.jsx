import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, Sources } from "../components/layout";
import materials from "../data/material.json";

export default function MaterialsPage() {
  return <Layout><div className="shell material-page">
    <p className="crumb"><Link to="/">Physik Hautnah</Link> / Materialliste</p>
    <div className="materials-head"><div><p className="eyebrow">Zuhause und in der Grundschule</p><h1>Die Materialliste</h1>
    <p className="lead">Schau zuerst im Mäppchen, im Spielzeugregal und in der Schulsammlung. Die Mengen beziehen sich auf einen gemeinsam genutzten Versuchstisch.</p></div>
    <button type="button" className="button light print" onClick={() => window.print()}>Liste drucken</button></div>
    <nav className="jump" aria-label="Material nach Versuch">{materials.map(item => <a key={item.slug} href={"#" + item.slug}>{item.title}</a>)}</nav>
    <p className="price-note">Preisbeispiele aus Deutschland, Stand 20. November 2026, ohne Versand. 0 € bedeutet, dass das Material vorhanden ist oder kostenlos geliehen wird.</p>
    {materials.map(item => <section className="material-row" key={item.slug} id={item.slug}>
      <div><h2>{item.title}</h2><Link className="textlink" to={"/versuche/" + item.slug + "/"}>Zum Versuch</Link></div>
      <div className="material-body"><dl><dt>Zuhause</dt><dd>{item.home}</dd><dt>Grundschule</dt><dd>{item.school}</dd><dt>Kosten</dt><dd>{item.cost}</dd></dl><Sources links={item.sources}/></div>
    </section>)}
  </div></Layout>;
}
export const Head = () => <Meta title="Materialliste mit Preisbeispielen" description="Material pro Tisch, Leihalternativen und günstige Einkaufsmöglichkeiten zu den vier Physikversuchen." />;
