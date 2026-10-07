import { Link } from "react-router-dom";
import ArchComposition from "../../../components/brand/ArchComposition";
import WhatsApp from "../../../components/icons/WhatsAppIcon";
import { site } from "../../../data/site";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            It’s okay to ask for help.
          </h1>
          <p className="lead">
            Psylume is a psychotherapy consultation platform for adults facing everyday emotional
            and relational struggles. Meet a therapist online or in person.
          </p>
          <div className="button-row">
            <a href={site.whatsapp.bookingUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <WhatsApp aria-hidden="true" size={20} />
              Book a consultation
              <span className="sr-only"> on WhatsApp</span>
            </a>
            <Link to="/therapists" className="btn btn--secondary">
              Meet our therapists
            </Link>
          </div>
        </div>
        <div className="hero__art">
          <ArchComposition />
        </div>
      </div>
    </section>
  );
}
