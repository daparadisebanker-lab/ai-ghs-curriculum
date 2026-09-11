import { Reveal } from "@/components/ui/Reveal";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  horizons,
  immediateNextSteps,
  successMetrics,
} from "@/lib/content/roadmap";

export function Roadmap() {
  return (
    <SectionShell
      id="roadmap"
      index="06"
      label="The Roadmap"
      title="Three Horizons, five sprints, one gate."
      dek="Mapped onto the engineering blueprint's own Sprint 1–5 sequence, using a standing Three Horizons discipline. This is also the section a future team member should return to most often."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {horizons.map((h, i) => (
          <Reveal key={h.key} delayMs={i * 90} className="h-full">
            <div className="flex h-full flex-col border border-rule bg-surface">
              <div className="border-b border-rule px-6 py-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-terra">
                  {h.label} · {h.window}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold leading-snug">{h.title}</h3>
              </div>
              <ul className="flex-1 space-y-3 px-6 py-5 text-sm leading-relaxed text-ink-soft/85">
                {h.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {h.gate && (
                <div className="border-t border-terra/30 bg-terra/5 px-6 py-4 text-xs leading-relaxed text-terra">
                  <span className="font-mono uppercase tracking-[0.1em]">Gate — </span>
                  {h.gate}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Immediate next steps timeline */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">Immediate next steps</h3>
        </Reveal>
        <Reveal delayMs={60}>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  <th className="py-3 pr-4 font-medium">Window</th>
                  <th className="py-3 pr-4 font-medium">Action</th>
                  <th className="py-3 pr-4 font-medium">Owner</th>
                </tr>
              </thead>
              <tbody>
                {immediateNextSteps.map((step) => (
                  <tr key={step.action} className="border-b border-rule align-top last:border-b-0">
                    <td className="whitespace-nowrap py-4 pr-4 font-mono text-xs text-muted">
                      {step.window}
                    </td>
                    <td className="py-4 pr-4 text-ink-soft/90">{step.action}</td>
                    <td className="whitespace-nowrap py-4 pr-4 text-xs text-muted">{step.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ScrollHint />
        </Reveal>
      </div>

      {/* Success metrics */}
      <Reveal delayMs={100}>
        <div className="mt-16 border border-rule bg-surface px-6 py-6 sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Success metrics — the Horizon 1 gate
          </span>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {successMetrics.map((m) => (
              <li key={m} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft/85">
                <span className="mt-1 font-mono text-xs text-terra">✓</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionShell>
  );
}
