"use client";

const TABS = [
  { id: "home",      label: "Home",     glyph: "⌂"  },
  { id: "actions",   label: "Actions",  glyph: "⚔"  },
  { id: "skills",    label: "Skills",   glyph: "◎"  },
  { id: "features",  label: "Features", glyph: "❧"  },
  { id: "inventory", label: "Bag",      glyph: "◈"  },
  { id: "handbook",  label: "Guide",    glyph: "✦"  },
  { id: "info",      label: "Info",     glyph: "✤"  },
];

interface Props {
  active: string;
  onChange: (tab: string) => void;
}

export default function TabBar({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40"
         style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-gold)" }}>
      <div className="flex overflow-x-auto scrollbar-hide">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex-1 flex flex-col items-center justify-center px-1 py-2.5 min-w-[48px] transition-all"
              style={{
                color: isActive ? "var(--gold)" : "var(--parchment-dim)",
                borderTop: isActive ? "2px solid var(--gold)" : "2px solid transparent",
                marginTop: "-1px",
              }}
            >
              <span className="font-dnd text-base leading-none">{tab.glyph}</span>
              <span className="font-dnd text-[8px] mt-1 tracking-wider leading-none uppercase">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
