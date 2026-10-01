import { useEffect, useRef, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import Field from "../../../components/ui/Field";
import { site } from "../../../data/site";
import { EMAIL_PATTERN, submitRequest } from "../../../lib/submit";

interface FormState {
  name: string;
  email: string;
  topic: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "sending" | "sent" | "error";

const topics = [
  "A general question",
  "Booking or rescheduling",
  "Partnerships and press",
  "Working with Psylume",
] as const;

const initial: FormState = { name: "", email: "", topic: topics[0], message: "" };

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!f.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(f.email.trim())) e.email = "Enter an email address like name@example.com.";
  if (!f.message.trim()) e.message = "Write a short message so we know how to help.";
  return e;
}

/** The contact form, its validation and the sent confirmation. */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [offline, setOffline] = useState(false);
  const doneRef = useRef<HTMLHeadingElement>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  useEffect(() => {
    if (status === "sent") doneRef.current?.focus();
  }, [status]);

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const found = validate(form);
    setErrors(found);

    const firstInvalid = (["name", "email", "message"] as const).find((k) => found[k]);
    if (firstInvalid) {
      document.getElementById(`m-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    setOffline(false);
    try {
      if (!navigator.onLine) throw new Error("offline");
      await submitRequest("contact", { ...form });
      setStatus("sent");
    } catch {
      setOffline(!navigator.onLine);
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(initial);
    setErrors({});
    setStatus("idle");
  };

  return (
    <div className="panel panel--white">
      {status === "sent" ? (
        <div className="notice" role="status">
          <span className="notice__icon">
            <Check aria-hidden="true" size={28} />
          </span>
          <h2 className="display-3" tabIndex={-1} ref={doneRef}>
            Message sent
          </h2>
          <p>
            Thank you, {form.name.trim().split(" ")[0]}. We will reply to {form.email.trim()}{" "}
            within {site.responseTime}.
          </p>
          <button type="button" className="btn btn--secondary" onClick={reset}>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate aria-describedby={status === "error" ? "contact-error" : undefined}>
          <div className="form-grid">
            <Field id="m-name" label="Full name" required error={errors.name}>
              {(aria) => (
                <input
                  {...aria}
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              )}
            </Field>

            <Field id="m-email" label="Email address" required error={errors.email}>
              {(aria) => (
                <input
                  {...aria}
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              )}
            </Field>
          </div>

          <Field id="m-topic" label="What is this about?">
            {(aria) => (
              <select {...aria} value={form.topic} onChange={(e) => set("topic", e.target.value)}>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            )}
          </Field>

          <Field id="m-message" label="Message" required error={errors.message}>
            {(aria) => (
              <textarea
                {...aria}
                rows={6}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
            )}
          </Field>

          {status === "error" ? (
            <p className="form-error" id="contact-error" role="alert">
              {offline
                ? "You seem to be offline. Your message is still here, so check your connection and send again. "
                : "Your message didn’t go through. Your message is still here, so please try again. "}
              You can also email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
              <a href={site.phone.href}>{site.phone.display}</a>.
            </p>
          ) : null}

          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}
