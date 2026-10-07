import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TherapistCard from "../../../components/sections/TherapistCard";
import { therapists } from "../../../data/therapists";

/** The first four therapists, shown exactly as on the Therapists page. */
export default function TherapistsSection() {
  const featured = therapists.slice(0, 4);
  if (featured.length === 0) return null;

  return (
    <section className="section section--tint" aria-labelledby="home-therapists-title">
      <div className="container">
        <div className="section__head">
          <h2 id="home-therapists-title" className="display-2">
            Meet our therapists
          </h2>
          <p className="lead">
            Caring professionals who work online and in person. Find someone whose
            approach and languages suit you.
          </p>
        </div>
        <ul className="therapist-grid">
          {featured.map((t) => (
            <TherapistCard key={t.id} therapist={t} />
          ))}
        </ul>
        {therapists.length > featured.length ? (
          <p className="home-therapists__more">
            <Link to="/therapists" className="btn btn--secondary">
              See all therapists
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
