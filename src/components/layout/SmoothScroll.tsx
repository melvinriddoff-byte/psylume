import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { startSmoothScroll } from "../../lib/smoothScroll";

/** Blocks that fade up gently as they scroll into view. */
const REVEAL_SELECTOR = [
  ".section__head",
  ".split > *",
  ".values > li",
  ".therapist-grid > li",
  ".leaders > li",
  ".crew > li",
  ".cta-band__inner",
  ".steps > li",
].join(",");

/**
 * Inertia-style smooth scrolling (Lenis) plus a soft reveal on scroll.
 * Both are skipped when the visitor prefers reduced motion.
 */
export default function SmoothScroll() {
  const { pathname } = useLocation();

  useEffect(() => startSmoothScroll(), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const els = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    els.forEach((el, i) => {
      // Content already on screen stays put; only what is below the fold animates.
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.classList.add("reveal");
      // Stagger siblings in a grid row slightly.
      el.style.setProperty("--reveal-delay", `${(i % 3) * 70}ms`);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      els.forEach((el) => el.classList.remove("reveal", "is-visible"));
    };
  }, [pathname]);

  return null;
}
