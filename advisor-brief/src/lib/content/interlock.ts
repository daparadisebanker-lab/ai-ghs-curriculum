export const interlockIntro =
  "Two sections back, this looked like pedagogy. One section back, it looked like governance. It is the same interaction, described twice — because in this one case, the pedagogy and the governance are not two views of one feature. They are the same feature.";

export const realPromptExample = {
  cohort: "Leaders",
  session: "Semana 2 · Prompt Lab, prompt 3 of 3",
  prompt:
    "Cuando tú — ChatGPT — fuiste entrenado, ¿aprendiste de la misma manera que un cerebro humano aprende? Explica las similitudes y las diferencias con honestidad técnica.",
  promptEn:
    "“When you — ChatGPT — were trained, did you learn the same way a human brain learns? Explain the similarities and differences with technical honesty.”",
  teacherNote:
    "Deliberately introspective. What matters isn't just whether the answer is correct — it's whether the AI can speak precisely about its own learning mechanism, or hedges with “podría decirse” (“one could say”) and “en cierto sentido” (“in a certain sense”). Students are told, explicitly, to flag that evasive language.",
};

export const evaluateAiPedagogy =
  "evaluate_ai is a working, in-product enactment of the doctrine, not just a teaching topic about it. Leaders' Semana 2 Prompt Lab already runs this pattern for real: the third prompt asks the AI to self-report on its own training, and the student's job is to judge whether the answer is precise or evasive — not to accept it.";

export const evaluateAiGovernance =
  "No “correct answer” or evaluative field exists in this interaction's schema — the judgment is structurally the student's, not a graded response to compare against a key. The AI supplies the artifact under judgment; it does not, and structurally cannot, judge itself.";

export const seamSteps = [
  {
    label: "AI supplies",
    detail: "The Anthropic API generates an artifact — a response, an argument, an analysis — server-side.",
  },
  {
    label: "Student judges",
    detail:
      "The student critiques it. This is the point of the interaction, not a follow-up step. No evaluative field exists for the AI to fill in instead.",
  },
  {
    label: "Teacher decides",
    detail:
      "Whether the exchange — the AI's artifact and the student's critique — ever reaches the class display is a pinned_by_teacher write. Never a service account. Never a default.",
  },
];

export const interlockClosing =
  "Recognize the pattern once, in this one interaction, and it explains every other row in the Protected Fields Register. The curriculum's own Semana 2 Prompt Lab already contains a genuine instance of the doctrine — the platform doesn't need to invent a teaching example; it needs to run the one already written.";
