export type TeamRow = {
  role: string;
  who: string;
  mandate: string;
  isOpenSeat?: boolean;
};

export const team: TeamRow[] = [
  {
    role: "Sponsor / Owner",
    who: "Muaaz",
    mandate:
      "Overall accountability; owns the Governance Standard and this Charter; final call on Horizon transitions, the Horizon 2 data-boundary decision, and any exception to the Protected Fields Register.",
  },
  {
    role: "Senior Academic Advisor",
    who: "To be named",
    isOpenSeat: true,
    mandate:
      "Chief pedagogical authority. Rules on cohort-tiered content boundaries for the AI Prompt Lab before Sprint 3 ships; co-signs the Protected Fields Register; owns doctrine-consistency review of Scholar OS curriculum content; rules on the canonical benchmark set for GHS's broader course-benchmarking work.",
  },
  {
    role: "Technical build lead",
    who: "Continuing build, per the engineering blueprint",
    mandate:
      "Implements Sprints 1–5 against the existing schema and engine files; implements Protected Fields enforcement at the RLS/schema level; implements the recommended teacher_note audit field; owns the cohort-tiered system-prompt configuration once the Advisor rules on content boundaries.",
  },
  {
    role: "Pilot teacher group",
    who: "To be named — first Bimestre 2 cohort teachers",
    isOpenSeat: true,
    mandate:
      "First users of the live Sprint 3 Prompt Lab; the human half of every share/pin decision; primary source of the teacher_note data that makes the audit trail substantively meaningful, not just structurally present.",
  },
  {
    role: "Academic lead / reviewer",
    who: "To be named",
    isOpenSeat: true,
    mandate:
      "Second-line reviewer for the zero-teacher_note early-warning signal; escalation point for any Prompt Lab content-safety concern raised by a teacher.",
  },
];

export type DecisionItem = {
  id: number;
  title: string;
  owner: string;
  neededBy: string;
  priority?: "highest";
};

export const decisionLog: DecisionItem[] = [
  {
    id: 1,
    title:
      "Cohort-tiered content boundaries for the AI Prompt Lab (Pathfinders 12–14 / Innovators 14–15 / Leaders 15–17).",
    owner: "Advisor",
    neededBy: "Before Sprint 3 ships",
    priority: "highest",
  },
  {
    id: 2,
    title:
      "Data-boundary architecture for prompt-exchange data flowing toward curriculum-training use.",
    owner: "Muaaz",
    neededBy: "Before Sprint 4 (analytics)",
  },
  {
    id: 3,
    title:
      "Canonical benchmark set for GHS's broader course-benchmarking (Cambridge / IB / OSSD / Singapore vs. AP) — unrelated to Paradise Classroom itself, carried over from the original brief.",
    owner: "Advisor",
    neededBy: "GHS's own benchmarking-page work, independent of this project's timeline",
  },
  {
    id: 4,
    title:
      "Reconcile the earlier QLoRA / fine-tuned-model financial model against the current Anthropic-API-server-side architecture before relying on either for budget planning.",
    owner: "Muaaz + build lead",
    neededBy: "Before Sprint 5 (licensing prep)",
  },
];

export const decisionOneNote =
  "This is the single highest-priority open decision in the whole project — everything else can slip a sprint; this cannot ship without it.";
