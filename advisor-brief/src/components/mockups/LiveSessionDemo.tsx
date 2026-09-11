"use client";

import { useState } from "react";
import { DeviceFrame } from "./DeviceFrame";

type StepId = "launch" | "activate" | "exchange" | "pin" | "close";

type Step = {
  id: StepId;
  label: string;
  teacherLabel: string;
  studentLabel: string;
  note: string;
};

// Every step is grounded in mechanics already documented elsewhere on this
// site (Waiting/Active/Reviewing states in the Pedagogical Layer content,
// the pinned_by_teacher Protected Field in the Governance Layer) — nothing
// here is a new claim, only a step-by-step visualization of an existing one.
const steps: Step[] = [
  {
    id: "launch",
    label: "Inicio",
    teacherLabel: "El profesor crea la sesión",
    studentLabel: "Esperando",
    note: "El profesor inicia la sesión digital mientras el Bloque A — la discusión sin dispositivos — ya está en marcha. Los estudiantes se unen con un código, pero su pantalla queda bloqueada en modo Esperando hasta que el profesor la active para el Bloque B.",
  },
  {
    id: "activate",
    label: "Activar",
    teacherLabel: "Activa el Prompt Lab",
    studentLabel: "Pasa a Activo — al instante",
    note: "En el momento exacto en que el profesor activa la interacción, las pantallas de los 28 estudiantes de esta sección cambian a la vez. Ningún estudiante navega por su cuenta — la pantalla sigue al profesor, siempre.",
  },
  {
    id: "exchange",
    label: "Intercambio",
    teacherLabel: "Ve los intercambios en vivo",
    studentLabel: "Escribe su prompt, ve la respuesta",
    note: "Cada pareja trabaja el mismo prompt de la Semana 2 — y cada intercambio llega al panel del profesor en tiempo real, visible solo para él, no para el resto de la clase.",
  },
  {
    id: "pin",
    label: "Fijar",
    teacherLabel: "Fija un intercambio a la pantalla",
    studentLabel: "Recibe el aviso del profesor",
    note: "Solo esta acción — pinned_by_teacher — hace que un intercambio llegue a la pantalla proyectada, para ponerlo en discusión frente a toda la clase. Nunca por defecto, nunca automático: la Protected Field en funcionamiento, no en abstracto.",
  },
  {
    id: "close",
    label: "Cierre",
    teacherLabel: "Cierra la sesión",
    studentLabel: "Mapa antes / después",
    note: "El profesor cierra la sesión. Cada estudiante dibuja en su cuaderno el cambio antes/después en una conexión entre neuronas — el producto real con el que termina la Semana 2, no un formulario digital.",
  },
];

// Both pairs work the SAME real Semana 2 Pathfinders prompt, in the SAME
// section — cohorts are taught as separate classes in the real curriculum
// and are never mixed inside one live session.
const exchanges = [
  {
    id: "a",
    initials: "JR",
    pair: "Pareja 3",
    prompt: "Explícame cómo aprende el cerebro. Soy un niño de 10 años y nunca he estudiado ciencias.",
    response:
      "Imagina un camino en el pasto. La primera vez que caminas por ahí, cuesta un poco. Pero si caminas por el mismo camino muchas veces, se vuelve un sendero fácil. Tu cerebro hace lo mismo: cuando practicas algo, ese “camino” entre neuronas se hace más fuerte.",
  },
  {
    id: "b",
    initials: "MT",
    pair: "Pareja 7",
    prompt: "Explícame cómo aprende el cerebro. Soy un niño de 10 años y nunca he estudiado ciencias.",
    response:
      "Tu cerebro tiene millones de células diminutas llamadas neuronas. Cuando aprendes algo nuevo, dos neuronas se “dan la mano” por primera vez. Si repites esa acción muchas veces, se agarran más fuerte — y eso es aprender.",
  },
];

function TeacherPanel({ step }: { step: StepId }) {
  return (
    <DeviceFrame label="Vista del docente · Sala 7X4K2P">
      <div className="flex h-full min-h-[280px] flex-col bg-surface px-5 py-5">
        {step === "launch" && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <span className="mb-4 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terra" />
              Sala creada
            </span>
            <p className="font-display text-lg font-semibold text-ink">Código: 7X4K2P</p>
            <p className="mt-2 text-xs text-muted">0 de 28 conectados</p>
          </div>
        )}

        {step === "activate" && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <span className="mb-4 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-terra">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terra" />
              Activando interacción
            </span>
            <p className="font-display text-lg font-semibold text-ink">prompt_free · AI Prompt Lab</p>
            <p className="mt-2 text-xs text-muted">Pathfinders · Sección 7B · 28 de 28 conectados</p>
          </div>
        )}

        {(step === "exchange" || step === "pin") && (
          <div className="flex-1">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              Prompt Lab · intercambios
            </div>
            <div className="space-y-2.5">
              {exchanges.map((e) => {
                const pinned = step === "pin" && e.id === "b";
                return (
                  <div
                    key={e.id}
                    className={`border px-3 py-2.5 transition-colors ${
                      pinned ? "border-terra bg-terra/[0.06]" : "border-ink/10 bg-paper"
                    }`}
                  >
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 font-mono text-[9px] text-ink-soft">
                        {e.initials}
                      </span>
                      <span className="font-mono text-[10px] text-muted">{e.pair}</span>
                      {pinned && (
                        <span className="ml-auto border border-terra bg-terra px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.06em] text-paper">
                          Fijado
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-ink-soft">{e.prompt}</p>
                    <p className="mt-1 border-l-2 border-gold/50 pl-2 text-xs leading-relaxed text-ink-soft/70">
                      {e.response}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {step === "close" && (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="font-display text-lg font-semibold text-ink">Sesión terminada</p>
            <p className="mt-2 text-xs text-muted">26 de 28 dibujaron su mapa antes/después · 1 intercambio fijado</p>
          </div>
        )}
      </div>
    </DeviceFrame>
  );
}

function StudentPanel({ step }: { step: StepId }) {
  return (
    <DeviceFrame label="Vista del estudiante" variant="phone">
      <div className="flex h-full flex-col bg-surface px-4 py-5">
        {step === "launch" && (
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

        {step === "activate" && (
          <div className="flex flex-1 flex-col">
            <span className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              prompt_free · AI Prompt Lab
            </span>
            <div className="mb-2 border border-ink/15 bg-paper px-3 py-2">
              <p className="text-xs leading-relaxed text-ink-soft">
                Explícame cómo aprende el cerebro. Soy un niño de 10 años y nunca he estudiado ciencias.
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 text-xs text-muted">
              <span className="h-1 w-1 animate-pulse rounded-full bg-gold" />
              <span className="h-1 w-1 animate-pulse rounded-full bg-gold [animation-delay:150ms]" />
              <span className="h-1 w-1 animate-pulse rounded-full bg-gold [animation-delay:300ms]" />
              <span className="ml-1">esperando respuesta…</span>
            </div>
          </div>
        )}

        {(step === "exchange" || step === "pin") && (
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
            {step === "pin" && (
              <div className="mt-auto flex items-center gap-2 border border-terra/40 bg-terra/[0.06] px-3 py-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-terra" />
                <p className="text-[11px] leading-snug text-terra">
                  Tu profesor fijó un intercambio en la pantalla principal.
                </p>
              </div>
            )}
          </div>
        )}

        {step === "close" && (
          <div className="flex flex-1 flex-col">
            <span className="mb-3 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              Producto · mapa antes / después
            </span>
            <div className="mb-3 border border-ink/15 bg-paper px-3 py-3.5">
              <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted">Antes</p>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 shrink-0 rounded-full bg-ink/30" />
                <span className="h-px flex-1 bg-ink/20" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-ink/30" />
              </div>
            </div>
            <div className="mb-3 border border-terra/40 bg-terra/[0.05] px-3 py-3.5">
              <p className="mb-2.5 font-mono text-[9px] uppercase tracking-[0.08em] text-terra">Después</p>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 shrink-0 rounded-full bg-terra" />
                <span className="h-1 flex-1 bg-terra" />
                <span className="h-3 w-3 shrink-0 rounded-full bg-terra" />
              </div>
            </div>
            <p className="text-xs leading-relaxed text-ink-soft/70">
              El cambio en la conexión entre dos neuronas al aprender algo nuevo — dibujado a mano,
              en el cuaderno. No es una entrada de datos; es el producto real de cierre de la Semana 2.
            </p>
          </div>
        )}
      </div>
    </DeviceFrame>
  );
}

export function LiveSessionDemo() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  return (
    <div className="border border-ink/15 bg-paper">
      {/* Window header — a distinct, scoped demo mode, not the page chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-ink/15 bg-ink px-5 py-3 sm:px-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/70">
          Sesión en vivo · sincronización en tiempo real
        </span>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/50">
          Paso {stepIndex + 1} de {steps.length}
        </span>
      </div>

      <div className="px-5 py-7 sm:px-8 sm:py-9">
        {/* Step rail */}
        <div className="mb-8 flex items-center gap-1.5 sm:gap-2">
          {steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStepIndex(i)}
              className="group flex flex-1 flex-col items-start gap-2"
              aria-current={i === stepIndex ? "true" : undefined}
            >
              <span
                className={`h-1 w-full transition-colors ${
                  i <= stepIndex ? "bg-terra" : "bg-rule group-hover:bg-ink/20"
                }`}
              />
              <span
                className={`hidden font-mono text-[10px] uppercase tracking-[0.08em] transition-colors sm:block ${
                  i === stepIndex ? "text-terra" : "text-muted group-hover:text-ink-soft"
                }`}
              >
                {s.label}
              </span>
            </button>
          ))}
        </div>

        {/* Synced panels */}
        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_auto_1fr]">
          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Docente · {step.teacherLabel}
            </div>
            <TeacherPanel step={step.id} />
          </div>

          <div className="flex items-center justify-center py-2 lg:h-full lg:flex-col lg:py-0">
            <span className="h-8 w-px bg-terra/40 lg:h-px lg:w-8" />
            <span className="my-1.5 shrink-0 font-mono text-[9px] uppercase tracking-[0.08em] text-terra lg:my-0 lg:mx-1.5">
              en vivo
            </span>
            <span className="h-8 w-px bg-terra/40 lg:h-px lg:w-8" />
          </div>

          <div>
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              Estudiante · {step.studentLabel}
            </div>
            <StudentPanel step={step.id} />
          </div>
        </div>

        {/* What's happening, in plain language */}
        <p className="mx-auto mt-8 max-w-2xl text-center font-display text-base italic leading-relaxed text-ink-soft/85 sm:text-lg">
          {step.note}
        </p>

        {/* Prev/next */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
            disabled={stepIndex === 0}
            className="border border-ink/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-ink-soft transition-colors hover:border-ink disabled:opacity-30 disabled:hover:border-ink/20"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setStepIndex((i) => Math.min(steps.length - 1, i + 1))}
            disabled={stepIndex === steps.length - 1}
            className="border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-paper transition-colors hover:bg-terra hover:border-terra disabled:opacity-30 disabled:hover:bg-ink disabled:hover:border-ink"
          >
            Siguiente →
          </button>
        </div>
      </div>
    </div>
  );
}
