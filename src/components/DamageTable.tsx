import * as React from "react";
import _ from "lodash";

interface Props {
    tableData: Record<string, string>[];
}

export class DamageTable extends React.Component<Props> {
    render(): React.ReactNode {
        const { tableData } = this.props;

        return (
            <React.Fragment>
                <h4>Damage Table</h4>
                <table>
                <thead>
                    <tr>
                        {
                            Object.keys(tableData[0]).map(key => {
                                return (
                                    <td key={key}>{_.startCase(key)}</td>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(row => {
                            return (
                                <tr>
                                    {Object.values(row).map((value) => {
                                        return (
                                            <td>{value}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </React.Fragment>
        )
    }
}