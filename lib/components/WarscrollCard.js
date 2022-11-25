import * as React from "react";
import { CombatTable } from "./CombatTable";
import { DamageTable } from "./DamageTable";
export class WarscrollCard extends React.Component {
    render() {
        const { warscroll } = this.props;
        return (React.createElement("section", null,
            React.createElement("div", null,
                React.createElement("div", { className: "img-crop" },
                    React.createElement("img", { src: `/images/models/${warscroll.name}.jpeg`, alt: warscroll.name })),
                React.createElement("div", { className: "aos-profile" },
                    React.createElement("div", { style: { top: 'calc(41% - 24px)', left: '0', bottom: '0', right: '0' } }, warscroll.move),
                    React.createElement("div", { style: { top: 'calc(41%)', left: '-52px', bottom: '0', right: '0' } }, warscroll.wounds),
                    React.createElement("div", { style: { top: 'calc(41%)', left: '52px', bottom: '0', right: '0' } }, warscroll.save),
                    React.createElement("div", { style: { top: 'calc(41% + 27px)', left: '0', bottom: '0', right: '0' } }, warscroll.bravery)),
                React.createElement("p", { className: "header" },
                    React.createElement("h3", { className: "name" }, warscroll.name),
                    React.createElement("p", { className: "flavor" }, warscroll.flavorText),
                    React.createElement("p", { className: "description" }, warscroll.description))),
            React.createElement("div", { style: { height: "8px" } }),
            React.createElement("div", { className: "tableSection" },
                React.createElement("h4", null, "Combat Tables"),
                warscroll.missleWeapons.length === 0 ? null : (React.createElement(CombatTable, { tableName: "Missle Weapons", weapons: warscroll.missleWeapons })),
                React.createElement("div", { style: { height: "14px" } }),
                warscroll.meleeWeapons.length === 0 ? null : (React.createElement(CombatTable, { tableName: "Melee Weapons", weapons: warscroll.meleeWeapons })),
                React.createElement("div", { style: { height: "14px" } }),
                warscroll.damageTable.length === 0 ? null : (React.createElement(DamageTable, { tableData: warscroll.damageTable }))),
            React.createElement("div", { style: { height: "14px" } }),
            React.createElement("div", { className: "abilities" }, warscroll.abilities.length === 0 ? null : warscroll.abilities.map((ability) => (React.createElement("div", { className: "ability-card" },
                React.createElement("h4", null, ability.name),
                React.createElement("p", null, ability.description))))),
            React.createElement("div", { style: { height: '500px' } })));
    }
}
