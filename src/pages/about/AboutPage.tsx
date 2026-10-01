import { Link } from "react-router-dom";
import PageIntro from "../../components/sections/PageIntro";
import CtaBand from "../../components/sections/CtaBand";
import usePageMeta from "../../hooks/usePageMeta";
import WhyWeExistSection from "./sections/WhyWeExistSection";
import HowWeWorkSection from "./sections/HowWeWorkSection";
import ExpectationsSection from "./sections/ExpectationsSection";

export default function AboutPage() {
  usePageMeta({
    title: "About us",
    description:
      "Why Psylume exists, how we match you with the right therapist, and what you can expect: confidential sessions, online or in person, at your pace.",
  });

  return (
    <>
      <PageIntro
        title="About Psylume"
        lead="A psychotherapy consultation platform for adults facing everyday emotional and relational struggles, online and in person."
      />
      <WhyWeExistSection />
      <HowWeWorkSection />
      <ExpectationsSection />
      <CtaBand
        id="about-cta-title"
        title="Meet the people behind Psylume."
        lead="Get to know our therapists and team, or book a consultation when you are ready."
      >
        <Link to="/consultation" className="btn btn--primary">
          Book a consultation
        </Link>
        <Link to="/team" className="btn btn--outline-light">
          Meet the team
        </Link>
      </CtaBand>
    </>
  );
}
