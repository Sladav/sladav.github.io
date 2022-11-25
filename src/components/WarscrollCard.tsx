import * as React from "react";
import { CombatTable } from "./CombatTable";
import { DamageTable } from "./DamageTable";

interface Props {
    warscroll: any;
}

export class WarscrollCard extends React.Component<Props> {
    render(): React.ReactNode {
        const { warscroll } = this.props;

        return (
            <section>
                {/* <div className="flex-row">
                    <div className="aos-profile">
                        <div style={{top: 'calc(41% - 26px)', left: '0', bottom: '0', right: '0'}}>{warscroll.move}</div>
                        <div style={{top: 'calc(41%)', left: '-58px', bottom: '0', right: '0'}}>{warscroll.wounds}</div>
                        <div style={{top: 'calc(41%)', left: '54px', bottom: '0', right: '0'}}>{warscroll.save}</div>
                        <div style={{top: 'calc(41% + 27px)', left: '0', bottom: '0', right: '0'}}>{warscroll.bravery}</div>
                    </div>
                    <div>
                        <h3>{warscroll.name}</h3>
                        <p>{warscroll.description}</p>
                    </div>
                </div> */}
                <div>
                    <div className="img-crop">
                        <img src={`/images/models/${warscroll.name}.jpeg`} alt={warscroll.name}></img>
                    </div>
                    {/* <div className="img" style={{backgroundImage: `url("/images/models/${warscroll.name}.jpeg")`}}></div> */}
                    <div className="aos-profile">
                        <div style={{top: 'calc(41% - 24px)', left: '0', bottom: '0', right: '0'}}>{warscroll.move}</div>
                        <div style={{top: 'calc(41%)', left: '-52px', bottom: '0', right: '0'}}>{warscroll.wounds}</div>
                        <div style={{top: 'calc(41%)', left: '52px', bottom: '0', right: '0'}}>{warscroll.save}</div>
                        <div style={{top: 'calc(41% + 27px)', left: '0', bottom: '0', right: '0'}}>{warscroll.bravery}</div>
                    </div>
                    <p className="header">
                        <h3 className="name">{warscroll.name}</h3>
                        <p className="flavor">{warscroll.flavorText}</p>
                        <p className="description">{warscroll.description}</p>
                    </p>
                </div>
                <div style={{height: "8px"}}></div>
                <div className="tableSection">
                    <h4>Combat Tables</h4>
                    { 
                        warscroll.missleWeapons.length === 0 ? null : (
                            <CombatTable
                                tableName="Missle Weapons"
                                weapons={warscroll.missleWeapons}
                            />
                        )
                    }
                    <div style={{height: "14px"}}></div>
                    { 
                        warscroll.meleeWeapons.length === 0 ? null : (
                            <CombatTable
                                tableName="Melee Weapons"
                                weapons={warscroll.meleeWeapons}
                            />
                        )
                    }
                    <div style={{height: "14px"}}></div>
                    {
                        warscroll.damageTable.length === 0 ? null : (
                            <DamageTable tableData={warscroll.damageTable} />
                        )
                    }
                </div>
                <div style={{height: "14px"}}></div>
                <div className="abilities">
                { 
                        warscroll.abilities.length === 0 ? null : warscroll.abilities.map((ability: any) => (
                            <div className="ability-card">
                                <h4>{ability.name}</h4>
                                <p>{ability.description}</p>
                            </div>
                        )
                    }
                </div>
                <div style={{height: '500px'}}></div>
            </section>
        )
    }
}