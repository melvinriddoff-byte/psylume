import { Mail, MapPin, Phone } from "lucide-react";
import WhatsApp from "../../../components/icons/WhatsAppIcon";
import { site } from "../../../data/site";

/** Email, phone, WhatsApp and clinic address. */
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
          <WhatsApp aria-hidden="true" size={22} />
          <div>
            <p className="details__label">WhatsApp</p>
            <a href={site.whatsapp.url} target="_blank" rel="noopener noreferrer">
              {site.whatsapp.display}
              <span className="sr-only"> (opens WhatsApp)</span>
            </a>
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
      </ul>
    </aside>
  );
}
