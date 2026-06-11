import Link from "next/link";
import { Mark } from "@/components/Mark";
import { LetterForm } from "@/components/LetterForm";
import { FX } from "@/components/FX";

const TICKER =
  "SUBS −$62.00 ··· BANK FEES −$38.00 ··· FORGOTTEN TRIALS −$24.99 ··· DINING DRIFT −$117.40 ··· INSURANCE RESHOP +$340.00 ··· BILL NEGOTIATION +$45/MO ··· EVERY BUILD SHIPS A TEMPLATE ··· DEMO DATA, CLEARLY LABELED — ALWAYS ··· ";

const SOCIALS = [
  { name: "YOUTUBE", handle: "@automateddollar", url: "https://www.youtube.com/@automateddollar" },
  { name: "TIKTOK", handle: "@automateddollar", url: "https://www.tiktok.com/@automateddollar" },
  { name: "INSTAGRAM", handle: "@automateddollar", url: "https://www.instagram.com/automateddollar" },
  { name: "PINTEREST", handle: "@automateddollar", url: "https://www.pinterest.com/automateddollar" },
  { name: "X", handle: "@theautodollar", url: "https://x.com/theautodollar" },
];

const FAQ = [
  {
    q: "Do I need to be technical?",
    a: "No. You get a link, you click “Make a copy,” and the sheet is yours in Google Sheets. The automation is already inside it — buttons, not code.",
  },
  {
    q: "Where does my financial data go?",
    a: "Nowhere. The sheet lives in YOUR Google account. No bank logins, no syncing, no servers of ours. The optional AI categorization runs on your own API key — we never see a single transaction.",
  },
  {
    q: "Why one-time instead of a subscription?",
    a: "Because it’s a tool, and you should own your tools. Apps that do this charge $6–12 every month forever and require connecting your bank. Your spreadsheet doesn’t.",
  },
  {
    q: "Does it work in Excel?",
    a: "No — Google Sheets only. The automation engine is built on Apps Script, which is what makes the sheet run itself.",
  },
  {
    q: "What if it breaks or I hate it?",
    a: "Free updates for life, and a 30-day Receipts Guarantee: if it doesn’t work for you, email us and we refund it. No interrogation.",
  },
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
      <FX />
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
            <a href="#method">METHOD</a>
            <a href="#templates">TEMPLATES</a>
            <a href="#letter">THE LETTER</a>
            <Link href="/about">ABOUT</Link>
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
        <section className="hero2">
          <div className="wrap">
            <p className="hero2__kicker mono">EST. 2026 · NEW BUILDS WEEKLY · RECEIPTS INCLUDED</p>
            <h1 className="hero2__title">
              <span className="hero2__line">AI systems</span>
              <span className="hero2__line">that <em>run</em></span>
              <span className="hero2__line">your <span className="hero2__money">money<span className="hero2__dot">.</span></span></span>
            </h1>
            <div className="hero2__row">
              <div>
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
                  <a className="btn" href="#letter">
                    GET THE FREE DASHBOARD
                  </a>
                </div>
              </div>

              <div className="printer" aria-hidden="true">
            <div className="printer__slot" />
            <div className="receipt">
              <div className="stamp stamp--red">DEMO DATA<br/>REAL MATH</div>
            <div className="receipt__body">
              <div className="receipt__head">DEMO HOUSEHOLD ·· 30-DAY AUDIT</div>
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
              <div className="receipt__barcode" />
              <div className="receipt__txn mono">TXN Nº 0001 · THEAUTOMATEDDOLLAR.COM</div>
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
              </div>
            </div>
          </div>
        </section>

        <div className="ledgerstrip">
          <div className="wrap ledgerstrip__inner mono">
            <span>FOUND ACROSS ALL BUILDS: <strong>$0.00<span className="cursor" aria-hidden="true" /></strong> — Build #1 is in production.</span>
            <span className="ledgerstrip__note">
              Every number that ever appears here will link to the video that proves it.
            </span>
          </div>
        </div>

        <section className="section" id="method">
          <div className="wrap" data-reveal>
            <div className="sechead">
              <span className="sechead__no mono">Nº 01 — THE RECEIPT METHOD</span>
              <h2>Audit. Automate. Verify.</h2>
            </div>
            <p className="section__intro">
              Every build on this channel runs the same three moves — on a
              clearly-labeled demo household, with the artifact linked under
              every video.
            </p>
            <div className="method">
              <div className="method__step">
                <span className="method__num mono">01</span>
                <h3>Audit</h3>
                <p>Find what&apos;s actually happening. The step everyone skips because it stings.</p>
              </div>
              <div className="method__step">
                <span className="method__num mono">02</span>
                <h3>Automate</h3>
                <p>Build a system so it never depends on willpower again.</p>
              </div>
              <div className="method__step">
                <span className="method__num mono">03</span>
                <h3>Verify</h3>
                <p>Show the number it moved. That&apos;s the receipt.</p>
              </div>
            </div>
            <div className="pillars">
              <article className="pillar">
                <p className="pillar__num mono">FORMAT 01 / BUILD WITH ME</p>
                <h3>Money systems, built on camera</h3>
                <p>
                  Automated budgets, payday routines, trackers that text you.
                  Watch the build, copy the system, keep the template.
                </p>
              </article>
              <article className="pillar">
                <p className="pillar__num mono">FORMAT 02 / DATA DROPS</p>
                <h3>Original research, real numbers</h3>
                <p>
                  We read 50 banks&apos; fee schedules so you don&apos;t have to. What 1%
                  in fees actually costs. Where your subscriptions hide.
                </p>
              </article>
              <article className="pillar">
                <p className="pillar__num mono">FORMAT 03 / TOOL COURT</p>
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
          <div className="wrap" data-reveal>
            <div className="sechead">
              <span className="sechead__no mono">Nº 02 — THE SHOP</span>
              <h2>Templates that are actually software.</h2>
            </div>
            <p className="section__intro">
              Most budget templates are pretty grids. Ours have working engines —
              automation scripts, AI categorization, duplicate detection. And
              unlike the apps that do this for $6–12 a month, <strong>your
              spreadsheet never asks for your bank login.</strong>
            </p>

            <div className="shop">
              <article className="product product--flagship">
                <div className="stamp stamp--amber stamp--corner">30-DAY<br/>GUARANTEE</div>
                <p className="product__badge mono">FLAGSHIP · LAUNCHING WITH BUILD #1</p>
                <h3>The AI Budget Dashboard</h3>
                <p>
                  A Google Sheet that runs itself: paste your bank statement,
                  let the AI categorize it, watch the dashboard update.
                </p>
                <ul className="product__list mono">
                  <li>AI transaction categorization (your own key — your data stays yours)</li>
                  <li>Paste-in bank statement import, any bank</li>
                  <li>Duplicate &amp; double-charge detection</li>
                  <li>Budget-vs-actual dashboard + top merchants</li>
                  <li>Setup guide written for normal humans</li>
                  <li>Free updates, forever</li>
                </ul>
                <p className="product__price mono">
                  $19 · ONE-TIME · NO SUBSCRIPTION
                </p>
                <p className="product__guarantee mono">
                  🧾 30-DAY RECEIPTS GUARANTEE — DOESN&apos;T WORK FOR YOU? FULL REFUND, NO INTERROGATION.
                </p>
              </article>
              <article className="product">
                <p className="product__badge mono">FREE FOREVER</p>
                <h3>The Lite Dashboard</h3>
                <p>
                  The free version we give away with every build video — manual
                  entry, rule-based categorization, a clean monthly dashboard.
                  Genuinely useful. Start here; upgrade if the AI earns it.
                </p>
                <p className="product__price mono">$0 · GET IT VIA THE LETTER ↓</p>
              </article>
            </div>

            <div className="faq">
              <p className="section__label">QUESTIONS, ANSWERED STRAIGHT</p>
              {FAQ.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="letter" id="letter">
          <div className="wrap" data-reveal>
            <h2>The Bottom Line</h2>
            <p>
              One money system per week, in your inbox: the build, the template,
              and the receipt. Joining now also gets you the free Lite Dashboard
              the moment it ships with Build #1.
            </p>
            <LetterForm />
          </div>
        </section>

        <section className="section">
          <div className="wrap" data-reveal>
            <div className="sechead">
              <span className="sechead__no mono">Nº 03 — EVERYWHERE ELSE</span>
              <h2>Follow the builds.</h2>
            </div>
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

      <div className="bigband" aria-hidden="true">
        <div className="bigband__inner">
          RECEIPTS INCLUDED · THE AUTOMATED DOLLAR · RECEIPTS INCLUDED · THE AUTOMATED DOLLAR ·&nbsp;
          RECEIPTS INCLUDED · THE AUTOMATED DOLLAR · RECEIPTS INCLUDED · THE AUTOMATED DOLLAR ·&nbsp;
        </div>
      </div>

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
    </>
  );
}
