import { concerns, type ConcernId } from "../../../data/site";
import { modeLabels, type Mode } from "../../../data/therapists";

export type ConcernFilter = ConcernId | "all";
export type ModeFilter = Mode | "any";

interface TherapistFiltersProps {
  concern: ConcernFilter;
  mode: ModeFilter;
  onConcernChange: (next: ConcernFilter) => void;
  onModeChange: (next: ModeFilter) => void;
}

export default function TherapistFilters({
  concern,
  mode,
  onConcernChange,
  onModeChange,
}: TherapistFiltersProps) {
  return (
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
            onClick={() => onConcernChange("all")}
          >
            All
          </button>
          {concerns.map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={concern === c.id}
              onClick={() => onConcernChange(c.id)}
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
              onClick={() => onModeChange(m)}
            >
              {m === "any" ? "Either" : modeLabels[m]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
