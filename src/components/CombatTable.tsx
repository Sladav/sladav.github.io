import * as React from "react";

interface Props {
    weapons: any;
    tableName: string;
}

export class CombatTable extends React.Component<Props> {
    render(): React.ReactNode {
        const { weapons, tableName } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <td>{tableName}</td>
                        <td>Rng</td>
                        <td>Att</td>
                        <td>Hit</td>
                        <td>Wnd</td>
                        <td>Rend</td>
                        <td>Dmg</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        weapons.map((weapon: any) => {
                            return (
                                <tr>
                                    <td>{weapon.name}</td>
                                    <td>{weapon.range}</td>
                                    <td>{weapon.attacks}</td>
                                    <td>{weapon.toHit}</td>
                                    <td>{weapon.toWound}</td>
                                    <td>{weapon.rend}</td>
                                    <td>{weapon.damage}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}