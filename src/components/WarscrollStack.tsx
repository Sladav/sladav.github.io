import * as React from "react";
import { Warscroll } from "src/models/Types";
import { WarscrollCard } from "./WarscrollCard";


interface Props {
    warscrolls: Warscroll[];
}

export class WarscrollStack extends React.Component<Props> {
    render(): React.ReactNode {
        const { warscrolls } = this.props;

        return (
            <section>
                <section>
                    <h2>Warscrolls</h2>
                </section>
                {
                        warscrolls.map(warscroll => {
                            return <WarscrollCard warscroll={warscroll} />;
                        })
                    }
            </section>
        )
    }
}