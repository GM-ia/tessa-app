"use client";

import { useState, useMemo } from "react";
import { Explanation } from "@/types";
import { HANDBOOK_ENTRIES } from "@/constants/character";

interface Props {
  onExplain: (e: Explanation) => void;
}

const CATEGORIES = ["All", ...Array.from(new Set(HANDBOOK_ENTRIES.map((e) => e.category)))];

export default function HandbookTab({ onExplain }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return HANDBOOK_ENTRIES.filter((entry) => {
      const matchCat = category === "All" || entry.category === category;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        entry.title.toLowerCase().includes(q) ||
        entry.summary.toLowerCase().includes(q) ||
        entry.content.toLowerCase().includes(q) ||
        entry.tags.some((t) => t.includes(q))
      );
    });
  }, [query, category]);

  void onExplain;

  return (
    <div className="space-y-3 pb-2">
      {/* Header */}
      <div className="card-ornate p-4" style={{ background: "linear-gradient(135deg, rgba(92,58,14,0.08), var(--bg-card))" }}>
        <h2 className="font-dnd-deco text-lg" style={{ color: "var(--gold)" }}>Personal Handbook</h2>
        <p className="font-body text-xs mt-1" style={{ color: "var(--parchment-dim)" }}>
          Your beginner&apos;s guide to D&amp;D. Search any rule, term, or mechanic.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-dnd text-sm" style={{ color: "var(--parchment-dim)" }}>✦</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search rules, terms, tactics..."
          className="w-full rounded-xl pl-9 pr-10 py-3 font-body text-sm outline-none transition-all"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-gold)",
            color: "var(--parchment)",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 font-dnd text-lg transition-opacity hover:opacity-60"
            style={{ color: "var(--parchment-dim)" }}
          >
            ×
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="flex-none px-3 py-1.5 rounded-full font-dnd text-[10px] tracking-wide uppercase transition-all"
            style={category === cat
              ? { background: "var(--gold)", color: "var(--bg-card-alt)" }
              : { background: "rgba(92,58,14,0.08)", border: "1px solid var(--border-gold)", color: "var(--parchment-dim)" }}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="font-dnd text-[10px] tracking-widest px-1" style={{ color: "var(--parchment-dim)" }}>
        {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
        {query && ` for "${query}"`}
      </p>

      {filtered.length === 0 && (
        <div className="card-ornate p-8 text-center">
          <p className="font-dnd text-sm" style={{ color: "var(--parchment-dim)" }}>No results found.</p>
          <p className="font-body text-xs mt-1" style={{ color: "var(--parchment-dim)" }}>Try different keywords or browse all categories.</p>
        </div>
      )}

      {filtered.map((entry) => {
        const isOpen = expanded === entry.id;
        return (
          <div
            key={entry.id}
            className="rounded-xl overflow-hidden"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border-gold)" }}
          >
            <button
              onClick={() => setExpanded(isOpen ? null : entry.id)}
              className="w-full p-4 flex items-start gap-3 text-left transition-all hover:opacity-80"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="font-dnd text-sm" style={{ color: "var(--parchment)" }}>{entry.title}</span>
                  <span className="font-dnd text-[9px] px-2 py-0.5 rounded-full tracking-wide"
                    style={{ background: "rgba(92,58,14,0.1)", border: "1px solid var(--border-gold)", color: "var(--gold-dim)" }}>
                    {entry.category}
                  </span>
                </div>
                <p className="font-body text-xs leading-relaxed" style={{ color: "var(--parchment-dim)" }}>{entry.summary}</p>
              </div>
              <span className="font-dnd text-xs flex-shrink-0 mt-0.5" style={{ color: "var(--parchment-dim)" }}>
                {isOpen ? "▲" : "▼"}
              </span>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 space-y-3">
                <div className="rounded-xl p-3" style={{ background: "rgba(0,0,0,0.06)" }}>
                  <p className="font-body text-xs leading-relaxed whitespace-pre-line" style={{ color: "var(--parchment)" }}>
                    {entry.content}
                  </p>
                </div>

                {entry.tip && (
                  <div className="rounded-xl p-3" style={{ background: "rgba(92,58,14,0.06)", border: "1px solid rgba(92,58,14,0.25)" }}>
                    <p className="font-dnd text-[10px] tracking-widest mb-1" style={{ color: "var(--gold)" }}>✦ TIP</p>
                    <p className="font-body text-xs" style={{ color: "var(--gold-dim)" }}>{entry.tip}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setQuery(tag);
                        setCategory("All");
                        setExpanded(null);
                      }}
                      className="font-dnd text-[9px] px-2 py-0.5 rounded-full tracking-wide transition-all hover:opacity-70"
                      style={{ background: "rgba(92,58,14,0.08)", border: "1px solid var(--border-dim)", color: "var(--parchment-dim)" }}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
