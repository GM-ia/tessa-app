"use client";

import { CharacterState, Explanation } from "@/types";
import { INVENTORY_ITEMS, WEAPONS } from "@/constants/character";

interface Props {
  state: CharacterState;
  setState: (s: CharacterState) => void;
  onExplain: (e: Explanation) => void;
}

export default function InventoryTab({ state, setState, onExplain }: Props) {
  function changeGold(delta: number) {
    setState({ ...state, gold: Math.max(0, state.gold + delta) });
  }

  return (
    <div className="space-y-4 pb-2">
      {/* Currency */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Currency</div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-dnd text-4xl" style={{ color: "var(--gold)" }}>{state.gold}</span>
            <span className="font-dnd text-xl ml-1" style={{ color: "var(--gold-dim)" }}>GP</span>
          </div>
          <div className="flex gap-2">
            {[-10, -1, +1, +10].map((n) => (
              <button
                key={n}
                onClick={() => changeGold(n)}
                className="px-3 py-2 rounded-lg font-dnd text-xs tracking-wide uppercase transition-all hover:opacity-80"
                style={n < 0
                  ? { background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.3)", color: "var(--red-bright)" }
                  : { background: "rgba(26,107,88,0.1)", border: "1px solid rgba(26,107,88,0.3)", color: "var(--teal-bright)" }}
              >
                {n > 0 ? `+${n}` : n}
              </button>
            ))}
          </div>
        </div>
        <p className="font-body text-xs mt-2" style={{ color: "var(--parchment-dim)" }}>
          1 GP = 10 SP = 100 CP. Gold is the main currency in most D&amp;D settings.
        </p>
      </div>

      {/* Weapons */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Weapons</div>
        <div className="space-y-2">
          {WEAPONS.map((w) => (
            <button
              key={w.id}
              onClick={() =>
                onExplain({
                  title: w.name,
                  body: `To-Hit: +${w.toHit}\nDamage: ${w.damageDice}+${w.damageMod} ${w.damageType}\n\nProperties:\n${w.properties.map((p) => `• ${p}`).join("\n")}`,
                  tip:
                    w.id === "scatterheart"
                      ? "A magic warhammer that returns to your hand after being thrown. Very versatile!"
                      : w.id === "greataxe"
                      ? "The classic Barbarian weapon — heavy damage, two-handed, no range. Great for charging in."
                      : "Light weapons: you can make a bonus action attack with your off-hand after attacking with these.",
                })
              }
              className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:opacity-80 text-left"
              style={{ background: "rgba(92,58,14,0.08)", border: "1px solid var(--border-gold)" }}
            >
              <span className="font-dnd text-2xl">{w.emoji}</span>
              <div className="flex-1">
                <p className="font-dnd text-sm" style={{ color: "var(--parchment)" }}>{w.name}</p>
                <p className="font-body text-xs" style={{ color: "var(--parchment-dim)" }}>
                  {w.damageDice}+{w.damageMod} {w.damageType} · +{w.toHit} to hit
                </p>
              </div>
              {w.count && (
                <span className="font-dnd text-sm" style={{ color: "var(--parchment-dim)" }}>×{w.count}</span>
              )}
              <span className="font-dnd text-xs" style={{ color: "var(--parchment-dim)" }}>ℹ</span>
            </button>
          ))}
        </div>
      </div>

      {/* Equipment */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Equipment</div>
        <div className="space-y-2">
          {INVENTORY_ITEMS.filter((i) => i.category !== "weapon").map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-2.5 rounded-xl"
              style={{ background: "rgba(0,0,0,0.04)", border: "1px solid var(--border-dim)" }}
            >
              <div className="flex items-center gap-2">
                <span className="font-dnd text-sm" style={{ color: "var(--gold-dim)" }}>
                  {item.category === "gear" ? "◈" : item.category === "misc" ? "◎" : "⊡"}
                </span>
                <span className="font-body text-sm" style={{ color: "var(--parchment)" }}>{item.name}</span>
              </div>
              <span className="font-body text-xs" style={{ color: "var(--parchment-dim)" }}>{item.weight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
