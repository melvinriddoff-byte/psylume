import { Clock, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import WhatsApp from "../../../components/icons/WhatsAppIcon";
import { site } from "../../../data/site";

/** Email, phone, clinic address and opening hours. */
export default function ContactDetails() {
  return (
    <aside className="contact__details" aria-labelledby="details-title">
      <h2 id="details-title" className="display-3">
        Other ways to reach us
      </h2>
      <ul className="details">
        <li>
          <Mail aria-hidden="true" size={22} />
          <div>
            <p className="details__label">Email</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </li>
        <li>
          <Phone aria-hidden="true" size={22} />
          <div>
            <p className="details__label">Phone</p>
            <a href={site.phone.href}>{site.phone.display}</a>
          </div>
        </li>
        <li>
          <MapPin aria-hidden="true" size={22} />
          <div>
            <p className="details__label">Clinic</p>
            <address>
              {site.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>
        </li>
        <li>
          <Clock aria-hidden="true" size={22} />
          <div>
            <p className="details__label">Hours</p>
            <p>{site.hours}</p>
          </div>
        </li>
      </ul>
      <ul className="social-icons" aria-label="Psylume on social media">
        {site.instagram.url ? (
          <li>
            <a
              className="social-icon"
              href={site.instagram.url}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`Instagram${site.instagram.handle ? `, ${site.instagram.handle}` : ""}`}
            >
              <Instagram aria-hidden="true" size={22} />
            </a>
          </li>
        ) : null}
        <li>
          <a className="social-icon" href={site.whatsapp.url} rel="noopener noreferrer" target="_blank" aria-label="WhatsApp">
            <WhatsApp aria-hidden="true" size={22} />
          </a>
        </li>
        {site.linkedin.url ? (
          <li>
            <a className="social-icon" href={site.linkedin.url} rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
              <Linkedin aria-hidden="true" size={22} />
            </a>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}
