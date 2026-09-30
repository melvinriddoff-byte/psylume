import { Link } from "react-router-dom";
import { ArrowRight, Brain, HandHeart, Heart, Leaf, Sparkle, Sun } from "lucide-react";
import ArchComposition from "../components/ArchComposition";
import usePageTitle from "../hooks/usePageTitle";
import { concerns, site } from "../data/site";

const values = [
  { label: "Therapy", Icon: Brain, text: "Structured, confidential conversations with a trained professional." },
  { label: "Growth", Icon: Leaf, text: "Small steps that add up to real change." },
  { label: "Wellbeing", Icon: Sun, text: "Care for the whole of you, not only the hardest days." },
  { label: "Self care", Icon: Heart, text: "Rest and boundaries are part of the work." },
  { label: "Hope", Icon: Sparkle, text: "A reason to believe things can shift." },
  { label: "Support", Icon: HandHeart, text: "Someone in your corner, online or in the room." },
] as const;

export default function Home() {
  usePageTitle();

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 id="hero-title" className="hero__title">
              It’s okay to ask for help.
            </h1>
            <p className="lead">
              Psylume is a psychotherapy consultation platform for adults facing everyday emotional
              and relational struggles. Meet a therapist online or in person.
            </p>
            <div className="button-row">
              <Link to="/consultation" className="btn btn--primary">
                Book a consultation
              </Link>
              <Link to="/therapists" className="btn btn--secondary">
                Meet our therapists
              </Link>
            </div>
          </div>
          <div className="hero__art">
            <ArchComposition />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="mission-title">
        <div className="container split">
          <h2 id="mission-title" className="display-2">
            Our mission is to be the light at the end of the tunnel.
          </h2>
          <div className="prose">
            <p>
              Most of us carry more than we say out loud. Psylume exists so that talking to a
              professional feels like a normal, sensible thing to do when life gets heavy.
            </p>
            <p>
              Psychotherapy is what we do. We begin with a consultation to understand what is
              happening, then match you with a therapist whose approach, languages and schedule suit
              you. Sessions are available by video call and in person at our clinic.
            </p>
          </div>
        </div>
      </section>

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

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="section__head">
            <h2 id="values-title" className="display-2">
              What we hold on to
            </h2>
          </div>
          <ul className="values">
            {values.map(({ label, Icon, text }) => (
              <li key={label} className="value">
                <span className="value__disc">
                  <Icon aria-hidden="true" size={34} strokeWidth={1.6} />
                </span>
                <h3 className="value__label">{label}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="cta-title">
        <div className="container cta-band__inner">
          <div>
            <h2 id="cta-title" className="display-2">
              You’re one call away from calm.
            </h2>
            <p className="lead">
              Tell us a little about what’s going on. We’ll suggest a therapist and a time that
              works for you.
            </p>
          </div>
          <div className="button-row">
            <Link to="/consultation" className="btn btn--primary">
              Book a consultation
            </Link>
            <a href={site.phone.href} className="btn btn--outline-light">
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
