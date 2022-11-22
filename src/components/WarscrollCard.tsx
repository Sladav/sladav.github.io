import * as React from "react";
import { Warscroll } from "src/models/Types";


interface Props {
    warscroll: Warscroll;
}

export class WarscrollCard extends React.Component<Props> {
    render(): React.ReactNode {
        const { warscroll } = this.props;

        return (
            <section>
                <div className="flex-row">
                    <div className="aos-profile">
                        <div style={{top: 'calc(41% - 26px)', left: '0', bottom: '0', right: '0'}}>{warscroll.move}</div>
                        <div style={{top: 'calc(41%)', left: '-58px', bottom: '0', right: '0'}}>{warscroll.wounds}</div>
                        <div style={{top: 'calc(41%)', left: '54px', bottom: '0', right: '0'}}>{warscroll.save}+</div>
                        <div style={{top: 'calc(41% + 27px)', left: '0', bottom: '0', right: '0'}}>{warscroll.bravery}</div>
                    </div>
                    <h3>{warscroll.name}</h3>
                </div>
                <p>{warscroll.description}</p>
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
                            warscroll.meleeWeapons.map(weapon => {
                                return (
                                    <tr>
                                        <td>{weapon.name}</td>
                                        <td>{weapon.range.toString()}''</td>
                                        <td>{weapon.attacks.toString()}</td>
                                        <td>{weapon.toHit}+</td>
                                        <td>{weapon.toWound}+</td>
                                        <td>{weapon.rend}</td>
                                        <td>{weapon.damage.toString()}</td>
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