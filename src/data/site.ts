/**
 * Everything the Psylume team is likely to edit lives here: contact details,
 * navigation, helplines and the list of concerns.
 *
 * Values marked TODO are placeholders. Replace them before launch.
 */

export const site = {
  name: "Psylume",
  tagline: "Light within · Life within",
  summary:
    "Psylume is a psychotherapy consultation platform, online and in person, for adults facing everyday emotional and relational struggles.",
  email: "hello@psylume.in", // TODO: confirm address
  phone: { display: "+91 00000 00000", href: "tel:+910000000000" }, // TODO: real number
  address: ["Psylume Clinic", "Street address, City", "Kerala, India"], // TODO: real address
  hours: "Monday to Saturday, 9:00 am to 7:00 pm", // TODO: confirm hours
  responseTime: "one working day", // TODO: only promise what the team can keep
  instagram: { handle: "@psylume.in", url: "https://www.instagram.com/psylume.in" }, // TODO: real Instagram URL
  whatsapp: { url: "https://wa.me/910000000000" }, // TODO: real number, digits only with country code
  linkedin: { url: "https://www.linkedin.com/company/psylume" }, // TODO: real LinkedIn URL
} as const;

/** Header label, footer label and path for each page. */
export const navigation = [
  { to: "/", label: "Home", footerLabel: "Home" },
  { to: "/about", label: "About us", footerLabel: "About us" },
  { to: "/therapists", label: "Therapists", footerLabel: "Therapists" },
  { to: "/team", label: "Team", footerLabel: "Team" },
  { to: "/contact", label: "Contact", footerLabel: "Contact" },
  { to: "/consultation", label: "Book a consultation", footerLabel: "Consultation" },
] as const;

/** Checked September 2026: Tele-MANAS is India's free 24/7 national mental health helpline. */
export const helplines = {
  emergency: { number: "112", href: "tel:112" },
  teleManas: {
    number: "14416",
    href: "tel:14416",
    tollFree: "1-800-891-4416",
    tollFreeHref: "tel:18008914416",
  },
} as const;

export const concerns = [
  {
    id: "anxiety",
    name: "Anxiety and stress",
    blurb: "Racing thoughts, constant worry, a body that won't settle.",
  },
  {
    id: "relationships",
    name: "Relationships",
    blurb: "Conflict, distance and communication with a partner, family or colleagues.",
  },
  {
    id: "mood",
    name: "Low mood",
    blurb: "Feeling flat, tired or stuck, and not sure why.",
  },
  {
    id: "burnout",
    name: "Work burnout",
    blurb: "Being worn down by a job or a pace you can't keep up.",
  },
  {
    id: "grief",
    name: "Grief and loss",
    blurb: "Making room for someone or something you've lost.",
  },
  {
    id: "self-worth",
    name: "Self-worth",
    blurb: "Harsh self-talk, people-pleasing, and doubting that you are enough.",
  },
] as const;

export type ConcernId = (typeof concerns)[number]["id"];

export function isConcernId(value: string | null): value is ConcernId {
  return concerns.some((c) => c.id === value);
}
