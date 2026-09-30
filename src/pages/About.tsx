import { Link } from "react-router-dom";
import { Globe, HandHeart, Languages, Lock, MessagesSquare, Users } from "lucide-react";
import PageIntro from "../components/PageIntro";
import usePageTitle from "../hooks/usePageTitle";

const principles = [
  { label: "Confidential", Icon: Lock, text: "What you share stays between you and your therapist." },
  { label: "Matched to you", Icon: Users, text: "We suggest a therapist whose approach, languages and schedule suit you." },
  { label: "Online or in person", Icon: Globe, text: "Meet by video call or at our clinic, whichever feels easier." },
  { label: "Your language", Icon: Languages, text: "Talk in the language you think and feel in." },
  { label: "At your pace", Icon: MessagesSquare, text: "You decide what to talk about and how fast to go." },
  { label: "No judgement", Icon: HandHeart, text: "You don’t need a diagnosis or a crisis to start." },
] as const;

export default function About() {
  usePageTitle("About us");

  return (
    <>
      <PageIntro
        title="About Psylume"
        lead="A psychotherapy consultation platform for adults facing everyday emotional and relational struggles, online and in person."
      />

      <section className="section section--tight" aria-labelledby="story-title">
        <div className="container split">
          <h2 id="story-title" className="display-3">
            Why we exist
          </h2>
          <div className="prose">
            <p>
              Most of us carry more than we say out loud. Psylume exists so that talking to a
              professional feels like a normal, sensible thing to do when life gets heavy.
            </p>
            <p>
              Our mission is to be the light at the end of the tunnel: to make therapy easier to
              start, and kinder once you do.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="how-title">
        <div className="container split">
          <h2 id="how-title" className="display-3">
            How we work
          </h2>
          <div className="prose">
            <p>
              Every journey begins with a consultation. We listen to what is happening, then match
              you with a therapist from our team who fits what you need.
            </p>
            <p>
              From there, sessions are yours. Meet by video call or in person at our clinic,
              whichever suits you.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-title">
        <div className="container">
          <div className="section__head">
            <h2 id="principles-title" className="display-2">
              What you can expect
            </h2>
          </div>
          <ul className="values">
            {principles.map(({ label, Icon, text }) => (
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

      <section className="cta-band" aria-labelledby="about-cta-title">
        <div className="container cta-band__inner">
          <div>
            <h2 id="about-cta-title" className="display-2">
              Meet the people behind Psylume.
            </h2>
            <p className="lead">
              Get to know our therapists and team, or book a consultation when you are ready.
            </p>
          </div>
          <div className="button-row">
            <Link to="/consultation" className="btn btn--primary">
              Book a consultation
            </Link>
            <Link to="/team" className="btn btn--outline-light">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
