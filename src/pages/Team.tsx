import { Link } from "react-router-dom";
import ArchPortrait from "../components/ArchPortrait";
import PageIntro from "../components/PageIntro";
import usePageTitle from "../hooks/usePageTitle";
import { team } from "../data/team";

export default function Team() {
  usePageTitle("Team");
  const leadership = team.filter((m) => m.group === "leadership");
  const care = team.filter((m) => m.group === "care");

  return (
    <>
      <PageIntro
        title="The people behind Psylume"
        lead="A small team of clinicians and coordinators who want therapy to be easier to start, and kinder once you do."
      />

      <section className="section section--tight" aria-labelledby="leadership-title">
        <div className="container">
          <h2 id="leadership-title" className="display-3">
            Leadership
          </h2>
          <ul className="leaders">
            {leadership.map((m) => (
              <li key={m.name} className="leader">
                <ArchPortrait initials={m.initials} tone={m.tone} />
                <div>
                  <h3 className="leader__name">{m.name}</h3>
                  <p className="leader__role">{m.role}</p>
                  <p>{m.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="care-title">
        <div className="container">
          <h2 id="care-title" className="display-3">
            Care and community
          </h2>
          <ul className="crew">
            {care.map((m) => (
              <li key={m.name} className="crew__member">
                <ArchPortrait initials={m.initials} tone={m.tone} />
                <h3 className="crew__name">{m.name}</h3>
                <p className="crew__role">{m.role}</p>
                <p>{m.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="join-title">
        <div className="container split">
          <h2 id="join-title" className="display-3">
            Want to work with us?
          </h2>
          <div className="prose">
            <p>
              We are always glad to hear from therapists and counsellors who share our way of
              working. Write to us and tell us about yourself.
            </p>
            <p>
              <Link to="/contact" className="btn btn--secondary">
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
