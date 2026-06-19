import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "404 — The Automated Dollar",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="page wrap">
      <p className="section__label">ERROR Nº 404 · NO SUCH LINE ITEM</p>
      <h1>This page isn&apos;t on the books.</h1>
      <p>
        The link you followed doesn&apos;t reconcile with anything we have. It may have
        moved, or the URL picked up a typo somewhere along the way.
      </p>
      <p className="mono" style={{ marginTop: "28px" }}>
        <Link href="/">← BACK TO THE HOMEPAGE</Link>
        {"   ·   "}
        <Link href="/links">ALL LINKS</Link>
      </p>
      </main>
      <SiteFooter />
    </>
  );
}
