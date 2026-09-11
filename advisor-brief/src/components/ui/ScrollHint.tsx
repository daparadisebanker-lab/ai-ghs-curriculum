export function ScrollHint({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] sm:hidden ${
        dark ? "text-paper/40" : "text-muted"
      }`}
      aria-hidden
    >
      <span>Scroll for full row</span>
      <span>→</span>
    </div>
  );
}
