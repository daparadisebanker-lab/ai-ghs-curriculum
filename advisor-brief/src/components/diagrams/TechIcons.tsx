type IconProps = { className?: string };

const base = "h-7 w-7";

export function LayersIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M16 4 L28 10 L16 16 L4 10 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 16 L16 22 L28 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M4 22 L16 28 L28 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseLockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <ellipse cx="14" cy="8" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 8 V21 C4 22.9 8.5 24.5 14 24.5 C15.4 24.5 16.7 24.4 18 24.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M24 8 V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 15 C4 16.9 8.5 18.5 14 18.5 C16 18.5 17.9 18.3 19.5 17.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="19.5" y="20" width="8.5" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21.5 20 V18.3 a2.25 2.25 0 0 1 4.5 0 V20" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function BroadcastIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <circle cx="16" cy="25" r="1.6" fill="currentColor" />
      <path d="M10.5 19.5 a8 8 0 0 1 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 14.5 a14.5 14.5 0 0 1 19 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2.5 9.5 a21 21 0 0 1 27 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function SparkBubbleIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path
        d="M6 6 H24 a2.5 2.5 0 0 1 2.5 2.5 V18 a2.5 2.5 0 0 1 -2.5 2.5 H14.5 L9 25.5 V20.5 H6 A2.5 2.5 0 0 1 3.5 18 V8.5 A2.5 2.5 0 0 1 6 6 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 9 L17.1 12.1 L20.2 13.2 L17.1 14.3 L16 17.4 L14.9 14.3 L11.8 13.2 L14.9 12.1 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PadlockIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <rect x="7" y="15" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 15 V10.5 a5 5 0 0 1 10 0 V15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="20.5" r="1.7" fill="currentColor" />
      <path d="M16 22.2 V24.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const techStack = [
  {
    key: "nextjs",
    icon: LayersIcon,
    name: "Next.js 14",
    detail: "App Router · Tailwind — la capa de interfaz para docente y estudiante.",
  },
  {
    key: "supabase",
    icon: DatabaseLockIcon,
    name: "Supabase",
    detail: "Postgres + Row-Level Security + Realtime — el esquema multi-tenant, desde el día uno.",
  },
  {
    key: "pusher",
    icon: BroadcastIcon,
    name: "Pusher",
    detail: "Sincronización en vivo entre la pantalla del docente y cada estudiante.",
  },
  {
    key: "anthropic",
    icon: SparkBubbleIcon,
    name: "Anthropic API",
    detail: "Llamada exclusivamente en servidor — la clave nunca llega al cliente.",
  },
];
