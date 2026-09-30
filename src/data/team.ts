import type { Tone } from "./therapists";

/**
 * PLACEHOLDER CONTENT.
 * These people are fictional. Replace with the real Psylume team.
 */

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
  tone: Tone;
  group: "leadership" | "care";
}

export const team: TeamMember[] = [
  {
    name: "Dr. Lakshmi Varma",
    initials: "LV",
    role: "Founder and clinical director",
    bio: "Leads Psylume's clinical approach and supports the therapy team. She started Psylume so that asking for help would feel ordinary rather than brave.",
    tone: "coral",
    group: "leadership",
  },
  {
    name: "Nikhil Raj",
    initials: "NR",
    role: "Co-founder and operations",
    bio: "Looks after how Psylume runs day to day, from scheduling to the clinic space, so that therapists can focus on clients.",
    tone: "indigo",
    group: "leadership",
  },
  {
    name: "Aparna S.",
    initials: "AS",
    role: "Care coordinator",
    bio: "Your first point of contact. She listens to what is going on and matches you with a therapist.",
    tone: "peach",
    group: "care",
  },
  {
    name: "Jerin Joseph",
    initials: "JJ",
    role: "Client support",
    bio: "Helps with bookings, rescheduling and payments, and answers questions about how sessions work.",
    tone: "mauve",
    group: "care",
  },
  {
    name: "Hana Basheer",
    initials: "HB",
    role: "Community and content",
    bio: "Writes and curates what Psylume shares online, and keeps it honest, gentle and useful.",
    tone: "coral",
    group: "care",
  },
];
