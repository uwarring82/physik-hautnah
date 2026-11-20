import React from "react";
import { Link } from "gatsby";
import stations from "../data/stations.json";
import "../styles/site.css";

const ICONS = {
  ball: <><circle cx="12" cy="6.5" r="3.5" /><path d="M7.5 21v-5" /><path d="M12 21v-8" /><path d="M16.5 21v-5" /></>,
  motor: <><rect x="9" y="6" width="6" height="11" rx="1" /><path d="M11 6V4.5h2V6" /><rect x="7.5" y="17" width="9" height="3" rx="1" /><path d="M12 4.5C5 5 4 15 7.5 18.5" /><path d="M12 4.5c7 .5 8 10.5 4.5 14" /></>,
  wand: <><path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h.01" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" /></>,
  mikro: <><path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" /></>,
};

export function Icon({ name, size = 44 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name]}</svg>;
}

export function Foto({ label }) {
  return <div className="foto"><strong>[FOTO]</strong><span>{label}</span></div>;
}

export function Chip({ kind, children }) {
  return <span className={"chip " + kind}>{children}</span>;
}

export function Layout({ children, home }) {
  return <>
    <a className="skip" href="#inhalt">Zum Inhalt springen</a>
    <div className="mast-wrap">
      <header className="shell mast">
        <Link to="/" className="brand">Physik Hautnah<small>Grundschulprogramm</small></Link>
        {home
          ? <nav aria-label="Hauptnavigation">
              <a href="#experimente">Experimente</a>
              <a href="#ablauf">Ablauf</a>
              <a href="#wege">Weiterlesen</a>
              <a href="#kontakt">Kontakt</a>
            </nav>
          : <nav aria-label="Hauptnavigation">
              <Link to="/">Startseite</Link>
              {stations.map(station => <Link key={station.slug} to={"/experimente/" + station.slug + "/"} activeClassName="active" partiallyActive>{station.short}</Link>)}
            </nav>}
      </header>
    </div>
    <main id="inhalt">{children}</main>
    <div className="footer-wrap">
      <footer className="shell footer">
        <span className="logo-slot">[LOGO UNIVERSITÄT FREIBURG]</span>
        <span>Entwurf 0.3 · November 2026 · Text in [Klammern] ist ein Platzhalter.</span>
        <span>[IMPRESSUM] · [DATENSCHUTZ]</span>
      </footer>
    </div>
  </>;
}

export function Meta({ title, description }) {
  return <><title>{title} · Physik Hautnah</title><meta name="description" content={description} /><meta name="theme-color" content="#344a9a" /></>;
}
