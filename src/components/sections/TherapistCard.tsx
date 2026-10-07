import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Video } from "lucide-react";
import ArchPortrait from "../brand/ArchPortrait";
import { concerns, type ConcernId } from "../../data/site";
import type { Therapist } from "../../data/therapists";
import "./TherapistCard.css";

const concernName = (id: ConcernId) => concerns.find((c) => c.id === id)?.name ?? id;

export default function TherapistCard({ therapist: t }: { therapist: Therapist }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="t-card">
      <ArchPortrait initials={t.initials} tone={t.tone} />
      <div className="t-card__body">
        <h2 className="t-card__name">{t.name}</h2>
        <p className="t-card__role">{t.role}</p>
        <p className="t-card__summary">{t.summary}</p>

        <ul className="tag-list" aria-label="Works with">
          {t.concerns.map((id) => (
            <li key={id}>{concernName(id)}</li>
          ))}
        </ul>

        <p className="mode-list">
          <span>
            <Video aria-hidden="true" size={16} />
            Online
          </span>
        </p>

        <button
          type="button"
          className="t-card__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          More details
          <ChevronDown aria-hidden="true" size={16} />
        </button>

        <div id={panelId} className="t-card__more" hidden={!open}>
          <p>{t.approach}</p>
          <p className="t-card__langs">Speaks {t.languages.join(", ")}</p>
        </div>

        <Link to={`/consultation?therapist=${t.id}`} className="btn btn--primary btn--small">
          Book with {t.name}
        </Link>
      </div>
    </li>
  );
}
