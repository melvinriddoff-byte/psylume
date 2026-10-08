import type { ReactNode } from "react";

export interface FieldAria {
  id: string;
  "aria-invalid"?: true;
  "aria-describedby"?: string;
  "aria-required"?: true;
}

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: (aria: FieldAria) => ReactNode;
}

/** Label, hint, control and error message wired together for assistive technology. */
export default function Field({ id, label, required, hint, error, children }: FieldProps) {
  const describedBy =
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className="field" data-invalid={error ? "true" : undefined}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required ? <span className="field__flag"> (required)</span> : null}
      </label>
      {hint ? (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
      {children({
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
        "aria-required": required ? true : undefined,
      })}
      {error ? (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
