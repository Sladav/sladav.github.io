import * as React from "react";
import _ from "lodash";
export class DamageTable extends React.Component {
    render() {
        const { tableData } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("h4", null, "Damage Table"),
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null, Object.keys(tableData[0]).map(key => {
                        return (React.createElement("td", { key: key }, _.startCase(key)));
                    }))),
                React.createElement("tbody", null, tableData.map(row => {
                    return (React.createElement("tr", null, Object.values(row).map((value) => {
                        return (React.createElement("td", null, value));
                    })));
                })))));
    }
}
