import * as React from "react";
export class ChargePhaseStack extends React.Component {
    render() {
        const { warscrolls } = this.props;
        const abilities = warscrolls.reduce((abilities, warscroll) => {
            warscroll.abilities.forEach((ability) => {
                abilities.push(Object.assign({ warscroll: warscroll.name }, ability));
            });
            return abilities;
        }, []);
        const startAbilities = abilities.filter((ability) => {
            return ability.description.includes('start of charge phase');
        });
        const mainAbilities = abilities.filter((ability) => {
            return ability.description.includes('charge');
        });
        const endAbilities = abilities.filter((ability) => {
            return ability.description.includes('end of charge phase');
        });
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement("h1", null, "Charge Phase")),
            React.createElement(React.Fragment, null,
                startAbilities.length === 0 ? null : (React.createElement("section", null,
                    React.createElement("h3", null, "Start of Charge Phase"),
                    React.createElement("div", { className: "phase-section" }, startAbilities.map((ability) => (React.createElement("div", { className: "phase-ability" },
                        React.createElement("h4", null, ability.warscroll),
                        React.createElement("p", null, ability.name),
                        React.createElement("p", null, ability.description))))))),
                mainAbilities.length === 0 ? null : (React.createElement("section", null,
                    React.createElement("h3", null, "Charge Phase"),
                    React.createElement("div", { className: "phase-section" }, mainAbilities.map((ability) => (React.createElement("div", { className: "phase-ability" },
                        React.createElement("h4", null, ability.warscroll),
                        React.createElement("p", null, ability.name),
                        React.createElement("p", null, ability.description))))))),
                endAbilities.length === 0 ? null : (React.createElement("section", null,
                    React.createElement("h3", null, "End of Charge Phase"),
                    React.createElement("div", { className: "phase-section" }, endAbilities.map((ability) => (React.createElement("div", { className: "phase-ability" },
                        React.createElement("h4", null, ability.warscroll),
                        React.createElement("p", null, ability.name),
                        React.createElement("p", null, ability.description))))))),
                React.createElement("div", { style: { height: '500px' } }))));
    }
}
