export type Cohort = {
  key: "pathfinders" | "innovators" | "leaders";
  name: string;
  stage: string;
  ages: string;
  register: string;
  color: string; // tailwind class token
  hex: string;
  weekTwoBeat: string;
  promptLabRole: string;
};

export const cohorts: Cohort[] = [
  {
    key: "pathfinders",
    name: "Pathfinders",
    stage: "Stage 7–8",
    ages: "12–14",
    register: "Experience first, concept after — activity before name.",
    color: "path",
    hex: "#1d4e89",
    weekTwoBeat:
      "The telephone-game activity and the synapse Lab Plate artifact ground the Hebbian-learning claim in direct experience before naming it.",
    promptLabRole:
      "The cohort's Prompt Lab exposure carries the strictest content-safety posture in the system.",
  },
  {
    key: "innovators",
    name: "Innovators",
    stage: "Stage 9",
    ages: "14–15",
    register: "Framework first, then test it — quote cold, then explain.",
    color: "inno",
    hex: "#1a6b3c",
    weekTwoBeat:
      "The cold Hebb quote, followed by the neuron-vs-node Comparison Wall, teaches the mechanism before testing whether the analogy holds.",
    promptLabRole:
      "The natural home for compare_prompts — two AI outputs held to the same rigor as the Comparison Wall.",
  },
  {
    key: "leaders",
    name: "Leaders",
    stage: "Stage 10–11",
    ages: "15–17",
    register: "Provocation first, then dismantle, then genealogy.",
    color: "lead",
    hex: "#6b1a1a",
    weekTwoBeat:
      "“La IA aprende exactamente igual” (“AI learns exactly the same way”) opens as a claim the class must dismantle, followed by a genealogy timeline (Hebb 1949 → today) and a Limits Grid of what holds and what breaks.",
    promptLabRole:
      "Paired with evaluate_ai — the cohort old enough for personalization is also the cohort asked to render the sharpest judgment on the AI itself.",
  },
];

export const namingCollisionNote =
  "The Pathfinders / Innovators / Leaders names are reused elsewhere in the Group for a different purpose — the Cambridge IGCSE English proficiency tiers (B2 / B1 / A2–A1) built for a separate assessment project use the same three names for a different classification. In Paradise Classroom and Scholar OS, these names refer only to the Stage 7–8 / 9 / 10–11 age-based curriculum cohorts. Worth keeping straight so the two systems are never conflated in conversation.";

export const weekTwoTopic =
  "How the brain learns — and why AI learns the same way.";

export const promptLabTypes = [
  { key: "prompt_free", label: "prompt_free" },
  { key: "prompt_guided", label: "prompt_guided" },
  { key: "prompt_chain", label: "prompt_chain" },
  { key: "compare_prompts", label: "compare_prompts" },
  { key: "evaluate_ai", label: "evaluate_ai" },
];
