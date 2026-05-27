"use client";

import { useState } from "react";
import { Explanation } from "@/types";
import { FEATURES, EXPLANATIONS } from "@/constants/character";

interface Props {
  onExplain: (e: Explanation) => void;
}

const ACCENT: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  red:    { bg: "rgba(139,26,26,0.08)",  border: "rgba(139,26,26,0.3)",  text: "var(--red-bright)",    badge: "rgba(139,26,26,0.15)" },
  amber:  { bg: "rgba(92,58,14,0.08)",   border: "var(--border-gold)",    text: "var(--gold)",          badge: "rgba(92,58,14,0.15)"  },
  teal:   { bg: "rgba(26,107,88,0.08)",  border: "rgba(26,107,88,0.3)",  text: "var(--teal-bright)",   badge: "rgba(26,107,88,0.15)" },
  purple: { bg: "rgba(61,26,92,0.08)",   border: "rgba(61,26,92,0.3)",   text: "var(--purple-bright)", badge: "rgba(61,26,92,0.15)"  },
  blue:   { bg: "rgba(26,45,92,0.08)",   border: "rgba(26,45,92,0.3)",   text: "var(--blue-bright)",   badge: "rgba(26,45,92,0.15)"  },
};

export default function FeaturesTab({ onExplain }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const active = FEATURES.filter((f) => f.active);
  const upcoming = FEATURES.filter((f) => !f.active);

  function toggle(id: string) {
    setExpanded(expanded === id ? null : id);
  }

  return (
    <div className="space-y-3 pb-2">
      {/* Wolf Totem callout */}
      <div className="rounded-xl p-4" style={{ background: "rgba(61,26,92,0.08)", border: "1px solid rgba(61,26,92,0.3)" }}>
        <p className="font-dnd text-sm mb-1" style={{ color: "var(--purple-bright)" }}>❧ Wolf Tactic — Your Core Strategy</p>
        <p className="font-body text-xs leading-relaxed" style={{ color: "var(--parchment)" }}>
          Position Tessa adjacent to an enemy → <strong>Rage</strong> → use <strong>Reckless Attack</strong> → all allies get advantage on melee attacks vs that enemy. Use this every turn!
        </p>
      </div>

      <div className="divider-dnd">Active Features</div>

      {active.map((feature) => {
        const isOpen = expanded === feature.id;
        const accent = ACCENT[feature.color] || ACCENT.amber;
        const explanation = EXPLANATIONS[feature.id as keyof typeof EXPLANATIONS];
        return (
          <div
            key={feature.id}
            className="rounded-xl overflow-hidden transition-all"
            style={{ background: accent.bg, border: `1px solid ${accent.border}` }}
          >
            <button
              onClick={() => toggle(feature.id)}
              className="w-full p-4 flex items-start gap-3 text-left"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-dnd text-base" style={{ color: "var(--parchment)" }}>{feature.name}</span>
                  <span className="font-dnd text-[9px] px-2 py-0.5 rounded-full tracking-wide"
                    style={{ background: accent.badge, color: accent.text }}>
                    {feature.type}
                  </span>
                  <span className="font-dnd text-[9px]" style={{ color: "var(--parchment-dim)" }}>Lvl {feature.level}</span>
                </div>
                <p className="font-body text-xs mt-1 leading-relaxed" style={{ color: "var(--parchment-dim)" }}>{feature.description}</p>
              </div>
              <span className="font-dnd text-xs flex-shrink-0 mt-1" style={{ color: accent.text }}>{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 space-y-3">
                <div className="rounded-xl p-3" style={{ background: "rgba(0,0,0,0.06)" }}>
                  <p className="font-body text-xs leading-relaxed whitespace-pre-line" style={{ color: "var(--parchment)" }}>{feature.rules}</p>
                </div>
                {explanation && (
                  <button
                    onClick={() => onExplain(explanation)}
                    className="flex items-center gap-2 font-dnd text-xs tracking-wide transition-opacity hover:opacity-70"
                    style={{ color: "var(--gold)" }}
                  >
                    ✦ Beginner tip &amp; tactics
                  </button>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="divider-dnd pt-2">Upcoming Features</div>
      <p className="font-body text-xs px-1" style={{ color: "var(--parchment-dim)" }}>These unlock at higher levels.</p>

      {upcoming.map((feature) => (
        <div
          key={feature.id}
          className="rounded-xl opacity-40"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border-dim)" }}
        >
          <div className="p-4 flex items-start gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-dnd text-base" style={{ color: "var(--parchment-dim)" }}>{feature.name}</span>
                <span className="font-dnd text-[9px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,0,0,0.08)", color: "var(--parchment-dim)" }}>
                  Level {feature.level}
                </span>
              </div>
              <p className="font-body text-xs mt-1" style={{ color: "var(--parchment-dim)" }}>{feature.description}</p>
            </div>
            <span className="font-dnd text-sm" style={{ color: "var(--parchment-dim)" }}>⊗</span>
          </div>
        </div>
      ))}
    </div>
  );
}
