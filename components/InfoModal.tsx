"use client";

import { useEffect } from "react";
import { Explanation } from "@/types";

interface Props {
  explanation: Explanation | null;
  onClose: () => void;
}

export default function InfoModal({ explanation, onClose }: Props) {
  useEffect(() => {
    if (!explanation) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [explanation, onClose]);

  if (!explanation) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="card-ornate w-full max-w-md max-h-[80vh] overflow-y-auto shadow-2xl"
        style={{ borderColor: "var(--border-gold-bright)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5">
          <div className="flex items-start justify-between mb-4">
            <h2 className="font-dnd text-lg leading-tight pr-4" style={{ color: "var(--gold)" }}>
              {explanation.title}
            </h2>
            <button
              onClick={onClose}
              className="text-2xl leading-none flex-shrink-0 -mt-1 transition-colors"
              style={{ color: "var(--parchment-dim)" }}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div
            className="text-sm leading-relaxed whitespace-pre-line font-body"
            style={{ color: "var(--parchment)" }}
          >
            {explanation.body}
          </div>

          {explanation.tip && (
            <div
              className="mt-4 p-3 rounded-xl"
              style={{
                background: "rgba(212,168,67,0.08)",
                border: "1px solid rgba(201,168,76,0.35)",
              }}
            >
              <p className="font-dnd text-[10px] tracking-widest mb-1" style={{ color: "var(--gold)" }}>
                ✦ ADVENTURER&apos;S TIP
              </p>
              <p className="text-sm font-body" style={{ color: "var(--gold-light)" }}>
                {explanation.tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
