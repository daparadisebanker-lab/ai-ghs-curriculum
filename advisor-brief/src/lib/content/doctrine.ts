export const governingDoctrine =
  "AI performs extraction, synthesis, and pattern-recognition. Humans perform judgment, admissibility, and consequence.";

export const doctrineOrigin = [
  {
    venture: "Ascend",
    encoding: "a schema constraint",
    detail: "the admissibility field in the Pathway Brief cannot be machine-set.",
  },
  {
    venture: "Brücke",
    encoding: "a regulatory posture",
    detail:
      "EU AI Act transparency and explainability obligations are treated as foundational architecture, not compliance overhead bolted on later.",
  },
  {
    venture: "Paradise GHS",
    encoding: "pedagogy",
    detail:
      "students are taught, explicitly, that AI has no affective grounding and that this is a boundary condition on what it can be trusted to judge — not a temporary technical limitation.",
  },
];

export type DoctrineRow = {
  surface: string;
  augmentation: string;
  determination: string;
};

export const doctrineAppliedToProduct: DoctrineRow[] = [
  {
    surface: "AI Prompt Lab — prompt_free, prompt_guided, prompt_chain, compare_prompts",
    augmentation: "Generate a response to a student's prompt, in real time, server-side.",
    determination:
      "Whether that exchange is ever shown beyond the student who produced it. The shared and pinned_by_teacher flags are teacher-only writes — the schema-level Protected Field already implicit in the design.",
  },
  {
    surface: "evaluate_ai interaction",
    augmentation: "Supply the AI-generated artifact the student is asked to critique.",
    determination:
      "The critique itself is the point of the interaction — the student, not the AI, renders judgment on the AI's output. A working, in-product enactment of the doctrine, not just a teaching topic about it.",
  },
  {
    surface: "Opinion & recall interactions (vote, multiple_choice, agree_disagree, etc.)",
    augmentation: "Aggregate and display response counts, generate vote-bar visualizations.",
    determination: "Any pedagogical meaning drawn from the aggregate is the teacher's to state, live, to the class.",
  },
  {
    surface: "Session and engagement history (Sprint 4 scope)",
    augmentation: "Compute basic engagement metrics per student or class.",
    determination:
      "Any judgment about a specific student's engagement, attention, or participation drawn from those metrics. A metric is an Augmentation output; a conclusion about a student is Determination, and needs a named teacher.",
  },
  {
    surface: "Scholar OS slide content",
    augmentation:
      "None — Scholar OS is authored content (HTML/SVG decks), not a live AI system. It is the curriculum layer the doctrine is taught through, not a system the doctrine is enforced on.",
    determination:
      "All curriculum content, sequencing, and pedagogical framing, authored by the teaching team and reviewed against the Governance Standard's consistency requirement.",
  },
  {
    surface: "Student academic record (grades, marks, learning outcomes)",
    augmentation: "Not touched by Paradise Classroom at all in current scope.",
    determination:
      "Remains entirely with the teacher, in whatever gradebook or assessment system GHS already uses. The cleanest possible Protected posture: the highest-stakes fields are protected by being outside the system's reach, not by an access control that could be misconfigured.",
  },
];

export const correctedTrigger = {
  original:
    "The Governance Standard's Appendix lists Paradise GHS's Protected Fields and audit-trail requirements as “applies to any AI-assisted grading pilot; none currently deployed.”",
  correction:
    "That framing assumed the first live AI surface at GHS would be a grading or marking system. It will not be. The first live AI surface is the Paradise Classroom AI Prompt Lab — a real-time, direct-to-student system, with no grading function anywhere in its current scope.",
  stakes:
    "A grading system's worst failure mode is a bad mark, caught on review, correctable before it reaches a record. A real-time Prompt Lab's worst failure mode is a live, unmoderated model response reaching a 12-to-17-year-old before any adult has seen it.",
  trigger:
    "Treat Sprint 3 (the Anthropic API route, prompt_free UI, and evaluate_ai UI) as the trigger for this document's obligations, not any future grading feature. The Protected Fields Register and the content-safety posture must both be in place before Sprint 3 ships to real students.",
};
