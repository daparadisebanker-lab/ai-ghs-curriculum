import { Reveal } from "@/components/ui/Reveal";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { SectionShell } from "@/components/ui/SectionShell";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  correctedTrigger,
  doctrineOrigin,
  governingDoctrine,
} from "@/lib/content/doctrine";
import {
  auditTrail,
  protectedFieldsRegister,
  regulatoryPositioning,
  scopeBoundary,
} from "@/lib/content/protectedFields";

export function GovernanceLayer() {
  return (
    <SectionShell
      id="governance-layer"
      index="04"
      label="The Governance Layer"
      title="One doctrine. One register. No silent defaults."
      dark
      dek="Applying the Paradise Group AI Governance Standard to the actual system being built — not to a hypothetical grading tool."
    >
      {/* The doctrine */}
      <Reveal>
        <blockquote className="border-l-2 border-terra pl-6 sm:pl-8">
          <p className="text-balance font-display text-2xl font-medium italic leading-snug text-paper sm:text-3xl">
            “{governingDoctrine}”
          </p>
          <cite className="mt-3 block font-mono text-xs not-italic uppercase tracking-[0.12em] text-paper/50">
            Paradise Group AI Governance Standard · Section 1
          </cite>
        </blockquote>
      </Reveal>

      <div className="mt-10 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-3">
        {doctrineOrigin.map((d, i) => (
          <Reveal key={d.venture} delayMs={i * 80}>
            <div className="h-full bg-ink px-6 py-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">
                {d.venture} encoded it as
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-paper">{d.encoding}</div>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{d.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Corrected trigger condition */}
      <Reveal delayMs={100}>
        <div className="mt-14 border border-terra/40 bg-terra/5 px-6 py-6 sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-terra">
            Correcting the trigger condition
          </span>
          <p className="mt-3 text-paper/85">{correctedTrigger.correction}</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/65">{correctedTrigger.stakes}</p>
          <p className="mt-3 font-medium text-paper">{correctedTrigger.trigger}</p>
        </div>
      </Reveal>

      {/* Protected Fields Register */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-2xl font-semibold text-paper">
            The Protected Fields Register
          </h3>
        </Reveal>
        <Reveal delayMs={60}>
          <p className="mt-2 max-w-2xl text-sm text-paper/65">
            Enforced in the schema itself — not by policy, not by training,
            not by a “please have a human review this” UI prompt. If a field
            can be written by a service account or an automated pipeline, it
            is not protected.
          </p>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-6 overflow-x-auto border border-paper/15">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-paper/15 bg-paper/[0.04] font-mono text-[11px] uppercase tracking-[0.08em] text-paper/50">
                  <th className="px-5 py-3 font-medium">Field / mechanism</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">AI&apos;s permitted role</th>
                  <th className="px-4 py-3 font-medium">Schema enforcement</th>
                </tr>
              </thead>
              <tbody>
                {protectedFieldsRegister.map((row) => (
                  <tr
                    key={row.field}
                    className={`border-b border-paper/10 align-top last:border-b-0 ${
                      row.highlight ? "bg-terra/[0.06]" : ""
                    }`}
                  >
                    <td className="px-5 py-4 font-mono text-xs leading-relaxed text-paper/90">
                      {row.field}
                    </td>
                    <td className="px-4 py-4">
                      <StatusPill status={row.status} />
                    </td>
                    <td className="px-4 py-4 text-xs leading-relaxed text-paper/70">{row.aiRole}</td>
                    <td className="px-4 py-4 text-xs leading-relaxed text-paper/70">
                      {row.enforcement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ScrollHint dark />
        </Reveal>
      </div>

      {/* Audit trail + Regulatory positioning */}
      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <h3 className="font-display text-xl font-semibold text-paper">
              Transparency &amp; the audit trail
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">{auditTrail.whatExists}</p>
            <div className="mt-4 border border-paper/15 bg-paper/[0.03] px-5 py-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
                The one gap
              </span>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{auditTrail.gap}</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/85">
                <span className="font-mono text-xs text-paper/50">Schema recommendation — </span>
                {auditTrail.recommendation}
              </p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-paper/55">{auditTrail.earlyWarning}</p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div>
            <h3 className="font-display text-xl font-semibold text-paper">
              Regulatory positioning
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">{regulatoryPositioning.scopeNote}</p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              {regulatoryPositioning.operativeRegister}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/70">
              {regulatoryPositioning.contentBoundaries}
            </p>
            <div className="mt-4 border-l-2 border-paper/25 pl-4 text-xs leading-relaxed text-paper/50">
              {regulatoryPositioning.counsel}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scope boundary */}
      <Reveal delayMs={120}>
        <div className="mt-16 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-2">
          <div className="bg-ink px-6 py-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">
              In scope
            </span>
            <p className="mt-2 text-sm leading-relaxed text-paper/75">{scopeBoundary.inScope}</p>
          </div>
          <div className="bg-ink px-6 py-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/50">
              Explicitly out of scope
            </span>
            <p className="mt-2 text-sm leading-relaxed text-paper/75">{scopeBoundary.outOfScope}</p>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
