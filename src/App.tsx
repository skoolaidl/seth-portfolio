import React from 'react';
import Navigation from './components/Navigation';
import Background from './components/Background/Background';

import { styled } from '@mui/system';

const AppLayer = styled('div')({
    position: 'relative'
});

const ContentLayer = styled('div')({
    position: 'absolute'
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
