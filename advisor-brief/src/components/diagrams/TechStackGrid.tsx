import { techStack } from "./TechIcons";

export function TechStackGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {techStack.map((t) => (
        <div key={t.key} className="flex items-start gap-3 border border-rule bg-surface px-4 py-4">
          <t.icon className="h-6 w-6 shrink-0 text-terra" />
          <div>
            <div className="font-display text-sm font-semibold text-ink">{t.name}</div>
            <p className="mt-1 text-xs leading-relaxed text-ink-soft/70">{t.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
