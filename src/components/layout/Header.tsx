import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "../../data/site";
import { lenis } from "../../lib/smoothScroll";
import lockup from "../../assets/logos/psylume-logo-lockup.webp";
import mark from "../../assets/logos/psylume-logo-mark.webp";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  const headerRef = useRef<HTMLElement>(null);

  // While the menu is open: Escape or a tap outside closes it, and the page behind stays put.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    document.documentElement.classList.add("menu-open");
    lenis?.stop();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      document.documentElement.classList.remove("menu-open");
      lenis?.start();
    };
  }, [open]);

  // Close the menu if the screen grows to desktop width while it is open.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 960px)");
    const onChange = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container site-header__bar">
        <Link to="/" className="brand" aria-label="Psylume, home">
          {/* Secondary logo: horizontal lockup, shown from tablet up */}
          <img className="brand__lockup" src={lockup} alt="" width={173} height={52} />
          {/* Primary logo: the mark, shown on small screens */}
          <img className="brand__mark" src={mark} alt="" width={46} height={56} />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav id="primary-nav" className="primary-nav" data-open={open} aria-label="Main">
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    [
                      "primary-nav__link",
                      item.to === "/consultation" ? "primary-nav__link--cta" : "",
                      isActive ? "is-active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
