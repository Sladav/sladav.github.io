import * as React from "react";
export class BattleshockPhaseStack extends React.Component {
    render() {
        const { warscrolls } = this.props;
        const abilities = warscrolls.reduce((abilities, warscroll) => {
            warscroll.abilities.forEach((ability) => {
                abilities.push(Object.assign({ warscroll: warscroll.name }, ability));
            });
            return abilities;
        }, []);
        const startAbilities = abilities.filter((ability) => {
            return ability.description.includes('start of battleshock phase');
        });
        const mainAbilities = abilities.filter((ability) => {
            return ability.description.includes('battleshock tests') || ability.description.includes('Bravery characteristic');
        });
        const endAbilities = abilities.filter((ability) => {
            return ability.description.includes('end of battleshock phase');
        });
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement("h1", null, "Battleshock Phase")),
            React.createElement(React.Fragment, null,
                startAbilities.length === 0 ? null : (React.createElement("section", null,
                    React.createElement("h3", null, "Start of Battleshock Phase"),
                    React.createElement("div", { className: "phase-section" }, startAbilities.map((ability) => (React.createElement("div", { className: "phase-ability" },
                        React.createElement("h4", null, ability.warscroll),
                        React.createElement("p", null, ability.name),
                        React.createElement("p", null, ability.description))))))),
                mainAbilities.length === 0 ? null : (React.createElement("section", null,
                    React.createElement("h3", null, "Battleshock Phase"),
                    React.createElement("div", { className: "phase-section" }, mainAbilities.map((ability) => (React.createElement("div", { className: "phase-ability" },
                        React.createElement("h4", null, ability.warscroll),
                        React.createElement("p", null, ability.name),
                        React.createElement("p", null, ability.description))))))),
                endAbilities.length === 0 ? null : (React.createElement("section", null,
                    React.createElement("h3", null, "End of Battleshock Phase"),
                    React.createElement("div", { className: "phase-section" }, endAbilities.map((ability) => (React.createElement("div", { className: "phase-ability" },
                        React.createElement("h4", null, ability.warscroll),
                        React.createElement("p", null, ability.name),
                        React.createElement("p", null, ability.description))))))),
                React.createElement("div", { style: { height: '500px' } }))));
    }
}
