import React from "react";
import { Link, withPrefix } from "gatsby";
import "../styles/site.css";

export function imagePath(file) {
  return withPrefix("/bilder/" + file);
}

export function Layout({ children, flush }) {
  return <>
    <a className="skip" href="#inhalt">Zum Inhalt springen</a>
    <div className="draft"><p className="shell">Entwurf, Stand November 2026. Text in [Klammern] wird noch ergänzt.</p></div>
    <header className="shell mast">
      <Link to="/" className="brand">Physik Hautnah<small>Grundschulprogramm · Universität Freiburg</small></Link>
      <nav aria-label="Hauptnavigation">
        <Link to="/#versuche">Versuche</Link>
        <Link to="/#schulen">Für Schulen</Link>
        <Link to="/material/" activeClassName="active">Materialliste</Link>
      </nav>
    </header>
    <main id="inhalt" className={flush ? "flush" : undefined}>{children}</main>
    <footer className="shell footer">
      <Link to="/" className="footbrand">Physik Hautnah</Link>
      <span>Universität Freiburg · [INSTITUT ODER ARBEITSGRUPPE]</span>
      <span>[IMPRESSUM] · [DATENSCHUTZ]</span>
      <a href="https://github.com/uwarring82/physik-hautnah">GitHub</a>
    </footer>
  </>;
}

export function Meta({ title, description }) {
  return <><title>{title} · Physik Hautnah</title><meta name="description" content={description} /><meta name="theme-color" content="#344a9a" /></>;
}

export function Sources({ links }) {
  return <ul className="sources">{links.map(([title, url]) => <li key={url}><a href={url}>{title}</a></li>)}</ul>;
}
