"use client";

import { CharacterState, Explanation } from "@/types";
import { WEAPONS, EXPLANATIONS } from "@/constants/character";

interface Props {
  state: CharacterState;
  setState: (s: CharacterState) => void;
  onExplain: (e: Explanation) => void;
}

export default function ActionsTab({ state, setState, onExplain }: Props) {
  function toggleDeathSave(type: "success" | "failure") {
    if (type === "success") {
      const next = state.deathSuccesses >= 3 ? 0 : state.deathSuccesses + 1;
      setState({ ...state, deathSuccesses: next });
    } else {
      const next = state.deathFailures >= 3 ? 0 : state.deathFailures + 1;
      setState({ ...state, deathFailures: next });
    }
  }

  return (
    <div className="space-y-4 pb-2">
      {state.isRaging && (
        <div className="rounded-xl p-2 text-center rage-active" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid var(--red-bright)" }}>
          <p className="font-dnd text-xs tracking-widest uppercase" style={{ color: "var(--red-bright)" }}>✦ Raging — All melee damage +2</p>
        </div>
      )}

      {WEAPONS.map((weapon) => (
        <div key={weapon.id} className="card-ornate p-4">

          {/* Header — tap for info */}
          <button
            className="w-full flex items-center justify-between mb-3 text-left hover:opacity-75 transition-opacity"
            onClick={() => onExplain({
              title: weapon.name,
              body: `To-Hit: +${weapon.toHit} (roll d20 + ${weapon.toHit})\nDamage: ${weapon.damageDice} + ${weapon.damageMod} ${weapon.damageType}${weapon.ragingDamageMod !== weapon.damageMod ? `\nRaging damage: ${weapon.damageDice} + ${weapon.ragingDamageMod}` : ""}\n\nProperties:\n${weapon.properties.map(p => `• ${p}`).join("\n")}`,
              tip: weapon.id === "scatterheart"
                ? "Scatterheart is MAGIC — it bypasses resistance to non-magical weapons. It also returns to your hand after being thrown!"
                : weapon.id === "handaxe"
                ? "Light weapons can be used in your off-hand for an extra Bonus Action attack!"
                : "The +1 means this is a magical weapon. It bypasses resistance to non-magical damage.",
            })}
          >
            <div className="flex items-center gap-2">
              <span className="font-dnd text-xl" style={{ color: "var(--gold)" }}>{weapon.emoji}</span>
              <div>
                <p className="font-dnd text-base" style={{ color: "var(--parchment)" }}>{weapon.name}</p>
                {weapon.count && <p className="font-body text-xs" style={{ color: "var(--parchment-dim)" }}>×{weapon.count}</p>}
              </div>
            </div>
            <span className="font-dnd text-[10px] tracking-widest" style={{ color: "var(--parchment-dim)" }}>ℹ info</span>
          </button>

          {/* Stat chips — what to roll */}
          <div className="flex flex-wrap gap-2">
            {/* Attack */}
            <button
              onClick={() => onExplain(EXPLANATIONS.attackRoll ?? { title: "Attack Roll", body: "Roll a d20 and add your to-hit bonus. If the result equals or beats the target's Armor Class, you hit!", tip: "Natural 20 = Critical Hit: roll damage dice twice!" })}
              className="flex-1 py-2.5 rounded-lg text-center transition-all hover:opacity-80"
              style={{ background: "rgba(26,45,92,0.08)", border: "1px solid rgba(26,45,92,0.25)" }}
            >
              <div className="font-dnd text-base font-black" style={{ color: "var(--blue-bright)" }}>d20 +{weapon.toHit}</div>
              <div className="font-dnd text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--parchment-dim)" }}>Attack</div>
            </button>

            {/* Reckless */}
            <button
              onClick={() => onExplain(EXPLANATIONS.recklessAttack ?? { title: "Reckless Attack", body: "Roll two d20s and take the higher result. Enemies also get advantage against you until your next turn.", tip: "Almost always worth it as a Barbarian — you're tanky enough!" })}
              className="flex-1 py-2.5 rounded-lg text-center transition-all hover:opacity-80"
              style={{ background: "rgba(92,58,14,0.08)", border: "1px solid var(--border-gold)" }}
            >
              <div className="font-dnd text-base font-black" style={{ color: "var(--gold)" }}>2d20 best</div>
              <div className="font-dnd text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--parchment-dim)" }}>Reckless</div>
            </button>

            {/* Damage */}
            <button
              onClick={() => onExplain({ title: `${weapon.name} — Damage`, body: `Roll ${weapon.damageDice} and add ${state.isRaging ? weapon.ragingDamageMod : weapon.damageMod} (${state.isRaging ? "raging" : "STR mod"}).\n\nCritical Hit: roll ${weapon.damageDice} twice and add them together, then add the modifier.`, tip: `Damage type: ${weapon.damageType}` })}
              className="flex-1 py-2.5 rounded-lg text-center transition-all hover:opacity-80"
              style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.25)" }}
            >
              <div className="font-dnd text-base font-black" style={{ color: "var(--red-bright)" }}>
                {weapon.damageDice}+{state.isRaging ? weapon.ragingDamageMod : weapon.damageMod}
              </div>
              <div className="font-dnd text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--parchment-dim)" }}>
                {state.isRaging ? "Dmg (raging)" : "Damage"}
              </div>
            </button>

            {/* Versatile */}
            {weapon.versatileDice && (
              <button
                onClick={() => onExplain({ title: `${weapon.name} — Two-Handed`, body: `Grip with both hands: roll ${weapon.versatileDice} + ${state.isRaging ? weapon.ragingDamageMod : weapon.damageMod} instead.`, tip: "Versatile weapons deal more damage when held in two hands." })}
                className="flex-1 py-2.5 rounded-lg text-center transition-all hover:opacity-80"
                style={{ background: "rgba(61,26,92,0.08)", border: "1px solid rgba(61,26,92,0.25)" }}
              >
                <div className="font-dnd text-base font-black" style={{ color: "var(--purple-bright)" }}>
                  {weapon.versatileDice}+{state.isRaging ? weapon.ragingDamageMod : weapon.damageMod}
                </div>
                <div className="font-dnd text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--parchment-dim)" }}>2-Hand</div>
              </button>
            )}

            {/* Thrown */}
            {weapon.thrownDice && (
              <button
                onClick={() => onExplain({ title: `${weapon.name} — Thrown`, body: `Throw up to 20 ft (60 ft max): roll ${weapon.thrownDice} + ${state.isRaging ? weapon.ragingDamageMod : weapon.damageMod}.\n\nScatterheart returns to your hand after being thrown!`, tip: "Thrown attacks still use STR for to-hit and damage." })}
                className="flex-1 py-2.5 rounded-lg text-center transition-all hover:opacity-80"
                style={{ background: "rgba(26,107,88,0.08)", border: "1px solid rgba(26,107,88,0.25)" }}
              >
                <div className="font-dnd text-base font-black" style={{ color: "var(--teal-bright)" }}>
                  {weapon.thrownDice}+{state.isRaging ? weapon.ragingDamageMod : weapon.damageMod}
                </div>
                <div className="font-dnd text-[9px] tracking-widest uppercase mt-0.5" style={{ color: "var(--parchment-dim)" }}>Throw</div>
              </button>
            )}
          </div>

          {/* Property tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {weapon.properties.map((p) => (
              <span key={p} className="font-dnd text-[9px] px-2 py-0.5 rounded-full tracking-wide"
                style={{ background: "rgba(92,58,14,0.08)", border: "1px solid var(--border-gold)", color: "var(--parchment-dim)" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Bonus Actions */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Bonus Actions</div>
        <button
          onClick={() => onExplain(EXPLANATIONS.bonusAction)}
          className="w-full flex items-center justify-between p-3 rounded-xl transition-all hover:opacity-80"
          style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}
        >
          <div className="text-left">
            <p className="font-dnd text-sm" style={{ color: "var(--red-bright)" }}>⚔ Rage</p>
            <p className="font-body text-xs mt-0.5" style={{ color: "var(--parchment-dim)" }}>Activate/end rage · {3 - state.rageUsed} uses left</p>
          </div>
          <span className="font-dnd text-xs" style={{ color: "var(--parchment-dim)" }}>ℹ</span>
        </button>
      </div>

      {/* Reactions */}
      <div className="card-ornate p-4">
        <div className="divider-dnd mb-3">Reactions</div>
        <button
          onClick={() => onExplain(EXPLANATIONS["danger-sense"])}
          className="w-full flex items-center justify-between p-3 rounded-xl transition-all hover:opacity-80 mb-2"
          style={{ background: "rgba(26,107,88,0.08)", border: "1px solid rgba(26,107,88,0.3)" }}
        >
          <div className="text-left">
            <p className="font-dnd text-sm" style={{ color: "var(--teal-bright)" }}>✦ Danger Sense</p>
            <p className="font-body text-xs mt-0.5" style={{ color: "var(--parchment-dim)" }}>Adv on DEX saves vs visible effects</p>
          </div>
          <span className="font-dnd text-xs" style={{ color: "var(--parchment-dim)" }}>ℹ</span>
        </button>
        <button
          onClick={() => onExplain(EXPLANATIONS.reaction)}
          className="w-full flex items-center justify-between p-3 rounded-xl transition-all hover:opacity-80"
          style={{ background: "rgba(92,58,14,0.08)", border: "1px solid var(--border-gold)" }}
        >
          <div className="text-left">
            <p className="font-dnd text-sm" style={{ color: "var(--parchment)" }}>⚔ Opportunity Attack</p>
            <p className="font-body text-xs mt-0.5" style={{ color: "var(--parchment-dim)" }}>Free attack when enemy moves away</p>
          </div>
          <span className="font-dnd text-xs" style={{ color: "var(--parchment-dim)" }}>ℹ</span>
        </button>
      </div>

      {/* Death saves — only when at 0 HP */}
      {state.hp === 0 && (
        <div className="card-ornate p-4" style={{ borderColor: "var(--red-bright)" }}>
          <div className="flex items-center justify-between mb-3">
            <p className="font-dnd text-sm tracking-widest uppercase" style={{ color: "var(--red-bright)" }}>✕ Death Saving Throws</p>
            <button onClick={() => onExplain(EXPLANATIONS.deathSaves)} className="font-dnd text-xs transition-opacity hover:opacity-60" style={{ color: "var(--parchment-dim)" }}>ℹ</button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-dnd text-xs w-16" style={{ color: "var(--teal-bright)" }}>Success</span>
              {[0, 1, 2].map((i) => (
                <button key={i} onClick={() => toggleDeathSave("success")}
                  className="w-8 h-8 rounded-full border-2 transition-all"
                  style={i < state.deathSuccesses
                    ? { background: "rgba(26,107,88,0.4)", borderColor: "var(--teal-bright)" }
                    : { background: "rgba(0,0,0,0.06)", borderColor: "rgba(0,0,0,0.2)" }} />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="font-dnd text-xs w-16" style={{ color: "var(--red-bright)" }}>Failure</span>
              {[0, 1, 2].map((i) => (
                <button key={i} onClick={() => toggleDeathSave("failure")}
                  className="w-8 h-8 rounded-full border-2 transition-all"
                  style={i < state.deathFailures
                    ? { background: "rgba(139,26,26,0.4)", borderColor: "var(--red-bright)" }
                    : { background: "rgba(0,0,0,0.06)", borderColor: "rgba(0,0,0,0.2)" }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
