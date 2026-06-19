import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms & Disclosures — The Automated Dollar",
};

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <main className="page wrap">
      <p className="section__label">TERMS &amp; DISCLOSURES</p>
      <h1>The fine print, kept short.</h1>
      <p className="mono" style={{ fontSize: 13, color: "#5a5648" }}>
        LAST UPDATED: JUNE 2026
      </p>

      <h2>Not financial advice</h2>
      <p>
        Everything on this site and our channels is educational content and
        entertainment. We show systems and the numbers they produced for us or
        for clearly-labeled demo scenarios. We are not financial advisors,
        accountants, or attorneys, and nothing here is individualized advice.
        Make your own decisions; consult a professional where it matters.
      </p>

      <h2>Affiliate disclosure</h2>
      <p>
        Some links on this site and in our videos are affiliate links — if you
        sign up or buy through them, we may earn a commission at no extra cost
        to you. We only link products we have actually tested on camera, and a
        commission never changes a verdict. When we think a product is bad,
        we say so, affiliate program or not.
      </p>

      <h2>Digital products</h2>
      <p>
        Templates are digital goods delivered as copy links or downloads. They
        are for personal use — please don&apos;t resell or redistribute them.
        Like most digital downloads they are non-refundable once delivered — but
        you&apos;re never buying blind: a free Lite version lets you try the core
        first, and if a paid template won&apos;t run for you, email
        rob@theautomateddollar.com and we&apos;ll help you get it working.
      </p>

      <h2>Demo data</h2>
      <p>
        Where we analyze financial data on camera or on this site, it is a
        synthetic demo household unless explicitly stated otherwise — built to
        be statistically realistic, and always labeled.
      </p>

      <h2>Contact</h2>
      <p>rob@theautomateddollar.com</p>

      <p>
        <Link href="/">← Back to the homebase</Link>
      </p>
      </main>
      <SiteFooter />
    </>
  );
}
