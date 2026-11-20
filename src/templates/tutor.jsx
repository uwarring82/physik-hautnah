import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, Icon, Skizze, Chip } from "../components/layout";

const STATUS = { da: "Laut Liste da", bestellt: "Bestellt", offen: "Offen" };

// Ebene 3: Station vorbereiten, für Tutorinnen und Tutoren.
export default function TutorPage({ pageContext: { station: s, next } }) {
  return <Layout>
    <nav className="shell crumb" aria-label="Brotkrumen">
      <Link to="/">Physik Hautnah</Link><span aria-hidden="true">/</span>
      <Link to={"/experimente/" + s.slug + "/"}>{s.name}</Link><span aria-hidden="true">/</span>
      <span aria-current="page">Für Tutorinnen und Tutoren</span>
    </nav>

    <section className={"t-head tone-" + s.slug}>
      <div className="shell">
        <p className="role"><Icon name={s.icon} />Für Tutorinnen und Tutoren</p>
        <h1>Station vorbereiten: {s.name}</h1>
        <p>Diese Seite ist für alle, die den Tisch betreuen. Die Angaben stammen aus Versuchsliste und Unterrichtsplan im Entwurfsstand.</p>
      </div>
    </section>

    <section className="shell t-section two">
      <div className="block">
        <h2>Material</h2>
        <ul className="matlist">{s.material.map(item => <li key={item.name}>
          <span>{item.name}{item.note && <small>{item.note}</small>}</span>
          <Chip kind={item.status}>{STATUS[item.status]}</Chip>
        </li>)}</ul>
      </div>
      <div className="block">
        <h2>Aufbau</h2>
        <Skizze slug={s.slug} alt={s.skizze} />
        <p className="muted">[AUFBAU IN SCHRITTEN] Folgt nach dem Probeaufbau.</p>
      </div>
    </section>

    <section className="shell t-section">
      <div className="head">
        <h2>Am Tisch</h2>
        <p className="hint">Bitte ein Kind um eine Vermutung und ein zweites um eine Beschreibung dessen, was es sieht.</p>
      </div>
      <div className="triple">
        <div className="step"><span className="num" aria-hidden="true">1</span><h3>Vermuten</h3><p>{s.vermuten}</p></div>
        <div className="step"><span className="num" aria-hidden="true">2</span><h3>Ausprobieren</h3><p>{s.ausprobieren}</p></div>
        <div className="step"><span className="num" aria-hidden="true">3</span><h3>Festhalten</h3><p>{s.festhalten}</p></div>
      </div>
    </section>

    <section className="shell t-section t-last two">
      <div className="block">
        <h2>Hintergrund für dich</h2>
        <p>{s.hintergrund}</p>
        <Chip kind="entwurf">Entwurf, fachlich noch zu prüfen</Chip>
      </div>
      <div className="block">
        <h2>Darauf achtest du</h2>
        <ul className="plainlist">{s.achten.map(punkt => <li key={punkt}>{punkt}</li>)}</ul>
      </div>
    </section>

    <section className="band">
      <div className="shell section two">
        <div className="block">
          <h2>Noch offen</h2>
          <ul className="plainlist">{s.offen.map(punkt => <li key={punkt}>{punkt}</li>)}</ul>
        </div>
        <div className="pager">
          <Link className="textlink" to={"/experimente/" + s.slug + "/"}>Zurück zur Experimentseite</Link>
          <Link className="textlink" to={"/experimente/" + next.slug + "/tutoren/"}>Nächste Station: {next.name}</Link>
        </div>
      </div>
    </section>
  </Layout>;
}

export const Head = ({ pageContext: { station } }) => <Meta title={"Station vorbereiten: " + station.name} description={"Material, Aufbau und Hinweise für die Betreuung der Station " + station.name + "."} />;
