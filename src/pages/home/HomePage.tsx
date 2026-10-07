import ConsultationCta from "../../components/sections/ConsultationCta";
import usePageMeta from "../../hooks/usePageMeta";
import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import TherapistsSection from "./sections/TherapistsSection";
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
      <TherapistsSection />
      <ValuesSection />
      <ConsultationCta
        id="cta-title"
        title="You’re one call away from calm."
        lead="Tell us a little about what’s going on. We’ll suggest a therapist and a time that works for you."
      />
    </>
  );
}
