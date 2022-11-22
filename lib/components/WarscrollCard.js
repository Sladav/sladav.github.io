import * as React from "react";
export class WarscrollCard extends React.Component {
    render() {
        const { warscroll } = this.props;
        return (React.createElement("section", null,
            React.createElement("div", { className: "flex-row" },
                React.createElement("div", { className: "aos-profile" },
                    React.createElement("div", { style: { top: 'calc(41% - 26px)', left: '0', bottom: '0', right: '0' } }, warscroll.move),
                    React.createElement("div", { style: { top: 'calc(41%)', left: '-58px', bottom: '0', right: '0' } }, warscroll.wounds),
                    React.createElement("div", { style: { top: 'calc(41%)', left: '54px', bottom: '0', right: '0' } },
                        warscroll.save,
                        "+"),
                    React.createElement("div", { style: { top: 'calc(41% + 27px)', left: '0', bottom: '0', right: '0' } }, warscroll.bravery)),
                React.createElement("h3", null, warscroll.name)),
            React.createElement("p", null, warscroll.description),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "Melee Weapons"),
                        React.createElement("td", null, "Range"),
                        React.createElement("td", null, "Attacks"),
                        React.createElement("td", null, "To Hit"),
                        React.createElement("td", null, "To Wound"),
                        React.createElement("td", null, "Rend"),
                        React.createElement("td", null, "Damage"))),
                React.createElement("tbody", null, warscroll.meleeWeapons.map(weapon => {
                    return (React.createElement("tr", null,
                        React.createElement("td", null, weapon.name),
                        React.createElement("td", null,
                            weapon.range.toString(),
                            "''"),
                        React.createElement("td", null, weapon.attacks.toString()),
                        React.createElement("td", null,
                            weapon.toHit,
                            "+"),
                        React.createElement("td", null,
                            weapon.toWound,
                            "+"),
                        React.createElement("td", null, weapon.rend),
                        React.createElement("td", null, weapon.damage.toString())));
                }))),
            React.createElement("div", { style: { height: '500px' } })));
    }
}
