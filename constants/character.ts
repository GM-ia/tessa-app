import { Explanation } from "@/types";

export const CHARACTER = {
  name: "Tessa Arraggiata",
  race: "Human",
  class: "Barbarian",
  level: 5,
  subclass: "Path of the Totem Warrior (Wolf)",
  background: "Sage",
  alignment: "Chaotic Good",
  campaign: "Baldur's Gate",
  proficiencyBonus: 3,
  ac: 17,
  initiative: 3,
  speed: 40,
  hpMax: 51,
  hitDice: "5d12",
};

export const ABILITY_SCORES = [
  { name: "STR", short: "STR", score: 20, mod: 5 },
  { name: "DEX", short: "DEX", score: 17, mod: 3 },
  { name: "CON", short: "CON", score: 18, mod: 4 },
  { name: "INT", short: "INT", score: 16, mod: 3 },
  { name: "WIS", short: "WIS", score: 16, mod: 3 },
  { name: "CHA", short: "CHA", score: 15, mod: 2 },
];

export const SAVING_THROWS = [
  { name: "Strength", ability: "STR", bonus: 8, proficient: true },
  { name: "Dexterity", ability: "DEX", bonus: 3, proficient: false },
  { name: "Constitution", ability: "CON", bonus: 7, proficient: true },
  { name: "Intelligence", ability: "INT", bonus: 3, proficient: false },
  { name: "Wisdom", ability: "WIS", bonus: 3, proficient: false },
  { name: "Charisma", ability: "CHA", bonus: 2, proficient: false },
];

export const SKILLS = [
  { name: "Acrobatics", ability: "DEX", bonus: 3, proficient: false },
  { name: "Animal Handling", ability: "WIS", bonus: 3, proficient: false },
  { name: "Arcana", ability: "INT", bonus: 6, proficient: true },
  { name: "Athletics", ability: "STR", bonus: 8, proficient: true },
  { name: "Deception", ability: "CHA", bonus: 2, proficient: false },
  { name: "History", ability: "INT", bonus: 6, proficient: true },
  { name: "Insight", ability: "WIS", bonus: 3, proficient: false },
  { name: "Intimidation", ability: "CHA", bonus: 2, proficient: false },
  { name: "Investigation", ability: "INT", bonus: 3, proficient: false },
  { name: "Medicine", ability: "WIS", bonus: 3, proficient: false },
  { name: "Nature", ability: "WIS", bonus: 3, proficient: false },
  { name: "Perception", ability: "WIS", bonus: 6, proficient: true },
  { name: "Performance", ability: "CHA", bonus: 2, proficient: false },
  { name: "Persuasion", ability: "CHA", bonus: 2, proficient: false },
  { name: "Religion", ability: "INT", bonus: 3, proficient: false },
  { name: "Sleight of Hand", ability: "DEX", bonus: 3, proficient: false },
  { name: "Stealth", ability: "DEX", bonus: 3, proficient: false },
  { name: "Survival", ability: "WIS", bonus: 6, proficient: true },
];

export const WEAPONS = [
  {
    id: "greataxe",
    name: "Greataxe +1",
    toHit: 9,
    damageDice: "1d12",
    damageMod: 6,
    ragingDamageMod: 8,
    damageType: "slashing",
    properties: ["Heavy", "Two-Handed", "Melee", "5 ft range"],
    emoji: "⚔️",
  },
  {
    id: "scatterheart",
    name: "Scatterheart +1",
    toHit: 9,
    damageDice: "1d8",
    damageMod: 6,
    ragingDamageMod: 8,
    damageType: "bludgeoning",
    properties: ["Magic", "Versatile", "Thrown 20/60 ft", "Returns to hand"],
    emoji: "🔨",
    versatileDice: "1d10",
    thrownDice: "2d8",
  },
  {
    id: "handaxe",
    name: "Handaxe",
    toHit: 8,
    damageDice: "1d6",
    damageMod: 5,
    ragingDamageMod: 7,
    damageType: "slashing",
    properties: ["Light", "Thrown 20/60 ft"],
    emoji: "🪓",
    count: 4,
  },
];

export const FEATURES = [
  {
    id: "rage",
    name: "Rage",
    level: 1,
    type: "Bonus Action",
    active: true,
    color: "red",
    description:
      "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.",
    rules: `While raging, you gain the following benefits if you aren't wearing heavy armor:

• You have advantage on Strength checks and Strength saving throws.
• When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian (+2 at level 5).
• You have resistance to bludgeoning, piercing, and slashing damage.

If you are able to cast spells, you can't cast them or concentrate on them while raging.

Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.

Once you have raged 3 times (your maximum at level 5), you must finish a long rest before you can rage again.

— Player's Handbook, p.48`,
  },
  {
    id: "unarmored-defense",
    name: "Unarmored Defense",
    level: 1,
    type: "Passive",
    active: true,
    color: "teal",
    description: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier.",
    rules: `While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.

Tessa's AC: 10 + DEX (3) + CON (4) = 17

This is actually better than medium armor for Tessa — and she can still carry a shield to push it higher if needed.

— Player's Handbook, p.48`,
  },
  {
    id: "reckless-attack",
    name: "Reckless Attack",
    level: 2,
    type: "On Attack",
    active: true,
    color: "amber",
    description: "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation.",
    rules: `When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.

WHAT IS ADVANTAGE? Roll the d20 twice and take the higher result. This dramatically increases your chance to hit.

WHAT'S THE TRADE-OFF? Enemies also roll twice against you (disadvantage for them = advantage for attackers). While raging you have damage resistance, so taking extra hits is usually worth the trade.

— Player's Handbook, p.48`,
  },
  {
    id: "danger-sense",
    name: "Danger Sense",
    level: 2,
    type: "Passive",
    active: true,
    color: "teal",
    description: "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger.",
    rules: `You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.

IN PRACTICE: When a wizard throws a fireball or a trap shoots poisoned darts, you roll your Dexterity saving throw twice and take the higher result. Much better chance of dodging or taking half damage.

— Player's Handbook, p.48`,
  },
  {
    id: "wolf-totem-spirit",
    name: "Wolf Totem Spirit",
    level: 3,
    type: "Rage (Passive)",
    active: true,
    color: "purple",
    description: "While you're raging, your friends have advantage on the attack rolls of their melee weapons against any creature within 5 feet of you that is hostile to you.",
    rules: `The spirit of the wolf makes you a leader of hunters.

While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you.

HOW TO USE IT:
1. Use your Bonus Action to Rage
2. Move adjacent to the biggest threat (within 5 feet)
3. Use Reckless Attack on your own attacks
4. ALL allies now attack that enemy with advantage — they roll twice and take the higher result

This is one of the strongest team-support features at this level. Tessa becomes the anchor of the entire combat.

— Player's Handbook, p.50`,
  },
  {
    id: "spirit-seeker",
    name: "Spirit Seeker",
    level: 3,
    type: "Ritual",
    active: true,
    color: "purple",
    description: "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts.",
    rules: `At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals, as described in chapter 10.

WHAT IS A RITUAL? A ritual takes 10 extra minutes to cast but costs no spell slots. You can only cast it as a ritual, not as a normal spell.

• Beast Sense: You touch a willing beast. For up to 1 hour you can use its senses — seeing through its eyes, hearing through its ears. Useful for scouting!
• Speak with Animals: For 10 minutes you can communicate with beasts. They understand you and can answer basic questions about what they've seen, heard, or smelled nearby.

— Player's Handbook, p.50`,
  },
  {
    id: "extra-attack",
    name: "Extra Attack",
    level: 5,
    type: "Attack Action",
    active: true,
    color: "amber",
    description: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
    rules: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.

WHAT THIS MEANS: Your full turn looks like this:
• Bonus Action: Rage (if not already raging)
• Action: Attack twice (declare Reckless Attack on your first attack)
• Movement: 40 feet, split before/between/after attacks as you choose

Combined with raging (+2 per hit), you're dealing massive damage while providing advantage to your whole party via Wolf Totem.

— Player's Handbook, p.48`,
  },
  {
    id: "fast-movement",
    name: "Fast Movement",
    level: 5,
    type: "Passive",
    active: true,
    color: "teal",
    description: "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
    rules: `Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.

Tessa's speed: 30 ft (base human) + 10 ft (Fast Movement) = 40 ft per turn.

HOW TO USE MOVEMENT: You can split your movement before and after your attacks on any turn. For example:
• Move 20 ft to reach an enemy → attack twice → move 20 ft away
• Or: Move 40 ft to chase a fleeing enemy → attack twice

40 feet is enough to cross most rooms and engage any enemy in a standard encounter.

— Player's Handbook, p.48`,
  },
  {
    id: "aspect-wolf",
    name: "Aspect of the Beast (Wolf)",
    level: 6,
    type: "Passive",
    active: false,
    color: "purple",
    description: "You gain the hunting sensibilities of the wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.",
    rules: `You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace (see chapter 8 for rules on travel pace).

Available at Level 6. (Coming soon)

— Player's Handbook, p.50`,
  },
  {
    id: "feral-instinct",
    name: "Feral Instinct",
    level: 7,
    type: "Passive",
    active: false,
    color: "amber",
    description: "By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
    rules: `By 7th level, your instincts are so honed that you have advantage on initiative rolls.

Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.

Available at Level 7. (Coming soon)

— Player's Handbook, p.48`,
  },
  {
    id: "brutal-critical",
    name: "Brutal Critical (1 die)",
    level: 9,
    type: "Passive",
    active: false,
    color: "red",
    description: "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
    rules: `Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.

This increases to two additional dice at 13th level and three additional dice at 17th level.

CRITICAL HIT WITH GREATAXE AT LEVEL 9: Roll 3d12 + STR modifier (instead of 2d12 + STR modifier). Brutal!

Available at Level 9. (Coming soon)

— Player's Handbook, p.48`,
  },
];

export const INVENTORY_ITEMS = [
  { name: "Greataxe +1", category: "weapon", weight: "7 lb" },
  { name: "Scatterheart +1 (Warhammer)", category: "weapon", weight: "2 lb" },
  { name: "Handaxe ×4", category: "weapon", weight: "2 lb each" },
  { name: "Explorer's Pack", category: "gear", weight: "59 lb" },
  { name: "Traveler's Clothes", category: "gear", weight: "4 lb" },
  { name: "Ink, Quill & Paper", category: "gear", weight: "—" },
  { name: "Letter from dead colleague", category: "misc", weight: "—" },
  { name: "Cult research notes", category: "misc", weight: "—" },
  { name: "Healer's Kit", category: "gear", weight: "3 lb" },
];

export const PASSIVE_SENSES = [
  { name: "Passive Perception", value: 16 },
  { name: "Passive Investigation", value: 13 },
  { name: "Passive Insight", value: 13 },
];

export const PROFICIENCIES = [
  "Light armor",
  "Medium armor",
  "Shields",
  "Simple weapons",
  "Martial weapons",
  "Barbarian tools",
];

export const LANGUAGES = ["Common", "Dwarvish"];

// Explanations for every major game concept shown in the app
export const EXPLANATIONS: Record<string, Explanation> = {
  // Ability scores
  STR: {
    title: "Strength (STR)",
    body: "Strength measures your physical power — how hard you hit, how much you can lift, and how far you can jump. Tessa has 20 STR (the maximum for most characters), making her one of the strongest possible fighters.",
    tip: "Your modifier (+5) is what you actually add to dice rolls. A 20 means +5.",
  },
  DEX: {
    title: "Dexterity (DEX)",
    body: "Dexterity measures your agility, reflexes, and balance. It affects your armor class (how hard you are to hit), initiative (who goes first in combat), and ranged attacks.",
    tip: "Higher DEX = better dodge, better initiative, better stealth.",
  },
  CON: {
    title: "Constitution (CON)",
    body: "Constitution measures your endurance and health. It affects your hit points (HP) and your ability to resist poisons, diseases, and exhaustion. As a Barbarian, Tessa also uses CON for her Unarmored Defense.",
    tip: "Each level, Tessa rolls 1d12 and adds her CON mod (+4) for HP.",
  },
  INT: {
    title: "Intelligence (INT)",
    body: "Intelligence measures mental acuity and memory. It's used for Arcana, History, and Investigation checks. As a Sage, Tessa is surprisingly book-smart for a Barbarian!",
    tip: "INT affects knowledge skills — useful for identifying spells, lore, and clues.",
  },
  WIS: {
    title: "Wisdom (WIS)",
    body: "Wisdom reflects awareness, intuition, and insight. It affects Perception (noticing things), Survival, and Insight checks.",
    tip: "Perception is one of the most-used skills in the game — WIS matters a lot.",
  },
  CHA: {
    title: "Charisma (CHA)",
    body: "Charisma measures force of personality, persuasiveness, and leadership. It affects Persuasion, Deception, and Intimidation checks.",
    tip: "Tessa can Intimidate effectively — she's a 6-foot Barbarian after all.",
  },

  // Combat stats
  AC: {
    title: "Armor Class (AC)",
    body: "Armor Class (AC) is how difficult you are to hit. When an enemy attacks you, they roll a d20 and add their attack bonus. If their total is equal to or higher than your AC, the attack hits.\n\nTessa's AC 17 means the enemy needs to roll a 17 or higher (after bonuses) to hit her.",
    tip: "Tessa doesn't wear armor — her AC comes from her Unarmored Defense feature: 10 + DEX + CON.",
  },
  initiative: {
    title: "Initiative",
    body: "At the start of combat, everyone rolls a d20 and adds their Initiative bonus. The results determine the order people act in — highest goes first.\n\nTessa's +3 Initiative means she rolls d20 and adds 3.",
    tip: "Going early in combat is a big advantage — you can rage and get into position before enemies act.",
  },
  speed: {
    title: "Speed",
    body: "Speed is how many feet you can move on your turn. You can split your movement before and after your attacks. For example, move 20 feet, attack, then move 20 more feet.\n\nTessa's 40 ft speed (30 ft base + 10 ft Fast Movement) makes her very mobile.",
    tip: "You don't have to use all your movement each turn. Saving some lets you react to what happens.",
  },
  hp: {
    title: "Hit Points (HP)",
    body: "Hit Points represent how much damage you can take before going down. When your HP reaches 0, you fall unconscious and must make Death Saving Throws.\n\nTessa has 58 max HP — very high for Level 5, thanks to her d12 Hit Dice and high CON.",
    tip: "Barbarians have the highest hit dice (d12) in the game, which is why they're so tough.",
  },
  proficiencyBonus: {
    title: "Proficiency Bonus",
    body: "The Proficiency Bonus is a number added to any roll you're 'proficient' at — like proficient skills, weapons, or saving throws. It increases as you level up.\n\nAt Level 5, Tessa's Proficiency Bonus is +3.",
    tip: "You add it to attack rolls with weapons you're proficient with, and to skills/saves you're proficient in.",
  },

  // Attacks
  toHit: {
    title: "To-Hit Roll",
    body: "When you attack, you roll a d20 and add your To-Hit bonus. If your total equals or exceeds the enemy's Armor Class (AC), the attack hits.\n\nFor example: Tessa rolls d20 + 9 with her Greataxe. If the enemy has AC 15, she needs a 6 or higher on the d20.",
    tip: "A natural 20 (rolling a 20 on the die) is always a Critical Hit — you roll damage dice twice!",
  },
  damage: {
    title: "Damage Roll",
    body: "When you hit with an attack, you roll damage dice plus your damage modifier. The result is subtracted from the enemy's HP.\n\nWhile raging, Tessa adds an extra +2 to all melee damage rolls.",
    tip: "Critical hits (natural 20) let you roll your damage dice twice, then add modifiers once.",
  },
  recklessAttack: {
    title: "Reckless Attack",
    body: "Reckless Attack lets you attack with advantage — rolling 2 dice and taking the higher result. This dramatically increases your chance to hit.\n\nThe downside: until your next turn, enemies also have advantage on attacks against YOU.",
    tip: "Worth it most of the time when you're raging — you already have resistance to damage, so taking a few extra hits is okay.",
  },

  // Saving throws
  savingThrow: {
    title: "Saving Throws",
    body: "A saving throw is a roll you make to resist or avoid a harmful effect — like dodging a fireball, resisting a poison, or breaking free from a charm spell.\n\nWhen the DM says 'make a Constitution saving throw', you roll d20 + your CON save bonus.",
    tip: "Tessa is proficient in STR and CON saves — these are the most common saves for a frontline fighter.",
  },

  // Skills
  Athletics: {
    title: "Athletics (STR)",
    body: "Athletics covers physical tasks: climbing, swimming, jumping, grappling, and shoving. As a proficient Barbarian with 20 STR, Tessa is one of the best grapplers possible.\n\nGrappling pins an enemy — they can't move until they break free.",
    tip: "Grapple + Reckless Attack combo: pin an enemy so allies can surround them, then rage and Reckless Attack!",
  },
  Arcana: {
    title: "Arcana (INT)",
    body: "Arcana lets you identify spells, magical items, and creatures connected to magic. Unusual for a Barbarian, but Tessa's Sage background means she's studied these things.",
    tip: "Use Arcana to identify what that glowing artifact does before you accidentally curse yourself.",
  },
  History: {
    title: "History (INT)",
    body: "History lets you recall lore about historical events, legendary people, ancient kingdoms, and past wars. Tessa's Sage background gives her a surprisingly deep knowledge base.",
    tip: "Your DM may give you useful clues or lore through History checks.",
  },
  Perception: {
    title: "Perception (WIS)",
    body: "Perception is the most-used skill in D&D. It lets you notice hidden enemies, find secret doors, spot ambushes, and detect lies through body language.\n\nTessa's +6 Perception and Passive Perception of 16 means she rarely gets surprised.",
    tip: "Passive Perception (16) is always active — even if you don't roll, the DM checks it against hidden threats.",
  },
  Survival: {
    title: "Survival (WIS)",
    body: "Survival covers tracking creatures through wilderness, finding food and water, predicting weather, and navigating. Tessa's Wolf Totem connection makes this thematically perfect.",
    tip: "Useful in outdoor adventures and for tracking fleeing enemies.",
  },
  Acrobatics: { title: "Acrobatics (DEX)", body: "Acrobatics covers tumbling, balancing, and staying on your feet. Useful for escaping grapples, moving through difficult terrain gracefully, or performing flips.", tip: "Can be used to escape a grapple (vs enemy's Athletics)." },
  "Animal Handling": { title: "Animal Handling (WIS)", body: "Animal Handling lets you calm animals, train them, or understand their behavior and intentions.", tip: "Tessa can also speak with animals using Spirit Seeker!" },
  Deception: { title: "Deception (CHA)", body: "Deception covers lying convincingly, creating disguises, and misleading people.", tip: "Not Tessa's strong suit — she tends to be more upfront." },
  Insight: { title: "Insight (WIS)", body: "Insight lets you detect when someone is lying or hiding something. You read body language and pick up on social cues.", tip: "Use this when you suspect an NPC is not telling the whole truth." },
  Intimidation: { title: "Intimidation (CHA)", body: "Intimidation lets you frighten or coerce others through threats, actions, or your presence. A large Barbarian covered in battle scars is naturally intimidating.", tip: "Works well after winning a fight — enemies may surrender or give information." },
  Investigation: { title: "Investigation (INT)", body: "Investigation is active searching and deductive reasoning — finding hidden compartments, figuring out how a trap works, piecing together clues.", tip: "Different from Perception: Perception notices things passively; Investigation is active searching." },
  Medicine: { title: "Medicine (WIS)", body: "Medicine lets you stabilize a dying creature, diagnose illness, or treat wounds in non-magical ways.", tip: "Stabilizing a dying ally at 0 HP requires a Medicine check (DC 10)." },
  Nature: { title: "Nature (WIS)", body: "Nature covers knowledge of plants, animals, weather, terrain, and the natural cycle.", tip: "Useful for identifying poisonous plants, understanding animal behavior, or predicting storms." },
  Performance: { title: "Performance (CHA)", body: "Performance covers acting, music, dance, and storytelling. Not Tessa's main skill, but everyone has a hidden talent!", tip: "Sometimes used for disguises or distractions." },
  Persuasion: { title: "Persuasion (CHA)", body: "Persuasion covers convincing people through honest arguments, charm, or good faith. Different from Deception — you're being genuine.", tip: "Works well when you're offering something fair or appealing to someone's interests." },
  Religion: { title: "Religion (INT)", body: "Religion covers knowledge of deities, holy rites, prayers, and religious organizations. As a Sage, Tessa has studied many faiths.", tip: "Useful for dealing with clerics, temples, divine artifacts, and undead." },
  "Sleight of Hand": { title: "Sleight of Hand (DEX)", body: "Sleight of Hand covers pickpocketing, planting items on people, and manual tricks.", tip: "Used sneakily — opponents make a Perception check to catch you." },
  Stealth: { title: "Stealth (DEX)", body: "Stealth lets you move and hide without being noticed. Barbarians in full battle mode aren't known for subtlety, but it's still useful.", tip: "You can't hide when enemies can clearly see you. Find cover first." },

  // Features — using official PHB wording
  rage: {
    title: "Rage (PHB p.48)",
    body: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\n\nWhile raging, you gain these benefits if you aren't wearing heavy armor:\n• Advantage on Strength checks and Strength saving throws\n• +2 bonus to damage rolls for melee weapon attacks using Strength\n• Resistance to bludgeoning, piercing, and slashing damage\n\nYou can't cast or concentrate on spells while raging. Your rage lasts 1 minute and ends early if you're knocked unconscious or end your turn without attacking a hostile creature or taking damage. You may also end it voluntarily as a bonus action.\n\nTessa can rage 3 times per long rest at Level 5.",
    tip: "Resistance to B/P/S damage means you take HALF damage from most physical attacks while raging. Always rage at the start of combat — even if you don't need the +2 damage, halving sword hits is huge.",
  },
  "unarmored-defense": {
    title: "Unarmored Defense (PHB p.48)",
    body: "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.\n\nTessa: 10 + DEX(3) + CON(4) = AC 17\n\nThis is better than most medium armor, and it means CON is doubly important for Tessa — it boosts both her HP and her AC.",
    tip: "This is why CON is Tessa's second-most important stat. Every +1 CON means +1 AC and +1 HP per level.",
  },
  "reckless-attack": {
    title: "Reckless Attack (PHB p.48)",
    body: "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation.\n\nWhen you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.\n\nADVANTAGE means you roll 2d20 and use the higher result — a major increase to your chance of hitting.\n\nTHE TRADE-OFF: Enemies attack you with advantage (also 2d20, higher result). But while raging, you resist most physical damage — so taking extra hits is manageable.",
    tip: "Raging + Reckless Attack is Tessa's bread and butter. You're harder to kill while raging, so the disadvantage is worth the advantage on your attacks.",
  },
  "danger-sense": {
    title: "Danger Sense (PHB p.48)",
    body: "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger.\n\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.\n\nDEXTERITY SAVING THROWS are most commonly used to dodge explosions (fireball), lightning bolts, and area effects. Rolling twice and taking the higher result makes these much less deadly.",
    tip: "This makes Tessa surprisingly resilient against spells and traps — even though she's a 'charge in' fighter, she can dodge explosions almost as well as a nimble rogue.",
  },
  "wolf-totem-spirit": {
    title: "Wolf Totem Spirit (PHB p.50)",
    body: "While you're raging, your friends have advantage on the attack rolls of their melee weapons against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.\n\nPRACTICAL EFFECT:\n1. You rage (bonus action)\n2. You move adjacent to an enemy (within 5 feet)\n3. You use Reckless Attack on your own swings\n4. Every ally now has advantage on melee attacks against that same enemy\n\nThis stacks — if multiple allies attack the same enemy, they all get advantage. Tessa doesn't need to do anything extra; just be raging and adjacent.",
    tip: "This is one of the best team features in the game at this level. Position Tessa next to the most dangerous enemy, rage, and your whole party becomes dramatically more effective.",
  },
  "spirit-seeker": {
    title: "Spirit Seeker (PHB p.50)",
    body: "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals.\n\nA RITUAL takes 10 extra minutes to cast but requires no spell slots.\n\n• Beast Sense: For up to 1 hour, you can use a willing beast's senses — seeing through its eyes, hearing through its ears\n• Speak with Animals: For 10 minutes, you can communicate with beasts. They can answer basic questions about what they've seen, heard, or smelled nearby",
    tip: "Scout ahead using a bird or rat before entering a dungeon — no resources spent, just 10 minutes. Also, animals near towns are often witnesses to events the party needs to know about.",
  },
  "extra-attack": {
    title: "Extra Attack",
    body: "At Level 5, Tessa attacks TWICE per Attack action. This doubles her damage output compared to lower-level fighters.\n\nCombined with raging (+2/attack), this is +4 extra damage per round just from rage.",
    tip: "Remember: Bonus Actions are separate from actions. Rage is a Bonus Action, attacks are your Action.",
  },
  "fast-movement": {
    title: "Fast Movement",
    body: "Tessa moves 40 feet per turn — 10 feet more than average. This lets her close gaps quickly, chase fleeing enemies, or reposition after attacking.\n\nYou can split your movement across your turn: move, attack, move again.",
    tip: "40 ft is enough to reach most enemies in a typical room, attack twice, and step away from danger.",
  },

  // Dice
  d4: { title: "d4 (Four-sided die)", body: "A four-sided pyramid die with values 1-4. Used for small damage rolls, like daggers, and some spell effects.", tip: "Rare in combat but common for things like healing potions (+2d4+2)." },
  d6: { title: "d6 (Six-sided die)", body: "The classic cube die, values 1-6. Used for many weapons, some barbarian features, and spell damage.", tip: "Handaxes deal 1d6 damage. Most common die in the game." },
  d8: { title: "d8 (Eight-sided die)", body: "An octahedron die, values 1-8. Used for Warhammers (like Scatterheart one-handed), some spells, and healing.", tip: "Scatterheart deals 1d8 one-handed, 1d10 two-handed." },
  d10: { title: "d10 (Ten-sided die)", body: "A ten-sided die, values 0-9 (0 = 10). Used for some weapons, some spells, and percentile rolls (with two d10s).", tip: "Scatterheart's versatile (two-handed) mode uses a d10." },
  d12: { title: "d12 (Twelve-sided die)", body: "A twelve-sided die, values 1-12. This is the Barbarian's Hit Die — used to roll HP each level up — and for the Greataxe damage roll.\n\nBarbarians use the highest Hit Die in the game, which is why they have so much HP!", tip: "Also used for Tessa's Hit Dice during short rests to recover HP." },
  d20: { title: "d20 (Twenty-sided die)", body: "The king of DnD dice! Used for EVERY attack roll, skill check, and saving throw. The most important die in the game.\n\n• Roll + modifier vs DC (Difficulty Class) for skill checks\n• Roll + attack bonus vs enemy AC for attacks\n• Natural 20 = Critical Hit (double damage dice)\n• Natural 1 = Critical Miss (always fails)", tip: "Natural 20 on an attack = roll your damage dice twice! It's the most exciting moment in DnD." },
  d100: { title: "d100 (Percentile dice)", body: "Represents a 1-100 chance. Usually rolled with two d10s (one for tens, one for units). Used for random tables, wild magic effects, and some rare checks.", tip: "Rarely needed at this level of play, but fun for random event tables!" },

  // Death saves
  deathSaves: {
    title: "Death Saving Throws",
    body: "When you drop to 0 HP, you fall unconscious and each turn you must roll a d20 (no bonuses):\n• 10 or higher = Success (need 3 to stabilize)\n• 9 or lower = Failure (3 failures = death)\n• Natural 20 = Immediate recovery to 1 HP!\n• Natural 1 = Counts as 2 failures\n\nIf an ally heals you (even 1 HP), you immediately wake up.",
    tip: "Allies can use their action to stabilize you with a Medicine check (DC 10) or the Spare the Dying cantrip.",
  },

  // General concepts
  longRest: {
    title: "Long Rest",
    body: "A long rest is 8 hours of sleep or light activity. It fully restores:\n• All HP\n• All Rage uses\n• All Hit Dice (half max, rounded down)\n• Most spell slots\n• Many class features\n\nAt the end of a long rest, Tessa is back to full fighting capacity.",
    tip: "Try to always rest at full HP — enemies may interrupt your rest!",
  },
  shortRest: {
    title: "Short Rest",
    body: "A short rest is 1 hour of downtime — eating, bandaging wounds, sharpening weapons. During a short rest, you can spend Hit Dice to recover HP:\n\n• Roll 1d12 (Tessa's Hit Die) per die spent\n• Add your CON modifier (+4) to each roll\n• Recover that many HP (up to your max)\n\nTessa has 5 Hit Dice total at Level 5.",
    tip: "Save your hit dice for when you're really low — don't waste them on minor scratches.",
  },
  advantage: {
    title: "Advantage",
    body: "When you have advantage on a roll, you roll the d20 TWICE and use the higher number. This is a massive boost — it roughly adds +3-4 to your effective roll.\n\nTessa gets advantage from:\n• Reckless Attack (attack rolls)\n• Wolf Totem (allies' attacks)\n• Raging (STR checks/saves)",
    tip: "Advantage is one of the most powerful bonuses in DnD. Always look for ways to generate it!",
  },
  disadvantage: {
    title: "Disadvantage",
    body: "The opposite of advantage — you roll TWO d20s and use the LOWER result. This makes success much harder.\n\nReckless Attack gives enemies disadvantage on attacks against you... wait, no — it gives them ADVANTAGE. So use it wisely!",
    tip: "Conditions like Blinded, Poisoned, and Restrained often impose disadvantage.",
  },
  criticalHit: {
    title: "Critical Hit",
    body: "When you roll a natural 20 on an attack (the die shows 20), it's a Critical Hit. You deal double damage dice (then add your modifier once).\n\nExample with Greataxe: normal damage = 1d12+6. Critical hit = 2d12+6. At level 9, Brutal Critical adds even more dice!",
    tip: "Reckless Attack increases your chance of getting natural 20s by giving you two rolls to hit it.",
  },

  // Handbook
  conditions: {
    title: "Conditions",
    body: "Conditions are status effects that change how a creature acts:\n\n• Blinded: Can't see; attacks have disadvantage; attacks against you have advantage\n• Charmed: Can't attack the charmer; charmer has advantage on social rolls\n• Frightened: Disadvantage on rolls while you can see the source of fear; can't move toward it\n• Grappled: Speed becomes 0\n• Incapacitated: Can't take actions or reactions\n• Paralyzed: Incapacitated; attacks against you have advantage; all attacks within 5 ft are auto-crits\n• Poisoned: Disadvantage on attack rolls and ability checks\n• Prone: Moving costs double; attacks have disadvantage unless attacker is within 5 ft\n• Restrained: Speed 0; attacks have disadvantage; attacks against you have advantage\n• Stunned: Incapacitated; can't move; attacks against you have advantage\n• Unconscious: Incapacitated; drops everything; falls prone; auto-fail STR and DEX saves; attacks within 5 ft are auto-crits",
    tip: "As a Barbarian, raging gives you advantage on STR saves — helping resist Grappled, Restrained, and similar conditions.",
  },
  damageTypes: {
    title: "Damage Types",
    body: "DnD has 13 damage types:\n\n• Bludgeoning, Piercing, Slashing — Physical damage from weapons\n• Fire, Cold, Lightning, Thunder, Acid, Poison — Elemental\n• Necrotic, Radiant — Dark/holy energy\n• Psychic — Mental damage\n• Force — Pure magical energy\n\nWhile RAGING, Tessa is RESISTANT to Bludgeoning, Piercing, and Slashing — she takes HALF damage from those types!",
    tip: "Resistance = half damage. Many common attacks deal B/P/S damage, so raging is extremely powerful.",
  },
  spellSlots: {
    title: "Spell Slots",
    body: "Spell slots are the 'fuel' spellcasters use to cast spells. Each slot level corresponds to spell power. When you use a slot, it's gone until you rest.\n\nTessa is NOT a spellcaster, so she has NO spell slots. Her Spirit Seeker abilities are rituals — they don't need spell slots, just 10 minutes.",
    tip: "No spell slots to worry about — Tessa relies on raw strength and rage!",
  },
  bonusAction: {
    title: "Bonus Action",
    body: "Each turn, you get:\n• 1 Action (attack, cast a spell, etc.)\n• 1 Bonus Action (if you have a feature that uses it)\n• Movement (up to your speed)\n• 1 Reaction (once per round, for specific triggers)\n\nRage is a Bonus Action. Using a bonus action to rage means you still have your full Action for attacking!",
    tip: "You can only take a Bonus Action if a specific feature says 'you can do X as a Bonus Action'. It's not a free extra action.",
  },
  reaction: {
    title: "Reaction",
    body: "A reaction is a special action that happens in response to a trigger — even on another creature's turn. You get ONE reaction per round (resets at the start of your turn).\n\nTessa's Danger Sense is a passive effect, not a reaction. Opportunity Attacks (when an enemy tries to run away from you) are reactions.",
    tip: "Opportunity Attack: if an enemy moves out of your reach without Disengaging, you can make one attack as a reaction.",
  },
};

// Handbook entries (searchable reference)
export const HANDBOOK_ENTRIES = [
  {
    id: "advantage",
    category: "Core Rules",
    title: "Advantage & Disadvantage",
    summary: "Roll 2d20, take the higher (advantage) or lower (disadvantage)",
    content: EXPLANATIONS.advantage.body,
    tip: EXPLANATIONS.advantage.tip,
    tags: ["dice", "core", "attack", "save"],
  },
  {
    id: "critical-hit",
    category: "Core Rules",
    title: "Critical Hit",
    summary: "Natural 20 on an attack = double damage dice",
    content: `When you score a critical hit, you get to roll extra dice for the attack's damage against the target. Roll all of the attack's damage dice twice and add them together. Then add any relevant modifiers as normal. (PHB p.196)

EXAMPLE — Greataxe critical hit:
• Normal hit: 1d12 + 6 = 7–18 damage
• Critical hit: 2d12 + 6 = 8–30 damage (double the dice, same modifier)

HOW TO GET CRITICAL HITS MORE OFTEN:
• Reckless Attack gives you two rolls — twice the chance of rolling a natural 20
• Natural 20 ALWAYS hits regardless of the enemy's AC
• Some enemy conditions (Paralyzed, Unconscious) make every hit within 5 ft a critical hit automatically

CRITICAL MISS (Natural 1): The attack always fails, regardless of modifiers. No special bad effects beyond missing — but it's still the worst possible attack roll.`,
    tip: "At Level 9, Brutal Critical adds +1d12 to critical hits with melee attacks. Combined with Reckless Attack, Tessa will land crits frequently and they'll hit extremely hard.",
    tags: ["attack", "dice", "damage", "crit"],
  },
  {
    id: "conditions",
    category: "Core Rules",
    title: "Conditions",
    summary: "Status effects: blinded, frightened, grappled, and more",
    content: `Conditions alter a creature's capabilities and can arise from spells, class features, monster attacks, or other effects. A condition lasts until countered or for a duration specified by the effect. (PHB Appendix A)

BLINDED
• Can't see; auto-fails ability checks requiring sight
• Attack rolls against you have advantage; your attack rolls have disadvantage

CHARMED
• Can't attack the charmer or target them with harmful effects
• Charmer has advantage on social ability checks against you

FRIGHTENED
• Disadvantage on ability checks and attack rolls while source of fear is in line of sight
• Can't willingly move closer to the source of fear

GRAPPLED
• Speed becomes 0; can't benefit from any bonus to speed
• Ends if the grappler is incapacitated or you are removed from their reach

INCAPACITATED
• Can't take actions or reactions

PARALYZED
• Incapacitated; can't move or speak
• Auto-fails STR and DEX saving throws
• Attack rolls against you have advantage
• Any hit within 5 ft is automatically a critical hit

POISONED
• Disadvantage on attack rolls and ability checks

PRONE
• Only movement option is to crawl (or stand up, which ends the condition)
• Disadvantage on attack rolls
• Attacks against you have advantage if attacker is within 5 ft; otherwise disadvantage

RESTRAINED
• Speed becomes 0
• Attack rolls against you have advantage; your attack rolls have disadvantage
• Disadvantage on DEX saving throws

STUNNED
• Incapacitated; can't move; can only speak falteringly
• Auto-fails STR and DEX saving throws
• Attack rolls against you have advantage

UNCONSCIOUS
• Incapacitated; can't move or speak; unaware of surroundings
• Drops held items and falls prone
• Auto-fails STR and DEX saving throws
• Attack rolls against you have advantage
• Any hit within 5 ft is automatically a critical hit`,
    tip: "As a Barbarian, raging gives you advantage on STR saves (resisting Grappled/Restrained), and resistance to B/P/S damage even while prone or stunned. Your biggest threat is being Incapacitated — that ends your rage!",
    tags: ["status", "rules", "conditions"],
  },
  {
    id: "damage-types",
    category: "Core Rules",
    title: "Damage Types",
    summary: "13 types: B/P/S physical, fire, cold, lightning, and more",
    content: `Different attacks, damaging spells, and other harmful effects deal different types of damage. (PHB p.196)

PHYSICAL (most common):
• Bludgeoning — blunt force: hammers, falling, constriction
• Piercing — puncturing and impaling: spears, bites, arrows
• Slashing — swords, axes, claws

ELEMENTAL:
• Acid — corrosive sprays, dissolving enzymes
• Cold — infernal chill, frost breath
• Fire — dragon breath, flame spells
• Lightning — lightning bolt spell, blue dragon breath
• Thunder — concussive bursts of sound (thunderwave)

MYSTICAL:
• Force — pure magical energy (magic missile)
• Necrotic — withering dark energy (from undead)
• Poison — venom, toxic gas
• Psychic — mental damage (mind flayer attacks)
• Radiant — divine light energy (angel attacks, cleric spells)

RESISTANCE & VULNERABILITY (PHB p.197):
• Resistance = take HALF damage from that type
• Vulnerability = take DOUBLE damage
• Immunity = take NO damage`,
    tip: "While RAGING, Tessa is RESISTANT to Bludgeoning, Piercing, AND Slashing — the three most common physical damage types. Swords, arrows, claws — all cut in half. This is the main reason to rage defensively.",
    tags: ["damage", "resistance", "rules"],
  },
  {
    id: "death-saves",
    category: "Core Rules",
    title: "Death Saving Throws",
    summary: "At 0 HP: 3 successes = stable, 3 failures = death",
    content: `Whenever you start your turn with 0 hit points, you must make a special saving throw called a death saving throw to determine whether you creep closer to death or hang on to life. Unlike other saving throws, this one isn't tied to any ability score. (PHB p.197)

Roll a d20:
• 10 or higher = 1 Success (need 3 to become stable)
• 9 or lower = 1 Failure (3 failures = death)
• Natural 1 = counts as 2 failures
• Natural 20 = you immediately regain 1 hit point and wake up!

Taking damage at 0 HP = 1 extra failure (critical hit = 2 failures)

STABILIZING: An ally can use their action to attempt a DC 10 Wisdom (Medicine) check to stabilize you. A stable creature doesn't make death saving throws but remains unconscious at 0 HP.

Any healing (even 1 HP from a spell or potion) immediately wakes you up — you're back in the fight!`,
    tip: "If an ally has a healing potion, they can pour it in your mouth as an action — no Medicine check needed. Even 1 HP brings you back. Healing Word (a bard/cleric cantrip) is one of the most valuable spells in the game for this reason.",
    tags: ["death", "hp", "survival", "saves"],
  },
  {
    id: "actions",
    category: "Core Rules",
    title: "Actions, Bonus Actions & Reactions",
    summary: "Each turn: 1 Action + 1 Bonus Action + movement + 1 Reaction",
    content: `On your turn, you can move a distance up to your speed AND take one action. You decide whether to move first or take your action first. (PHB p.189)

YOUR ACTION (choose one):
• Attack — make one or more weapon attacks (Extra Attack gives Tessa 2)
• Dash — double your movement speed this turn
• Disengage — your movement doesn't provoke opportunity attacks this turn
• Dodge — attacks against you have disadvantage; you have advantage on DEX saves
• Help — give an ally advantage on their next ability check or attack
• Hide — make a Stealth check to hide
• Ready — prepare an action triggered by a specific event
• Search — make a Perception or Investigation check
• Use an Object — interact with a magic item

BONUS ACTION (only if a feature grants it):
You can take one bonus action per turn. Rage is Tessa's main bonus action — which means her action is free for TWO attacks.

REACTION (once per round, resets at your turn start):
Triggered by a specific event. Opportunity Attack is the most common.

MOVEMENT:
You have 40 ft. You can split it before/between/after attacks. Moving between your two Extra Attacks is powerful — attack one enemy, move 20 ft, attack another.`,
    tip: "Tessa's ideal turn: Bonus Action = Rage → Action = Attack twice (Reckless) → Movement = position next to key enemy for Wolf Totem. In that order!",
    tags: ["turn", "action", "combat", "core"],
  },
  {
    id: "saving-throws",
    category: "Core Rules",
    title: "Saving Throws",
    summary: "Rolls to resist harmful effects — spells, traps, poisons",
    content: EXPLANATIONS.savingThrow.body,
    tip: EXPLANATIONS.savingThrow.tip,
    tags: ["save", "spell", "defense"],
  },
  {
    id: "ability-scores",
    category: "Core Rules",
    title: "Ability Scores & Modifiers",
    summary: "6 stats: STR, DEX, CON, INT, WIS, CHA — modifier = (score - 10) ÷ 2",
    content: "The six ability scores measure your character's basic attributes:\n\n• STR 10 = +0 modifier, 12 = +1, 14 = +2, 16 = +3, 18 = +4, 20 = +5\n\nThe MODIFIER is what you add to dice rolls. If Tessa rolls Athletics (STR), she adds +5. The actual score matters mainly for carrying capacity.",
    tip: "Focus on the modifiers — those are the numbers you use constantly. Scores are just how you calculate the modifier.",
    tags: ["stat", "modifier", "core"],
  },
  {
    id: "rest",
    category: "Core Rules",
    title: "Short Rest & Long Rest",
    summary: "Short = 1 hour, spend Hit Dice. Long = 8 hours, full recovery.",
    content: EXPLANATIONS.shortRest.body + "\n\n" + EXPLANATIONS.longRest.body,
    tip: "Coordinate with your party when to rest — some classes (Wizards) need long rests more than Barbarians.",
    tags: ["rest", "recovery", "hp"],
  },
  {
    id: "proficiency",
    category: "Core Rules",
    title: "Proficiency Bonus",
    summary: "Added to attacks, saves, and skills you're trained in",
    content: EXPLANATIONS.proficiencyBonus.body,
    tip: EXPLANATIONS.proficiencyBonus.tip,
    tags: ["proficiency", "bonus", "core"],
  },
  {
    id: "rage",
    category: "Barbarian",
    title: "Rage",
    summary: "+2 damage, resistance to physical damage, advantage on STR",
    content: EXPLANATIONS.rage.body,
    tip: EXPLANATIONS.rage.tip,
    tags: ["barbarian", "class", "feature"],
  },
  {
    id: "reckless-attack",
    category: "Barbarian",
    title: "Reckless Attack",
    summary: "Advantage on your attacks, but enemies get advantage on you",
    content: EXPLANATIONS.recklessAttack.body,
    tip: EXPLANATIONS.recklessAttack.tip,
    tags: ["barbarian", "attack", "feature"],
  },
  {
    id: "wolf-totem",
    category: "Barbarian",
    title: "Wolf Totem Spirit",
    summary: "While raging, allies near your target get advantage on attacks",
    content: EXPLANATIONS["wolf-totem-spirit"]?.body || "While raging, allies adjacent to enemies you threaten have advantage on melee attacks against those enemies.",
    tip: "The ultimate team-support feature. Always rage before allies attack.",
    tags: ["barbarian", "totem", "team", "feature"],
  },
  {
    id: "grappling",
    category: "Combat Tactics",
    title: "Grappling",
    summary: "Pin an enemy in place using Athletics — great for Tessa",
    content: "As an attack, you can attempt to grapple a creature:\n1. Replace one of your attacks with a Grapple attempt\n2. You roll Athletics, enemy rolls Athletics or Acrobatics\n3. If you win, the enemy's speed becomes 0 — they can't move!\n4. The grapple lasts until broken or you let go\n\nWith +8 Athletics, Tessa is one of the best grapplers in the game. Pin an enemy → allies surround it → everyone attacks with advantage from Wolf Totem!",
    tip: "Grapple + Prone (shove them down) = enemy at disadvantage on attacks AND all attacks against them from within 5 ft have advantage.",
    tags: ["tactics", "grapple", "athletics"],
  },
  {
    id: "shoving",
    category: "Combat Tactics",
    title: "Shoving",
    summary: "Push an enemy 5 ft away or knock them prone",
    content: "As an attack, you can shove a creature:\n1. Replace one of your attacks with a Shove\n2. You roll Athletics, enemy rolls Athletics or Acrobatics\n3. Choose to knock them PRONE or push them 5 ft in a direction\n\nProne creatures: attacks against them from within 5 ft have advantage, and they move at half speed to stand up.",
    tip: "Shove + Reckless Attack combo: Shove an enemy prone, then Reckless Attack with advantage. Double advantage chance to hit!",
    tags: ["tactics", "shove", "prone"],
  },
  {
    id: "opportunity-attack",
    category: "Combat Tactics",
    title: "Opportunity Attack",
    summary: "Free attack when an enemy tries to run away from you",
    content: "When a hostile creature moves out of your reach without using the Disengage action, you can use your Reaction to make one melee attack against them.\n\nThis happens on THEIR turn, not yours. You get one Reaction per round.\n\nThis is why enemies often don't want to run from Tessa — she'll get a free hit plus they're probably provoking allies too.",
    tip: "The Disengage action lets someone leave your reach safely — but it costs their whole Action to do so.",
    tags: ["attack", "reaction", "movement"],
  },
  {
    id: "spell-slots",
    category: "Core Rules",
    title: "Spell Slots",
    summary: "The resource spellcasters use — Tessa doesn't have any",
    content: EXPLANATIONS.spellSlots.body,
    tip: EXPLANATIONS.spellSlots.tip,
    tags: ["spells", "magic", "resource"],
  },
  {
    id: "inspiration",
    category: "Core Rules",
    title: "Inspiration",
    summary: "Reward from DM for great roleplaying — lets you add advantage to a roll",
    content: "Your DM can award you Inspiration when you:\n• Roleplay your character's personality traits, flaws, or bonds in a fun or dramatic way\n• Make a choice that's true to your character even if it's hard\n\nWhen you have Inspiration, you can spend it to gain advantage on any attack roll, saving throw, or ability check.",
    tip: "Play Tessa's Chaotic Good alignment and Sage background — embrace curiosity and protect the innocent. Your DM will reward you!",
    tags: ["roleplay", "reward", "dm"],
  },
  {
    id: "attunement",
    category: "Magic Items",
    title: "Attunement",
    summary: "Some magic items require 1 hour of bonding to use their power",
    content: "Some magic items require attunement:\n1. Spend a short rest focusing on the item\n2. You can attune to a maximum of 3 items at once\n3. The item's magic only works while you're attuned\n\nScatterheart +1 and Greataxe +1 are both +1 weapons. They may or may not require attunement depending on your DM's ruling.",
    tip: "Plan your 3 attunement slots carefully — the most powerful items often require it.",
    tags: ["magic", "items", "attunement"],
  },
  {
    id: "resistance",
    category: "Core Rules",
    title: "Resistance & Vulnerability",
    summary: "Resistance = half damage. Vulnerability = double damage.",
    content: "• RESISTANCE: You take half damage from that damage type. Tessa is resistant to Bludgeoning, Piercing, and Slashing while RAGING — the most common physical damage types!\n\n• VULNERABILITY: You take double damage. Rare for player characters, common for some monsters.\n\n• IMMUNITY: You take no damage at all. Even rarer.",
    tip: "Raging resistance is the main reason to rage defensively — even if you don't need the damage bonus, half damage from swords and arrows is huge.",
    tags: ["damage", "defense", "core"],
  },
];
