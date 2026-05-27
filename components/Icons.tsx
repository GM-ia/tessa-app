// DnD-themed SVG icon components

export function ShieldIcon({ value, className = "" }: { value: number | string; className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer shield fill */}
      <path d="M 10 8 L 70 8 L 70 52 Q 70 76 40 86 Q 10 76 10 52 Z"
            fill="var(--bg-card-alt)" stroke="var(--border-gold)" strokeWidth="2" />
      {/* Inner emboss ring */}
      <path d="M 15 13 L 65 13 L 65 51 Q 65 72 40 81 Q 15 72 15 51 Z"
            fill="none" stroke="var(--border-gold)" strokeWidth="1" strokeOpacity="0.45" />
      {/* Top decorative band */}
      <rect x="10" y="8" width="60" height="12" rx="0"
            fill="var(--border-gold)" fillOpacity="0.15" />
      {/* Value */}
      <text x="40" y="56" textAnchor="middle" dominantBaseline="middle"
            fontFamily="var(--font-cinzel), serif" fontWeight="900" fontSize="28"
            fill="var(--gold)">
        {value}
      </text>
    </svg>
  );
}

export function D20Icon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,2 22,7 22,17 12,22 2,17 2,7"
               stroke="currentColor" strokeWidth="1.5" fill="none" />
      <polygon points="12,2 17,9 7,9" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.15" />
      <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="2" x2="7" y2="9" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="2" x2="17" y2="9" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function SwordIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="4" y1="20" x2="18" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6 L20 4 L22 6 L20 8 Z" fill="currentColor" />
      <line x1="6" y1="16" x2="8" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="3.5" cy="20.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function WolfIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left ear */}
      <polygon points="7,21 4,4 17,14" fill="currentColor" />
      {/* Right ear */}
      <polygon points="33,21 36,4 23,14" fill="currentColor" />
      {/* Head */}
      <path d="M 7 21 Q 7 36 20 38 Q 33 36 33 21 Q 31 11 20 11 Q 9 11 7 21 Z"
            fill="currentColor" />
      {/* Eyes */}
      <circle cx="15" cy="22" r="2.2" fill="var(--bg-card-alt)" />
      <circle cx="25" cy="22" r="2.2" fill="var(--bg-card-alt)" />
      {/* Pupils */}
      <circle cx="15.5" cy="22.5" r="1" fill="currentColor" fillOpacity="0.6" />
      <circle cx="25.5" cy="22.5" r="1" fill="currentColor" fillOpacity="0.6" />
      {/* Snout */}
      <path d="M 14 29 Q 20 33 26 29 Q 24 37 20 38 Q 16 37 14 29 Z"
            fill="currentColor" fillOpacity="0.55" />
      {/* Nose */}
      <ellipse cx="20" cy="28.5" rx="2.5" ry="1.8" fill="var(--bg-card-alt)" fillOpacity="0.85" />
    </svg>
  );
}

export function FireIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 C12 2 8 6 8 10 C8 10 6 8 7 6 C7 6 3 10 3 15 C3 19.4 7.1 22 12 22 C16.9 22 21 19.4 21 15 C21 10 17 6 17 6 C17 8 16 10 14 10 C14 7 12 2 12 2 Z"
            opacity="0.9" />
    </svg>
  );
}

export function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21 C12 21 3 15 3 9 C3 6.2 5.2 4 8 4 C9.9 4 11.5 5 12 6.3 C12.5 5 14.1 4 16 4 C18.8 4 21 6.2 21 9 C21 15 12 21 12 21 Z" />
    </svg>
  );
}

export function ScrollIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3 C6 3 5 4.5 5 6 L5 20 C5 21.5 6 22 7 22 L18 22 C19.5 22 20 21 20 20 L20 6 C20 4.5 19 3 17 3 Z" />
      <path d="M8 3 C8 4.5 7 5 6 5 C5 5 4 4.5 4 6 C4 7.5 5.5 8 7 8 L8 8" strokeLinecap="round" />
      <line x1="9" y1="11" x2="16" y2="11" strokeLinecap="round" />
      <line x1="9" y1="14" x2="16" y2="14" strokeLinecap="round" />
      <line x1="9" y1="17" x2="13" y2="17" strokeLinecap="round" />
    </svg>
  );
}

export function AxeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="6" y1="18" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M 16 8 C 16 5 19 3 21 5 C 19 7 18 9 16 8 Z" fill="currentColor" />
      <path d="M 16 8 C 18 8 20 11 18 13 C 16 11 15 9 16 8 Z" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}

export function WarhammerIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="19" x2="15" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="13" y="4" width="8" height="6" rx="1" transform="rotate(45 17 7)" fill="currentColor" />
    </svg>
  );
}

export function HandaxeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="5" y1="19" x2="14" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M 14 10 C 13 7 15 4 18 5 C 16 7 16 9 14 10 Z" fill="currentColor" />
      <path d="M 14 10 C 16 9 19 10 19 13 C 17 12 15 11 14 10 Z" fill="currentColor" fillOpacity="0.75" />
    </svg>
  );
}
