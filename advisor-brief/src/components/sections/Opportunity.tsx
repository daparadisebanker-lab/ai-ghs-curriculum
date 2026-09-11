import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { courseIntro } from "@/lib/content/advisorBrief";

const bimestres = [
  { n: "I", title: "El lenguaje de la máquina", status: "Completado" },
  { n: "II", title: "Fundamentos de la inteligencia humana", status: "En curso" },
  { n: "III", title: "Algoritmos e IA aplicada", status: "Planificado" },
  { n: "IV", title: "Proyectos, ética y el futuro", status: "Planificado" },
];

export function Opportunity() {
  return (
    <SectionShell
      id="opportunity"
      index="01"
      label="The Course"
      title="Entender la IA desde adentro."
      dek="Not a tools course. The actual curriculum this platform exists to run — read it in full before anything else here."
    >
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <Reveal>
            <blockquote className="border-l-2 border-terra pl-5">
              <p className="text-balance font-display text-xl italic leading-snug text-ink sm:text-2xl">
                “{courseIntro.quote}”
              </p>
              <cite className="mt-2 block font-mono text-xs not-italic uppercase tracking-[0.1em] text-muted">
                {courseIntro.quoteSource}
              </cite>
            </blockquote>
          </Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft/90">
            <Reveal delayMs={60}>
              <p>{courseIntro.premise}</p>
            </Reveal>
            <Reveal delayMs={120}>
              <p>{courseIntro.arc}</p>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="text-base text-ink-soft/80">{courseIntro.mechanism}</p>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="text-base italic text-ink">{courseIntro.cohortNote}</p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <Reveal>
            <div className="rule-draw mb-6 h-px w-full origin-left bg-rule" />
          </Reveal>
          <Reveal delayMs={80}>
            <h3 className="mb-4 font-display text-xl font-semibold">Los cuatro bimestres</h3>
          </Reveal>
          <div className="space-y-2.5">
            {bimestres.map((b, i) => (
              <Reveal key={b.n} delayMs={100 + i * 50}>
                <div className="flex items-center gap-3 border border-rule bg-surface px-4 py-3">
                  <span className="font-display text-lg font-semibold text-terra">{b.n}</span>
                  <span className="flex-1 text-sm text-ink-soft">{b.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                    {b.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={320}>
            <a
              href="/curriculum.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-between border border-ink bg-ink px-5 py-4 text-paper transition-colors hover:bg-terra hover:border-terra"
            >
              <span>
                <span className="block font-display text-lg font-semibold">
                  Leer el currículo completo
                </span>
                <span className="block font-mono text-xs uppercase tracking-[0.08em] text-paper/60">
                  Semanas 1–2, guion de docente, prompts reales
                </span>
              </span>
              <span aria-hidden className="font-mono text-xl">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
