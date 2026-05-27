"use client";

import { useEffect, useState } from "react";

interface RollResult {
  label: string;
  rolls: number[];
  bonus: number;
  total: number;
  breakdown: string;
  isReckless?: boolean;
  isCrit?: boolean;
}

interface Props {
  result: RollResult | null;
  onClose: () => void;
}

export default function RollModal({ result, onClose }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (result) {
      setShow(false);
      const t = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(t);
    }
  }, [result]);

  useEffect(() => {
    if (!result) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [result, onClose]);

  if (!result) return null;

  const isCrit = result.isCrit;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className={`card-ornate w-full max-w-sm shadow-2xl transition-all duration-300 ${
          show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        } ${isCrit ? "rage-active" : ""}`}
        style={{
          borderColor: isCrit ? "var(--border-gold-bright)" : "var(--border-gold)",
          boxShadow: isCrit ? "0 0 28px rgba(92,58,14,0.2), 0 4px 16px rgba(0,0,0,0.2)" : undefined,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 text-center">
          {isCrit && (
            <div className="crit-text font-dnd text-xs tracking-[0.3em] mb-3 uppercase">
              ✦ Critical Hit ✦
            </div>
          )}

          <p className="font-dnd text-xs tracking-widest uppercase mb-3" style={{ color: "var(--parchment-dim)" }}>
            {result.label}
          </p>

          <div
            className={`font-dnd text-8xl font-black mb-3 leading-none ${isCrit ? "crit-text" : ""}`}
            style={isCrit ? {} : { color: "var(--parchment)" }}
          >
            {result.total}
          </div>

          <div className="font-body text-xs mb-1" style={{ color: "var(--parchment-dim)" }}>
            {result.breakdown}
          </div>

          {result.isReckless && (
            <p className="font-body text-xs mt-1" style={{ color: "var(--gold)" }}>
              Reckless: rolled {result.rolls.join(" & ")} → took {Math.max(...result.rolls)}
            </p>
          )}

          <button
            onClick={onClose}
            className="mt-5 w-full py-2.5 font-dnd text-xs tracking-widest uppercase rounded-lg transition-all hover:opacity-80"
            style={{
              background: "rgba(92,58,14,0.1)",
              border: "1px solid var(--border-gold)",
              color: "var(--parchment-dim)",
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
