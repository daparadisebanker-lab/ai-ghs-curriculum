import type { FieldStatus } from "@/lib/content/protectedFields";

const styles: Record<FieldStatus, string> = {
  PROTECTED: "border-terra/50 text-terra bg-terra/10",
  AUGMENTATION: "border-gold/50 text-gold bg-gold/10",
  "OUT OF SCOPE": "border-paper/25 text-paper/60 bg-paper/5",
  STRUCTURAL: "border-paper/30 text-paper/75 bg-paper/5",
};

export function StatusPill({ status }: { status: FieldStatus }) {
  return (
    <span
      className={`inline-block whitespace-nowrap border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] ${styles[status]}`}
    >
      {status}
    </span>
  );
}
