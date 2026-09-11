import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Scholar OS — How the Pilot Program Was Built",
  description:
    "The engine behind Paradise GHS's AI curriculum decks, and the pilot program that proved it — a case study in Augmentation and Determination applied to curriculum authorship.",
};

const layoutArchetypes = [
  { name: "Monument", use: "Cover, Conclusion — title dominant, artifact panel right" },
  { name: "Reading Plate", use: "Quote, Inquiry — centered, generous whitespace" },
  { name: "Deep Label", use: "Artifact slides — 58% field left, 42% label stack right" },
  { name: "Split Narrative", use: "Explanation + visual — 46% text, 54% visual" },
  { name: "Timeline Spine", use: "Genealogy — animated spine, staggered nodes" },
  { name: "Comparison Wall", use: "Data tables — mirrored columns, identical rhythm" },
  { name: "Lesson Activity", use: "Dark surface, split anchor + cards" },
  { name: "Prompt Lab", use: "Dark surface, full-width card deck" },
  { name: "Provocation", use: "Dark surface, centered claim — Leaders only" },
  { name: "Conclusion", use: "Centered, claim dominant, proof quiet" },
];

const decks = [
  { cohort: "Pathfinders", stage: "Stage 7–8", slides: 9, accent: "#2E5B8A", file: "slides_w2_pathfinders.html", title: "Cómo aprende tu cerebro" },
  { cohort: "Innovators", stage: "Stage 9", slides: 10, accent: "#1A6B52", file: "slides_w2_innovators.html", title: "El mecanismo del aprendizaje" },
  { cohort: "Leaders", stage: "Stage 10–11", slides: 9, accent: "#7A2020", file: "slides_w2_leaders.html", title: "La genealogía del aprendizaje" },
];

export default function ScholarOSPage() {
  return (
    <main className="bg-paper text-ink">
      {/* HERO */}
      <section className="border-b border-rule px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-content">
          <Reveal variant="reveal-line">
            <div className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Paradise Education Group · Scholar OS
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <h1 className="max-w-4xl text-balance font-display text-[2.4rem] font-semibold leading-[1.08] sm:text-6xl">
              The engine behind the curriculum — and the pilot program that proved it.
            </h1>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft/80">
              The main site tells the story of Paradise Classroom and the governance doctrine
              behind it. This page tells a different story: how Scholar OS — the presentation
              system for the AI curriculum itself — actually gets made. Semana 2 of Bimestre 2 is{" "}
              <strong className="text-ink">the pilot program</strong>: the first case where
              Paradise Group used AI as a real creative and pedagogical design partner, not just
              a classroom feature, and shipped deployed curriculum content that way.
            </p>
          </Reveal>
          <Reveal delayMs={280}>
            <a
              href="/"
              className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-terra underline decoration-terra decoration-2 underline-offset-4"
            >
              ← Back to the main reference
            </a>
          </Reveal>
        </div>
      </section>

      {/* THE ENGINE */}
      <section className="border-b border-rule px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-terra">The Engine</span>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Open with the engine, not the output.
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft/80">
              A tight enough constraint system is what turns AI generation from a novelty into
              production infrastructure. That is the actual reason the pilot program works —
              not &ldquo;AI helps us design faster.&rdquo;
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal delayMs={100}>
              <div className="h-full border border-rule bg-surface px-6 py-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Grid &amp; Typography</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/85">
                  12-column grid — <code className="font-mono text-xs">--mg-x: 72px</code>,{" "}
                  <code className="font-mono text-xs">--mg-y: 56px</code>,{" "}
                  <code className="font-mono text-xs">--gap: 24px</code>. Three-font pairing:
                  Instrument Serif for display and quotes, Inter for body, IBM Plex Mono for
                  metadata and labels.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={160}>
              <div className="h-full border border-rule bg-surface px-6 py-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">The SVG Contract</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/85">
                  Fixed <code className="font-mono text-xs">viewBox 0 0 560 420</code>. Maximum 4
                  colors. No gradients, no filters. Named layers —{" "}
                  <code className="font-mono text-xs">paper / artifact / annotation / metadata</code>.
                  Stroke weight 1.25–3.5px. This is the sharpest detail, and the one that does the
                  most work.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={220}>
              <div className="h-full border border-rule bg-surface px-6 py-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Per-Cohort Colorway</div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/85">
                  A shared foundation — page, surface, ink, muted, rule — with one accent
                  override per cohort. Nothing else changes. The constraint is the point.
                </p>
                <div className="mt-4 flex gap-2">
                  {decks.map((d) => (
                    <span
                      key={d.cohort}
                      className="h-6 w-6 shrink-0 border border-ink/10"
                      style={{ backgroundColor: d.accent }}
                      title={`${d.cohort} · ${d.accent}`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={260}>
            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold">Ten layout archetypes</h3>
              <p className="mt-2 max-w-2xl text-sm text-ink-soft/70">
                Every slide uses exactly one. No freehand layout — the archetype is chosen, not
                designed from scratch each time.
              </p>
              <div className="mt-6 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2">
                {layoutArchetypes.map((l) => (
                  <div key={l.name} className="bg-surface px-5 py-4">
                    <span className="font-display text-base font-semibold">{l.name}</span>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{l.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE PROCESS */}
      <section className="border-b border-ink bg-ink px-6 py-20 text-paper sm:px-10 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-terra">The Process</span>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.1] text-paper sm:text-4xl">
              The same doctrine, a different surface.
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/75">
              Augmentation and Determination aren&rsquo;t restated here — they&rsquo;re applied.
              The Protected Fields Register governs what an AI may write to a live classroom
              screen. This is what the same split looks like for curriculum authorship.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 lg:grid-cols-3">
            <Reveal delayMs={100}>
              <div className="h-full bg-ink px-7 py-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">01 · Determination</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-paper">Pedagogical strategy, decided first</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  Pathfinders&rsquo; experience-before-concept, Innovators&rsquo;
                  framework-then-test, Leaders&rsquo; provocation-then-dismantle-then-genealogy —
                  a curriculum decision made by humans before anything is generated. The AI does
                  not choose how a twelve-year-old should be taught versus a seventeen-year-old.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={160}>
              <div className="h-full bg-ink px-7 py-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold">02 · Augmentation</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-paper">AI drafts inside the constraint system</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  Once the register is set, drafting slide sequences, copy, and SVG artifact
                  concepts that satisfy the Scholar OS contract is real, substantial work — most
                  of the actual production volume — but bounded by a system a human designed.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={220}>
              <div className="h-full bg-ink px-7 py-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-terra">03 · Determination</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-paper">A human finalizes every deck</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">
                  No deck ships unreviewed. This isn&rsquo;t &ldquo;AI made the curriculum&rdquo;
                  — it&rsquo;s &ldquo;AI let a small team produce curriculum at a quality bar
                  that would otherwise have needed a much larger team.&rdquo; That&rsquo;s the
                  true, more interesting claim.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THE PILOT PROGRAM — evidence */}
      <section className="border-b border-rule px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-terra">The Pilot Program</span>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Semana 2, in all three registers — live, not screenshotted.
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft/80">
              These are the real decks, running the real Scholar OS engine. Use{" "}
              <kbd className="rounded border border-rule bg-surface px-1.5 py-0.5 font-mono text-xs">→</kbd>{" "}
              to advance,{" "}
              <kbd className="rounded border border-rule bg-surface px-1.5 py-0.5 font-mono text-xs">G</kbd>{" "}
              for the gallery view.
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {decks.map((d, i) => (
              <Reveal key={d.cohort} delayMs={100 + i * 80}>
                <div className="border border-ink/15">
                  <div
                    className="flex flex-wrap items-center justify-between gap-2 px-5 py-3"
                    style={{ backgroundColor: d.accent }}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-white/90">
                      {d.cohort} · {d.stage} · {d.slides} slides
                    </span>
                    <span className="font-display text-sm italic text-white/85">&ldquo;{d.title}&rdquo;</span>
                    <a
                      href={`/${d.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.08em] text-white/80 underline underline-offset-2"
                    >
                      Open fullscreen ↗
                    </a>
                  </div>
                  <iframe
                    src={`/${d.file}`}
                    title={`Scholar OS deck — ${d.cohort} — Semana 2`}
                    className="h-[560px] w-full border-0"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIFACTS EXCERPT */}
      <section className="border-b border-rule bg-surface px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-terra">Real Exhibits</span>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.1] sm:text-4xl">
              Two artifacts from the pilot, pulled directly from the decks.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal delayMs={100}>
              <div className="border border-ink/15 bg-paper px-6 py-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  SVG_SYNAPSE_PLATE · Lab Plate · Pathfinders, Slide 4
                </span>
                <svg viewBox="0 0 560 420" className="mt-4 w-full">
                  <g id="artifact" stroke="#1C1C1A" fill="none" strokeWidth="1.5">
                    <rect x="30" y="50" width="230" height="320" fill="none" stroke="#D8D3C8" />
                    <text x="145" y="76" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" letterSpacing="2" fill="#6B6560">ANTES</text>
                    <line x1="90" y1="130" x2="200" y2="130" stroke="#D8D3C8" strokeDasharray="4,3" />
                    <circle cx="110" cy="110" r="8" fill="#1C1C1A" /><circle cx="145" cy="105" r="8" fill="#1C1C1A" /><circle cx="180" cy="112" r="8" fill="#1C1C1A" />
                    <rect x="100" y="150" width="18" height="14" fill="#1C1C1A" /><rect x="140" y="150" width="18" height="14" fill="#1C1C1A" /><rect x="180" y="150" width="18" height="14" fill="#1C1C1A" />
                    <text x="145" y="330" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="#6B6560">3 vesículas · 3 receptores</text>

                    <rect x="300" y="50" width="230" height="320" fill="none" stroke="#2E5B8A" />
                    <text x="415" y="76" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="10" letterSpacing="2" fill="#2E5B8A">DESPUÉS</text>
                    <line x1="360" y1="130" x2="470" y2="130" stroke="#2E5B8A" strokeDasharray="4,3" />
                    <circle cx="370" cy="105" r="8" fill="#2E5B8A" /><circle cx="395" cy="100" r="8" fill="#2E5B8A" /><circle cx="420" cy="105" r="8" fill="#2E5B8A" /><circle cx="445" cy="100" r="8" fill="#2E5B8A" /><circle cx="465" cy="110" r="8" fill="#2E5B8A" />
                    <rect x="365" y="150" width="16" height="14" fill="#2E5B8A" /><rect x="390" y="150" width="16" height="14" fill="#2E5B8A" /><rect x="415" y="150" width="16" height="14" fill="#2E5B8A" /><rect x="440" y="150" width="16" height="14" fill="#2E5B8A" /><rect x="465" y="150" width="16" height="14" fill="#2E5B8A" /><rect x="490" y="150" width="16" height="14" fill="#2E5B8A" />
                    <text x="415" y="330" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="#2E5B8A">5 vesículas · 6 receptores</text>
                  </g>
                </svg>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Before/after vesicle and receptor count — the visual argument for LTP, at the
                  Pathfinders reading level.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <div className="border border-ink/15 bg-paper px-6 py-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  SVG_GENEALOGY · Engraving · Leaders, Slide 5
                </span>
                <svg viewBox="0 0 900 200" className="mt-4 w-full">
                  <path d="M60,110 L840,110" stroke="#D8D3C8" strokeWidth="1.5" fill="none" />
                  <g fill="#7A2020">
                    <circle cx="60" cy="110" r="7" /><circle cx="270" cy="110" r="7" /><circle cx="480" cy="110" r="7" /><circle cx="690" cy="110" r="7" /><circle cx="840" cy="110" r="7" />
                  </g>
                  <g fontFamily="IBM Plex Mono" fontSize="10" fill="#1C1C1A" textAnchor="middle">
                    <text x="60" y="90">1943</text><text x="270" y="90">1949</text><text x="480" y="90">1957</text><text x="690" y="90">1986</text><text x="840" y="90">HOY</text>
                    <text x="60" y="145" fontSize="9" fill="#6B6560">McCulloch–Pitts</text>
                    <text x="270" y="145" fontSize="9" fill="#6B6560">Hebb</text>
                    <text x="480" y="145" fontSize="9" fill="#6B6560">Rosenblatt</text>
                    <text x="690" y="145" fontSize="9" fill="#6B6560">Backprop</text>
                    <text x="840" y="145" fontSize="9" fill="#6B6560">GPT / Claude</text>
                  </g>
                </svg>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  The real intellectual lineage from McCulloch-Pitts (1943) to today&rsquo;s
                  models — the historical spine the Leaders deck argues from, not a metaphor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="border-b border-ink bg-ink px-6 py-20 text-paper sm:px-10 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-terra">What&rsquo;s Next</span>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-[1.1] text-paper sm:text-4xl">
              The pilot validates the process. It doesn&rsquo;t validate the scale yet.
            </h2>
          </Reveal>
          <Reveal delayMs={140}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/75">
              The pilot program proves the process for one unit, in one bimestre, for one
              curriculum. What it implies — not commits to — is that the same
              pedagogical-strategy-first, AI-drafts-inside-constraints, human-finalizes discipline
              can extend across the rest of Bimestre 2, then the rest of the Data &amp; AI
              curriculum, and eventually to other subjects across GHS&rsquo;s four faculties.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
            <a
              href="/#roadmap"
              className="mt-10 inline-flex items-center gap-2 border border-paper/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.1em] text-paper transition-colors hover:border-terra hover:text-terra"
            >
              What&rsquo;s already committed — The Roadmap →
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-rule bg-paper px-6 py-8 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        Paradise Education Group · Scholar OS Engine · The Pilot Program
      </footer>
    </main>
  );
}
