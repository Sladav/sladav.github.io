import * as React from "react";


interface Props {
    warscrolls: any[];
}

export class ShootingPhaseStack extends React.Component<Props> {
    render(): React.ReactNode {
        const {warscrolls} = this.props;

        const abilities = warscrolls.reduce((abilities, warscroll) => {
            warscroll.abilities.forEach((ability: any) => {
                abilities.push({warscroll: warscroll.name, ...ability})
            })
            return abilities;
        }, [])

        const startAbilities = abilities.filter((ability: any) => {
            return ability.description.includes('start of your shooting phase');
        })

        const mainAbilities = abilities.filter((ability: any) => {
            return ability.description.includes('shooting attack') || ability.description.includes('in your shooting phase');
        })

        const endAbilities = abilities.filter((ability: any) => {
            return ability.description.includes('end of shooting phase');
        })

        return (
            <section>
                <section>
                    <h2>Shooting Phase</h2>
                </section>
                <React.Fragment>
                    {
                    startAbilities.length === 0 ? null : (
                        <section>
                        <h3>Start of Shooting Phase</h3>
                        <div className="phase-section">
                        {
                            startAbilities.map((ability: any) => (
                                <div className="phase-ability">
                                    <h4>{ability.warscroll}</h4>
                                    <p>{ability.name}</p>
                                    <p>{ability.description}</p>
                                </div>
                            ))
                        }
                        </div>
                        </section>
                    )
                    }
                    {
                    mainAbilities.length === 0 ? null : (
                        <section>
                        <h3>Shooting Phase</h3>
                        <div className="phase-section">
                        {
                            mainAbilities.map((ability: any) => (
                                <div className="phase-ability">
                                    <h4>{ability.warscroll}</h4>
                                    <p>{ability.name}</p>
                                    <p>{ability.description}</p>
                                </div>
                            ))
                        }
                        </div>
                        </section>
                    )
                    }
                    {
                    endAbilities.length === 0 ? null : (
                        <section>
                        <h3>End of Shooting Phase</h3>
                        <div className="phase-section">
                        {
                            endAbilities.map((ability: any) => (
                                <div className="phase-ability">
                                    <h4>{ability.warscroll}</h4>
                                    <p>{ability.name}</p>
                                    <p>{ability.description}</p>
                                </div>
                            ))
                        }
                        </div>
                        </section>
                    )
                    }
                    <div style={{height: '500px'}}></div>
                </React.Fragment>
            </section>
        )
    }
}