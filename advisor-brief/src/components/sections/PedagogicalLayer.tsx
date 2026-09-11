import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  cohorts,
  namingCollisionNote,
  promptLabTypes,
  weekTwoTopic,
} from "@/lib/content/cohorts";
import { evaluateAiPedagogy, realPromptExample } from "@/lib/content/interlock";

export function PedagogicalLayer() {
  return (
    <SectionShell
      id="pedagogical-layer"
      index="03"
      label="The Pedagogical Layer"
      title="Scholar OS, and the room where a student talks to a model."
      dek="Scholar OS governs what students see and produce as curriculum output — the slide decks, the SVG artifacts, the per-cohort colorways. Paradise Classroom is the live session environment those decks run inside. A teacher launches a session from within a Scholar OS deck; a room code is generated; students join Paradise Classroom directly."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {cohorts.map((c, i) => (
          <Reveal key={c.key} delayMs={i * 90}>
            <div className="flex h-full flex-col border border-rule bg-surface">
              <div className="h-1.5 w-full" style={{ backgroundColor: c.hex }} />
              <div className="flex flex-1 flex-col gap-3 px-6 py-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold" style={{ color: c.hex }}>
                    {c.name}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                    {c.stage} · Ages {c.ages}
                  </p>
                </div>
                <p className="text-sm font-medium text-ink-soft">{c.register}</p>
                <p className="text-sm leading-relaxed text-ink-soft/80">{c.weekTwoBeat}</p>
                <div className="mt-auto border-t border-rule pt-3 text-xs leading-relaxed text-muted">
                  {c.promptLabRole}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={280}>
        <p className="mt-5 flex gap-2 text-xs leading-relaxed text-muted">
          <span className="font-mono text-terra">Note —</span>
          {namingCollisionNote}
        </p>
      </Reveal>

      <Reveal delayMs={320}>
        <div className="mt-12 flex flex-col gap-3 border-y border-rule py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Semana 2, Bimestre 2
            </span>
            <span className="block font-display text-xl italic">{weekTwoTopic}</span>
          </div>
          <a
            href="/curriculum.html#semana2"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-terra underline decoration-terra decoration-2 underline-offset-4"
          >
            Ver el guion completo →
          </a>
        </div>
      </Reveal>

      {/* AI Prompt Lab */}
      <div className="mt-16">
        <Reveal>
          <h3 className="mb-3 font-display text-2xl font-semibold">The AI Prompt Lab</h3>
        </Reveal>
        <Reveal delayMs={60}>
          <p className="max-w-2xl text-ink-soft/85">
            A bounded room, not an open chat: five interaction types, and
            nothing else. Age-tiered system prompts and content boundaries
            per cohort — Pathfinders stricter than Leaders — the product&rsquo;s
            differentiator, and therefore its highest-scrutiny surface.
          </p>
        </Reveal>
        <Reveal delayMs={100}>
          <div className="mt-5 flex flex-wrap gap-2">
            {promptLabTypes.map((t) => (
              <span
                key={t.key}
                className="border border-rule bg-surface px-3 py-1.5 font-mono text-xs text-ink-soft"
              >
                {t.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* evaluate_ai showcase moment — the real prompt, not a hypothetical */}
      <Reveal delayMs={140}>
        <div className="mt-14 overflow-hidden border" style={{ borderColor: cohorts[2].hex }}>
          <div className="px-7 py-6 text-paper sm:px-10 sm:py-9" style={{ backgroundColor: cohorts[2].hex }}>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/60">
              {realPromptExample.cohort} · {realPromptExample.session}
            </span>
            <p className="mt-3 max-w-2xl text-balance font-display text-xl font-semibold italic leading-snug sm:text-2xl">
              “{realPromptExample.prompt}”
            </p>
            <p className="mt-2 text-sm text-paper/70">{realPromptExample.promptEn}</p>
          </div>
          <div className="bg-surface px-7 py-7 sm:px-10">
            <p className="text-ink-soft/90">{evaluateAiPedagogy}</p>
            <p className="mt-3 text-sm text-muted">{realPromptExample.teacherNote}</p>
            <p className="mt-3 text-sm text-muted">
              This is the same pattern the platform&rsquo;s{" "}
              <span className="font-mono text-ink">evaluate_ai</span> interaction runs —
              see how it closes the loop with governance in{" "}
              <a href="#interlock" className="underline decoration-terra decoration-2 underline-offset-2">
                How They Interlock
              </a>
              .
            </p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
