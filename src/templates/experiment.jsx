import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, Icon, Skizze, Chip } from "../components/layout";

// Ebene 2: Experimentseite zum Nachlesen für Kinder und Eltern.
export default function ExperimentPage({ pageContext: { station: s, next } }) {
  return <Layout>
    <nav className="shell crumb" aria-label="Brotkrumen">
      <Link to="/">Physik Hautnah</Link><span aria-hidden="true">/</span><span aria-current="page">{s.name}</span>
    </nav>

    <section className={"x-hero tone-" + s.slug}>
      <div className="shell">
        <div className="x-text">
          <Icon name={s.icon} size={60} />
          <h1>{s.name}</h1>
          {s.fragen.map(frage => <p key={frage} className="question">{frage}</p>)}
        </div>
        <Skizze slug={s.slug} alt={s.skizze} eager />
      </div>
    </section>

    <section className="shell section cols">
      <div className="col"><h2>Das siehst du</h2><p>{s.sehen}</p></div>
      <div className="col"><h2>Probier es aus</h2><ol>{s.probieren.map(schritt => <li key={schritt}>{schritt}</li>)}</ol></div>
      <div className="col"><h2>Warum ist das so?</h2><p>{s.warum}</p><Chip kind="entwurf">Entwurf, fachlich noch zu prüfen</Chip></div>
    </section>

    <section className="band">
      <div className="shell section cta">
        <div className="cta-text"><h2>Du betreust diese Station?</h2><p>Material, Aufbau, Fragen für den Tisch und der fachliche Hintergrund stehen eine Ebene tiefer.</p></div>
        <div className="actions">
          <Link className="button" to={"/experimente/" + s.slug + "/tutoren/"}>Station vorbereiten</Link>
          <Link className="textlink" to={"/experimente/" + next.slug + "/"}>Weiter: {next.name}</Link>
        </div>
      </div>
    </section>
  </Layout>;
}

export const Head = ({ pageContext: { station } }) => <Meta title={station.name} description={station.karte + " Das Experiment zum Nachlesen."} />;
