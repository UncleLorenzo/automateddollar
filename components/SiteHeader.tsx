"use client";

import Link from "next/link";
import { useState } from "react";
import { Mark } from "./Mark";

const NAV = [
  { label: "METHOD", href: "/#method" },
  { label: "DEMO", href: "/#demo" },
  { label: "TEMPLATES", href: "/#templates" },
  { label: "THE LETTER", href: "/#letter" },
  { label: "ABOUT", href: "/about" },
];

const WATCH = "https://www.youtube.com/@automateddollar?sub_confirmation=1";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <Link href="/" className="brand" onClick={close}>
          <Mark size={46} />
          <span>
            <span className="brand__name">The Automated Dollar</span>
            <span className="brand__tag">RECEIPTS INCLUDED</span>
          </span>
        </Link>

        <nav className="nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <a className="nav__cta" href={WATCH} target="_blank" rel="noopener noreferrer">
            WATCH THE BUILDS
          </a>
        </nav>

        <button
          className="navtoggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navmenu${open ? " is-open" : ""}`}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={close}>
            {n.label}
          </Link>
        ))}
        <a
          className="navmenu__cta"
          href={WATCH}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          WATCH THE BUILDS
        </a>
      </div>
    </header>
  );
}
