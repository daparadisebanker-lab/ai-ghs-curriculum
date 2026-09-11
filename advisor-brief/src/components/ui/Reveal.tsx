"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children?: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "span" | "li";
  variant?: "reveal" | "reveal-line" | "rule-draw";
};

// Belt-and-suspenders: content must never stay invisible. If the
// IntersectionObserver hasn't fired within this window (slow scroll,
// an off-screen anchor jump, a browser quirk), reveal anyway.
const SAFETY_TIMEOUT_MS = 1800;

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
  variant = "reveal",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const reveal = () => setVisible(true);
    const safety = window.setTimeout(reveal, SAFETY_TIMEOUT_MS);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            window.clearTimeout(safety);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      className={`${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
