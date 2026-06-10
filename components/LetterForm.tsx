"use client";

import { useState } from "react";

// TODO: swap the placeholder handler for the real list provider (Beehiiv/Kit)
// form action once the account exists. Until then we route eager readers to
// the channel so no email is silently dropped.
export function LetterForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="letter__note">
        THE LIST OPENS WITH BUILD #1. UNTIL THEN —{" "}
        <a
          href="https://www.youtube.com/@automateddollar?sub_confirmation=1"
          style={{ color: "#F6F2E7", textDecoration: "underline" }}
        >
          SUBSCRIBE ON YOUTUBE
        </a>{" "}
        SO YOU DON&apos;T MISS IT.
      </p>
    );
  }

  return (
    <>
      <form
        className="letter__form"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
        />
        <button className="btn btn--primary" type="submit">
          GET THE BOTTOM LINE
        </button>
      </form>
      <p className="letter__note">ONE SYSTEM PER WEEK. NO SPAM. UNSUBSCRIBE ANYTIME.</p>
    </>
  );
}
