import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — The Automated Dollar",
  description:
    "Why this brand has no face, what The Receipt Method is, and the rules we never break.",
};

export default function About() {
  return (
    <main className="page wrap">
      <p className="section__label">ABOUT</p>
      <h1>The receipts are the personality.</h1>

      <p>
        The Automated Dollar is run by a business operator who has spent years
        building automation systems for real companies — CRMs, pipelines, AI
        workflows — and is now pointing that machinery at the most neglected
        operation of all: the household&apos;s money.
      </p>

      <p>
        <strong>Why no face?</strong> Because faces are how finance content
        lies to you. A confident person in front of a rented Lamborghini can
        say anything. A receipt can&apos;t. Every claim on this site and every
        video on the channel comes with the artifact that proves it — the
        spreadsheet, the math, the before-and-after. If we can&apos;t show the
        receipt, we don&apos;t make the claim.
      </p>

      <h2>The Receipt Method</h2>
      <p>Every build follows the same three moves:</p>
      <ol>
        <li>
          <strong>Audit</strong> — find out what&apos;s actually happening (the
          part everyone skips because it&apos;s uncomfortable)
        </li>
        <li>
          <strong>Automate</strong> — build a system so it never depends on
          willpower again
        </li>
        <li>
          <strong>Verify</strong> — show the number it moved. The receipt.
        </li>
      </ol>

      <h2>The rules we never break</h2>
      <ul>
        <li>No subscriber counts, testimonials, or press logos until they are real.</li>
        <li>Demo data is always labeled demo data.</li>
        <li>Your financial data belongs in your own spreadsheet — our templates
            run in your Google account, not on our servers.</li>
        <li>Educational content only. We show our work; do your own.
            Nothing here is financial advice.</li>
      </ul>

      <p>
        <Link href="/">← Back to the homebase</Link>
      </p>
    </main>
  );
}
