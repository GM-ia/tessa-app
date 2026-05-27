"use client";

import { useState, useEffect } from "react";
import { CharacterState, Explanation } from "@/types";
import TabBar from "@/components/TabBar";
import InfoModal from "@/components/InfoModal";
import HomeTab from "@/components/tabs/HomeTab";
import ActionsTab from "@/components/tabs/ActionsTab";
import SkillsTab from "@/components/tabs/SkillsTab";
import FeaturesTab from "@/components/tabs/FeaturesTab";
import InventoryTab from "@/components/tabs/InventoryTab";
import HandbookTab from "@/components/tabs/HandbookTab";
import InfoTab from "@/components/tabs/InfoTab";

const INITIAL_STATE: CharacterState = {
  hp: 51,
  rageUsed: 0,
  isRaging: false,
  hitDiceUsed: 0,
  deathSuccesses: 0,
  deathFailures: 0,
  gold: 15,
  lastRoll: null,
};

const TAB_TITLES: Record<string, string> = {
  home: "Tessa Arraggiata",
  actions: "Actions",
  skills: "Skills",
  features: "Features & Traits",
  inventory: "Inventory",
  handbook: "Personal Handbook",
  info: "Character Info",
};

export default function App() {
  const [tab, setTab] = useState("home");
  const [charState, setCharState] = useState<CharacterState>(INITIAL_STATE);
  const [explanation, setExplanation] = useState<Explanation | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tessa-state");
      if (saved) setCharState(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("tessa-state", JSON.stringify(charState));
    } catch {}
  }, [charState]);

  const sharedProps = {
    state: charState,
    setState: setCharState,
    onExplain: setExplanation,
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-deep)" }}>
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <header
          className="sticky top-0 z-30 px-4 py-3 flex items-center justify-between backdrop-blur"
          style={{
            background: "rgba(237,229,207,0.97)",
            borderBottom: "1px solid var(--border-gold)",
          }}
        >
          <h1 className="font-dnd text-sm tracking-widest uppercase" style={{ color: "var(--gold)" }}>
            {TAB_TITLES[tab]}
          </h1>
          <div className="flex items-center gap-3">
            {charState.isRaging && (
              <span className="font-dnd text-xs tracking-widest uppercase animate-pulse" style={{ color: "var(--red-bright)" }}>
                ✦ Raging ✦
              </span>
            )}
            <span className="font-dnd text-xs" style={{ color: "var(--parchment-dim)" }}>
              ♥ {charState.hp}/51
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-24">
          {tab === "home"      && <HomeTab {...sharedProps} />}
          {tab === "actions"   && <ActionsTab {...sharedProps} />}
          {tab === "skills"    && <SkillsTab onExplain={setExplanation} />}
          {tab === "features"  && <FeaturesTab onExplain={setExplanation} />}
          {tab === "inventory" && <InventoryTab {...sharedProps} />}
          {tab === "handbook"  && <HandbookTab onExplain={setExplanation} />}
          {tab === "info"      && <InfoTab onExplain={setExplanation} />}
        </div>

        <TabBar active={tab} onChange={setTab} />
      </div>

      <InfoModal explanation={explanation} onClose={() => setExplanation(null)} />
    </main>
  );
}
