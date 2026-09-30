import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/site";
import lockup from "../assets/logos/psylume-logo-lockup.png";
import mark from "../assets/logos/psylume-logo-mark.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="brand" aria-label="Psylume, home">
          {/* Secondary logo: horizontal lockup, shown from tablet up */}
          <img className="brand__lockup" src={lockup} alt="" width={149} height={56} />
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
