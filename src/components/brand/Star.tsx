interface StarProps {
  className?: string;
}

/** The four-point star from the Psylume mark, used as a small decorative accent. */
export default function Star({ className }: StarProps) {
  return (
    <svg
      className={className}
      viewBox="-50 -50 100 100"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 -50 C5 -16 16 -5 50 0 C16 5 5 16 0 50 C-5 16 -16 5 -50 0 C-16 -5 -5 -16 0 -50Z"
        fill="currentColor"
      />
    </svg>
  );
}
