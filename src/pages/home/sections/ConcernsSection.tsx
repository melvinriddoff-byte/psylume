import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { concerns } from "../../../data/site";

export default function ConcernsSection() {
  return (
    <section className="section section--tint" aria-labelledby="concerns-title">
      <div className="container">
        <div className="section__head">
          <h2 id="concerns-title" className="display-2">
            What people come to us with
          </h2>
          <p className="lead">
            You don’t need a diagnosis or a crisis to start. If something feels heavy, that is
            reason enough.
          </p>
        </div>
        <ul className="concern-list">
          {concerns.map((c) => (
            <li key={c.id}>
              <Link to={`/therapists?concern=${c.id}`} className="concern-row">
                <span className="concern-row__name">{c.name}</span>
                <span className="concern-row__blurb">{c.blurb}</span>
                <span className="concern-row__go">
                  <span className="sr-only">See therapists for {c.name}</span>
                  <ArrowRight aria-hidden="true" size={22} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
