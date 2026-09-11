import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { layers, layersIntro } from "@/lib/content/layers";

export function Architecture() {
  return (
    <SectionShell
      id="architecture"
      index="02"
      label="The Three-Layer Architecture"
      title="Teacher. Student. Technology."
      dek={layersIntro}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {layers.map((layer, i) => (
          <Reveal key={layer.key} delayMs={i * 90} className="h-full">
            <div className="flex h-full flex-col border border-rule bg-surface">
              <div className="border-b border-rule px-6 py-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  Layer {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold">{layer.name}</h3>
              </div>

              <div className="flex flex-1 flex-col gap-5 px-6 py-6">
                <div>
                  <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-gold">
                    As pedagogy
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft/90">{layer.pedagogyView}</p>
                </div>
                <div className="h-px w-full bg-rule" />
                <div>
                  <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-terra">
                    As governance
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft/90">{layer.governanceView}</p>
                </div>
              </div>

              <div className="border-t border-rule bg-paper/60 px-6 py-4">
                <p className="text-xs leading-relaxed text-muted">{layer.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={280}>
        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl italic text-ink-soft/80">
          Governance and pedagogy are not two competing systems here — they
          are two lenses on the same three layers. The next two sections read
          the same architecture through each lens in turn.
        </p>
      </Reveal>
    </SectionShell>
  );
}
