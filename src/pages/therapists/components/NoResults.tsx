import { Link } from "react-router-dom";
import { SearchX, UserRoundSearch } from "lucide-react";
import EmptyState from "../../../components/ui/EmptyState";

/** Shown when filters match nobody, or when no therapists are published yet. */
export default function NoResults({ onClear }: { onClear?: () => void }) {
  if (!onClear) {
    return (
      <EmptyState
        icon={UserRoundSearch}
        title="Our therapists are joining soon"
        actions={
          <Link to="/consultation" className="btn btn--primary">
            Book a consultation
          </Link>
        }
      >
        <p>
          We are adding therapist profiles to the site. In the meantime, book a consultation and
          we will match you with the right person ourselves.
        </p>
      </EmptyState>
    );
  }

  return (
    <EmptyState
      icon={SearchX}
      title="No therapists match that yet"
      actions={
        <>
          <button type="button" className="btn btn--secondary" onClick={onClear}>
            Clear filters
          </button>
          <Link to="/consultation" className="btn btn--primary">
            Book a consultation
          </Link>
        </>
      }
    >
      <p>Try removing a filter, or tell us what you need and we will find someone.</p>
    </EmptyState>
  );
}
