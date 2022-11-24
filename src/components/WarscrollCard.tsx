import * as React from "react";
import { Warscroll } from "src/models/Types";
import images from "../_data/images.json";


interface Props {
    warscroll: any;
}

export class WarscrollCard extends React.Component<Props> {
    render(): React.ReactNode {
        const { warscroll } = this.props;

        // @ts-ignore
        const imgSrc = images[warscroll.name];

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
                    <div className="aos-profile">
                        <div style={{top: 'calc(41% - 26px)', left: '0', bottom: '0', right: '0'}}>{warscroll.move}</div>
                        <div style={{top: 'calc(41%)', left: '-58px', bottom: '0', right: '0'}}>{warscroll.wounds}</div>
                        <div style={{top: 'calc(41%)', left: '54px', bottom: '0', right: '0'}}>{warscroll.save}</div>
                        <div style={{top: 'calc(41% + 27px)', left: '0', bottom: '0', right: '0'}}>{warscroll.bravery}</div>
                    </div>
                    <img src={`${imgSrc}`}></img>
                    <p className="heading">
                        <h3>{warscroll.name}</h3>
                        <p>{warscroll.description}</p>
                    </p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Melee Weapons</td>
                            <td>Range</td>
                            <td>Attacks</td>
                            <td>To Hit</td>
                            <td>To Wound</td>
                            <td>Rend</td>
                            <td>Damage</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            warscroll.meleeWeapons.map((weapon: any) => {
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
                <div style={{height: '500px'}}></div>
            </section>
        )
    }
}