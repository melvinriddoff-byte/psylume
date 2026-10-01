import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageIntro from "../../components/sections/PageIntro";
import usePageMeta from "../../hooks/usePageMeta";
import { isConcernId } from "../../data/site";
import { therapists } from "../../data/therapists";
import TherapistFilters, { type ConcernFilter, type ModeFilter } from "./components/TherapistFilters";
import TherapistCard from "./components/TherapistCard";
import NoResults from "./components/NoResults";
import "./therapists.css";

export default function TherapistsPage() {
  usePageMeta({
    title: "Find a therapist",
    description:
      "Browse Psylume therapists by what you are going through, how you would like to meet and the languages they speak, then book a session.",
  });
  const [params, setParams] = useSearchParams();
  const [mode, setMode] = useState<ModeFilter>("any");

  const raw = params.get("concern");
  const concern: ConcernFilter = isConcernId(raw) ? raw : "all";

  const setConcern = (next: ConcernFilter) => {
    const p = new URLSearchParams(params);
    if (next === "all") p.delete("concern");
    else p.set("concern", next);
    setParams(p, { replace: true });
  };

  const results = therapists.filter(
    (t) =>
      (concern === "all" || t.concerns.includes(concern)) &&
      (mode === "any" || t.modes.includes(mode)),
  );

  const clear = () => {
    setConcern("all");
    setMode("any");
  };

  return (
    <>
      <PageIntro
        title="Find a therapist who fits"
        lead="Choose by what you are going through, how you would like to meet, and the languages you are comfortable in. Not sure? Book a consultation and we will match you."
      />

      <section className="section section--tight" aria-label="Therapists">
        <div className="container">
          {therapists.length > 0 ? (
            <>
              <TherapistFilters
                concern={concern}
                mode={mode}
                onConcernChange={setConcern}
                onModeChange={setMode}
              />

              <p className="results-count" role="status" aria-live="polite">
                {results.length === 1 ? "1 therapist" : `${results.length} therapists`}
              </p>
            </>
          ) : null}

          {therapists.length === 0 ? (
            <NoResults />
          ) : results.length > 0 ? (
            <ul className="therapist-grid">
              {results.map((t) => (
                <TherapistCard key={t.id} therapist={t} />
              ))}
            </ul>
          ) : (
            <NoResults onClear={clear} />
          )}
        </div>
      </section>
    </>
  );
}
