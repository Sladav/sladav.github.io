import Reveal from 'reveal.js';
// @ts-ignore
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import * as React from 'react';
import { ArmyStack } from './components/ArmyStack';
import { BattleTraitStack } from './components/BattleTraitStack';
import { WarscrollStack } from './components/WarscrollStack';
import { warscrolls } from './_data/warscrolls';
let deck = new Reveal({
    plugins: [Markdown]
});
deck.on('slidechanged', () => {
    localStorage.setItem('slideState', JSON.stringify(deck.getState()));
});
export class Root extends React.Component {
    componentDidMount() {
        deck.initialize({
            //@ts-ignore
            width: "100%",
            //@ts-ignore
            height: "100%",
            hash: true,
            parallaxBackgroundImage: 'https://www.belloflostsouls.net/wp-content/uploads/2019/09/AoS-Cities-header-1-e1663444163944.jpg',
            parallaxBackgroundSize: '2100px 1100px',
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
        return (React.createElement(React.Fragment, null,
            React.createElement(ArmyStack, { armyName: 'Boyz n the Wood', faction: 'Cities of Sigmar', subfaction: 'Living City' }),
            React.createElement(BattleTraitStack, null),
            React.createElement(WarscrollStack, { warscrolls: warscrolls })));
    }
}