import { site } from "../../../data/site";

const steps = [
  {
    title: "Tell us what’s going on",
    text: "Share a few details. Say as much or as little as you like.",
  },
  {
    title: "We find the right fit",
    text: `Our care coordinator reads your request and replies within ${site.responseTime} with a suggested therapist and time.`,
  },
  {
    title: "Start talking",
    text: "Your first session is a conversation about what brought you here. You set the pace.",
  },
] as const;

/** The three steps from request to first session, shown beside the form. */
export default function HowItWorks() {
  return (
    <aside className="consult__steps" aria-labelledby="steps-title">
      <h2 id="steps-title" className="display-3">
        How it works
      </h2>
      <ol className="steps">
        {steps.map((s) => (
          <li key={s.title} className="step">
            <h3 className="step__title">{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="fine-print">We only use your details to arrange your consultation.</p>
    </aside>
  );
}
