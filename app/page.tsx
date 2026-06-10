import { Mark } from "@/components/Mark";
import { LetterForm } from "@/components/LetterForm";

const TICKER =
  "SUBS −$62.00 ··· BANK FEES −$38.00 ··· FORGOTTEN TRIALS −$24.99 ··· DINING DRIFT −$117.40 ··· INSURANCE RESHOP +$340.00 ··· BILL NEGOTIATION +$45/MO ··· SAVED +$417.00 ··· EVERY BUILD SHIPS A TEMPLATE ··· ";

const SOCIALS = [
  { name: "YOUTUBE", handle: "@automateddollar", url: "https://www.youtube.com/@automateddollar" },
  { name: "TIKTOK", handle: "@automateddollar", url: "https://www.tiktok.com/@automateddollar" },
  { name: "INSTAGRAM", handle: "@automateddollar", url: "https://www.instagram.com/automateddollar" },
  { name: "PINTEREST", handle: "@automateddollar", url: "https://www.pinterest.com/automateddollar" },
  { name: "X", handle: "@theautodollar", url: "https://x.com/theautodollar" },
];

function Ticker() {
  const items = TICKER.split("··· ").filter(Boolean);
  const line = items
    .map((t) => t.trim())
    .map((t, i) => (
      <span key={i}>
        <span className={t.includes("−") ? "neg" : t.includes("+") ? "pos" : ""}>{t}</span>
        {"  ···  "}
      </span>
    ));
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__inner">
        {line}
        {line}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Ticker />
      <header className="header">
        <div className="wrap header__bar">
          <a href="#" className="brand">
            <Mark size={46} />
            <span>
              <span className="brand__name">The Automated Dollar</span>
              <span className="brand__tag">RECEIPTS INCLUDED</span>
            </span>
          </a>
          <nav className="nav">
            <a href="#builds">BUILDS</a>
            <a href="#templates">TEMPLATES</a>
            <a href="#letter">THE LETTER</a>
            <a
              className="nav__cta"
              href="https://www.youtube.com/@automateddollar?sub_confirmation=1"
            >
              WATCH THE BUILDS
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="wrap hero">
          <div>
            <p className="hero__kicker">EST. 2026 · NEW BUILDS WEEKLY</p>
            <h1>
              AI systems that <em>run your money.</em>
            </h1>
            <p className="hero__sub">
              We build automated budgets, fee hunts, and money systems on camera —
              with real numbers, working templates, and zero hype. If it saves
              money, you&apos;ll see the receipt. If it doesn&apos;t, you&apos;ll see that too.
            </p>
            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href="https://www.youtube.com/@automateddollar?sub_confirmation=1"
              >
                ▶ WATCH BUILD #1
              </a>
              <a className="btn" href="#templates">
                GET THE TEMPLATES
              </a>
            </div>
          </div>

          <div className="receipt" aria-hidden="true">
            <div className="receipt__body">
              <div className="receipt__head">THE AUTOMATED DOLLAR ·· 30-DAY AUDIT</div>
              <div className="receipt__row mono">
                <span>FORGOTTEN SUBS</span>
                <span className="amt--waste">−$62.00</span>
              </div>
              <div className="receipt__row mono">
                <span>BANK FEES</span>
                <span className="amt--waste">−$38.00</span>
              </div>
              <div className="receipt__row mono">
                <span>FREE TRIAL №7</span>
                <span className="amt--waste">−$24.99</span>
              </div>
              <div className="receipt__row mono">
                <span>DINING DRIFT</span>
                <span className="amt--waste">−$117.40</span>
              </div>
              <div className="receipt__total">
                <span>FOUND &amp; FIXED</span>
                <span>+$417.00</span>
              </div>
            </div>
            <svg className="receipt__zigzag" viewBox="0 0 320 14" preserveAspectRatio="none">
              <path
                d="M0,0 H320 V2 L304,14 288,2 272,14 256,2 240,14 224,2 208,14 192,2 176,14 160,2 144,14 128,2 112,14 96,2 80,14 64,2 48,14 32,2 16,14 0,2 Z"
                fill="#FFFDF6"
                stroke="#D8D2C2"
                strokeWidth="1"
              />
            </svg>
          </div>
        </section>

        <section className="section" id="builds">
          <div className="wrap">
            <p className="section__label">WHAT WE DO</p>
            <h2>Three kinds of builds. One rule: show the receipts.</h2>
            <p className="section__intro">
              Every video is a real system, built on screen, with the artifact
              linked below it — free version in the description, full version in
              the shop.
            </p>
            <div className="pillars">
              <article className="pillar">
                <p className="pillar__num mono">01 / BUILD WITH ME</p>
                <h3>Money systems, built on camera</h3>
                <p>
                  Automated budgets, payday routines, trackers that text you.
                  Watch the build, copy the system, keep the template.
                </p>
              </article>
              <article className="pillar">
                <p className="pillar__num mono">02 / DATA DROPS</p>
                <h3>Original research, real numbers</h3>
                <p>
                  We read 50 banks&apos; fee schedules so you don&apos;t have to. What 1%
                  in fees actually costs. Where your subscriptions hide.
                </p>
              </article>
              <article className="pillar">
                <p className="pillar__num mono">03 / TOOL COURT</p>
                <h3>Apps on trial, verdicts included</h3>
                <p>
                  We feed the same messy month to every budgeting app and AI
                  tool — and tell you which one earns its subscription.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="templates">
          <div className="wrap">
            <p className="section__label">THE SHOP</p>
            <h2>Templates that are actually software.</h2>
            <p className="section__intro">
              Most budget templates are pretty grids. Ours have working engines —
              automation scripts, AI categorization, duplicate detection — built
              by people who ship software for a living.
            </p>
            <div className="shop">
              <article className="product">
                <p className="product__badge mono">FLAGSHIP · LAUNCHING THIS WEEK</p>
                <h3>The AI Budget Dashboard</h3>
                <p>
                  A Google Sheet that runs itself: paste your bank statement, let
                  the AI categorize it, watch the dashboard update. Duplicate
                  detection, budget-vs-actual, top merchants — no formulas to
                  babysit.
                </p>
                <p className="product__price mono">$19 · GOOGLE SHEETS + APPS SCRIPT</p>
              </article>
              <article className="product">
                <p className="product__badge mono">FREE FOREVER</p>
                <h3>The Lite Dashboard</h3>
                <p>
                  The free version we give away with every build video — manual
                  entry, rule-based categorization, a clean monthly dashboard.
                  Genuinely useful, upgrade optional.
                </p>
                <p className="product__price mono">$0 · IN EVERY VIDEO DESCRIPTION</p>
              </article>
            </div>
          </div>
        </section>

        <section className="letter" id="letter">
          <div className="wrap">
            <h2>The Bottom Line</h2>
            <p>
              One money system per week, in your inbox: the build, the template,
              and the receipt. Written like a letter, not a newsletter.
            </p>
            <LetterForm />
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="section__label">EVERYWHERE ELSE</p>
            <h2>Follow the builds.</h2>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.name} className="social" href={s.url}>
                  {s.name}
                  <span>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <p>
          © 2026 THE AUTOMATED DOLLAR. EDUCATIONAL CONTENT ONLY — NOT FINANCIAL
          ADVICE. WE SHOW OUR WORK; DO YOUR OWN.
        </p>
        <p>BUILT WITH AI. SUPERVISED BY HUMANS. RECEIPTS ON REQUEST.</p>
      </footer>
    </>
  );
}
