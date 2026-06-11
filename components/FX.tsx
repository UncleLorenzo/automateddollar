"use client";

import { useEffect } from "react";

export function FX() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      // threshold 0 + small bottom margin: tall sections (taller than any
      // viewport) must still trigger the moment they meaningfully enter
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    // insurance: nothing stays hidden if the observer misbehaves
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => el.classList.add("in"));
    }, 3000);

    const header = document.querySelector(".header");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
