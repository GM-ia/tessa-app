export interface CharacterState {
  hp: number;
  rageUsed: number;
  isRaging: boolean;
  hitDiceUsed: number;
  deathSuccesses: number;
  deathFailures: number;
  gold: number;
  lastRoll: { value: number; label: string; breakdown?: string } | null;
}

export interface Explanation {
  title: string;
  body: string;
  tip?: string;
}
