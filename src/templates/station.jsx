import React from "react";
import { Link } from "gatsby";
import { Layout, Meta } from "../components/layout";

const STATUS = { da: "Laut Liste da", bestellt: "Bestellt", offen: "Offen" };

export default function StationPage({ pageContext: { experiment: ex, station: st, next } }) {
  return <Layout><div className={"shell station tone-" + ex.slug}>
    <p className="crumb"><Link to="/">Physik Hautnah</Link> / <Link to={"/versuche/" + ex.slug + "/"}>{ex.name}</Link> / Station vorbereiten</p>
    <header className="station-head">
      <p className="eyebrow">Für Tutorinnen und Tutoren</p>
      <h1>Station vorbereiten: {ex.name}</h1>
      <p className="lead">Diese Seite ist für alle, die den Tisch beim Schulbesuch betreuen. Die Angaben stammen aus Versuchsliste und Unterrichtsplan im Entwurfsstand.</p>
    </header>

    <section className="heft">
      <h2>Fragen im Entdeckerbuch</h2>
      <ul className="questions">{st.heft.map(question => <li key={question}>{question}</li>)}</ul>
      {st.heftNote && <p className="hint">{st.heftNote}</p>}
    </section>

    <div className="two">
      <section>
        <h2>Material</h2>
        <ul className="matlist">{st.material.map(item => <li key={item.name}>
          <span>{item.name}{item.note && <small>{item.note}</small>}</span>
          <span className={"chip " + item.status}>{STATUS[item.status]}</span>
        </li>)}</ul>
      </section>
      <section>
        <h2>Aufbau</h2>
        <p>{st.difference}</p>
        <p className="placeholder">[AUFBAUFOTO] und [AUFBAU IN SCHRITTEN] folgen nach dem Probeaufbau.</p>
      </section>
    </div>

    <section>
      <h2>Am Tisch</h2>
      <p className="hint">Bitte ein Kind um eine Vermutung und ein zweites um eine Beschreibung dessen, was es sieht.</p>
      <div className="triple">
        <div><span className="num" aria-hidden="true">1</span><h3>Vermuten</h3><p>{st.predict}</p></div>
        <div><span className="num" aria-hidden="true">2</span><h3>Ausprobieren</h3><p>{st.try}</p></div>
        <div><span className="num" aria-hidden="true">3</span><h3>Festhalten</h3><p>{st.record}</p></div>
      </div>
    </section>

    <div className="two">
      <section>
        <h2>Darauf achtest du</h2>
        <ul className="plainlist">{st.watch.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <section>
        <h2>Hintergrund</h2>
        <p>Die fachliche Erklärung und die Quellen stehen auf der Versuchsseite unter „Was steckt dahinter?“.</p>
        {st.note && <><p>{st.note}</p><p><span className="chip entwurf">Entwurf, fachlich noch zu prüfen</span></p></>}
        <Link className="textlink" to={"/versuche/" + ex.slug + "/"}>Zur Versuchsseite</Link>
      </section>
    </div>

    <section className="open">
      <h2>Noch offen</h2>
      <ul className="plainlist">{st.open.map(item => <li key={item}>{item}</li>)}</ul>
    </section>

    <p className="pager">
      <Link className="textlink" to={"/versuche/" + ex.slug + "/"}>Zurück zum Versuch</Link>
      <Link className="textlink" to={"/versuche/" + next.slug + "/station/"}>Nächste Station: {next.name}</Link>
    </p>
  </div></Layout>;
}
export const Head = ({ pageContext: { experiment } }) => <Meta title={"Station vorbereiten: " + experiment.name} description={"Material, Aufbau und Hinweise für die Betreuung der Station " + experiment.name + " beim Schulbesuch."} />;
