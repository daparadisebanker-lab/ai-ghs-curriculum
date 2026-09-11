export type RiskRow = {
  category: "Execution" | "Market" | "Structural";
  risk: string;
  mitigation: string;
};

export const risks: RiskRow[] = [
  {
    category: "Execution",
    risk: "The AI Prompt Lab returns an inappropriate, confusing, or unsafe response to a student in the middle of a live class, with the teacher unable to intervene before the student reads it.",
    mitigation:
      "Cohort-tiered system prompts and content boundaries set before Sprint 3 ships; the share/pin gate ensures the response cannot reach the wider class regardless, but does not undo exposure to the individual student — content-boundary design is not optional or deferrable.",
  },
  {
    category: "Execution",
    risk: "Protected Fields (share/pin) are enforced only in application logic, not at the RLS/schema layer, and a future feature change accidentally grants write access to a service account.",
    mitigation:
      "Build lead implements enforcement at the Supabase RLS layer specifically, verified by a test that attempts and fails a service-account write — not a code-review checklist item alone.",
  },
  {
    category: "Execution",
    risk: "The teacher_note field (or equivalent) is treated as optional and goes unused, leaving the audit trail structurally present but substantively empty.",
    mitigation:
      "Make the field a prompt in the teacher pin flow, not a silent optional column; monitor the zero-teacher_note rate as the leading indicator.",
  },
  {
    category: "Market",
    risk: "Families read “AI talks to my child in class” as alarming rather than differentiated, absent a clear account of the guardrails.",
    mitigation:
      "Lead externally with the doctrine and the guardrails together: “nothing your child's AI exchange produces reaches the class without a teacher choosing to share it, and every exchange is logged” is both the safety claim and the marketing claim.",
  },
  {
    category: "Structural",
    risk: "Prompt-exchange data begins flowing toward curriculum-training use as an assumed default rather than a deliberate, architected decision.",
    mitigation:
      "Named sign-off required before that flow is implemented; treated as a Horizon 2 decision, not an emergent one.",
  },
  {
    category: "Structural",
    risk: "Multi-tenant isolation (RLS) is verified only informally before a second school or licensing partner is onboarded in Sprint 5.",
    mitigation:
      "Sprint 5's multi-tenant isolation verification step includes an explicit adversarial test — one tenant's session attempting to read another's data — not just a design review.",
  },
];
