import PageIntro from "../../components/sections/PageIntro";
import usePageMeta from "../../hooks/usePageMeta";
import HowItWorks from "./components/HowItWorks";
import ConsultationForm from "./components/ConsultationForm";
import "./consultation.css";

export default function ConsultationPage() {
  usePageMeta({
    title: "Book a consultation",
    description:
      "Request a first psychotherapy consultation with Psylume. Tell us what is going on and we will match you with a therapist, online or in person.",
  });

  return (
    <>
      <PageIntro
        title="Book a consultation"
        lead="A consultation is a first conversation about what you are dealing with. From there, we match you with a therapist and arrange your sessions."
      />

      <section className="section section--tight">
        <div className="container consult">
          <HowItWorks />
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
