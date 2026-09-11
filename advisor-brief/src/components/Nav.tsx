"use client";

import { useEffect, useState } from "react";
import { sectionList } from "@/lib/content/sections";

export function Nav() {
  const [activeId, setActiveId] = useState<string>("cover");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sectionList.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const activeMeta = sectionList.find((s) => s.id === activeId);
  const activeDark = activeMeta?.dark;

  return (
    <>
      {/* Desktop: fixed vertical index rail */}
      <nav
        aria-label="Section navigation"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ol className="flex flex-col items-end gap-2.5">
          {sectionList.map((s) => {
            const isActive = s.id === activeId;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-center gap-2.5"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`font-mono text-[11px] tracking-wide transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 opacity-100 text-ink"
                        : "translate-x-1 opacity-0 group-hover:opacity-60"
                    }`}
                  >
                    {s.navLabel}
                  </span>
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isActive ? "w-8 bg-terra" : "w-4 bg-ink/30 group-hover:w-6 group-hover:bg-ink/60"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Mobile / tablet: top bar with expandable index */}
      <div
        className={`fixed inset-x-0 top-0 z-40 border-b lg:hidden ${
          activeDark ? "border-paper/15 bg-ink text-paper" : "border-rule bg-paper/95 text-ink backdrop-blur"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
            {activeMeta ? `${activeMeta.index} · ${activeMeta.navLabel}` : "Paradise Classroom"}
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle section index"
            className="font-mono text-[11px] uppercase tracking-[0.18em]"
          >
            {open ? "Close" : "Index"}
          </button>
        </div>
        {open && (
          <ol className="flex flex-col gap-1 border-t border-current/10 px-4 py-3">
            {sectionList.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-1.5 font-sans text-sm"
                >
                  <span className="font-mono text-xs opacity-50">{s.index}</span>
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
