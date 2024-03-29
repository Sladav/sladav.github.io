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
let deck = new Reveal({
    plugins: [Markdown]
});
deck.on('slidechanged', () => {
    localStorage.setItem('slideState', JSON.stringify(deck.getState()));
});
export class Root extends React.Component {
    componentDidMount() {
        const { parallaxBackgroundImage } = this.props;
        deck.initialize({
            //@ts-ignore
            width: "115%",
            //@ts-ignore
            height: "115%",
            hash: true,
            parallaxBackgroundImage,
            parallaxBackgroundSize: '400%',
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
        });
    }
    render() {
        const { warscrolls, faction } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(ArmyStack, { faction: faction }),
            React.createElement(BattleTraitStack, null),
            React.createElement(WarscrollStack, { warscrolls: warscrolls }),
            React.createElement(HeroPhaseStack, { warscrolls: warscrolls }),
            React.createElement(MovementPhaseStack, { warscrolls: warscrolls }),
            React.createElement(ShootingPhaseStack, { warscrolls: warscrolls }),
            React.createElement(ChargePhaseStack, { warscrolls: warscrolls }),
            React.createElement(CombatPhaseStack, { warscrolls: warscrolls }),
            React.createElement(BattleshockPhaseStack, { warscrolls: warscrolls })));
    }
}
