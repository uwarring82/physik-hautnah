import React from "react";
import { Link } from "gatsby";
import { Layout, Meta, imagePath } from "../components/layout";
import experiments from "../data/experiments.json";

export default function HomePage() {
  const [ball, ...others] = experiments;
  return <Layout>
    <section className="shell hero">
      <div className="hero-text">
        <p className="eyebrow">Physik für die Grundschule</p>
        <h1>Kommt der<br/><em>Ball mit?</em></h1>
        <p className="lead">Noch zeigt das Rohr nach oben. Im Luftstrom schwebt ein Ball. Was passiert, wenn wir das Rohr ein wenig zur Seite neigen?</p>
        <Link className="button" to="/versuche/ballfalle/">Die Ballfalle entdecken</Link>
      </div>
      <figure className="hero-art"><img alt={ball.alt} src={imagePath(ball.image)} srcSet={imagePath("ballfalle-klein.webp") + " 720w, " + imagePath(ball.image) + " 1280w"} sizes="(max-width: 760px) 100vw, 56vw" width="1280" height="853" fetchPriority="high" /></figure>
    </section>
    <section className="shell collection" id="versuche">
      <h2>Was möchtest du untersuchen?</h2>
      <div className="cards">{others.map(experiment => <article key={experiment.slug}>
        <Link className="card" to={"/versuche/" + experiment.slug + "/"}>
          <img src={imagePath(experiment.image)} alt="" width="880" height="432" loading="lazy" />
          <div><p className="eyebrow">{experiment.name}</p><h3>{experiment.question}</h3></div>
        </Link>
      </article>)}</div>
    </section>
    <section className="shell materials-intro"><div><p className="eyebrow">Zuhause und in der Schule</p><h2>Was liegt schon bereit?</h2><p>Ein Lineal aus dem Mäppchen, ein Tischtennisball aus der Sportkiste oder ein geliehenes Mikroskop. Hier findest du für jeden Versuch die passenden Dinge.</p></div><Link to="/material/" className="button light">Zur Materialliste</Link></section>
  </Layout>;
}
export const Head = () => <Meta title="Gemeinsam experimentieren" description="Vier bebilderte Physikversuche und günstige Materialien zum gemeinsamen Entdecken in der Grundschule und zuhause." />;
