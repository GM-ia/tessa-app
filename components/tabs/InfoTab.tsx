"use client";

import { Explanation } from "@/types";
import { CHARACTER, PROFICIENCIES, LANGUAGES } from "@/constants/character";

interface Props {
  onExplain: (e: Explanation) => void;
}

export default function InfoTab({ onExplain }: Props) {
  void onExplain;
  return (
    <div className="space-y-4 pb-2">
      {/* Character identity */}
      <div className="card-ornate p-5" style={{ background: "linear-gradient(135deg, var(--bg-card-alt), var(--bg-card))" }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center font-dnd text-3xl"
            style={{ background: "rgba(61,26,92,0.08)", border: "1px solid rgba(61,26,92,0.3)", color: "var(--purple-bright)" }}>
            ❧
          </div>
          <div>
            <h2 className="font-dnd-deco text-xl" style={{ color: "var(--gold)" }}>{CHARACTER.name}</h2>
            <p className="font-body text-sm" style={{ color: "var(--parchment-dim)" }}>{CHARACTER.race} {CHARACTER.class} {CHARACTER.level}</p>
            <p className="font-dnd text-xs" style={{ color: "var(--purple-bright)" }}>{CHARACTER.subclass}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Background", value: CHARACTER.background },
            { label: "Alignment", value: CHARACTER.alignment },
            { label: "Campaign", value: CHARACTER.campaign },
            { label: "Prof. Bonus", value: `+${CHARACTER.proficiencyBonus}` },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl p-2.5" style={{ background: "rgba(0,0,0,0.05)", border: "1px solid var(--border-dim)" }}>
              <p className="font-dnd text-[9px] tracking-widest uppercase" style={{ color: "var(--parchment-dim)" }}>{label}</p>
              <p className="font-body text-sm font-medium mt-0.5" style={{ color: "var(--parchment)" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Backstory */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Backstory</div>
        <p className="font-body text-sm leading-relaxed" style={{ color: "var(--parchment)" }}>
          Tessa Arrabgiata is a Human Barbarian who followed the Path of the Totem Warrior, channeling the spirit of the wolf. Her background as a Sage means she&apos;s surprisingly scholarly — perhaps studying the arcane forces that once threatened her homeland.
        </p>
        <p className="font-body text-sm leading-relaxed mt-2" style={{ color: "var(--parchment-dim)" }}>
          She carries cult research notes and a letter from a dead colleague — hints at a personal mission beneath the rage. She fights with the ferocity of a beast and the cunning of a scholar.
        </p>
      </div>

      {/* Personality */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Character Traits</div>
        <div className="space-y-2">
          <div className="p-3 rounded-xl" style={{ background: "rgba(92,58,14,0.06)", border: "1px solid var(--border-gold)" }}>
            <p className="font-dnd text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Personality</p>
            <p className="font-body text-xs" style={{ color: "var(--parchment)" }}>Passionate and direct — Tessa leads with her heart (and her greataxe). She&apos;s fiercely loyal to her companions and driven by a need to understand the world&apos;s hidden truths.</p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: "rgba(26,107,88,0.08)", border: "1px solid rgba(26,107,88,0.3)" }}>
            <p className="font-dnd text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--teal-bright)" }}>Bond</p>
            <p className="font-body text-xs" style={{ color: "var(--parchment)" }}>Carrying research from a dead colleague — determined to complete their work and uncover the truth about the cult.</p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <p className="font-dnd text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--red-bright)" }}>Flaw</p>
            <p className="font-body text-xs" style={{ color: "var(--parchment)" }}>Rage can cloud judgment — sometimes charges in when patience would serve better.</p>
          </div>
          <div className="p-3 rounded-xl" style={{ background: "rgba(61,26,92,0.08)", border: "1px solid rgba(61,26,92,0.3)" }}>
            <p className="font-dnd text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--purple-bright)" }}>Alignment — Chaotic Good</p>
            <p className="font-body text-xs" style={{ color: "var(--parchment)" }}>Does what feels right, not what rules dictate. Protects the innocent, defies tyrants, and follows her own moral compass.</p>
          </div>
        </div>
      </div>

      {/* Proficiencies */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Proficiencies</div>
        <div className="flex flex-wrap gap-2">
          {PROFICIENCIES.map((p) => (
            <span key={p} className="font-dnd text-[10px] px-2.5 py-1 rounded-full tracking-wide"
              style={{ background: "rgba(26,107,88,0.1)", border: "1px solid rgba(26,107,88,0.3)", color: "var(--teal-bright)" }}>
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Languages</div>
        <div className="flex gap-2 flex-wrap">
          {LANGUAGES.map((l) => (
            <span key={l} className="font-dnd text-[10px] px-3 py-1.5 rounded-full tracking-wide"
              style={{ background: "rgba(26,45,92,0.1)", border: "1px solid rgba(26,45,92,0.3)", color: "var(--blue-bright)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
