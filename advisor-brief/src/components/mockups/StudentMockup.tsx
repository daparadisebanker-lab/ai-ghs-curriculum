"use client";

import { useState } from "react";
import { DeviceFrame } from "./DeviceFrame";

type StudentState = "waiting" | "active" | "reviewing";

const tabs: { key: StudentState; label: string }[] = [
  { key: "waiting", label: "Esperando" },
  { key: "active", label: "Activo" },
  { key: "reviewing", label: "Revisando" },
];

export function StudentMockup() {
  const [state, setState] = useState<StudentState>("active");
  const [shared, setShared] = useState(false);

  return (
    <div className="mx-auto max-w-[300px]">
      <div className="mb-3 flex justify-center gap-1.5" role="tablist" aria-label="Estado del estudiante">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={state === t.key}
            onClick={() => setState(t.key)}
            className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors ${
              state === t.key
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 text-ink-soft hover:border-ink/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <DeviceFrame label="Vista del estudiante" variant="phone">
        <div className="flex h-full flex-col bg-surface px-4 py-5">
          {state === "waiting" && (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <span className="mb-4 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terra" />
                En vivo
              </span>
              <p className="font-display text-lg font-semibold leading-snug text-ink">
                Semana 2 · Cómo aprende
                <br />
                tu cerebro
              </p>
              <p className="mt-3 max-w-[200px] text-xs leading-relaxed text-muted">
                Mira la pantalla. Esta pantalla se activará cuando tu profesor inicie la siguiente actividad.
              </p>
            </div>
          )}

          {state === "active" && (
            <div className="flex flex-1 flex-col">
              <span className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                prompt_free · AI Prompt Lab
              </span>
              <div className="mb-2 border border-ink/15 bg-paper px-3 py-2">
                <p className="text-xs leading-relaxed text-ink-soft">
                  Explícame cómo aprende el cerebro. Soy un niño de 10 años y nunca he estudiado ciencias.
                </p>
              </div>
              <div className="mb-3 border-l-2 border-gold/60 bg-gold/[0.06] px-3 py-2">
                <p className="text-xs leading-relaxed text-ink-soft/80">
                  Imagina un camino en el pasto. La primera vez que caminas por ahí, cuesta un poco. Pero
                  si caminas por el mismo camino muchas veces, se vuelve un sendero fácil. Tu cerebro hace
                  lo mismo: cuando practicas algo, ese &ldquo;camino&rdquo; entre neuronas se hace más fuerte.
                </p>
              </div>
              <button
                onClick={() => setShared((s) => !s)}
                className={`mt-auto w-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors ${
                  shared
                    ? "border-terra bg-terra text-paper"
                    : "border-ink bg-ink text-paper hover:bg-terra hover:border-terra"
                }`}
              >
                {shared ? "✓ Compartido con la clase" : "Compartir con la clase"}
              </button>
            </div>
          )}

          {state === "reviewing" && (
            <div className="flex flex-1 flex-col">
              <span className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                Ticket de salida · tu respuesta
              </span>
              <div className="mb-4 border border-ink/15 bg-paper px-3 py-2">
                <p className="text-xs leading-relaxed text-ink-soft">
                  &ldquo;Puedo sentir vergüenza cuando me equivoco frente a la clase — creo que ChatGPT
                  no tiene eso.&rdquo;
                </p>
              </div>
              <span className="mb-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                Compañeros (anónimo)
              </span>
              <div className="space-y-2">
                <div className="border border-ink/10 bg-surface px-3 py-2 text-xs leading-relaxed text-ink-soft/70">
                  &ldquo;La intuición de saber cuándo alguien miente.&rdquo;
                </div>
                <div className="border border-ink/10 bg-surface px-3 py-2 text-xs leading-relaxed text-ink-soft/70">
                  &ldquo;Recordar el olor de la casa de mi abuela.&rdquo;
                </div>
              </div>
            </div>
          )}
        </div>
      </DeviceFrame>
    </div>
  );
}
