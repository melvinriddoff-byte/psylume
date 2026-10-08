const steps = [
  {
    title: "Connect With Us",
    text: "Connect with us through WhatsApp or our website and tell us what you’re looking for.",
  },
  {
    title: "Find Your Therapist",
    text: "We review your request and suggest a therapist who is a good fit for you.",
  },
  {
    title: "Begin Your Session",
    text: "Choose a convenient time for your consultation and get started.",
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
