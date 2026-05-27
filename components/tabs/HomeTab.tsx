"use client";

import { CharacterState } from "@/types";
import { CHARACTER, ABILITY_SCORES, EXPLANATIONS } from "@/constants/character";
import { Explanation } from "@/types";
import { ShieldIcon, HeartIcon, FireIcon, WolfIcon } from "@/components/Icons";

interface Props {
  state: CharacterState;
  setState: (s: CharacterState) => void;
  onExplain: (e: Explanation) => void;
}

function mod(n: number) {
  return n >= 0 ? `+${n}` : `${n}`;
}

export default function HomeTab({ state, setState, onExplain }: Props) {
  const hpPct = Math.max(0, Math.min(100, (state.hp / CHARACTER.hpMax) * 100));
  const hpColor = hpPct > 50 ? "#0d9375" : hpPct > 25 ? "#b07820" : "#9c2b1b";

  function changeHp(delta: number) {
    setState({ ...state, hp: Math.max(0, Math.min(CHARACTER.hpMax, state.hp + delta)) });
  }
  function toggleRage() {
    if (!state.isRaging && state.rageUsed >= 3) return;
    if (!state.isRaging) setState({ ...state, isRaging: true, rageUsed: state.rageUsed + 1 });
    else setState({ ...state, isRaging: false });
  }
  function restoreRage(i: number) {
    if (state.rageUsed > i)
      setState({ ...state, rageUsed: i, isRaging: state.isRaging && i < 3 ? false : state.isRaging });
  }
  function longRest() {
    setState({ ...state, hp: CHARACTER.hpMax, rageUsed: 0, isRaging: false, hitDiceUsed: 0, deathSuccesses: 0, deathFailures: 0 });
  }
  function shortRest() {
    const dice = Math.min(3, CHARACTER.level - state.hitDiceUsed);
    if (dice <= 0) { alert("No hit dice remaining!"); return; }
    let total = 0;
    for (let i = 0; i < dice; i++) total += Math.floor(Math.random() * 12) + 1;
    total += 4 * dice;
    const newHp = Math.min(CHARACTER.hpMax, state.hp + total);
    setState({ ...state, hp: newHp, hitDiceUsed: state.hitDiceUsed + dice });
    alert(`Short rest: rolled ${total - 4 * dice} +${4 * dice} CON = +${newHp - state.hp} HP → ${newHp}/${CHARACTER.hpMax}`);
  }

  return (
    <div className="space-y-3 pb-2">

      {/* ── CHARACTER PORTRAIT HEADER ─────────────────────── */}
      <div className="card-ornate p-4 flex items-center gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full flex items-center justify-center"
               style={{ background: "linear-gradient(135deg, var(--bg-deep), var(--bg-card))", border: "2px solid var(--border-gold)" }}>
            <WolfIcon className="w-10 h-10" style={{ color: "var(--gold)" } as React.CSSProperties} />
          </div>
          {/* Level badge */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center font-dnd text-[10px] font-black"
               style={{ background: "var(--gold)", color: "var(--bg-card-alt)" }}>
            {CHARACTER.level}
          </div>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <h1 className="font-dnd-deco text-xl leading-tight" style={{ color: "var(--gold)" }}>
            {CHARACTER.name}
          </h1>
          <p className="font-body text-sm mt-0.5" style={{ color: "var(--parchment-dim)" }}>
            {CHARACTER.race} · {CHARACTER.class}
          </p>
          <p className="font-dnd text-[10px] tracking-wide mt-0.5" style={{ color: "var(--purple-bright)" }}>
            {CHARACTER.subclass}
          </p>
        </div>
        {/* Rage indicator */}
        {state.isRaging && (
          <div className="flex-shrink-0">
            <FireIcon className="w-8 h-8 animate-pulse" style={{ color: "var(--red-bright)" } as React.CSSProperties} />
          </div>
        )}
      </div>

      {/* ── HP ─────────────────────────────────────────────── */}
      <div className="card-ornate p-4">
        <div className="flex items-center gap-2 mb-1">
          <HeartIcon className="w-4 h-4 flex-shrink-0" style={{ color: "var(--red-bright)" } as React.CSSProperties} />
          <button onClick={() => onExplain(EXPLANATIONS.hp)}
                  className="font-dnd text-[10px] tracking-widest uppercase hover:opacity-70"
                  style={{ color: "var(--parchment-dim)" }}>
            Hit Points
          </button>
          <div className="flex-1 text-right leading-none">
            <span className="font-dnd font-black" style={{ fontSize: 48, color: "var(--parchment)", lineHeight: 1 }}>
              {state.hp}
            </span>
            <span className="font-dnd text-xl" style={{ color: "var(--parchment-dim)" }}> / {CHARACTER.hpMax}</span>
          </div>
        </div>

        <div className="w-full rounded-full h-2 mb-4 overflow-hidden" style={{ background: "rgba(0,0,0,0.1)" }}>
          <div className="h-full rounded-full transition-all duration-500"
               style={{ width: `${hpPct}%`, background: hpColor }} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="font-dnd text-[9px] tracking-widest uppercase text-center mb-1.5" style={{ color: "#0d9375" }}>
              ▲ Heal
            </p>
            <div className="grid grid-cols-4 gap-1">
              {[1, 5, 10, 20].map(n => (
                <button key={n} onClick={() => changeHp(n)}
                        className="py-2 rounded-lg font-dnd text-xs font-bold transition-all hover:opacity-80"
                        style={{ background: "rgba(13,147,117,0.1)", border: "1px solid rgba(13,147,117,0.35)", color: "#0d9375" }}>
                  +{n}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-dnd text-[9px] tracking-widest uppercase text-center mb-1.5" style={{ color: "var(--red-bright)" }}>
              ▼ Damage
            </p>
            <div className="grid grid-cols-4 gap-1">
              {[1, 5, 10, 20].map(n => (
                <button key={n} onClick={() => changeHp(-n)}
                        className="py-2 rounded-lg font-dnd text-xs font-bold transition-all hover:opacity-80"
                        style={{ background: "rgba(156,43,27,0.1)", border: "1px solid rgba(156,43,27,0.35)", color: "var(--red-bright)" }}>
                  -{n}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── COMBAT STATS ───────────────────────────────────── */}
      <div className="grid grid-cols-4 gap-2 items-start">
        {/* AC — shield shape */}
        <button onClick={() => onExplain(EXPLANATIONS["AC" as keyof typeof EXPLANATIONS])}
                className="flex flex-col items-center hover:opacity-80 transition-opacity">
          <ShieldIcon value={CHARACTER.ac} className="w-full max-w-[72px]" />
          <span className="font-dnd text-[8px] tracking-widest uppercase mt-0.5" style={{ color: "var(--parchment-dim)" }}>
            Armor Class
          </span>
        </button>

        {/* Initiative */}
        <button onClick={() => onExplain(EXPLANATIONS.initiative)}
                className="card-ornate py-3 px-1 text-center hover:opacity-80 transition-opacity">
          <div className="font-dnd text-2xl font-black leading-none" style={{ color: "var(--gold)" }}>
            {mod(CHARACTER.initiative)}
          </div>
          <div className="font-dnd text-[8px] tracking-wide uppercase mt-1" style={{ color: "var(--parchment-dim)" }}>
            Initiative
          </div>
        </button>

        {/* Speed */}
        <button onClick={() => onExplain(EXPLANATIONS.speed)}
                className="card-ornate py-3 px-1 text-center hover:opacity-80 transition-opacity">
          <div className="font-dnd text-2xl font-black leading-none" style={{ color: "var(--gold)" }}>
            {CHARACTER.speed}
          </div>
          <div className="font-dnd text-[8px] tracking-wide uppercase mt-1" style={{ color: "var(--parchment-dim)" }}>
            Speed ft.
          </div>
        </button>

        {/* Proficiency */}
        <button onClick={() => onExplain(EXPLANATIONS.proficiencyBonus)}
                className="card-ornate py-3 px-1 text-center hover:opacity-80 transition-opacity">
          <div className="font-dnd text-2xl font-black leading-none" style={{ color: "var(--gold)" }}>
            {mod(CHARACTER.proficiencyBonus)}
          </div>
          <div className="font-dnd text-[8px] tracking-wide uppercase mt-1" style={{ color: "var(--parchment-dim)" }}>
            Prof Bonus
          </div>
        </button>
      </div>

      {/* ── ABILITY SCORES ─────────────────────────────────── */}
      <div className="card-ornate p-3">
        <div className="divider-dnd mb-3">Ability Scores</div>
        <div className="grid grid-cols-3 gap-2">
          {ABILITY_SCORES.map(a => (
            <button key={a.short}
                    onClick={() => onExplain(EXPLANATIONS[a.short as keyof typeof EXPLANATIONS])}
                    className="stat-badge py-3 hover:opacity-80 transition-opacity">
              <div className="font-dnd font-black leading-none" style={{ fontSize: 36, color: "var(--gold)" }}>
                {mod(a.mod)}
              </div>
              <div className="font-dnd text-xl font-bold mt-1" style={{ color: "var(--parchment)" }}>{a.score}</div>
              <div className="font-dnd text-[10px] tracking-widest mt-0.5 uppercase" style={{ color: "var(--parchment-dim)" }}>
                {a.short}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── RAGE ───────────────────────────────────────────── */}
      <div className="card-ornate p-4">
        <div className="flex items-center gap-3 mb-3">
          <FireIcon className="w-5 h-5 flex-shrink-0" style={{ color: "var(--red-bright)" } as React.CSSProperties} />
          <button onClick={() => onExplain(EXPLANATIONS.rage)}
                  className="font-dnd text-[10px] tracking-widest uppercase hover:opacity-70 flex-shrink-0"
                  style={{ color: "var(--parchment-dim)" }}>
            Rage
          </button>
          <div className="flex gap-2 flex-1 justify-center">
            {[0, 1, 2].map(i => (
              <button key={i}
                      onClick={() => i < state.rageUsed ? restoreRage(i) : toggleRage()}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${state.isRaging && i === state.rageUsed - 1 ? "scale-110" : ""}`}
                      style={{
                        border: i < state.rageUsed ? "2px solid rgba(156,43,27,0.3)" : state.isRaging && i === state.rageUsed - 1 ? "2px solid var(--red-bright)" : "2px solid var(--border-gold)",
                        background: i < state.rageUsed ? "rgba(156,43,27,0.08)" : state.isRaging && i === state.rageUsed - 1 ? "rgba(156,43,27,0.25)" : "rgba(92,58,14,0.05)",
                        boxShadow: state.isRaging && i === state.rageUsed - 1 ? "0 0 12px rgba(156,43,27,0.4)" : undefined,
                        opacity: i < state.rageUsed ? 0.5 : 1,
                      }}>
                {i < state.rageUsed
                  ? <span className="font-dnd text-xs" style={{ color: "rgba(156,43,27,0.4)" }}>✕</span>
                  : <FireIcon className="w-5 h-5" style={{ color: "var(--red-bright)" } as React.CSSProperties} />}
              </button>
            ))}
          </div>
          <span className="font-dnd text-xs flex-shrink-0" style={{ color: "var(--parchment-dim)" }}>
            {3 - state.rageUsed}/3
          </span>
        </div>

        <button onClick={toggleRage}
                disabled={!state.isRaging && state.rageUsed >= 3}
                className="w-full py-2.5 rounded-lg font-dnd text-xs tracking-widest uppercase transition-all"
                style={
                  state.isRaging
                    ? { background: "rgba(156,43,27,0.45)", border: "1px solid var(--red-bright)", color: "var(--bg-card-alt)" }
                    : state.rageUsed >= 3
                    ? { background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.12)", color: "rgba(0,0,0,0.2)", cursor: "not-allowed" }
                    : { background: "rgba(156,43,27,0.08)", border: "1px solid rgba(156,43,27,0.35)", color: "var(--red-bright)" }
                }>
          {state.isRaging ? "End Rage (Bonus Action)" : state.rageUsed >= 3 ? "Rage Exhausted" : "Rage (Bonus Action)"}
        </button>
      </div>

      {/* ── HIT DICE + REST ────────────────────────────────── */}
      <div className="card-ornate p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="font-dnd text-[10px] tracking-widest uppercase" style={{ color: "var(--parchment-dim)" }}>
            Hit Dice — {CHARACTER.hitDice}
          </span>
          <span className="font-dnd text-xs" style={{ color: "var(--parchment-dim)" }}>
            {CHARACTER.level - state.hitDiceUsed} / {CHARACTER.level}
          </span>
        </div>
        <div className="flex gap-1.5 flex-wrap mb-3">
          {Array.from({ length: CHARACTER.level }).map((_, i) => (
            <div key={i} className="w-9 h-9 rounded-lg flex items-center justify-center font-dnd text-[10px]"
                 style={i < state.hitDiceUsed
                   ? { background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.12)", color: "rgba(0,0,0,0.2)" }
                   : { background: "rgba(13,102,87,0.1)", border: "1px solid rgba(13,102,87,0.35)", color: "#0d6657" }}>
              {i < state.hitDiceUsed ? "✕" : "d12"}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={shortRest}
                  className="py-2.5 rounded-lg font-dnd text-xs tracking-widest uppercase transition-all hover:opacity-80"
                  style={{ background: "rgba(13,102,87,0.08)", border: "1px solid rgba(13,102,87,0.3)", color: "#0d6657" }}
                  onContextMenu={e => { e.preventDefault(); onExplain(EXPLANATIONS.shortRest); }}>
            ☽ Short Rest
          </button>
          <button onClick={longRest}
                  className="py-2.5 rounded-lg font-dnd text-xs tracking-widest uppercase transition-all hover:opacity-80"
                  style={{ background: "rgba(26,45,92,0.08)", border: "1px solid rgba(26,45,92,0.28)", color: "var(--blue-bright)" }}
                  onContextMenu={e => { e.preventDefault(); onExplain(EXPLANATIONS.longRest); }}>
            ☀ Long Rest
          </button>
        </div>
      </div>
      <p className="font-body text-[10px] text-center" style={{ color: "var(--parchment-dim)" }}>
        Hold rest buttons for explanations
      </p>
    </div>
  );
}
