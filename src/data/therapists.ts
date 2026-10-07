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
  /** One or two lines shown on the card. */
  summary: string;
  /** Longer text shown under "More details". */
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
    id: "jazbiya",
    name: "Jazbiya",
    initials: "J",
    role: "Psychotherapist",
    summary: "Calm, practical support for anxiety, stress and burnout.",
    approach:
      "Structured, unhurried sessions that help you notice the patterns your mind repeats and try something different between sessions. Jazbiya listens first and works at the pace you set.",
    concerns: ["anxiety", "burnout"],
    modes: ["online"],
    languages: ["English", "Malayalam"],
    tone: "coral",
  },
  {
    id: "najih",
    name: "Najih",
    initials: "N",
    role: "Counselling psychologist",
    summary: "A person-centred space to think out loud and feel heard.",
    approach:
      "A person-centred approach with plenty of room to think out loud. Najih helps with low mood, self-worth and relationships, and sessions follow what you need that day.",
    concerns: ["mood", "self-worth"],
    modes: ["online"],
    languages: ["English", "Malayalam", "Hindi"],
    tone: "indigo",
  },
];

export function findTherapist(id: string | null): Therapist | undefined {
  return therapists.find((t) => t.id === id);
}
