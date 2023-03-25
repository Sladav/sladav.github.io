import { DamageTable } from 'src/components/DamageTable';
import { Stringified } from './Json';
import { Ability, BaseSize, BattlefieldRole, Characteristic, MeleeWeapon, MissleWeapon, Warscroll, Wildcard } from './Types';


class Unit implements Warscroll {
    name!: string;
    pictures!: string[];
    points!: number;
    unitSize!: number;
    battlefieldRoles!: BattlefieldRole[];
    flavorText!: string;
    description!: string;
    wounds!: number;
    move!: number | Wildcard;
    save!: number;
    bravery!: number;
    missleWeapons!: MissleWeapon[];
    meleeWeapons!: MeleeWeapon[];
    characteristics!: Characteristic[];
    damageTable!: Record<string, number | [number, number]>[];
    abilities!: Ability[];
    keywords!: string[];
    pitchedBattleNotes!: string[];
    baseSize!: BaseSize;
    
    constructor(warscrollJson: Stringified<Warscroll>) {
        this.setName(warscrollJson.name);
        this.setPictures(warscrollJson.pictures);
        this.setPoints(warscrollJson.points);
        this.setUnitSize(warscrollJson.unitSize);
        this.setBattlefieldRoles(warscrollJson.battlefieldRoles);
        this.setFlavorText(warscrollJson.flavorText);
        this.setDescription(warscrollJson.description);
        this.setWounds(warscrollJson.wounds);
        this.setMove(warscrollJson.move);
        this.setSave(warscrollJson.save);
        this.setBravery(warscrollJson.bravery);
        // this.setMissleWeapons(warscrollJson.missleWeapons);
        // this.setMeleeWeapons(warscrollJson.meleeWeapons);
        // this.setCharacteristics(warscrollJson.characteristics);
        // this.setDamageTable(warscrollJson.damageTable);
        // this.setAbilities(warscrollJson.abilities);
        // this.setKeywords(warscrollJson.keywords);
        this.setPitchedBattleNotes(warscrollJson.pitchedBattleNotes);
        this.setBaseSize(warscrollJson.baseSize);
    }

    setName(value: Warscroll['name'] | Stringified<Warscroll>['name']) {
        this.name = value;
    };
    setPictures(value: Warscroll['pictures'] | Stringified<Warscroll>['pictures']) {
        this.pictures = value;
    };
    setPoints(value: Warscroll['points'] | Stringified<Warscroll>['points']) {
        this.points = Number(value);
    };
    setUnitSize(value: Warscroll['unitSize'] | Stringified<Warscroll>['unitSize']) {
        this.unitSize = Number(value);
    };
    setBattlefieldRoles(value: Warscroll['battlefieldRoles'] | Stringified<Warscroll>['battlefieldRoles']) {
        this.battlefieldRoles = value;
    };
    setFlavorText(value: Warscroll['flavorText'] | Stringified<Warscroll>['flavorText']) {
        this.flavorText = value;
    };
    setDescription(value: Warscroll['description'] | Stringified<Warscroll>['description']) {
        this.description = value;
    };
    setWounds(value: Warscroll['wounds'] | Stringified<Warscroll>['wounds']) {
        this.wounds = Number(value);
    };
    setMove(value: Warscroll['move'] | Stringified<Warscroll>['move']) {
        this.move = value === Wildcard ? Wildcard : Number(value);
    };
    setSave(value: Warscroll['save'] | Stringified<Warscroll>['save']) {
        this.save = Number(value);
    };
    setBravery(value: Warscroll['bravery'] | Stringified<Warscroll>['bravery']) {
        this.bravery = Number(value);
    };
    // setMissleWeapons(value: Warscroll['missleWeapons'] | Stringified<Warscroll>['missleWeapons']) {
    //     this.missleWeapons = value.map(item => new MissleWeapon(item));
    // };
    // setMeleeWeapons(value: Warscroll['meleeWeapons'] | Stringified<Warscroll>['meleeWeapons']) {
    //     this.meleeWeapons = value.map(item => new MeleeWeapon(item));
    // };
    // setCharacteristics(value: Warscroll['characteristics'] | Stringified<Warscroll>['characteristics']) {
    //     this.characteristics = value.map(item => new Characteristic(item));
    // };
    // setDamageTable(value: Warscroll['damageTable'] | Stringified<Warscroll>['damageTable']) {
    //     this.damageTable = new DamageTable(item);
    // };
    // setAbilities(value: Warscroll['abilities'] | Stringified<Warscroll>['abilities']) {
    //     this.abilities = value.map(item => new Ability(item));;
    // };
    // setKeywords(value: Warscroll['keywords'] | Stringified<Warscroll>['keywords']) {
    //     this.keywords = value;
    // };
    setPitchedBattleNotes(value: Warscroll['pitchedBattleNotes'] | Stringified<Warscroll>['pitchedBattleNotes']) {
        this.pitchedBattleNotes = value;
    };
    setBaseSize(value: Warscroll['baseSize'] | Stringified<Warscroll>['baseSize']) {
        this.baseSize = value;
    };
}