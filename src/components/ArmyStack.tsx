import * as React from "react";


interface Props {
    armyName: string;
    faction: string;
    subfaction: string;
}

export class ArmyStack extends React.Component<Props> {
    render(): React.ReactNode {
        const {armyName, faction, subfaction} = this.props;

        return (
            <section>
                <section>
                    <h2>{armyName}</h2>
                </section>
                <section>
                    <h2>{faction}</h2>
                </section>
                <section>
                    <h4>{subfaction}</h4>
                </section>
            </section>
        )
    }
}