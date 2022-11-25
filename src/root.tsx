import Reveal from 'reveal.js';
// @ts-ignore
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import * as React from 'react';
import { ArmyStack } from './components/ArmyStack';
import { BattleTraitStack } from './components/BattleTraitStack';
import { WarscrollStack } from './components/WarscrollStack';
import { HeroPhaseStack } from './components/HeroPhaseStack';
import { MovementPhaseStack } from './components/MovementPhaseStack';
import { ShootingPhaseStack } from './components/ShootingPhaseStack';
import { ChargePhaseStack } from './components/ChargePhaseStack';
import { CombatPhaseStack } from './components/CombatPhaseStack';
import { BattleshockPhaseStack } from './components/BattleshockPhaseStack';
import warscrolls from './_data/warscrolls.json';


let deck = new Reveal({
    plugins: [ Markdown ]
 })

deck.on('slidechanged', () => {
    localStorage.setItem('slideState', JSON.stringify(deck.getState()))
})
 
 
export class Root extends React.Component {

    componentDidMount(): void {
        deck.initialize({
            //@ts-ignore
            width: "115%",
            //@ts-ignore
            height: "115%",
            hash: true,
            parallaxBackgroundImage: 'https://i.pinimg.com/originals/6f/29/b8/6f29b82b60c10e33226a184114fc52c5.jpg',

            parallaxBackgroundSize: '400%', // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)

            // // Number of pixels to move the parallax background per slide
            // // - Calculated automatically unless specified
            // // - Set to 0 to disable movement along an axis
            parallaxBackgroundHorizontal: 200,
            parallaxBackgroundVertical: 50
        }).then(() => {
            const slideState = localStorage.getItem('slideState');

            if (slideState != null) {
                deck.setState(JSON.parse(slideState));
            }
        })
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <ArmyStack
                    armyName='Boyz n the Wood'
                    faction='Cities of Sigmar'
                    subfaction='Living City'
                />
                <BattleTraitStack/>
                <WarscrollStack
                    warscrolls={warscrolls}
                />
                <HeroPhaseStack 
                    warscrolls={warscrolls}
                />
                <MovementPhaseStack 
                    warscrolls={warscrolls}
                />
                <ShootingPhaseStack 
                    warscrolls={warscrolls}
                />
                <ChargePhaseStack 
                    warscrolls={warscrolls}
                />
                <CombatPhaseStack 
                    warscrolls={warscrolls}
                />
                <BattleshockPhaseStack 
                    warscrolls={warscrolls}
                />
            </React.Fragment>
        )
    }
}

