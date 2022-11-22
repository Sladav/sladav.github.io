import { Ability, Characteristic, MeleeWeapon, Warscroll } from 'src/models/Types';


const AnnointedOnFrostheartPhoenix: Warscroll = {
    name: 'Annointed on Frostheart Phoenix',
    pictures: [],
    points: 315,
    unitSize: 1,
    battlefieldRoles: ['Leader', 'Behemoth'],
    flavorText: 'Some of the Ur-Phoenix’s spawn radiate the elemental power of ice. Surrounded by a freezing aura that slows nearby foes to a crawl, these Frostheart Phoenixes strike from on high with deadly force, ripping and tearing their prey to pieces.',
    description: 'A Frostheart Phoenix is a single model armed with Ice-cold Talons.',
    wounds: 12,
    move: '✹',
    save: 4,
    bravery: 9,
    missleWeapons: [],
    meleeWeapons: [
        {
            name: 'Ice-cold Talons',
            range: 2,
            attacks: '✹',
            toHit: 3,
            toWound: 3,
            rend: -1,
            damage: 2,
        },
        {
            name: 'Great Phoenix Halberd',
            range: 2,
            attacks: 4,
            toHit: 3,
            toWound: 3,
            rend: -1,
            damage: 1,
        },
    ],
    characteristics: [
        {
            name: 'Anointed',
            description: 'This model include 1 Anointed armed with a Great Phoenix Halberd. Any command traits or artefacts of power only affect attacks made by the Anointed.',
        },
        {
            name: 'Fly',
            description: 'This model can fly.',
        },
    ],
    damageTable: [
        {woundsSuffered: [0, 2], move: 16, IcecoldTalons: 8, BlizzardAura: 9},
        {woundsSuffered: [3, 4], move: 14, IcecoldTalons: 6, BlizzardAura: 6},
        {woundsSuffered: [5, 7], move: 12, IcecoldTalons: 5, BlizzardAura: 3},
        {woundsSuffered: [8, 9], move: 10, IcecoldTalons: 4, BlizzardAura: 2},
        {woundsSuffered: 10, move: 8, IcecoldTalons: 3, BlizzardAura: 1},
    ],
    abilities: [
        {
            name: 'Attuned to Magic',
            description: 'In your hero phase, if a friendly WIZARD within 12" of this model casts a spell that is not unbound, this model is imbued with magical energy until the start of your next hero phase. Add 1 to save rolls for attacks that target this model while it is imbued with magical energy (this ability can never add more than 1 to the save roll).',
            flavorText: 'The spawn of the Ur-Phoenix are imbued with potent magical energy.',
        },
        {
            name: 'Blizzard Aura',
            description: 'Subtract 1 from wound rolls for attacks made with melee weapons by enemy units within range of the Blizzard Aura ability of any friendly models. The range of the Blizzard Aura ability for this model is shown on the damage table above.',
            flavorText: 'The chilling aura given off by a Frostheart Phoenix encases nearby foes in ice, slowing them and restricting their movement.',
        },
        {
            name: 'Witness to Destiny',
            description: 'Roll a dice each time you allocate a wound or mortal wound to this model. On a 4+, that wound or mortal wound is negated.',
            flavorText: 'The chilling aura given off by a Frostheart Phoenix encases nearby foes in ice, slowing them and restricting their movement.',
        },
    ],
    keywords: ['ORDER', 'AELF', 'CITIES OF SIGMAR', 'PHOENIX TEMPLE', 'MONSTER', 'HERO', 'FROSTHEART PHOENIX'],
    pitchedBattleNotes: ['Single'],
    baseSize: '120 x 92 mm',
}

export const warscrolls = [
    AnnointedOnFrostheartPhoenix,
]