export type FieldStatus = "PROTECTED" | "AUGMENTATION" | "OUT OF SCOPE" | "STRUCTURAL";

export type ProtectedFieldRow = {
  field: string;
  status: FieldStatus;
  aiRole: string;
  enforcement: string;
  highlight?: boolean;
};

export const protectedFieldsRegister: ProtectedFieldRow[] = [
  {
    field: "responses.shared, responses.pinned",
    status: "PROTECTED",
    aiRole: "None — these are booleans a teacher sets.",
    enforcement:
      "Row-Level Security policy: writable only by the session's teacher-of-record role, never by the Anthropic API service call or any automated pipeline.",
  },
  {
    field: "prompt_exchanges.shared, prompt_exchanges.pinned_by_teacher",
    status: "PROTECTED",
    aiRole: "None — the AI never decides whether its own output is amplified to the class.",
    enforcement:
      "Same RLS pattern as above. The single most important Protected Field in the entire system — no exchange reaches the class display unless a named teacher writes that flag.",
    highlight: true,
  },
  {
    field: "prompt_exchanges.ai_response (content)",
    status: "AUGMENTATION",
    aiRole: "Generates a response to the student's prompt, server-side, via the Anthropic API.",
    enforcement:
      "Cohort-tiered system prompt and content-boundary configuration; response is written to the student's own session only until a teacher separately sets the shared / pinned fields above.",
  },
  {
    field: "evaluate_ai interaction output",
    status: "AUGMENTATION",
    aiRole: "Provides the AI-generated content the student is asked to critique.",
    enforcement:
      "No “correct answer” or evaluative field exists in this interaction's schema — the judgment is structurally the student's, not a graded response to compare against a key.",
  },
  {
    field: "Student academic record (grades, learning-outcome classification)",
    status: "OUT OF SCOPE",
    aiRole: "None. No table in the current schema represents a grade or mark.",
    enforcement:
      "Paradise Classroom has no integration with any gradebook or assessment system. The strongest possible protection for this class of field is architectural absence, not an access rule that could be misconfigured.",
  },
  {
    field: "Session engagement metrics (Sprint 4)",
    status: "AUGMENTATION",
    aiRole: "Computes aggregate participation / engagement figures.",
    enforcement:
      "No schema field ever stores a derived judgment about a student (e.g. “disengaged”) — only raw counts. Any characterization of a specific student from this data is a teacher's to make and state, not a system output.",
  },
  {
    field: "schools tenant boundary",
    status: "STRUCTURAL",
    aiRole: "N/A",
    enforcement:
      "Row-Level Security enforces school-level isolation for every table — already implemented, not a future commitment.",
  },
];

export const auditTrail = {
  requirement:
    "Every AI-assisted output must be traceable to what the AI was given, what it produced, and what a human changed or overrode — with the draft and the human-finalized version retained as two distinct, timestamped artifacts.",
  whatExists:
    "The prompt_exchanges table, as already specified, substantially implements this: prompt_text and ai_response retain the raw exchange, and shared / pinned_by_teacher retain the human action taken on it. That is real, working audit infrastructure, not a future build item.",
  gap: "The current schema records whether a teacher amplified an exchange, but not what the teacher added, changed, or said about it before doing so. A teacher who pins a Prompt Lab exchange and narrates a correction to the class live has done exactly the judgment work the Governance Standard wants recorded, and right now that judgment leaves no trace in the data.",
  recommendation:
    "Add a teacher_note (or context_added) text field to prompt_exchanges, populated whenever a teacher pins an exchange, capturing what they said or added when presenting it. Recommended for inclusion in Sprint 3, not deferred to Sprint 4.",
  earlyWarning:
    "A growing share of zero-delta, rubber-stamp approvals is an early-warning signal, not a neutral fact. If a teacher's pinned exchanges consistently carry no teacher_note, that is a warning sign in its own right: judgment is being approved, not exercised.",
};

export const regulatoryPositioning = {
  scopeNote:
    "The EU AI Act's high-risk classification for systems that evaluate learning outcomes is not engaged by the AI Prompt Lab as currently scoped — it generates content and conversation, not grades or classifications.",
  operativeRegister:
    "A different regulatory register applies with more force here than it would to a grading tool: this is a real-time generative system in direct contact with minors as young as twelve, and the operative standards are child-safety and content-moderation obligations — increasingly formalized across the EU under the Digital Services Act's protections for minors — rather than the AI Act's admissions/assessment provisions specifically.",
  contentBoundaries:
    "Cohort-tiered content boundaries: the system prompt and any content filter governing the Anthropic API calls should differ by cohort — materially stricter for Pathfinders (12–14) than for Leaders (15–17). This calibration is an academic and developmental-psychology judgment the Advisor should own, not an engineering default.",
  pinBackstop:
    "The share/pin mechanism already provides a structural backstop — a harmful or inappropriate model response can be produced without ever becoming visible beyond the student who prompted it, provided the teacher does not pin it. This does not eliminate the risk to the individual student who received the response, which is why content-boundary work cannot be skipped in favor of relying on the pin mechanism alone.",
  framing:
    "Building age-tiered content boundaries and a full audit trail now, before any regulator or parent asks, is compliance-by-design rather than remediation — a genuinely differentiating claim GHS can make to families evaluating it against schools running AI tools with no equivalent architecture.",
  counsel:
    "Requires confirmation by qualified EU regulatory counsel before it is relied on for any filing or partnership representation.",
};

export const scopeBoundary = {
  inScope:
    "The AI Prompt Lab interaction types (prompt_free, prompt_guided, prompt_chain, compare_prompts, evaluate_ai); the share/pin mechanism that controls whether any student output — AI-touched or not — reaches the class display; and, once built, the Sprint 4 engagement-analytics surface.",
  outOfScope:
    "Any grading, marking, or learning-outcome classification; any disciplinary or conduct system; any open-ended chat outside the five defined Prompt Lab interaction types. The product is a bounded room with five doors, not a general chat client — and it should stay that way for exactly the reason the doctrine exists.",
};
