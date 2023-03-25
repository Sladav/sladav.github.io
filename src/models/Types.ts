
export interface Warscroll {
    name: string;
    pictures: string[];
    points: number;
    unitSize: number;
    battlefieldRoles: BattlefieldRole[];
    flavorText: string;
    description: string;
    wounds: number;
    move: number | Wildcard;
    save: number;
    bravery: number;
    missleWeapons: MissleWeapon[];
    meleeWeapons: MeleeWeapon[];
    characteristics: Characteristic[];
    damageTable: Record<string, number | [number, number]>[];
    abilities: Ability[];
    keywords: string[];
    pitchedBattleNotes: string[];
    baseSize: BaseSize;
}

export type BattlefieldRole = 'Leader' | 'Battleline' | 'Artillery' | 'Behemoth' | 'EndlessSpell' | 'Invocation' | 'Terrain' | 'Other';

export interface Weapon {
    name: string;
    range: number | DiceRoll;
    attacks: number | DiceRoll | Wildcard;
    toHit: number | Wildcard;
    toWound: number | Wildcard;
    rend: number | Wildcard;
    damage: number | DiceRoll | Wildcard;
}

export interface MissleWeapon extends Weapon {};
export interface MeleeWeapon extends Weapon {};

export interface Characteristic {
    name: string;
    description: string;
}

export interface BasicAbility {
    name: string;
    description: string;
    flavorText: string;
}

export interface Spell extends BasicAbility {}

export interface CommandAbility extends BasicAbility {}

export type Ability = BasicAbility | Spell | CommandAbility;

export interface DiceRoll {
    die: 'd3' | 'd6';
    rolls: number;
}

export const Wildcard: Wildcard = "✹" as const;
export type Wildcard = "✹";

export type BaseSize = 
    | '25 mm'
    | '32 mm'
    | '40 mm'
    | '50 mm'
    | '60 mm'
    | '65 mm'
    | '80 mm'
    | '99 mm'
    | '100 mm'
    | '130 mm'
    | '160 mm'
    | '60 x 35 mm'
    | '75 x 42 mm'
    | '90 x 52 mm'
    | '105 x 70 mm'
    | '120 x 92 mm'
    | '170 x 105 mm'
    | '280 x 210 mm'