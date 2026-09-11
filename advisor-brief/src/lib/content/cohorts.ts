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
      "The teléfono descompuesto (telephone game) and a simple chalkboard neuron diagram ground the Hebbian-learning claim in direct experience — then two Prompt Lab prompts test whether a child-friendly AI explanation is actually better.",
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
      "Full anatomical vocabulary — dendrites, soma, axon, synapse — plus Hebb's 1949 rule, then a neurona/nodo comparison table the AI helps complete, with a required step: name a row where the analogy breaks.",
    promptLabRole:
      "The natural home for compare_prompts — the same three-prompt sequence students use to complete their neurona/nodo comparison table.",
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
      "Opens cold with Hebb's actual 1949 line — “Cells that fire together, wire together” — then the real genealogy (McCulloch-Pitts 1943 → Hebb 1949 → Rosenblatt 1957 → backpropagation 1986 → today), and a Prompt Lab experiment that asks ChatGPT to self-report on whether its own training resembled human learning.",
    promptLabRole:
      "Paired with evaluate_ai — the cohort asked to judge whether the AI's self-report on its own training is precise or evasive, not just whether it's correct.",
  },
];

export const namingCollisionNote =
  "The Pathfinders / Innovators / Leaders names are reused for a different purpose elsewhere — the Cambridge IGCSE English proficiency tiers (B2 / B1 / A2–A1) built for a separate assessment project use the same three names for a different classification. In Paradise Classroom and Scholar OS, these names refer only to the Stage 7–8 / 9 / 10–11 age-based curriculum cohorts. Worth keeping straight so the two systems are never conflated in conversation.";

export const weekTwoTopic =
  "How the brain learns — and why AI learns the same way.";

export const promptLabTypes = [
  { key: "prompt_free", label: "prompt_free" },
  { key: "prompt_guided", label: "prompt_guided" },
  { key: "prompt_chain", label: "prompt_chain" },
  { key: "compare_prompts", label: "compare_prompts" },
  { key: "evaluate_ai", label: "evaluate_ai" },
];
