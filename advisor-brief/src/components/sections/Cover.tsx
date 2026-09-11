import { Reveal } from "@/components/ui/Reveal";
import { documentMeta } from "@/lib/content/advisorBrief";

export function Cover() {
  return (
    <section
      id="cover"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper px-6 pb-10 pt-24 sm:px-10 sm:pt-28"
    >
      {/* Quiet background rules — this site's own motif, not Scholar OS's blueprint grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-0 right-0 top-[18%] h-px bg-rule" />
        <div className="absolute left-0 right-0 top-[82%] h-px bg-rule" />
        <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-rule sm:block" />
        <div className="absolute bottom-0 right-[8%] top-0 hidden w-px bg-rule sm:block" />
      </div>

      <div className="relative mx-auto flex w-full max-w-content flex-1 flex-col justify-center">
        <Reveal variant="reveal-line">
          <div className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Paradise Education Group · Paradise Global High School
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <h1 className="max-w-4xl text-balance font-display text-[2.6rem] font-semibold leading-[1.06] sm:text-6xl md:text-7xl">
            The AI curriculum, the platform it runs on, and the{" "}
            <em className="italic text-terra">calls only you can make</em>.
          </h1>
        </Reveal>

        <Reveal delayMs={220}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft/80 sm:text-xl">
            A working reference on the AI curriculum, Paradise Classroom, and
            Scholar OS — what Bimestre 2 actually teaches, how the platform
            runs it live, and the document a future teacher or hire opens
            next.
          </p>
        </Reveal>
      </div>

      <Reveal delayMs={320}>
        <div className="relative mx-auto flex w-full max-w-content flex-col gap-3 border-t border-rule pt-6 font-mono text-xs uppercase tracking-[0.1em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Prepared for {documentMeta.preparedFor}</span>
          <span>
            {documentMeta.owner} · {documentMeta.version} · {documentMeta.date}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
