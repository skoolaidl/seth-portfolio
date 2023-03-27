import React from 'react';
import { styled } from '@mui/system';

// const logo = require("../../assets/blob-scene-haikei.svg") as string;

const CustomBackground = styled('div')({
    width: '100%',
    height: '100%',
    backgroundRepeat: 'repeat',
    backgroundSize:'cover',
    backgroundPosition: 'center'
});

const Background = (props: any) => {
    return(
        <CustomBackground>
            <svg id="visual" viewBox="0 0 3000 1000" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="3000" height="1000" fill="#a88f8f"></rect><defs><linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%"><stop offset="20%" stop-color="#fdc5f4" stop-opacity="1"></stop><stop offset="90%" stop-color="#fdc5f4" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad1_1" x1="33.3%" y1="100%" x2="100%" y2="0%"><stop offset="20%" stop-color="#fdc5f4" stop-opacity="1"></stop><stop offset="80%" stop-color="#a88f8f" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%"><stop offset="20%" stop-color="#fdc5f4" stop-opacity="1"></stop><stop offset="80%" stop-color="#fdc5f4" stop-opacity="1"></stop></linearGradient></defs><defs><linearGradient id="grad2_1" x1="0%" y1="100%" x2="66.7%" y2="0%"><stop offset="20%" stop-color="#a88f8f" stop-opacity="1"></stop><stop offset="80%" stop-color="#fdc5f4" stop-opacity="1"></stop></linearGradient></defs><g transform="translate(3000, 1000)"><path d="M-324.5 0C-319.9 -42.2 -315.2 -84.3 -299.8 -124.2C-284.4 -164 -258.2 -201.5 -224.9 -224.9C-191.6 -248.2 -151.2 -257.4 -112.5 -271.6C-73.9 -285.9 -36.9 -305.2 0 -324.5L0 0Z" fill="#d9a8b9"></path><path d="M-162.2 0C-159.9 -21.1 -157.6 -42.2 -149.9 -62.1C-142.2 -82 -129.1 -100.8 -112.4 -112.4C-95.8 -124.1 -75.6 -128.7 -56.3 -135.8C-36.9 -142.9 -18.5 -152.6 0 -162.2L0 0Z" fill="#fdc5f4"></path></g><g transform="translate(0, 0)"><path d="M324.5 0C316.7 39.8 308.8 79.7 295.6 122.5C282.5 165.2 263.9 211 229.5 229.5C195 247.9 144.6 239.1 103.7 250.4C62.8 261.7 31.4 293.1 0 324.5L0 0Z" fill="#d9a8b9"></path><path d="M162.2 0C158.3 19.9 154.4 39.8 147.8 61.2C141.2 82.6 132 105.5 114.7 114.7C97.5 124 72.3 119.5 51.9 125.2C31.4 130.8 15.7 146.5 0 162.2L0 0Z" fill="#fdc5f4"></path></g></svg>
        </CustomBackground>
    )
}

export default Background;