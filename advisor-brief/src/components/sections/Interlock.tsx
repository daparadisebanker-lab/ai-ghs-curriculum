import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  evaluateAiGovernance,
  evaluateAiPedagogy,
  interlockClosing,
  interlockIntro,
  seamSteps,
} from "@/lib/content/interlock";

export function Interlock() {
  return (
    <SectionShell
      id="interlock"
      index="05"
      label="How They Interlock"
      title={<>evaluate_ai is the seam.</>}
      dark
      dek={interlockIntro}
    >
      {/* Seam diagram */}
      <div className="grid gap-0 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {seamSteps.map((step, i) => (
          <div key={step.label} className="contents">
            <Reveal delayMs={i * 140} className="flex flex-col gap-2 px-1 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-terra">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-semibold text-paper">{step.label}</span>
              <span className="text-sm leading-relaxed text-paper/65">{step.detail}</span>
            </Reveal>
            {i < seamSteps.length - 1 && (
              <Reveal
                delayMs={i * 140 + 80}
                variant="rule-draw"
                className="hidden h-px w-10 self-start bg-paper/25 sm:mt-6 sm:block"
              />
            )}
          </div>
        ))}
      </div>

      {/* Two lenses, one interaction */}
      <div className="mt-16 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-2">
        <Reveal>
          <div className="h-full bg-ink px-7 py-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gold">
              As pedagogy
            </span>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">{evaluateAiPedagogy}</p>
          </div>
        </Reveal>
        <Reveal delayMs={90}>
          <div className="h-full bg-ink px-7 py-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-terra">
              As governance
            </span>
            <p className="mt-3 text-sm leading-relaxed text-paper/80">{evaluateAiGovernance}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delayMs={140}>
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl italic leading-relaxed text-paper/85">
          {interlockClosing}
        </p>
      </Reveal>
    </SectionShell>
  );
}
