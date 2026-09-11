import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionShellProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  dek?: ReactNode;
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function SectionShell({
  id,
  index,
  label,
  title,
  dek,
  children,
  dark = false,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 border-t ${
        dark ? "bg-ink text-paper border-ink" : "bg-paper text-ink border-rule"
      } ${className}`}
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 sm:mb-16">
          <Reveal variant="reveal-line">
            <div
              className={`mb-4 flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.18em] ${
                dark ? "text-paper/50" : "text-muted"
              }`}
            >
              <span>{index}</span>
              <span className={dark ? "text-terra" : "text-terra"}>—</span>
              <span>{label}</span>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] text-balance sm:text-4xl md:text-5xl">
              {title}
            </h2>
          </Reveal>
          {dek && (
            <Reveal delayMs={140}>
              <p
                className={`mt-5 max-w-2xl text-lg leading-relaxed ${
                  dark ? "text-paper/75" : "text-ink-soft/80"
                }`}
              >
                {dek}
              </p>
            </Reveal>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
