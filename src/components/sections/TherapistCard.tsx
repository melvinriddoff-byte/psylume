import { Link } from "react-router-dom";
import { MapPin, Video } from "lucide-react";
import ArchPortrait from "../brand/ArchPortrait";
import { concerns, type ConcernId } from "../../data/site";
import { modeLabels, type Therapist } from "../../data/therapists";
import "./TherapistCard.css";

const concernName = (id: ConcernId) => concerns.find((c) => c.id === id)?.name ?? id;

export default function TherapistCard({ therapist: t }: { therapist: Therapist }) {
  return (
    <li className="t-card">
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
  );
}
