import { Reveal } from "@/components/ui/Reveal";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { SectionShell } from "@/components/ui/SectionShell";
import { decisionLog, decisionOneNote, team } from "@/lib/content/team";
import { risks } from "@/lib/content/risks";

export function Team() {
  return (
    <SectionShell
      id="team"
      index="07"
      label="Team, Roles & Open Decisions"
      title="Who owns what — and what's still genuinely open."
      dek="Presented honestly as open, not papered over. Three of five roles below are unfilled."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((t, i) => (
          <Reveal key={t.role} delayMs={i * 70}>
            <div
              className={`h-full border px-5 py-5 ${
                t.isOpenSeat ? "border-terra/40 bg-terra/5" : "border-rule bg-surface"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold leading-snug">{t.role}</h3>
                {t.isOpenSeat && (
                  <span className="shrink-0 whitespace-nowrap border border-terra/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-terra">
                    Open
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{t.who}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">{t.mandate}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Decision log */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">Decision Log</h3>
        </Reveal>
        <div className="mt-6 space-y-3">
          {decisionLog.map((d, i) => (
            <Reveal key={d.id} delayMs={i * 70}>
              <div
                className={`border px-6 py-5 sm:flex sm:items-start sm:justify-between sm:gap-6 ${
                  d.priority === "highest" ? "border-terra bg-terra/[0.06]" : "border-rule bg-surface"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted">
                      Open decision {d.id}
                    </span>
                    {d.priority === "highest" && (
                      <span className="border border-terra/50 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-terra">
                        Highest priority
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-ink-soft/90">{d.title}</p>
                  {d.priority === "highest" && (
                    <p className="mt-2 text-sm italic text-terra/90">{decisionOneNote}</p>
                  )}
                </div>
                <div className="mt-3 shrink-0 font-mono text-xs text-muted sm:mt-0 sm:text-right">
                  <div>Owner — {d.owner}</div>
                  <div className="mt-1">Needed by — {d.neededBy}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Risk architecture */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold">Risk Architecture</h3>
        </Reveal>
        <Reveal delayMs={60}>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-rule font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
                  <th className="py-3 pr-4 font-medium">Category</th>
                  <th className="py-3 pr-4 font-medium">Risk</th>
                  <th className="py-3 pr-4 font-medium">Mitigation</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((r) => (
                  <tr key={r.risk} className="border-b border-rule align-top last:border-b-0">
                    <td className="whitespace-nowrap py-4 pr-4 font-mono text-xs text-muted">
                      {r.category}
                    </td>
                    <td className="py-4 pr-4 text-ink-soft/85">{r.risk}</td>
                    <td className="py-4 pr-4 text-ink-soft/70">{r.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ScrollHint />
        </Reveal>
      </div>
    </SectionShell>
  );
}
