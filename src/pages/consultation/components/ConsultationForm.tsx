import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, MapPin, Video } from "lucide-react";
import Field from "../../../components/ui/Field";
import { concerns, site } from "../../../data/site";
import { findTherapist, therapists, type Mode } from "../../../data/therapists";
import { EMAIL_PATTERN, submitRequest, todayLocal } from "../../../lib/submit";

interface FormState {
  mode: Mode;
  therapist: string;
  concern: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

type Errors = Partial<Record<"name" | "email" | "phone" | "consent", string>>;
type Status = "idle" | "sending" | "sent" | "error";

const timeOptions = ["No preference", "Morning", "Afternoon", "Evening"] as const;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!f.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(f.email.trim())) e.email = "Enter an email address like name@example.com.";
  if (!f.phone.trim()) e.phone = "Enter a phone number so we can call you to arrange your session.";
  else if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a phone number with at least 10 digits.";
  if (!f.consent) e.consent = "Please agree so we can contact you about this request.";
  return e;
}

/** The booking form, its validation and the confirmation once sent. */
export default function ConsultationForm() {
  const [params] = useSearchParams();
  const preselected = findTherapist(params.get("therapist"));

  const initial: FormState = {
    mode: "online",
    therapist: preselected?.id ?? "",
    concern: "",
    date: "",
    time: timeOptions[0],
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  };

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

    const firstInvalid = (["name", "email", "phone", "consent"] as const).find((k) => found[k]);
    if (firstInvalid) {
      document.getElementById(`c-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    setOffline(false);
    try {
      if (!navigator.onLine) throw new Error("offline");
      await submitRequest("consultation", { ...form });
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
    <div className="panel">
      {status === "sent" ? (
        <div className="notice" role="status">
          <span className="notice__icon">
            <Check aria-hidden="true" size={28} />
          </span>
          <h2 className="display-3" tabIndex={-1} ref={doneRef}>
            Request received
          </h2>
          <p>
            Thank you, {form.name.trim().split(" ")[0]}. We will write to {form.email.trim()}{" "}
            or call {form.phone.trim()} within {site.responseTime}.
          </p>
          <button type="button" className="btn btn--secondary" onClick={reset}>
            Send another request
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate aria-describedby={status === "error" ? "form-error" : undefined}>
          <fieldset className="fieldset">
            <legend className="fieldset__legend">How would you like to meet?</legend>
            <div className="choices">
              <label className="choice">
                <input
                  type="radio"
                  name="mode"
                  value="online"
                  checked={form.mode === "online"}
                  onChange={() => set("mode", "online")}
                />
                <span className="choice__body">
                  <Video aria-hidden="true" size={22} />
                  <span className="choice__title">Online</span>
                  <span className="choice__text">Video call from wherever you are</span>
                </span>
              </label>
              <label className="choice">
                <input
                  type="radio"
                  name="mode"
                  value="in-person"
                  checked={form.mode === "in-person"}
                  onChange={() => set("mode", "in-person")}
                />
                <span className="choice__body">
                  <MapPin aria-hidden="true" size={22} />
                  <span className="choice__title">In person</span>
                  <span className="choice__text">At the Psylume clinic</span>
                </span>
              </label>
            </div>
          </fieldset>

          <div className="form-grid">
            <Field id="c-therapist" label="Therapist">
              {(aria) => (
                <select {...aria} value={form.therapist} onChange={(e) => set("therapist", e.target.value)}>
                  <option value="">Match me with someone</option>
                  {therapists.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field id="c-concern" label="What would you like help with?">
              {(aria) => (
                <select {...aria} value={form.concern} onChange={(e) => set("concern", e.target.value)}>
                  <option value="">Not sure yet</option>
                  {concerns.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field id="c-date" label="Preferred date">
              {(aria) => (
                <input
                  {...aria}
                  type="date"
                  min={todayLocal()}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                />
              )}
            </Field>

            <Field id="c-time" label="Preferred time">
              {(aria) => (
                <select {...aria} value={form.time} onChange={(e) => set("time", e.target.value)}>
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field id="c-name" label="Full name" required error={errors.name}>
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

            <Field id="c-phone" label="Phone number" required error={errors.phone}>
              {(aria) => (
                <input
                  {...aria}
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              )}
            </Field>
          </div>

          <Field id="c-email" label="Email address" required error={errors.email}>
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

          <Field
            id="c-message"
            label="Anything you’d like us to know"
            hint="Only share what you are comfortable with. You can tell your therapist the rest."
          >
            {(aria) => (
              <textarea
                {...aria}
                rows={4}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
            )}
          </Field>

          <div className="field" data-invalid={errors.consent ? "true" : undefined}>
            <label className="check" htmlFor="c-consent">
              <input
                id="c-consent"
                type="checkbox"
                checked={form.consent}
                aria-invalid={errors.consent ? true : undefined}
                aria-describedby={errors.consent ? "c-consent-error" : undefined}
                onChange={(e) => set("consent", e.target.checked)}
              />
              <span>I agree that Psylume may contact me about this request.</span>
            </label>
            {errors.consent ? (
              <p className="field__error" id="c-consent-error">
                {errors.consent}
              </p>
            ) : null}
          </div>

          {status === "error" ? (
            <p className="form-error" id="form-error" role="alert">
              {offline
                ? "You seem to be offline. Your details are still here, so check your connection and send again. "
                : "Your request didn’t go through. Your details are still here, so please try again. "}
              You can also call us on <a href={site.phone.href}>{site.phone.display}</a> or email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ) : null}

          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send request"}
          </button>
        </form>
      )}
    </div>
  );
}
