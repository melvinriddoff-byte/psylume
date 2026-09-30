import { LifeBuoy } from "lucide-react";
import { helplines } from "../data/site";

interface CrisisNoteProps {
  tone?: "light" | "dark";
}

export default function CrisisNote({ tone = "light" }: CrisisNoteProps) {
  return (
    <aside className={`crisis crisis--${tone}`} aria-labelledby={`crisis-title-${tone}`}>
      <LifeBuoy className="crisis__icon" aria-hidden="true" size={28} />
      <div>
        <p className="crisis__title" id={`crisis-title-${tone}`}>
          Need help right now?
        </p>
        <p className="crisis__text">
          Psylume is not an emergency service. If someone is in immediate danger, call{" "}
          <a href={helplines.emergency.href}>{helplines.emergency.number}</a>. For free, confidential
          support at any hour, call Tele-MANAS on{" "}
          <a href={helplines.teleManas.href}>{helplines.teleManas.number}</a> or{" "}
          <a href={helplines.teleManas.tollFreeHref}>{helplines.teleManas.tollFree}</a>.
        </p>
      </div>
    </aside>
  );
}
