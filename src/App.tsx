import React from 'react';
import Navigation from './components/Navigation';
import Background from './components/Background/Background';

import { styled } from '@mui/system';

const AppLayer = styled('div')({
    position: 'relative'
});

const ContentLayer = styled('div')({
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: 0,
    left: 0
});

export default function App() {
    return (
        <AppLayer>
            <ContentLayer>
                <Navigation/>
            </ContentLayer>
            <Background/>
        </AppLayer>    
    );
}
