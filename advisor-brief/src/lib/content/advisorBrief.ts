export const courseIntro = {
  quote:
    "No formamos usuarios de IA. Formamos personas que comprenden lo que la IA puede y no puede hacer — y por qué. Esa diferencia define quién dirige la tecnología y quién es dirigido por ella.",
  quoteSource: "Currículo IA, Paradise GHS — cita de apertura",
  premise:
    "Fundamentals first, tools after. The course doesn't teach students to use AI tools — it teaches what intelligence is, human and artificial, from the ground up, so that whatever tool exists five years from now, a graduate can reason about it with real judgment instead of borrowed fluency.",
  arc:
    "Four bimestres, 39 weeks: machine language, then the fundamentals of human intelligence, then applied algorithms and a working chatbot, then a full integrator project presented publicly. Bimestre 2 — the one built out in detail below — is the hinge: neuroscience and cognitive science as the lens the rest of the year is read through.",
  mechanism:
    "Every week runs the same two-block rhythm: a 45-minute provocation with no lecture, then a 45-minute Prompt Lab where students test the week's idea against a real AI model. Every week ends on a deliberately unresolved question — the ambiguity is the mechanism, not a gap.",
  cohortNote:
    "Three cohorts — Pathfinders, Innovators, Leaders — work the same question at different depths of abstraction every week. Not different topics. Different entry points into the same territory.",
};

export const whatWereBuilding = {
  productLine:
    "Paradise Classroom is a real-time classroom engagement platform — students vote, respond, brainstorm, and get instant sync with the teacher's screen, twenty-eight interaction types deep.",
  differentiator:
    "Its point of genuine differentiation is the AI Prompt Lab: a bounded set of five interaction types in which a student converses directly with an AI model during class, live — the exact mechanism the curriculum's Bloque B runs on, every single week.",
  scholarOs:
    "Scholar OS is the curriculum layer that runs alongside it — the slide decks and design system the Data & AI curriculum is taught through, for the three cohorts that structure Bimestre 2.",
  drafts: "It drafts: a response to a student's live prompt, in the moment.",
  neverDecides:
    "It never decides: nothing an AI produces reaches the rest of the class — the projector, the shared feed — until a named teacher chooses to share or pin it. No grade, no learning-outcome classification, and no gradebook of any kind exists inside this system at all; the academic record stays entirely with the teacher.",
  handsToTeacher:
    "What Paradise Classroom puts directly in a teacher's hands is live judgment over an AI system talking to a room of minors — which is exactly why this needed a written doctrine before it needed a single line of interface code.",
  assetsExist:
    "The build already has real assets behind it: a working multi-tenant database schema, a validated Scholar OS design and animation engine, two fully-built curriculum weeks with real classroom-tested prompts, and a five-sprint technical roadmap already sequenced.",
  whatsMissing:
    "What it does not yet have is the thing only an academic — not an engineer — can supply: a settled, defensible answer to what an AI model should be allowed to say to a twelve-year-old versus a seventeen-year-old.",
};

export const teamAlignment = {
  framing:
    "The doctrine itself isn't open for debate — it's written down, and it governs every AI-touching decision in this build. What's genuinely open, and what needs your judgment specifically, is how that doctrine translates into the calls a real curriculum and a live classroom actually require:",
  asks: [
    "Ruling on what an AI model may say to a twelve-year-old versus a seventeen-year-old inside the live Prompt Lab — the one decision the engineering build is currently blocked on.",
    "Co-owning the Protected Fields Register — the concrete list of what a machine may draft and what only a teacher may finally decide.",
    "Reviewing Semanas 3–9 as they're built, so the doctrine-consistency check runs on every week, not only the two that exist today.",
    "Signing off on the curriculum enhancements in this document — the learning outcomes, the rubric, the differentiation notes — before they become the working version everyone teaches from.",
  ],
};

export const closingNote = {
  statement:
    "The engineering, the curriculum's first two weeks, and the governance architecture all exist and hold together. What's left is the judgment only you can supply — and the rest of Bimestre 2, built the same way, week by week.",
  companionDocs:
    "The Conceptual & Pedagogical Framework, the Governance & Protected Fields Architecture, and the Project Charter sections below lay out exactly what's decided and what's still open. Read the curriculum itself first — everything else here is built to support it.",
};

export const coverThesis =
  "The AI curriculum, the platform it runs on, and the calls only you can make.";

export const documentMeta = {
  preparedFor: "The Senior Academic Advisor",
  owner: "Muaaz, CEO, Paradise Education Group",
  institution: "Paradise Global High School",
  version: "v1.1",
  date: "11 September 2026",
};
