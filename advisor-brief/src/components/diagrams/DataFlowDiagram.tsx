import type { ReactNode } from "react";
import { PadlockIcon, SparkBubbleIcon } from "./TechIcons";

function Arrow() {
  return (
    <div className="flex items-center justify-center py-1 sm:py-0" aria-hidden>
      <svg
        className="h-4 w-4 rotate-90 text-ink/25 sm:h-5 sm:w-5 sm:rotate-0"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M4 12 H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 7 L19.5 12 L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Node({
  eyebrow,
  title,
  detail,
  tone,
}: {
  eyebrow: string;
  title: ReactNode;
  detail: string;
  tone: "neutral" | "augmentation" | "protected";
}) {
  const toneClasses = {
    neutral: "border-ink/15 bg-surface",
    augmentation: "border-gold/40 bg-gold/[0.06]",
    protected: "border-terra/50 bg-terra/[0.06]",
  }[tone];
  const eyebrowClasses = {
    neutral: "text-muted",
    augmentation: "text-gold",
    protected: "text-terra",
  }[tone];

  return (
    <div className={`w-full shrink-0 border px-4 py-4 sm:w-[168px] ${toneClasses}`}>
      <div className={`mb-1.5 font-mono text-[9px] uppercase tracking-[0.1em] ${eyebrowClasses}`}>
        {eyebrow}
      </div>
      <div className="font-display text-sm font-semibold leading-snug text-ink">{title}</div>
      <p className="mt-1.5 text-xs leading-relaxed text-ink-soft/70">{detail}</p>
    </div>
  );
}

export function DataFlowDiagram() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-stretch">
        <Node eyebrow="Origen" title="El estudiante escribe" detail="Un prompt en el Prompt Lab, durante la sesión en vivo." tone="neutral" />
        <Arrow />
        <Node
          eyebrow="Augmentation"
          title={
            <span className="flex items-center gap-1.5">
              <SparkBubbleIcon className="h-4 w-4 shrink-0" />
              Anthropic API
            </span>
          }
          detail="Genera una respuesta — solo en el servidor. La clave nunca llega al cliente."
          tone="augmentation"
        />
        <Arrow />
        <Node
          eyebrow="Augmentation"
          title="Sesión privada"
          detail="ai_response se escribe únicamente en la sesión de ese estudiante."
          tone="augmentation"
        />
      </div>

      {/* The gate — the single most important boundary on this site */}
      <div className="my-3 flex items-center gap-3 sm:my-4">
        <div className="h-px flex-1 bg-terra/30 sm:hidden" />
        <div className="hidden flex-1 sm:block" />
        <div className="flex items-center gap-2 border border-terra bg-terra px-3 py-2 text-paper">
          <PadlockIcon className="h-4 w-4 shrink-0" />
          <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.06em]">
            Escritura protegida por RLS
            <br className="sm:hidden" /> — solo el profesor
          </span>
        </div>
        <div className="h-px flex-1 bg-terra/30 sm:hidden" />
        <div className="hidden flex-1 sm:block" />
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <Arrow />
        <Node
          eyebrow="Determination"
          title="Pantalla de la clase"
          detail="pinned_by_teacher — nunca una cuenta de servicio, nunca por defecto."
          tone="protected"
        />
      </div>
    </div>
  );
}
