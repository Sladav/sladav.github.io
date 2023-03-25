import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Root } from '../root';
import warscrolls from '../_data/warscrolls/disciples-of-tzeentch.json';

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
    <Root
        faction='Disciples Of Tzeentch'
        warscrolls={warscrolls as any}
        parallaxBackgroundImage='https://i.pinimg.com/originals/6f/29/b8/6f29b82b60c10e33226a184114fc52c5.jpg'
    />
)