/**
 * Blog posts. These are DEMO posts written to show the layout: review them with
 * a clinician, or replace them with your own, before launch.
 *
 * Each post body is a list of blocks: a paragraph, a subheading or a bullet list.
 */

import type { Tone } from "./therapists";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** yyyy-mm-dd */
  date: string;
  readMinutes: number;
  author: string;
  /** Colour of the arch artwork on the card. */
  tone: Tone;
  body: BlogBlock[];
}

export const blogs: BlogPost[] = [
  {
    slug: "when-to-talk-to-someone",
    title: "How do you know it’s time to talk to someone?",
    excerpt:
      "You don’t need a crisis or a diagnosis to see a therapist. Here are some quieter signs that talking it through might help.",
    category: "Getting started",
    date: "2026-10-02",
    readMinutes: 4,
    author: "Psylume care team",
    tone: "coral",
    body: [
      {
        type: "p",
        text: "Many people wait until things feel unbearable before they reach out. But therapy isn’t only for the hardest moments. It can help long before that, when something has simply started to feel heavier than it used to.",
      },
      { type: "h2", text: "Signs worth paying attention to" },
      {
        type: "ul",
        items: [
          "The same worry keeps returning, even when you try to set it aside.",
          "You feel tired, flat or irritable most days, without a clear reason.",
          "Sleep, appetite or concentration have changed for a few weeks.",
          "You’re pulling away from people or things you usually enjoy.",
          "Friends and family have said they’re concerned about you.",
        ],
      },
      { type: "h2", text: "“Is my problem big enough?”" },
      {
        type: "p",
        text: "This is one of the most common questions we hear. There is no minimum level of difficulty for therapy. If something is affecting how you live, work or relate to people, it is worth talking about.",
      },
      {
        type: "p",
        text: "A first consultation is simply a conversation. You can share as much or as little as you like, and we will help you decide what kind of support, if any, would suit you.",
      },
    ],
  },
  {
    slug: "your-first-therapy-session",
    title: "What happens in your first therapy session",
    excerpt:
      "Nervous about starting? A simple walk-through of what a first session usually looks like, so there are fewer unknowns.",
    category: "Getting started",
    date: "2026-09-25",
    readMinutes: 5,
    author: "Psylume care team",
    tone: "indigo",
    body: [
      {
        type: "p",
        text: "Feeling nervous before a first session is completely normal. Knowing what to expect can make it easier to walk in, or log on.",
      },
      { type: "h2", text: "Getting to know each other" },
      {
        type: "p",
        text: "Your therapist will usually start by explaining how sessions work, including confidentiality and its limits. Then they will ask what brought you here. There are no right or wrong answers, and you set the pace.",
      },
      { type: "h2", text: "Questions you might be asked" },
      {
        type: "ul",
        items: [
          "What has been happening recently, and how long has it been going on?",
          "How is it affecting your sleep, work or relationships?",
          "What would you like to be different?",
          "Have you had support like this before?",
        ],
      },
      { type: "h2", text: "Questions you can ask too" },
      {
        type: "p",
        text: "A first session is also your chance to see whether the fit feels right. You are welcome to ask how your therapist works, how often you would meet and what progress might look like.",
      },
      {
        type: "p",
        text: "Most people leave a first session feeling lighter simply for having said things out loud. If it doesn’t feel like the right fit, that is okay. Tell us and we will help you find someone else.",
      },
    ],
  },
  {
    slug: "grounding-exercises-for-anxiety",
    title: "Three grounding exercises for anxious moments",
    excerpt:
      "Simple techniques you can use anywhere when your thoughts are racing and your body won’t settle.",
    category: "Anxiety and stress",
    date: "2026-09-18",
    readMinutes: 4,
    author: "Psylume care team",
    tone: "peach",
    body: [
      {
        type: "p",
        text: "When anxiety rises, it can feel as if your mind is running ahead of you. Grounding exercises gently bring your attention back to the present moment. They won’t make anxiety disappear, but they can take the edge off.",
      },
      { type: "h2", text: "1. The 5-4-3-2-1 senses check" },
      {
        type: "p",
        text: "Name five things you can see, four things you can touch, three things you can hear, two things you can smell and one thing you can taste. Go slowly, and notice the details.",
      },
      { type: "h2", text: "2. Slow, even breathing" },
      {
        type: "p",
        text: "Breathe in through your nose for a count of four, hold gently for four, breathe out for four, and pause for four. Repeat for a minute or two. If holding feels uncomfortable, simply make the out-breath a little longer than the in-breath.",
      },
      { type: "h2", text: "3. Feet on the floor" },
      {
        type: "p",
        text: "Press your feet into the ground and notice the pressure, the temperature and the texture beneath them. Describe it to yourself in plain words. This simple act can help your body feel steadier.",
      },
      {
        type: "p",
        text: "If anxiety is showing up often or getting in the way of daily life, a therapist can help you understand what is driving it and build longer-term ways to cope.",
      },
    ],
  },
  {
    slug: "burnout-or-a-bad-week",
    title: "Burnout or just a bad week? Signs worth noticing",
    excerpt:
      "Everyone has tiring weeks. Burnout is different. How to tell the two apart, and small steps that can help.",
    category: "Work and burnout",
    date: "2026-09-10",
    readMinutes: 5,
    author: "Psylume care team",
    tone: "mauve",
    body: [
      {
        type: "p",
        text: "A busy week leaves you tired, but a weekend of rest usually helps. Burnout tends to build slowly, and rest alone no longer seems to refill the tank.",
      },
      { type: "h2", text: "Common signs of burnout" },
      {
        type: "ul",
        items: [
          "Exhaustion that doesn’t lift after a break.",
          "Feeling detached, cynical or numb about work you once cared about.",
          "Struggling to concentrate or finish tasks that used to be easy.",
          "Headaches, poor sleep or getting ill more often.",
        ],
      },
      { type: "h2", text: "Small steps that can help" },
      {
        type: "ul",
        items: [
          "Notice where your energy goes during the day, and where it comes back.",
          "Protect one small, regular moment that is just for you.",
          "Talk honestly with someone you trust about how you are really doing.",
          "Look at boundaries: what could you say no to, even once this week?",
        ],
      },
      {
        type: "p",
        text: "Burnout is a sign that something needs to change, not a personal failure. Therapy can help you untangle the pressures involved and find a more sustainable way forward.",
      },
    ],
  },
  {
    slug: "having-the-hard-conversation",
    title: "Having the hard conversation with someone you love",
    excerpt:
      "Difficult conversations with a partner or family member don’t have to turn into arguments. A few ideas that make them gentler.",
    category: "Relationships",
    date: "2026-09-03",
    readMinutes: 6,
    author: "Psylume care team",
    tone: "coral",
    body: [
      {
        type: "p",
        text: "Many of us avoid difficult conversations because we are afraid of hurting someone, or of how they will react. But issues that go unspoken often grow quietly in the background.",
      },
      { type: "h2", text: "Before you begin" },
      {
        type: "ul",
        items: [
          "Choose a calm time, not in the middle of an argument or a rush.",
          "Be clear with yourself about what you hope will change.",
          "Remind yourself that the goal is understanding, not winning.",
        ],
      },
      { type: "h2", text: "During the conversation" },
      {
        type: "p",
        text: "Speak about your own experience: “I feel lonely when we don’t talk in the evenings” lands more softly than “You never talk to me.” Then listen, and try to reflect back what you heard before responding.",
      },
      {
        type: "p",
        text: "If emotions run high, it is okay to pause and come back to it. Agreeing to continue later is still progress.",
      },
      { type: "h2", text: "When it keeps getting stuck" },
      {
        type: "p",
        text: "If the same conversation keeps ending the same way, a therapist can help, either with you alone or together with the people involved.",
      },
    ],
  },
  {
    slug: "no-right-way-to-grieve",
    title: "There is no right way to grieve",
    excerpt:
      "Grief doesn’t follow a timetable or a set of stages. Some gentle reminders for anyone carrying a loss.",
    category: "Grief and loss",
    date: "2026-08-27",
    readMinutes: 4,
    author: "Psylume care team",
    tone: "indigo",
    body: [
      {
        type: "p",
        text: "Grief can follow the loss of a person, a relationship, a job, a home or a future you had imagined. It can arrive in waves, quietly or all at once, and it rarely moves in a straight line.",
      },
      { type: "h2", text: "Things that are normal in grief" },
      {
        type: "ul",
        items: [
          "Feeling fine one day and overwhelmed the next.",
          "Anger, guilt or relief alongside sadness.",
          "Difficulty concentrating or remembering things.",
          "Grief returning around anniversaries, festivals or places.",
        ],
      },
      { type: "h2", text: "Being gentle with yourself" },
      {
        type: "p",
        text: "There is no deadline for feeling better. Small routines, time outdoors and letting trusted people know how you are doing can all help you carry the weight a little more easily.",
      },
      {
        type: "p",
        text: "If grief feels stuck, or is making it hard to get through each day, talking with a grief counsellor can offer space to remember, to feel and to slowly find your footing again.",
      },
    ],
  },
];

export function findBlog(slug: string | undefined): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

/** "2 October 2026" */
export function formatBlogDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
