import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, imagePath } from "../components/layout";
import experiments from "../data/experiments.json";

export default function HomePage() {
  const ball = experiments[0];
  return <Layout flush>
    <section className="shell hero">
      <div className="hero-text">
        <p className="eyebrow">Für Grundschulen</p>
        <h1>Vier Experimente kommen in Ihre Klasse.</h1>
        <p className="lead">Physik Hautnah besucht Grundschulen für eine Doppelstunde. Die Kinder vermuten, probieren an vier Stationen aus und halten im Entdeckerbuch fest, was sie beobachtet haben.</p>
        <div className="actions">
          <a className="button" href="#kontakt">Besuch anfragen</a>
          <a className="textlink" href="#versuche">Die vier Versuche ansehen</a>
        </div>
      </div>
      <figure className="hero-art"><img alt={ball.alt} src={imagePath(ball.image)} srcSet={imagePath("ballfalle-klein.webp") + " 720w, " + imagePath(ball.image) + " 1280w"} sizes="(max-width: 760px) 100vw, 50vw" width="1280" height="853" fetchPriority="high" /></figure>
    </section>

    <section className="shell section" id="versuche">
      <h2>Vier Stationen, vier Fragen</h2>
      <p className="hint">Jede Station beginnt mit einer Frage. Auf den Versuchsseiten können Kinder und Eltern alles nachlesen und zuhause ausprobieren.</p>
      <div className="cards">{experiments.map(experiment => <article key={experiment.slug} className={"tone-" + experiment.slug}>
        <Link className="card" to={"/versuche/" + experiment.slug + "/"}>
          <img src={imagePath(experiment.image)} alt="" width="880" height="432" loading="lazy" />
          <div className="card-body"><p className="eyebrow">{experiment.name}</p><h3>{experiment.question}</h3><span className="card-more">Zum Versuch</span></div>
        </Link>
      </article>)}</div>
    </section>

    <section className="band" id="schulen">
      <div className="shell section">
        <h2>So läuft der Besuch</h2>
        <p className="hint">Eine Doppelstunde im Klassenraum, 90 Minuten. Die Kinder brauchen keine eigenen Geräte.</p>
        <div className="triple">
          <div><span className="num" aria-hidden="true">1</span><h3>Einstieg im Stuhlkreis</h3><p>Jedes Kind wählt eine Bildkarte und überlegt, was sie mit Naturwissenschaften zu tun hat. Danach stellen wir die vier Stationen vor.</p></div>
          <div><span className="num" aria-hidden="true">2</span><h3>Vier Stationen in Gruppen</h3><p>Die Gruppen wechseln von Tisch zu Tisch. An jedem Tisch warten eine Frage, ein Versuch und eine Seite im Entdeckerbuch.</p></div>
          <div><span className="num" aria-hidden="true">3</span><h3>Abschluss im Kreis</h3><p>Die Klasse trägt zusammen, was sie herausgefunden hat. [ABSCHLUSSVERSUCH, noch in Abstimmung]</p></div>
        </div>
      </div>
    </section>

    <section className="shell section">
      <h2>Weiterlesen, je nach Rolle</h2>
      <div className="triple">
        <div className="path"><h3>Lehrkräfte und Schulen</h3><p>Sie planen einen Besuch? Wir stimmen Termin und Raum mit Ihnen ab. [KLASSENSTUFEN] · [GRUPPENGRÖSSE] · [WAS DIE SCHULE BEREITSTELLT]</p><a className="textlink" href="#kontakt">Besuch anfragen</a></div>
        <div className="path"><h3>Eltern und Kinder</h3><p>Was war das für ein Versuch? Jede Versuchsseite zeigt die Frage, den Versuch zum Nachmachen und was dahintersteckt.</p><div className="path-links"><a className="textlink" href="#versuche">Versuche nachlesen</a><Link className="textlink" to="/material/">Zur Materialliste</Link></div></div>
        <div className="path"><h3>Tutorinnen und Tutoren</h3><p>Du betreust eine Station? Zu jedem Versuch gibt es eine Seite mit Material, Aufbau und Hinweisen für den Tisch.</p><div className="path-links">{experiments.map(experiment => <Link key={experiment.slug} className="textlink" to={"/versuche/" + experiment.slug + "/station/"}>{experiment.name}</Link>)}</div></div>
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
export const Head = () => <Meta title="Physik für die Grundschule" description="Physik Hautnah besucht Grundschulen mit vier Experimentierstationen. Versuche zum Nachlesen, Materialliste und Hinweise für die Betreuung." />;
