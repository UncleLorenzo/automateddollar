import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy — The Automated Dollar",
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="page wrap">
      <p className="section__label">PRIVACY POLICY</p>
      <h1>Privacy, in plain English.</h1>
      <p className="mono" style={{ fontSize: 13, color: "#5a5648" }}>
        LAST UPDATED: JUNE 2026
      </p>

      <h2>What we collect</h2>
      <p>
        If you join our email list, we collect your email address. That&apos;s
        the only personal information this site asks for. Standard, anonymous
        analytics may be collected by our hosting provider (Vercel) to keep the
        site running.
      </p>

      <h2>What we never collect</h2>
      <p>
        Your financial data. Our templates run entirely inside your own Google
        account — transactions you import, categories, balances, and anything
        the optional AI features process stay in your spreadsheet and your own
        API account. We have no servers that see them, and no way to access
        them.
      </p>

      <h2>How your email is used</h2>
      <p>
        To send you the newsletter and product updates you signed up for.
        Unsubscribe links are in every email. We never sell or share the list.
      </p>

      <h2>Purchases</h2>
      <p>
        Purchases are processed by the marketplace you buy through (Etsy,
        Gumroad). Their privacy policies govern payment data; we never see your
        card details.
      </p>

      <h2>Contact</h2>
      <p>Questions: rob@theautomateddollar.com</p>

      <p>
        <Link href="/">← Back to the homebase</Link>
      </p>
      </main>
      <SiteFooter />
    </>
  );
}
