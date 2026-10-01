import type { LucideIcon } from "lucide-react";
import "./ValueGrid.css";

export interface ValueItem {
  label: string;
  Icon: LucideIcon;
  text: string;
}

/** Icon discs with a short label and line of text, six to a row on wide screens. */
export default function ValueGrid({ items }: { items: readonly ValueItem[] }) {
  return (
    <ul className="values">
      {items.map(({ label, Icon, text }) => (
        <li key={label} className="value">
          <span className="value__disc">
            <Icon aria-hidden="true" size={34} strokeWidth={1.6} />
          </span>
          <h3 className="value__label">{label}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}
