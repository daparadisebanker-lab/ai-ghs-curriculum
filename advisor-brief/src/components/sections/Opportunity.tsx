import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { opportunity } from "@/lib/content/advisorBrief";

export function Opportunity() {
  return (
    <SectionShell
      id="opportunity"
      index="01"
      label="The Opportunity"
      title={<>“What is your school actually doing about AI?”</>}
      dek={opportunity.question}
    >
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-ink-soft/90 lg:col-span-7">
          <Reveal>
            <p>{opportunity.failureModes}</p>
          </Reveal>
          <Reveal delayMs={60}>
            <p>{opportunity.convergence}</p>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="font-medium text-ink">{opportunity.becomesAClassroom}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <Reveal>
            <div className="rule-draw mb-6 h-px w-full origin-left bg-rule" />
          </Reveal>
          <Reveal delayMs={80}>
            <h3 className="mb-3 font-display text-xl font-semibold">Why now</h3>
          </Reveal>
          <div className="space-y-4 text-base leading-relaxed text-ink-soft/85">
            <Reveal delayMs={120}>
              <p>{opportunity.whyNow}</p>
            </Reveal>
            <Reveal delayMs={160}>
              <p>{opportunity.architecturalAnswer}</p>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="italic text-ink">{opportunity.sameAudience}</p>
            </Reveal>
          </div>

          <Reveal delayMs={240}>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-rule pt-6">
              <div>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Brücke&rsquo;s targets
                </div>
                <ul className="space-y-1 text-sm">
                  {opportunity.institutions.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  GHS benchmarks against
                </div>
                <ul className="space-y-1 text-sm">
                  {opportunity.benchmarks.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
