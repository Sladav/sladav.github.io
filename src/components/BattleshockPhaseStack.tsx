import * as React from "react";


interface Props {
    warscrolls: any[];
}

export class BattleshockPhaseStack extends React.Component<Props> {
    render(): React.ReactNode {
        const {warscrolls} = this.props;

        const abilities = warscrolls.reduce((abilities, warscroll) => {
            warscroll.abilities.forEach((ability: any) => {
                abilities.push({warscroll: warscroll.name, ...ability})
            })
            return abilities;
        }, [])

        const startAbilities = abilities.filter((ability: any) => {
            return ability.description.includes('start of battleshock phase');
        })

        const mainAbilities = abilities.filter((ability: any) => {
            return ability.description.includes('battleshock tests') || ability.description.includes('Bravery characteristic');
        })

        const endAbilities = abilities.filter((ability: any) => {
            return ability.description.includes('end of battleshock phase');
        })

        return (
            <section>
                <section>
                    <h1>Battleshock Phase</h1>
                </section>
                <React.Fragment>
                    {
                    startAbilities.length === 0 ? null : (
                        <section>
                        <h3>Start of Battleshock Phase</h3>
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
                        <h3>Battleshock Phase</h3>
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
                        <h3>End of Battleshock Phase</h3>
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