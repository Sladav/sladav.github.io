import * as React from "react";


interface Props {
    faction: string;
}

export class ArmyStack extends React.Component<Props> {
    render(): React.ReactNode {
        const {faction} = this.props;

        return (
            <section>
                <section>
                    <h2>{faction}</h2>
                </section>
            </section>
        )
    }
}