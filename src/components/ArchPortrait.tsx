import type { Tone } from "../data/therapists";
import Star from "./Star";

interface ArchPortraitProps {
  initials: string;
  tone: Tone;
  className?: string;
}

/**
 * Arch-shaped placeholder for a portrait. Swap the initials for an <img>
 * once real photographs are available (keep the same container for the shape).
 */
export default function ArchPortrait({ initials, tone, className = "" }: ArchPortraitProps) {
  return (
    <div className={`portrait portrait--${tone} ${className}`.trim()} aria-hidden="true">
      <span className="portrait__initials">{initials}</span>
      <Star className="portrait__star" />
    </div>
  );
}
