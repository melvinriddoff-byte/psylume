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
      "Jazbiya K K is a Consultant Psychologist with an M.Sc. in Applied Psychology, trained in CBT, DBT and MBSRT. She creates a safe, supportive, and growth-oriented environment where clients can explore their emotions, develop self-awareness, strengthen coping skills, and work toward positive change.",
    approach: [
      "She works with concerns such as stress, anxiety, depression, OCD, relationship difficulties, and behavioral concerns. Her professional background includes training in psychometric assessments, internships across diverse clinical settings, and hands-on experience in life skills training.",
      "With a compassionate and client-centered approach, she supports individuals in managing emotional and behavioral challenges, navigating relationship difficulties, developing healthier coping strategies, and building emotional resilience. She is committed to helping clients work toward greater self-awareness, personal growth, and overall psychological well-being.",
    ],
    expertise: [
      "Stress & Emotional Difficulties",
      "Anxiety",
      "Depression",
      "OCD",
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
      "His therapeutic approach is rooted in empathy, respect, and evidence-based practice. He provides a non-judgmental, client-centered, and collaborative space where individuals feel heard, understood, and empowered to explore their concerns. He believes that every person's story is unique and that meaningful change occurs when psychological insight is combined with self-awareness, acceptance, and practical action. His work focuses not only on symptom reduction but also on helping clients build resilience, strengthen relationships, develop emotional flexibility, and create lasting personal growth.",
      "Drawing from an integrative therapeutic framework, he supports clients in understanding the deeper patterns influencing their thoughts, emotions, and behaviors. His approach emphasizes self-discovery, emotional well-being, personal strengths, and the development of healthier coping strategies. Through a culturally sensitive lens, he works with individuals from different walks of life while honoring their values, identities, and lived experiences.",
      "His areas of expertise include anxiety, panic attacks, depression, mood-related difficulties, stress management, burnout, trauma, emotional wounds, grief and loss, obsessive-compulsive disorder (OCD), phobias, anger management, emotional regulation, self-esteem and confidence issues, relationship and interpersonal difficulties, family and marital concerns, attachment-related challenges, workplace stress, organizational concerns, academic and student mental health issues, life transitions, adjustment difficulties, personality-related concerns, behavioral and emotional difficulties, loneliness, social isolation, communication challenges, conflict resolution, identity exploration, personal growth, mindfulness, acceptance, psychological flexibility, postpartum, adolescent and young adult emotional concerns, parenting and caregiver support, cultural and cross-cultural adjustment, sleep and lifestyle-related psychological difficulties, and the promotion of overall psychological well-being and preventive mental health care.",
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
