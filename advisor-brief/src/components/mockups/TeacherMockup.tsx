"use client";

import { useState } from "react";
import { DeviceFrame } from "./DeviceFrame";

function PinIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.5 L8 6.5 L11.5 9 L4.5 9 L8 6.5"
        stroke={filled ? "none" : "currentColor"}
        fill={filled ? "currentColor" : "none"}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M8 9 L8 14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

const votes = [
  { label: "Sí", pct: 18 },
  { label: "No", pct: 54 },
  { label: "Depende", pct: 28 },
];

type Exchange = {
  id: string;
  initials: string;
  prompt: string;
  response: string;
  pinned: boolean;
};

const initialExchanges: Exchange[] = [
  {
    id: "a",
    initials: "MC",
    prompt: "¿Puedes sentir algo cuando respondes?",
    response: "No — no tengo estados afectivos. Genero texto por patrones, sin experiencia subjetiva.",
    pinned: true,
  },
  {
    id: "b",
    initials: "JR",
    prompt: "Compara una neurona con un nodo de red.",
    response: "Ambos suman señales de entrada — pero la neurona cambia por experiencia vivida, no solo por datos.",
    pinned: false,
  },
];

export function TeacherMockup() {
  const [exchanges, setExchanges] = useState(initialExchanges);

  const togglePin = (id: string) => {
    setExchanges((prev) => prev.map((e) => (e.id === id ? { ...e, pinned: !e.pinned } : e)));
  };

  return (
    <DeviceFrame label="Vista del docente · Sala 7X4K2P · En vivo">
      <div className="grid gap-px bg-ink/10 sm:grid-cols-[1.1fr_1fr]">
        {/* Left: live interaction / vote aggregation */}
        <div className="bg-surface px-5 py-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-terra" />
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
              Interacción activa · vote
            </span>
          </div>
          <p className="mb-4 font-display text-base font-semibold leading-snug text-ink">
            &ldquo;La IA aprende exactamente igual que un cerebro humano.&rdquo;
          </p>
          <div className="space-y-2.5">
            {votes.map((v) => (
              <div key={v.label}>
                <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-muted">
                  <span>{v.label}</span>
                  <span>{v.pct}%</span>
                </div>
                <div className="h-2 w-full bg-ink/[0.06]">
                  <div className="h-full bg-gold" style={{ width: `${v.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] text-muted">24 de 28 respondieron</p>
        </div>

        {/* Right: prompt exchange feed with pin control */}
        <div className="bg-paper px-5 py-5">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
            Prompt Lab · intercambios
          </div>
          <div className="space-y-2.5">
            {exchanges.map((e) => (
              <div
                key={e.id}
                className={`border px-3 py-2.5 transition-colors ${
                  e.pinned ? "border-terra bg-terra/[0.06]" : "border-ink/10 bg-surface"
                }`}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/10 font-mono text-[9px] text-ink-soft">
                    {e.initials}
                  </span>
                  <span className="font-mono text-[10px] text-muted">estudiante</span>
                </div>
                <p className="text-xs leading-relaxed text-ink-soft">{e.prompt}</p>
                <p className="mt-1 border-l-2 border-gold/50 pl-2 text-xs leading-relaxed text-ink-soft/70">
                  {e.response}
                </p>
                <button
                  onClick={() => togglePin(e.id)}
                  className={`mt-2 flex items-center gap-1.5 border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors ${
                    e.pinned
                      ? "border-terra bg-terra text-paper"
                      : "border-ink/20 text-ink-soft hover:border-terra hover:text-terra"
                  }`}
                >
                  <PinIcon filled={e.pinned} />
                  {e.pinned ? "Fijado en pantalla" : "Fijar en pantalla"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DeviceFrame>
  );
}
