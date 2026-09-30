/**
 * Form submission stub.
 *
 * The website has no backend yet. Replace the body of this function with a call
 * to your API, a serverless function, or a form service. Keep the signature and
 * the forms will keep working.
 */

export type FormKind = "consultation" | "contact";

export async function submitRequest(
  kind: FormKind,
  payload: Record<string, string | boolean>,
): Promise<void> {
  // TODO: POST to a real endpoint, for example:
  // const res = await fetch("/api/requests", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ kind, ...payload }),
  // });
  // if (!res.ok) throw new Error("Request failed");

  await new Promise((resolve) => setTimeout(resolve, 700));
  if (import.meta.env.DEV) {
    console.info("[psylume] form submitted", kind, payload);
  }
}

/** Today's date as yyyy-mm-dd in the visitor's own time zone. */
export function todayLocal(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
