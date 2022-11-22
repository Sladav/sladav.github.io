import * as React from "react";
export class ArmyStack extends React.Component {
    render() {
        const { armyName, faction, subfaction } = this.props;
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement("h2", null, armyName)),
            React.createElement("section", null,
                React.createElement("h2", null, faction)),
            React.createElement("section", null,
                React.createElement("h4", null, subfaction))));
    }
}
