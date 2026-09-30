import type { ConcernId } from "./site";

/**
 * PLACEHOLDER CONTENT.
 * These practitioners are fictional. Replace names, credentials, approaches
 * and languages with real, verified information before the site goes live.
 */

export type Mode = "online" | "in-person";
export type Tone = "coral" | "mauve" | "indigo" | "peach";

export interface Therapist {
  id: string;
  name: string;
  initials: string;
  role: string;
  approach: string;
  concerns: ConcernId[];
  modes: Mode[];
  languages: string[];
  tone: Tone;
}

export const modeLabels: Record<Mode, string> = {
  online: "Online",
  "in-person": "In person",
};

export const therapists: Therapist[] = [
  {
    id: "meera-nair",
    name: "Dr. Meera Nair",
    initials: "MN",
    role: "Clinical psychologist",
    approach:
      "Practical, structured sessions using cognitive behavioural therapy. She helps you notice the loops your mind runs and try something different between sessions.",
    concerns: ["anxiety", "burnout"],
    modes: ["online", "in-person"],
    languages: ["English", "Malayalam"],
    tone: "coral",
  },
  {
    id: "arjun-varma",
    name: "Arjun Varma",
    initials: "AV",
    role: "Counselling psychologist",
    approach:
      "A person-centred approach with lots of room to think out loud. Arjun listens first and works at the pace you set.",
    concerns: ["mood", "self-worth"],
    modes: ["online"],
    languages: ["English", "Malayalam", "Hindi"],
    tone: "indigo",
  },
  {
    id: "sneha-thomas",
    name: "Sneha Thomas",
    initials: "ST",
    role: "Couples and family therapist",
    approach:
      "Works with partners and families on communication, trust and the patterns that repeat at home. Individual sessions are welcome too.",
    concerns: ["relationships", "grief"],
    modes: ["online", "in-person"],
    languages: ["English", "Malayalam"],
    tone: "peach",
  },
  {
    id: "rahul-menon",
    name: "Rahul Menon",
    initials: "RM",
    role: "Psychotherapist",
    approach:
      "Uses acceptance and commitment therapy to help you make space for hard feelings while still moving toward the life you want.",
    concerns: ["anxiety", "burnout", "self-worth"],
    modes: ["online"],
    languages: ["English", "Malayalam"],
    tone: "mauve",
  },
  {
    id: "fathima-rasheed",
    name: "Fathima Rasheed",
    initials: "FR",
    role: "Grief and bereavement counsellor",
    approach:
      "Gentle, unhurried support after a loss. There is no right way or timeline to grieve, and sessions follow what you need that day.",
    concerns: ["grief", "mood"],
    modes: ["in-person", "online"],
    languages: ["English", "Malayalam", "Arabic"],
    tone: "coral",
  },
  {
    id: "anand-krishnan",
    name: "Anand Krishnan",
    initials: "AK",
    role: "Mindfulness-based therapist",
    approach:
      "Combines talk therapy with simple mindfulness practices you can use at your desk, on the bus or in the middle of a bad night.",
    concerns: ["anxiety", "mood", "relationships"],
    modes: ["in-person"],
    languages: ["English", "Malayalam", "Tamil"],
    tone: "indigo",
  },
];

export function findTherapist(id: string | null): Therapist | undefined {
  return therapists.find((t) => t.id === id);
}
