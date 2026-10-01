import { Link } from "react-router-dom";
import ArchComposition from "../../../components/brand/ArchComposition";

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
            <Link to="/consultation" className="btn btn--primary">
              Book a consultation
            </Link>
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
