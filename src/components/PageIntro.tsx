import type { ReactNode } from "react";

interface PageIntroProps {
  title: string;
  lead: string;
  children?: ReactNode;
}

export default function PageIntro({ title, lead, children }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="container">
        <h1 className="page-intro__title">{title}</h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
