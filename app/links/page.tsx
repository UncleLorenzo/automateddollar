import type { Metadata } from "next";
import { Mark } from "@/components/Mark";

export const metadata: Metadata = {
  title: "The Automated Dollar — Links",
  description:
    "Every build, template, and channel from The Automated Dollar in one place.",
};

const LINKS = [
  {
    label: "WATCH THE BUILDS",
    sub: "YouTube — new systems weekly",
    url: "https://www.youtube.com/@automateddollar?sub_confirmation=1",
    featured: true,
  },
  {
    label: "FREE BUDGET TEMPLATE",
    sub: "The Lite Dashboard — free forever",
    url: "/#templates",
    featured: true,
  },
  {
    label: "THE SHOP",
    sub: "Templates that are actually software",
    url: "/#templates",
    featured: false,
  },
  {
    label: "THE BOTTOM LINE",
    sub: "One money system per week, by email",
    url: "/#letter",
    featured: false,
  },
  {
    label: "TIKTOK",
    sub: "@automateddollar",
    url: "https://www.tiktok.com/@automateddollar",
    featured: false,
  },
  {
    label: "INSTAGRAM",
    sub: "@automateddollar",
    url: "https://www.instagram.com/automateddollar",
    featured: false,
  },
  {
    label: "PINTEREST",
    sub: "@automateddollar",
    url: "https://www.pinterest.com/automateddollar",
    featured: false,
  },
  {
    label: "X",
    sub: "@theautodollar",
    url: "https://x.com/theautodollar",
    featured: false,
  },
  {
    label: "THEAUTOMATEDDOLLAR.COM",
    sub: "The homebase",
    url: "/",
    featured: false,
  },
];

export default function Links() {
  return (
    <main className="links">
      <div className="links__card">
        <div className="links__head">
          <Mark size={64} />
          <h1>The Automated Dollar</h1>
          <p className="links__tag mono">
            AI SYSTEMS THAT RUN YOUR MONEY.
            <br />
            RECEIPTS INCLUDED.
          </p>
        </div>

        <nav className="links__list">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.url}
              className={`links__item${l.featured ? " links__item--featured" : ""}`}
            >
              <span className="links__label mono">{l.label}</span>
              <span className="links__sub">{l.sub}</span>
            </a>
          ))}
        </nav>

        <svg className="links__zigzag" viewBox="0 0 360 14" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,0 H360 V2 L342,14 324,2 306,14 288,2 270,14 252,2 234,14 216,2 198,14 180,2 162,14 144,2 126,14 108,2 90,14 72,2 54,14 36,2 18,14 0,2 Z"
            fill="#FFFDF6"
            stroke="#D8D2C2"
            strokeWidth="1"
          />
        </svg>
      </div>
      <p className="links__foot mono">EDUCATIONAL CONTENT · NOT FINANCIAL ADVICE</p>
    </main>
  );
}
