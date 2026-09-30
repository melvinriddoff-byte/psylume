import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, Video } from "lucide-react";
import ArchPortrait from "../components/ArchPortrait";
import PageIntro from "../components/PageIntro";
import usePageTitle from "../hooks/usePageTitle";
import { concerns, isConcernId, type ConcernId } from "../data/site";
import { modeLabels, therapists, type Mode } from "../data/therapists";

type ConcernFilter = ConcernId | "all";
type ModeFilter = Mode | "any";

const concernName = (id: ConcernId) => concerns.find((c) => c.id === id)?.name ?? id;

export default function Therapists() {
  usePageTitle("Therapists");
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
          <div className="filters">
            <div role="group" aria-labelledby="filter-concern">
              <p className="filters__label" id="filter-concern">
                What’s on your mind
              </p>
              <div className="chips">
                <button
                  type="button"
                  className="chip"
                  aria-pressed={concern === "all"}
                  onClick={() => setConcern("all")}
                >
                  All
                </button>
                {concerns.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className="chip"
                    aria-pressed={concern === c.id}
                    onClick={() => setConcern(c.id)}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            <div role="group" aria-labelledby="filter-mode">
              <p className="filters__label" id="filter-mode">
                How you’d like to meet
              </p>
              <div className="chips">
                {(["any", "online", "in-person"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    className="chip"
                    aria-pressed={mode === m}
                    onClick={() => setMode(m)}
                  >
                    {m === "any" ? "Either" : modeLabels[m]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="results-count" role="status" aria-live="polite">
            {results.length === 1 ? "1 therapist" : `${results.length} therapists`}
          </p>

          {results.length > 0 ? (
            <ul className="therapist-grid">
              {results.map((t) => (
                <li key={t.id} className="t-card">
                  <ArchPortrait initials={t.initials} tone={t.tone} />
                  <div className="t-card__body">
                    <h2 className="t-card__name">{t.name}</h2>
                    <p className="t-card__role">{t.role}</p>
                    <p>{t.approach}</p>

                    <ul className="tag-list" aria-label="Works with">
                      {t.concerns.map((id) => (
                        <li key={id}>{concernName(id)}</li>
                      ))}
                    </ul>

                    <ul className="mode-list" aria-label="Session types">
                      {t.modes.map((m) => (
                        <li key={m}>
                          {m === "online" ? (
                            <Video aria-hidden="true" size={16} />
                          ) : (
                            <MapPin aria-hidden="true" size={16} />
                          )}
                          {modeLabels[m]}
                        </li>
                      ))}
                    </ul>

                    <p className="t-card__langs">Speaks {t.languages.join(", ")}</p>

                    <Link to={`/consultation?therapist=${t.id}`} className="btn btn--primary btn--small">
                      Book with {t.name.replace(/^Dr\.\s/, "").split(" ")[0]}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty">
              <h2 className="display-3">No therapists match that yet</h2>
              <p>Try removing a filter, or tell us what you need and we will find someone.</p>
              <div className="button-row">
                <button type="button" className="btn btn--secondary" onClick={clear}>
                  Clear filters
                </button>
                <Link to="/consultation" className="btn btn--primary">
                  Book a consultation
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
