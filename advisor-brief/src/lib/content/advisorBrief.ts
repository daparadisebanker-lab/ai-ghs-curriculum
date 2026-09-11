export const opportunity = {
  question:
    "Every serious school in Lima is being asked the same question by anxious families: what is your school actually doing about AI.",
  failureModes:
    "Almost all of them are answering it badly — either with a blanket ban that ages out within a year, or with an enthusiastic adoption that quietly lets a chatbot start grading essays. Neither answer survives contact with a sophisticated family, a European admissions office, or a regulator.",
  convergence:
    "Paradise Group has spent the last cycle building the answer properly, and — without planning it as a single project — arrived at the same principle three separate times, in three separate parts of the business: as a schema constraint in Paradise Ascend's admissions tooling, as a regulatory posture in Brücke's European architecture, and as an unwritten pedagogical instinct at Paradise GHS. That principle is now a single, formal document: the Paradise Group AI Governance Standard.",
  becomesAClassroom:
    "Paradise Classroom is where that Standard stops being a document and becomes a classroom. It is the first system in the Group that will touch a live student's grade, feedback, and pathway recommendation — and it is being built, deliberately, so that a named teacher owns every one of those outcomes, always, by design rather than by policy.",
  whyNow:
    "Every serious school now has some AI tool in a classroom somewhere. Almost none of them can tell a parent, precisely, what guardrails exist between a live model and their child. That gap is not a technicality — it is the single question a sophisticated Lima family, or a European institution later assessing GHS's own credential, will actually ask.",
  architecturalAnswer:
    "Paradise Classroom is being built so the answer is architectural rather than reassuring: a schema-level rule that nothing an AI produces reaches a class without a named teacher's action, and an audit trail that shows exactly what was said, to whom, and what a teacher did about it.",
  sameAudience:
    "A GHS graduate applying through Ascend, a family evaluating GHS against Lima's other bilingual schools, and a European university assessing GHS's own secondary credential for recognition are, increasingly, the same audience — and all three respond to the same signal: a school that can show its work on AI, not just assert a policy.",
  institutions: ["Politecnico di Milano", "Bologna", "ETH Zurich"],
  benchmarks: ["Cambridge", "IB", "OSSD", "Singapore", "AP"],
};

export const whatWereBuilding = {
  productLine:
    "Paradise Classroom is a real-time classroom engagement platform — students vote, respond, brainstorm, and get instant sync with the teacher's screen, twenty-eight interaction types deep.",
  differentiator:
    "Its point of genuine differentiation is the AI Prompt Lab: a bounded set of five interaction types in which a student converses directly with an AI model during class, live.",
  scholarOs:
    "Scholar OS is the curriculum layer that runs alongside it — the actual slide decks and design system the Data & AI curriculum is taught through, for the three cohorts that structure GHS's Bimestre 2.",
  drafts: "It drafts: a response to a student's live prompt, in the moment.",
  neverDecides:
    "It never decides: nothing an AI produces reaches the rest of the class — the projector, the shared feed — until a named teacher chooses to share or pin it. No grade, no learning-outcome classification, and no gradebook of any kind exists inside this system at all; the academic record stays entirely with the teacher.",
  handsToTeacher:
    "What Paradise Classroom does put directly in a teacher's hands, for the first time in the Group, is live judgment over an AI system talking to a room of minors — which is exactly why this is the project that needed a written doctrine before it needed a single line of interface code.",
  assetsExist:
    "The build already has real assets behind it: a working multi-tenant database schema, a validated Scholar OS design and animation engine, and a five-sprint technical roadmap already sequenced.",
  whatsMissing:
    "What it does not yet have is the thing only an academic — not an engineer — can supply: a settled, defensible answer to what an AI model should be allowed to say to a twelve-year-old versus a seventeen-year-old, inside a school that measures itself against Cambridge, IB, OSSD, and the world's most demanding secondary benchmarks.",
};

export const roleInvitation = {
  framing:
    "This is not a request to help GHS figure out what it believes about AI in education. That work is done — it is written down, it is the same doctrine across three ventures, and it is not up for renegotiation. What is genuinely open, and what requires an academic authority no engineer or operator in the Group can supply, is how that doctrine translates into the specific judgment calls a real curriculum requires:",
  asks: [
    "Ruling on what an AI model may say to a twelve-year-old versus a seventeen-year-old inside the live Prompt Lab — the one decision the engineering build is currently blocked on, and the one no engineer should make alone.",
    "Co-owning the Protected Fields Register — the concrete list of what a machine may draft and what only a teacher may finally decide.",
    "Owning the content of GHS's Data & AI curriculum, so that what students are taught about AI's limits is identical to what the school's own systems enforce — the single most important consistency check in the entire project.",
    "Sitting as the academic signature on a document that will, within a few years, plausibly be shown to a European university as evidence of how seriously this institution takes the judgment it is asking that university to eventually trust.",
  ],
};

export const invitationClose = {
  notAPilot:
    "We are not asking you to join a pilot project. We are asking you to be the academic author of record on the first working instance, anywhere in the Group, of a governance doctrine that Brücke is already building its European strategy around and that Ascend already lives by in its admissions tooling.",
  everythingElseExists:
    "The engineering, the assets, and the financial model exist. What has been missing is the person whose academic judgment the whole structure is designed to protect and make visible.",
  companionDocs:
    "The three documents accompanying this brief — the Conceptual & Pedagogical Framework, the Governance & Protected Fields Architecture, and the Project Charter — lay out exactly what has been decided, what remains genuinely open, and what we would ask you to rule on first. We would like to walk through them with you directly.",
};

export const coverThesis =
  "An invitation to build the reference standard for governed AI in secondary education.";

export const documentMeta = {
  preparedFor: "The Senior Academic Advisor",
  owner: "Muaaz, CEO, Paradise Education Group",
  institution: "Paradise Global High School",
  version: "v1.1",
  date: "11 September 2026",
};
