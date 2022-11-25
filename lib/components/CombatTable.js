import * as React from "react";
export class CombatTable extends React.Component {
    render() {
        const { weapons, tableName } = this.props;
        return (React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", null, tableName),
                    React.createElement("td", null, "Rng"),
                    React.createElement("td", null, "Att"),
                    React.createElement("td", null, "Hit"),
                    React.createElement("td", null, "Wnd"),
                    React.createElement("td", null, "Rend"),
                    React.createElement("td", null, "Dmg"))),
            React.createElement("tbody", null, weapons.map((weapon) => {
                return (React.createElement("tr", null,
                    React.createElement("td", null, weapon.name),
                    React.createElement("td", null, weapon.range),
                    React.createElement("td", null, weapon.attacks),
                    React.createElement("td", null, weapon.toHit),
                    React.createElement("td", null, weapon.toWound),
                    React.createElement("td", null, weapon.rend),
                    React.createElement("td", null, weapon.damage)));
            }))));
    }
}
