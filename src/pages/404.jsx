import React from "react";
import { Link } from "gatsby";
import { Layout, Meta } from "../components/layout";
export default function NotFound() {
  return <Layout><section className="shell not-found"><h1>Seite nicht gefunden</h1><p>Von der Startseite kommst du zu allen vier Versuchen.</p><Link className="button" to="/">Zur Startseite</Link></section></Layout>;
}
export const Head = () => <Meta title="Seite nicht gefunden" description="Hier geht es zurück zu den Physikprojekten." />;
