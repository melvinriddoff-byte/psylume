import PageIntro from "../../components/sections/PageIntro";
import TherapistCard from "../../components/sections/TherapistCard";
import ConsultationCta from "../../components/sections/ConsultationCta";
import usePageMeta from "../../hooks/usePageMeta";
import { therapists } from "../../data/therapists";
import NoResults from "./components/NoResults";
import "./therapists.css";

export default function TherapistsPage() {
  usePageMeta({
    title: "Find a therapist",
    description: "Meet the Psylume therapists, read a little about how they work, then book a session online.",
  });

  return (
    <>
      <PageIntro
        title="Find a therapist who fits"
        lead="Read a little about each therapist, then book a session. Not sure? Book a consultation and we will match you."
      />

      <section className="section section--tight" aria-label="Therapists">
        <div className="container">
          {therapists.length > 0 ? (
            <ul className="therapist-grid">
              {therapists.map((t) => (
                <TherapistCard key={t.id} therapist={t} />
              ))}
            </ul>
          ) : (
            <NoResults />
          )}
        </div>
      </section>

      <ConsultationCta
        id="therapists-cta-title"
        title="Meet the people behind Psylume."
        lead="Get to know our therapists, or book a consultation when you are ready."
      />
    </>
  );
}
