import * as React from "react";
import { WarscrollCard } from "./WarscrollCard";
export class WarscrollStack extends React.Component {
    render() {
        const { warscrolls } = this.props;
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement("h2", null, "Warscrolls")),
            warscrolls.map(warscroll => {
                return React.createElement(WarscrollCard, { warscroll: warscroll });
            })));
    }
}
