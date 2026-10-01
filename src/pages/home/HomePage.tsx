import { Link } from "react-router-dom";
import CtaBand from "../../components/sections/CtaBand";
import usePageMeta from "../../hooks/usePageMeta";
import { site } from "../../data/site";
import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import ConcernsSection from "./sections/ConcernsSection";
import ValuesSection from "./sections/ValuesSection";
import "./home.css";

export default function HomePage() {
  usePageMeta({
    description:
      "Psylume is a psychotherapy consultation platform for adults facing everyday emotional and relational struggles. Meet a therapist online or in person.",
  });

  return (
    <>
      <HeroSection />
      <MissionSection />
      <ConcernsSection />
      <ValuesSection />
      <CtaBand
        id="cta-title"
        title="You’re one call away from calm."
        lead="Tell us a little about what’s going on. We’ll suggest a therapist and a time that works for you."
      >
        <Link to="/consultation" className="btn btn--primary">
          Book a consultation
        </Link>
        <a href={site.phone.href} className="btn btn--outline-light">
          Call {site.phone.display}
        </a>
      </CtaBand>
    </>
  );
}
