import type { ReactNode } from "react";

type DeviceFrameProps = {
  label: string;
  variant?: "wide" | "phone";
  children: ReactNode;
};

export function DeviceFrame({ label, variant = "wide", children }: DeviceFrameProps) {
  const isPhone = variant === "phone";
  return (
    <div
      className={`mx-auto flex flex-col overflow-hidden rounded-xl border border-ink/15 bg-surface shadow-[0_20px_50px_-24px_rgba(26,25,22,0.35)] ${
        isPhone ? "w-full max-w-[300px]" : "w-full"
      }`}
    >
      <div className="flex items-center gap-2.5 border-b border-ink/10 bg-ink px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-paper/25" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-paper/60">
          {label}
        </span>
      </div>
      <div className={isPhone ? "aspect-[9/17.5]" : ""}>{children}</div>
    </div>
  );
}
