import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import "./EmptyState.css";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  /** Use h1 when the empty state is the whole page (404, error), h2 inside a page. */
  headingLevel?: 1 | 2;
  children: ReactNode;
  /** Buttons or links offering a way forward. */
  actions?: ReactNode;
}

/** A friendly "nothing here" message that always offers a next step. */
export default function EmptyState({ icon: Icon, title, headingLevel = 2, children, actions }: EmptyStateProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <div className="empty-state">
      <span className="empty-state__icon">
        <Icon aria-hidden="true" size={30} strokeWidth={1.8} />
      </span>
      <Heading className={headingLevel === 1 ? "display-2" : "display-3"}>{title}</Heading>
      <div className="empty-state__text">{children}</div>
      {actions ? <div className="button-row">{actions}</div> : null}
    </div>
  );
}
