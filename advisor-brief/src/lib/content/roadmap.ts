export type Horizon = {
  key: "h1" | "h2" | "h3";
  label: string;
  window: string;
  title: string;
  items: string[];
  gate?: string;
};

export const horizons: Horizon[] = [
  {
    key: "h1",
    label: "Horizon 1",
    window: "Next 90 Days",
    title: "Ship the Foundation and the Prompt Lab, Governed",
    items: [
      "Sprint 1 (foundation): teacher dashboard, session creation flow, WaitingScreen, SessionEndedScreen, InteractionRenderer dispatcher.",
      "Sprint 2 (interactions): the 12 MVP interaction components and the teacher's live response-aggregation view.",
      "Sprint 3 (AI) — the governance-critical sprint: the /api/ai/prompt server route, the prompt_free and evaluate_ai student UIs, and the share mechanism.",
      "Complete the Scholar OS Week 2 decks for all three cohorts (Pathfinders rebuild, Innovators and Leaders built fresh).",
      "Advisor onboarding: walk the Advisor through the Conceptual Framework and the Governance document, and secure his ruling on cohort-tiered content boundaries.",
    ],
    gate: "Sprint 3 does not ship without the Protected Fields Register and the cohort-tiered content-safety boundaries in place first — as a precondition, not a parallel workstream.",
  },
  {
    key: "h2",
    label: "Horizon 2",
    window: "12–24 Months",
    title: "Analytics, Licensing Readiness, and the Rest of the Curriculum",
    items: [
      "Sprint 4 (analytics): session history, per-student response review, basic engagement metrics — built to the boundary set in the Governance document (raw counts only; no stored judgment about a specific student).",
      "Sprint 5 (licensing prep): school admin dashboard, multi-tenant isolation verification, Stripe integration.",
      "Extend Scholar OS beyond Bimestre 2's Week 2 unit across the rest of the Data & AI curriculum, maintaining the same doctrine-consistency discipline at every unit.",
      "Resolve the structural data-boundary question (whether prompt-exchange data may ever be used to improve future curriculum content) with a named architecture, before that flow is implemented by default.",
    ],
  },
  {
    key: "h3",
    label: "Horizon 3",
    window: "3–5 Years",
    title: "The Reference Case for Governed AI in Secondary Education",
    items: [
      "Package the Protected Fields Register, the audit-trail record (including the recommended teacher_note field), and the cohort-tiered content-safety architecture as a demonstrable case study — evidence, not assertion, of what a governed AI classroom looks like in practice.",
      "Evaluate Paradise Classroom's licensing model to other schools (the multi-tenant architecture is already built for this) once GHS's own deployment has a full academic year of governed operation behind it.",
      "Extend the same doctrine-consistency discipline to every curriculum unit built after Bimestre 2 — Semanas 3–9 and beyond — not only the first one.",
    ],
  },
];

export type TimelineStep = {
  window: string;
  action: string;
  owner: string;
};

export const immediateNextSteps: TimelineStep[] = [
  {
    window: "Next 2 weeks",
    action:
      "Present this Charter, the Conceptual Framework, and the Governance & Protected Fields Architecture to the Senior Academic Advisor.",
    owner: "Muaaz",
  },
  {
    window: "Next 2 weeks",
    action:
      "Advisor rules on cohort-tiered AI Prompt Lab content boundaries (Pathfinders / Innovators / Leaders) — a decision the Charter cannot make for him, and a precondition for Sprint 3.",
    owner: "Advisor",
  },
  {
    window: "Weeks 1–3",
    action:
      "Complete Sprint 1 (foundation) and Sprint 2 (12 MVP interactions), including the Scholar OS deck completion for all three cohorts.",
    owner: "Build lead",
  },
  {
    window: "Weeks 3–5",
    action:
      "Implement the Protected Fields Register at the RLS layer, and the recommended teacher_note schema addition, ahead of Sprint 3.",
    owner: "Build lead",
  },
  {
    window: "Weeks 4–6",
    action:
      "Sprint 3: ship the AI Prompt Lab, gated on the Advisor's content-boundary ruling and the schema-level Protected Fields being live.",
    owner: "Build lead + Advisor sign-off",
  },
  {
    window: "Weeks 6–12",
    action:
      "Run the first live Bimestre 2 cohort with the full Prompt Lab; monitor share/pin and teacher_note data from day one.",
    owner: "Pilot teacher group",
  },
  {
    window: "Week 12",
    action: "Horizon 1 review: go/no-go on Sprint 4–5 (Horizon 2), using the Success Metrics.",
    owner: "Muaaz + Advisor",
  },
];

export const successMetrics: string[] = [
  "Zero AI-generated content reaches a class display without a logged teacher share/pin action — verified at the schema level.",
  "Zero content-safety incidents in the AI Prompt Lab across the pilot cohorts, tracked explicitly, not inferred from an absence of complaints.",
  "teacher_note (or equivalent) populated on a rising share of pinned exchanges — the live-session analogue of the delta-flag metric in the Governance document.",
  "Session reliability: sync latency and uptime for the Pusher-driven teacher/student experience.",
  "Advisor sign-off obtained on cohort-tiered content boundaries before, not after, Sprint 3 reaches real students.",
];
