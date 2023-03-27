import React from 'react';
import { styled } from '@mui/system';

const logo = require("../../assets/blob-scene-haikei.svg") as string;

const CustomBackground = styled('div')({
    width: '900px',
    height: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(data:image/svg+xml;charset=utf8,${logo})`,
});

const Background = () => {
    console.log(logo);
    return(
        <CustomBackground>Hello</CustomBackground>
    )
}

export default Background;