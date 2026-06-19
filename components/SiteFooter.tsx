import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer-block">
      <div className="wrap footer">
        <p>
          © 2026 THE AUTOMATED DOLLAR · A YELLOWSTONE VENTURES LLC BRAND ·
          EDUCATIONAL CONTENT ONLY — NOT FINANCIAL ADVICE. DEMO DATA IS ALWAYS
          LABELED. WE SHOW OUR WORK; DO YOUR OWN.
        </p>
        <nav className="footer__links mono">
          <Link href="/about">ABOUT</Link>
          <Link href="/privacy">PRIVACY</Link>
          <Link href="/terms">TERMS &amp; DISCLOSURES</Link>
          <a href="mailto:rob@theautomateddollar.com">CONTACT</a>
          <Link href="/links">/LINKS</Link>
        </nav>
        <p>BUILT WITH AI. SUPERVISED BY HUMANS. RECEIPTS ON REQUEST.</p>
      </div>
    </footer>
  );
}
