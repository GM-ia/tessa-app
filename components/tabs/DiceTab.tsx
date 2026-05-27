"use client";

import { useState } from "react";
import { CharacterState, Explanation } from "@/types";
import { WEAPONS, EXPLANATIONS } from "@/constants/character";

interface RollResult {
  label: string;
  rolls: number[];
  bonus: number;
  total: number;
  breakdown: string;
  isCrit?: boolean;
}

interface Props {
  state: CharacterState;
  onExplain: (e: Explanation) => void;
  onRoll: (r: RollResult) => void;
}

const DICE = [
  { sides: 4, emoji: "🔹" },
  { sides: 6, emoji: "⬡" },
  { sides: 8, emoji: "♦" },
  { sides: 10, emoji: "💠" },
  { sides: 12, emoji: "🔷" },
  { sides: 20, emoji: "⭐" },
  { sides: 100, emoji: "💯" },
];

function rollD(sides: number) {
  return Math.floor(Math.random() * sides) + 1;
}

export default function DiceTab({ state, onExplain, onRoll }: Props) {
  const [count, setCount] = useState(1);
  const [history, setHistory] = useState<string[]>([]);

  function rollCustom(sides: number) {
    const rolls: number[] = [];
    for (let i = 0; i < count; i++) rolls.push(rollD(sides));
    const total = rolls.reduce((a, b) => a + b, 0);
    const label = `${count}d${sides}`;
    const entry = `${label} → ${rolls.join(", ")} = ${total}`;
    setHistory((h) => [entry, ...h.slice(0, 9)]);
    onRoll({
      label,
      rolls,
      bonus: 0,
      total,
      breakdown: rolls.length > 1 ? `${rolls.join(" + ")} = ${total}` : `d${sides}(${rolls[0]})`,
    });
  }

  function rollWeaponAttack(weapon: (typeof WEAPONS)[0]) {
    const d = rollD(20);
    const isCrit = d === 20;
    const total = d + weapon.toHit;
    onRoll({
      label: `${weapon.name} — Attack`,
      rolls: [d],
      bonus: weapon.toHit,
      total,
      breakdown: `d20(${d}) + ${weapon.toHit} = ${total}${isCrit ? " 🎉 CRIT!" : ""}`,
      isCrit,
    });
  }

  function rollWeaponDamage(weapon: (typeof WEAPONS)[0]) {
    const [cnt, sides] = weapon.damageDice.split("d").map(Number);
    const rolls: number[] = [];
    for (let i = 0; i < cnt; i++) rolls.push(rollD(sides));
    const sum = rolls.reduce((a, b) => a + b, 0);
    const bonus = state.isRaging ? weapon.ragingDamageMod : weapon.damageMod;
    const total = sum + bonus;
    onRoll({
      label: `${weapon.name} — Damage`,
      rolls,
      bonus,
      total,
      breakdown: `${weapon.damageDice}(${sum}) + ${bonus}${state.isRaging ? " (raging)" : ""} = ${total}`,
    });
  }

  return (
    <div className="space-y-4 pb-2">
      {/* Dice count */}
      <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">Number of dice</p>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`w-8 h-8 rounded-lg text-sm font-bold transition-colors ${
                  count === n
                    ? "bg-amber-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {DICE.map((d) => (
            <button
              key={d.sides}
              onClick={() => rollCustom(d.sides)}
              onContextMenu={(e) => {
                e.preventDefault();
                const ex = EXPLANATIONS[`d${d.sides}` as keyof typeof EXPLANATIONS];
                if (ex) onExplain(ex);
              }}
              className="flex flex-col items-center justify-center p-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-600 rounded-xl transition-colors"
            >
              <span className="text-2xl">{d.emoji}</span>
              <span className="text-amber-400 font-bold text-sm mt-1">d{d.sides}</span>
            </button>
          ))}
        </div>
        <p className="text-slate-600 text-xs mt-2 text-center">Long-press any die for explanation</p>
      </div>

      {/* Quick weapon rolls */}
      <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
        <p className="text-slate-500 text-xs font-semibold mb-3 uppercase tracking-widest">⚡ Quick Weapon Rolls</p>
        {state.isRaging && (
          <p className="text-red-400 text-xs mb-2">🔥 Raging — damage +2</p>
        )}
        <div className="space-y-3">
          {WEAPONS.map((weapon) => (
            <div key={weapon.id} className="flex items-center gap-2">
              <span className="text-lg w-7">{weapon.emoji}</span>
              <span className="text-slate-300 text-sm flex-1 truncate">{weapon.name}</span>
              <button
                onClick={() => rollWeaponAttack(weapon)}
                className="px-3 py-1.5 bg-blue-950/50 hover:bg-blue-900 text-blue-400 rounded-lg text-xs font-bold border border-blue-900/50 transition-colors"
              >
                ATK +{weapon.toHit}
              </button>
              <button
                onClick={() => rollWeaponDamage(weapon)}
                className="px-3 py-1.5 bg-red-950/50 hover:bg-red-900 text-red-400 rounded-lg text-xs font-bold border border-red-900/50 transition-colors"
              >
                DMG {weapon.damageDice}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Roll history */}
      {history.length > 0 && (
        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800">
          <p className="text-slate-500 text-xs font-semibold mb-2 uppercase tracking-widest">🕘 Recent Rolls</p>
          <div className="space-y-1">
            {history.map((entry, i) => (
              <p key={i} className={`text-xs ${i === 0 ? "text-amber-400 font-medium" : "text-slate-600"}`}>
                {entry}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
