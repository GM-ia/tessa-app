"use client";

import { Explanation } from "@/types";
import { SKILLS, SAVING_THROWS, EXPLANATIONS, PASSIVE_SENSES } from "@/constants/character";

interface Props {
  onExplain: (e: Explanation) => void;
}

export default function SkillsTab({ onExplain }: Props) {
  return (
    <div className="space-y-4 pb-2">

      {/* Passive senses */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Passive Senses</div>
        <div className="grid grid-cols-3 gap-2">
          {PASSIVE_SENSES.map((s) => {
            const exKey = s.name.replace("Passive ", "") as keyof typeof EXPLANATIONS;
            const ex = EXPLANATIONS[exKey];
            return (
              <button
                key={s.name}
                onClick={() => ex && onExplain(ex)}
                className="stat-badge hover:opacity-80 transition-opacity"
              >
                <div className="font-dnd text-xl" style={{ color: "var(--parchment)" }}>{s.value}</div>
                <div className="font-dnd text-[9px] tracking-wide leading-tight mt-0.5" style={{ color: "var(--parchment-dim)" }}>{s.name}</div>
              </button>
            );
          })}
        </div>
        <p className="font-body text-xs mt-3" style={{ color: "var(--parchment-dim)" }}>
          Passive senses always apply — no roll needed. The DM checks them secretly.
        </p>
      </div>

      {/* Saving throws */}
      <div className="card-ornate p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="divider-dnd flex-1">Saving Throws</div>
          <button
            onClick={() => onExplain(EXPLANATIONS.savingThrow)}
            className="font-dnd text-xs ml-3 transition-opacity hover:opacity-60 flex-shrink-0"
            style={{ color: "var(--gold)" }}
          >
            ℹ what are saves?
          </button>
        </div>
        <div className="space-y-1">
          {SAVING_THROWS.map((s) => {
            const explanation = EXPLANATIONS[s.ability as keyof typeof EXPLANATIONS];
            return (
              <button
                key={s.name}
                onClick={() => explanation && onExplain(explanation)}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl transition-all hover:opacity-70"
                style={{ background: "rgba(0,0,0,0.03)" }}
              >
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center font-dnd text-[10px]"
                  style={s.proficient
                    ? { background: "rgba(26,107,88,0.2)", border: "1px solid var(--teal-bright)", color: "var(--teal-bright)" }
                    : { background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.2)", color: "transparent" }}
                >
                  {s.proficient ? "✓" : ""}
                </div>
                <span className="font-body text-sm flex-1 text-left" style={{ color: s.proficient ? "var(--teal-bright)" : "var(--parchment)" }}>
                  {s.name}
                </span>
                <span className="font-dnd font-bold w-8 text-right" style={{ color: "var(--parchment)" }}>
                  {s.bonus >= 0 ? `+${s.bonus}` : s.bonus}
                </span>
                <span className="font-dnd text-xs w-8 text-right" style={{ color: "var(--parchment-dim)" }}>{s.ability}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Skills</div>
        <div className="space-y-0.5">
          {SKILLS.map((skill) => {
            const explanation = EXPLANATIONS[skill.name as keyof typeof EXPLANATIONS];
            return (
              <button
                key={skill.name}
                onClick={() => explanation && onExplain(explanation)}
                className="w-full flex items-center gap-3 p-2.5 rounded-xl transition-all hover:opacity-70"
                style={{ background: "rgba(0,0,0,0.03)" }}
              >
                <div
                  className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center font-dnd text-[10px]"
                  style={skill.proficient
                    ? { background: "rgba(26,107,88,0.2)", border: "1px solid var(--teal-bright)", color: "var(--teal-bright)" }
                    : { background: "rgba(0,0,0,0.06)", border: "1px solid rgba(0,0,0,0.2)", color: "transparent" }}
                >
                  {skill.proficient ? "✓" : ""}
                </div>
                <span className="font-body text-sm flex-1 text-left"
                  style={{ color: skill.proficient ? "var(--teal-bright)" : "var(--parchment)" }}>
                  {skill.name}
                </span>
                <span className="font-dnd font-bold w-8 text-right" style={{ color: "var(--parchment)" }}>
                  {skill.bonus >= 0 ? `+${skill.bonus}` : skill.bonus}
                </span>
                <span className="font-dnd text-xs w-8 text-right" style={{ color: "var(--parchment-dim)" }}>{skill.ability}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
