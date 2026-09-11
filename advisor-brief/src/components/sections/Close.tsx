import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import {
  invitationClose,
  roleInvitation,
  whatWereBuilding,
} from "@/lib/content/advisorBrief";

export function Close() {
  return (
    <SectionShell
      id="invitation"
      index="08"
      label="The Invitation"
      title="It drafts. It never decides."
      dark
      dek="What Paradise Classroom does put directly in a teacher's hands, for the first time in the Group, is live judgment over an AI system talking to a room of minors — which is exactly why this is the project that needed a written doctrine before it needed a single line of interface code."
    >
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="space-y-5 text-lg leading-relaxed text-paper/85 lg:col-span-7">
          <Reveal>
            <p>{whatWereBuilding.assetsExist}</p>
          </Reveal>
          <Reveal delayMs={60}>
            <p className="font-medium text-paper">{whatWereBuilding.whatsMissing}</p>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="mt-8 border-t border-paper/15 pt-8 font-display text-2xl italic leading-snug text-paper">
              {invitationClose.notAPilot}
            </p>
          </Reveal>
          <Reveal delayMs={160}>
            <p>{invitationClose.everythingElseExists}</p>
          </Reveal>
          <Reveal delayMs={200}>
            <p className="text-paper/70">{invitationClose.companionDocs}</p>
          </Reveal>

          <Reveal delayMs={240}>
            <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs uppercase tracking-[0.1em]">
              <a href="#pedagogical-layer" className="border border-paper/25 px-3 py-2 hover:border-paper/60">
                Conceptual &amp; Pedagogical Framework
              </a>
              <a href="#governance-layer" className="border border-paper/25 px-3 py-2 hover:border-paper/60">
                Governance &amp; Protected Fields
              </a>
              <a href="#roadmap" className="border border-paper/25 px-3 py-2 hover:border-paper/60">
                Project Charter
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <Reveal>
            <div className="rule-draw mb-6 h-px w-full origin-left bg-paper/20" />
          </Reveal>
          <Reveal delayMs={60}>
            <h3 className="mb-3 font-display text-xl font-semibold text-paper">
              What we&rsquo;re asking, specifically
            </h3>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mb-5 text-sm leading-relaxed text-paper/65">{roleInvitation.framing}</p>
          </Reveal>
          <ol className="space-y-4">
            {roleInvitation.asks.map((ask, i) => (
              <Reveal key={ask} delayMs={140 + i * 70} as="li">
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-terra">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-paper/85">{ask}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>

      <Reveal delayMs={300}>
        <div className="mx-auto mt-20 max-w-xl border-t border-paper/15 pt-10 text-center">
          <p className="font-display text-lg italic text-paper/70">
            We would like to walk through them with you directly.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-paper/45">
            Muaaz · CEO, Paradise Education Group
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
