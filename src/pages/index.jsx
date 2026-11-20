import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, Icon, Skizze } from "../components/layout";
import stations from "../data/stations.json";

// Ebene 1: Einstieg für Lehrkräfte und Schulen.
export default function HomePage() {
  return <Layout home>
    <section className="shell hero">
      <div className="hero-text">
        <p className="offer">Ein Angebot für Grundschulen von [NAME DER ARBEITSGRUPPE]</p>
        <h1>Vier Experimente kommen in Ihre Klasse.</h1>
        <p className="lead">Physik Hautnah besucht Grundschulen für eine Doppelstunde. Die Kinder vermuten, probieren an vier Stationen aus und halten im Entdeckerbuch fest, was sie beobachtet haben.</p>
        <div className="actions">
          <a className="button" href="#kontakt">Besuch anfragen</a>
          <a className="textlink" href="#experimente">Die vier Experimente ansehen</a>
        </div>
      </div>
      <Skizze slug={stations[0].slug} alt={stations[0].skizze} eager />
    </section>

    <section className="shell section" id="experimente">
      <div className="head">
        <h2>Vier Stationen, vier Fragen</h2>
        <p className="hint">Jede Station beginnt mit einer Frage. Die Kinder beantworten sie am Versuchstisch und in ihrem Entdeckerbuch.</p>
      </div>
      <div className="cards">{stations.map(station => <Link key={station.slug} className={"card tone-" + station.slug} to={"/experimente/" + station.slug + "/"}>
        <Icon name={station.icon} />
        <h3>{station.name}</h3>
        <p>{station.karte}</p>
        <span className="more">Zum Experiment</span>
      </Link>)}</div>
    </section>

    <section className="band" id="ablauf">
      <div className="shell section">
        <div className="head">
          <h2>So läuft der Besuch</h2>
          <p className="hint">Eine Doppelstunde im Klassenraum, 90 Minuten. Die Kinder brauchen keine eigenen Geräte.</p>
        </div>
        <div className="triple">
          <div className="step"><span className="num" aria-hidden="true">1</span><h3>Einstieg im Stuhlkreis</h3><p>Jedes Kind wählt eine Bildkarte und überlegt, was sie mit Naturwissenschaften zu tun hat. Danach stellen wir die vier Stationen vor.</p></div>
          <div className="step"><span className="num" aria-hidden="true">2</span><h3>Vier Stationen in Gruppen</h3><p>Die Gruppen wechseln von Tisch zu Tisch. An jedem Tisch warten eine Frage, ein Versuch und eine Seite im Entdeckerbuch.</p></div>
          <div className="step"><span className="num" aria-hidden="true">3</span><h3>Abschluss im Kreis</h3><p>Die Klasse trägt zusammen, was sie herausgefunden hat. [ABSCHLUSSVERSUCH, noch in Abstimmung]</p></div>
        </div>
      </div>
    </section>

    <section className="shell section" id="wege">
      <div className="head"><h2>Weiterlesen, je nach Rolle</h2></div>
      <div className="triple">
        <div className="path"><h3>Lehrkräfte und Schulen</h3><p>Sie planen einen Besuch? Wir stimmen Termin und Raum mit Ihnen ab. [KLASSENSTUFEN] · [GRUPPENGRÖSSE] · [WAS DIE SCHULE BEREITSTELLT]</p><a className="textlink" href="#kontakt">Besuch anfragen</a></div>
        <div className="path"><h3>Eltern und Kinder</h3><p>Was war das für ein Versuch? Jede Experimentseite zeigt die Frage, was zu sehen war und warum es so ist.</p><a className="textlink" href="#experimente">Experimente nachlesen</a></div>
        <div className="path"><h3>Tutorinnen und Tutoren</h3><p>Du betreust eine Station? Zu jedem Experiment gibt es eine Seite mit Material, Aufbau und Hinweisen für den Tisch.</p><div className="links">{stations.map(station => <Link key={station.slug} className="textlink" to={"/experimente/" + station.slug + "/tutoren/"}>{station.short}</Link>)}</div></div>
      </div>
    </section>

    <section className="contact" id="kontakt">
      <div className="shell section">
        <h2>Besuch anfragen</h2>
        <p>Schreiben Sie uns, welche Klasse und welcher Zeitraum infrage kommen. Wir melden uns mit einem Terminvorschlag.</p>
        <p className="big">[KONTAKT-E-MAIL] · [ANSPRECHPERSON]</p>
      </div>
    </section>
  </Layout>;
}

export const Head = () => <Meta title="Physik für die Grundschule" description="Physik Hautnah besucht Grundschulen mit vier Experimentierstationen: Ballfalle, Elektromotor, Wärmebildkamera und Mikroskop." />;
