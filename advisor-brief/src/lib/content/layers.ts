export type Layer = {
  key: "teacher" | "student" | "technology";
  name: string;
  pedagogyView: string;
  governanceView: string;
  detail: string;
};

export const layers: Layer[] = [
  {
    key: "teacher",
    name: "Teacher",
    pedagogyView: "Runs the session — launches it from a Scholar OS slide deck, advances slides, activates interactions.",
    governanceView:
      "Decides what gets shared or pinned to the class display — the load-bearing control in the entire system. Nothing a student produces reaches the projector without that action.",
    detail:
      "The teacher also owns class and group management (rosters, pairs, groups) and, separately and entirely outside Paradise Classroom, the student's actual academic record.",
  },
  {
    key: "student",
    name: "Student",
    pedagogyView:
      "A deliberately paced and locked experience: Waiting (attention forced to the projector, no navigation), Active (the current interaction), Reviewing (their own response, and whatever the teacher has chosen to surface).",
    governanceView:
      "Twenty-eight interaction types span six pedagogical categories, plus a fifth, distinct category that is the product's actual point of differentiation: the AI Prompt Lab.",
    detail:
      "Students cannot navigate independently — their screen follows the teacher, always.",
  },
  {
    key: "technology",
    name: "Technology",
    pedagogyView:
      "Next.js 14 and Tailwind on the front end; Supabase (Postgres, Row-Level Security, Realtime) as the database and multi-tenant backbone; Pusher for live sync; the Anthropic API called server-side only, keys never reaching the client.",
    governanceView:
      "Multi-tenant from day one — a schools table sits above everything, with Row-Level Security enforcing tenant isolation — even though MVP scope is Paradise GHS alone. Already implemented, not a future commitment.",
    detail:
      "A deliberate, already-made architectural choice that matters directly to the Governance Standard.",
  },
];

export const layersIntro =
  "The blueprint is best read as three layers, and the Governance Standard attaches differently to each. What follows is the same architecture read twice — once as pedagogy, once as governance.";
