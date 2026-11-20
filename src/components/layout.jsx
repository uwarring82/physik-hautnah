import React from "react";
import { Link, withPrefix } from "gatsby";
import "../styles/site.css";

export function imagePath(file) {
  return withPrefix("/bilder/" + file);
}

export function Layout({ children }) {
  return <>
    <a className="skip" href="#inhalt">Zum Inhalt springen</a>
    <header className="shell mast">
      <Link to="/" className="brand"><span className="brand-icon" aria-hidden="true"><i /></span>Physik Hautnah</Link>
      <nav aria-label="Hauptnavigation">
        <Link to="/#versuche">Versuche</Link>
        <Link to="/material/" activeClassName="active">Materialliste</Link>
      </nav>
    </header>
    <main id="inhalt">{children}</main>
    <footer className="shell footer"><Link to="/" className="footbrand">Physik Hautnah</Link><span>Physikprojekte für die Grundschule</span><a href="https://github.com/uwarring82/physik-hautnah">GitHub</a></footer>
  </>;
}

export function Meta({ title, description }) {
  return <><title>{title} · Physik Hautnah</title><meta name="description" content={description} /><meta name="theme-color" content="#f8f5eb" /></>;
}

export function Sources({ links }) {
  return <ul className="sources">{links.map(([title, url]) => <li key={url}><a href={url}>{title}</a></li>)}</ul>;
}
