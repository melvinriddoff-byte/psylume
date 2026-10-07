import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navigation, site } from "../../data/site";
import WhatsApp from "../icons/WhatsAppIcon";
import lockupWhite from "../../assets/logos/psylume-logo-lockup-white.webp";
import markWhite from "../../assets/logos/psylume-logo-mark-white.webp";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          {/* Secondary logo (white lockup) */}
          <Link to="/" aria-label="Psylume, home">
            <img src={lockupWhite} alt="" width={260} height={77} />
          </Link>
          <p>{site.summary}</p>
          <ul className="site-footer__social" aria-label="Psylume on social media">
            {site.instagram.url ? (
              <li>
                <a href={site.instagram.url} rel="noopener noreferrer" target="_blank" aria-label="Instagram">
                  <Instagram aria-hidden="true" size={20} />
                </a>
              </li>
            ) : null}
            <li>
              <a href={site.whatsapp.url} rel="noopener noreferrer" target="_blank" aria-label="WhatsApp">
                <WhatsApp aria-hidden="true" size={20} />
              </a>
            </li>
            {site.facebook.url ? (
              <li>
                <a href={site.facebook.url} rel="noopener noreferrer" target="_blank" aria-label="Facebook">
                  <Facebook aria-hidden="true" size={20} />
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__list">
            {/* Home is left out here: the logo above already links home */}
            {navigation.filter((item) => item.to !== "/").map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.footerLabel}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="site-footer__heading">Reach us</h2>
          <ul className="site-footer__list site-footer__list--icons">
            <li>
              <Mail aria-hidden="true" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Phone aria-hidden="true" size={18} />
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <MapPin aria-hidden="true" size={18} />
              <span>{site.address.join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__base">
        <p>© {new Date().getFullYear()} Psylume. All rights reserved.</p>
        <p>{site.tagline}</p>
      </div>

      {/* Primary logo (white mark) as a quiet watermark */}
      <img className="site-footer__watermark" src={markWhite} alt="" aria-hidden="true" width={296} height={359} />
    </footer>
  );
}
