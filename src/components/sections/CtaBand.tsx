import type { ReactNode } from "react";
import "./CtaBand.css";

interface CtaBandProps {
  id: string;
  title: string;
  lead: string;
  /** Buttons shown under the text. */
  children: ReactNode;
}

/** Indigo closing band with arch shapes, used at the foot of a page. */
export default function CtaBand({ id, title, lead, children }: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby={id}>
      <div className="container cta-band__inner">
        <div>
          <h2 id={id} className="display-2">
            {title}
          </h2>
          <p className="lead">{lead}</p>
        </div>
        <div className="button-row">{children}</div>
      </div>
    </section>
  );
}
