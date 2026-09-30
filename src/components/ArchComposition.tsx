/**
 * Hero artwork. Built from the arches and circles used throughout the brand
 * book. Purely decorative, so it is hidden from assistive technology.
 */
export default function ArchComposition({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arches ${className}`.trim()}
      viewBox="0 0 520 600"
      aria-hidden="true"
      focusable="false"
    >
      <g className="arches__shape arches__shape--indigo">
        <path d="M250 600V160A120 120 0 0 1 490 160V600Z" fill="var(--c03-indigo)" />
      </g>
      <g className="arches__shape arches__shape--coral">
        <path d="M10 600V330A130 130 0 0 1 270 330V600Z" fill="var(--c01-coral)" />
      </g>
      <g className="arches__shape arches__shape--peach">
        <path d="M150 600V470A85 85 0 0 1 320 470V600Z" fill="var(--c04-peach)" />
      </g>
      <g className="arches__shape arches__shape--mauve arches__shape--pop">
        <circle cx="118" cy="132" r="48" fill="var(--c02-mauve)" />
      </g>
      <g className="arches__shape arches__shape--star arches__shape--pop">
        <path
          transform="translate(370 170) scale(1.05)"
          d="M0 -50 C5 -16 16 -5 50 0 C16 5 5 16 0 50 C-5 16 -16 5 -50 0 C-16 -5 -5 -16 0 -50Z"
          fill="var(--c05-off-white)"
        />
      </g>
      <g className="arches__shape arches__shape--spark arches__shape--pop">
        <path
          transform="translate(412 330) scale(0.42)"
          d="M0 -50 C5 -16 16 -5 50 0 C16 5 5 16 0 50 C-5 16 -16 5 -50 0 C-16 -5 -5 -16 0 -50Z"
          fill="var(--c06-gold)"
        />
      </g>
    </svg>
  );
}
