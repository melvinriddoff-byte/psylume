import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { glideToTop } from "../../lib/smoothScroll";
import "./BackToTop.css";

/** Round button, bottom right, that appears once you have scrolled down and glides back to the top. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    glideToTop();
    // Keyboard and screen reader users land at the top of the page too.
    document.querySelector<HTMLElement>(".skip-link")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      className="back-to-top"
      data-visible={visible}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={goTop}
    >
      <ArrowUp className="back-to-top__arrow" aria-hidden="true" size={24} strokeWidth={2.4} />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
