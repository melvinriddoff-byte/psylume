import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../../lib/smoothScroll";

/**
 * On route change: scroll to the top and move keyboard focus to <main>,
 * so screen reader and keyboard users land at the start of the new page.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (hash) return;
    scrollToTop();
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}
