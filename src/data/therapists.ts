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
  /** Optional line shown under the name. */
  role?: string;
  /** One or two lines shown on the card. */
  summary: string;
  /** Longer text shown under "More details", one entry per paragraph. */
  approach: string[];
  /** Optional areas of expertise shown as buttons on the card, in place of concerns. */
  expertise?: string[];
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
    name: "Jazbiya K K",
    initials: "J",
    role: "Consultant Psychologist",
    summary:
      "Jazbiya K K is a Consultant Psychologist with an M.Sc. in Applied Psychology and training in CBT, DBT & MBSRT. With experience in clinical settings, she adopts an evidence-based and client-centered approach to understanding psychological concerns and supporting emotional well-being. She provides a safe, compassionate, and non-judgmental space where clients can explore their concerns, develop self-awareness, strengthen coping strategies, and work toward meaningful and lasting positive change.",
    approach: [
      "She works with concerns such as stress, anxiety, depression, OCD, relationship difficulties, and behavioral concerns. Her professional background includes training in psychometric assessments, internships across diverse clinical settings, and hands-on experience in life skills training.",
      "With a compassionate and client-centered approach, she supports individuals in managing emotional and behavioral challenges, navigating relationship difficulties, developing healthier coping strategies, and building emotional resilience. She is committed to helping clients work toward greater self-awareness, personal growth, and overall psychological well-being.",
    ],
    expertise: [
      "Stress & Emotional Difficulties",
      "Anxiety",
      "Depression",
      "Overthinking",
      "Relationship Concerns",
      "Career Guidance",
      "Adolescence Counselling",
      "Sleep Issues",
    ],
    concerns: ["anxiety", "burnout"],
    modes: ["online"],
    languages: ["English", "Malayalam"],
    tone: "coral",
  },
  {
    id: "najih",
    name: "Najih Abdul",
    initials: "N",
    role: "Consultant Psychologist",
    summary:
      "Najih Abdul Nazer is a Counseling Psychologist trained in CBT, SFBT, EFT, ACT, and DBT. With experience across clinics, hospitals, and organizations, he provides a compassionate, client-centered, and evidence-based approach to therapy. He supports individuals dealing with anxiety, depression, stress, trauma, OCD, phobias, relationship concerns, and personal growth, helping them build resilience and emotional well-being.",
    approach: [
      "His therapeutic approach is rooted in empathy, respect, and evidence-based practice. He provides a non-judgmental, client-centered space where individuals feel heard, understood, and empowered to build resilience, emotional flexibility, and lasting personal growth.",
      "Using an integrative and culturally sensitive approach, he helps clients understand their thoughts, emotions, and behaviors while developing self-awareness, acceptance, and healthier coping strategies.",
      "His areas of expertise include anxiety, panic attacks, depression, stress, burnout, trauma, grief, OCD, phobias, emotional regulation, self-esteem, relationship and family concerns, marital difficulties, workplace stress, academic challenges, adolescent and young adult mental health, postpartum concerns, parenting support, adjustment difficulties, personality-related concerns, communication, conflict resolution, mindfulness, and personal growth. He also emphasizes preventive mental health care and overall emotional well-being.",
    ],
    expertise: [
      "Anxiety",
      "Depression",
      "Relationship issues",
      "Low mood",
      "ADHD",
      "Stress & burnout",
      "Adjustment issues",
      "Behavioural issues",
    ],
    concerns: ["mood", "self-worth"],
    modes: ["online"],
    languages: ["English", "Malayalam", "Hindi"],
    tone: "indigo",
  },
];

export function findTherapist(id: string | null): Therapist | undefined {
  return therapists.find((t) => t.id === id);
}
