import * as React from "react";
export class ArmyStack extends React.Component {
    render() {
        const { faction } = this.props;
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement("h2", null, faction))));
    }
}
