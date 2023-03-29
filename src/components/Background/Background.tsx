import React from 'react';
import { styled } from '@mui/system';

const BackgroundStyle = styled('svg')({
    zIndex: -1
});

const Background = () => {
    return(
        <BackgroundStyle min-height="1800px" id="visual" viewBox="0 0 3000 1800" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect x="0" y="0" width="100%" height="100%" fill="#a88f8f"></rect>
            <defs>
                <linearGradient id="grad1_0" x1="33.3%" y1="100%" x2="100%" y2="0%">
                    <stop offset="20%" stopColor="#fdc5f4" stopOpacity="1"></stop>
                    <stop offset="90%" stopColor="#fdc5f4" stopOpacity="1"></stop>
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id="grad1_1" x1="33.3%" y1="100%" x2="100%" y2="0%">
                    <stop offset="20%" stopColor="#fdc5f4" stopOpacity="1"></stop>
                    <stop offset="80%" stopColor="#a88f8f" stopOpacity="1"></stop>
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id="grad2_0" x1="0%" y1="100%" x2="66.7%" y2="0%">
                    <stop offset="20%" stopColor="#fdc5f4" stopOpacity="1"></stop>
                    <stop offset="80%" stopColor="#fdc5f4" stopOpacity="1"></stop>
                </linearGradient></defs><defs>
                <linearGradient id="grad2_1" x1="0%" y1="100%" x2="66.7%" y2="0%">
                    <stop offset="20%" stopColor="#a88f8f" stopOpacity="1"></stop>
                    <stop offset="80%" stopColor="#fdc5f4" stopOpacity="1"></stop>
                </linearGradient>
            </defs>
            <g transform="translate(3000, 1800)">
                <path d="M-324.5 0C-319.9 -42.2 -315.2 -84.3 -299.8 -124.2C-284.4 -164 -258.2 -201.5 -224.9 -224.9C-191.6 -248.2 -151.2 -257.4 -112.5 -271.6C-73.9 -285.9 -36.9 -305.2 0 -324.5L0 0Z" fill="#d9a8b9"></path>
                <path d="M-162.2 0C-159.9 -21.1 -157.6 -42.2 -149.9 -62.1C-142.2 -82 -129.1 -100.8 -112.4 -112.4C-95.8 -124.1 -75.6 -128.7 -56.3 -135.8C-36.9 -142.9 -18.5 -152.6 0 -162.2L0 0Z" fill="#fdc5f4"></path>
            </g>
            <g transform="translate(0, 0)">
                <path d="M324.5 0C316.7 39.8 308.8 79.7 295.6 122.5C282.5 165.2 263.9 211 229.5 229.5C195 247.9 144.6 239.1 103.7 250.4C62.8 261.7 31.4 293.1 0 324.5L0 0Z" fill="#d9a8b9"></path>
                <path d="M162.2 0C158.3 19.9 154.4 39.8 147.8 61.2C141.2 82.6 132 105.5 114.7 114.7C97.5 124 72.3 119.5 51.9 125.2C31.4 130.8 15.7 146.5 0 162.2L0 0Z" fill="#fdc5f4"></path>
            </g>
            <svg id="visual" viewBox="0 0 3000 1800" width="3000" height="1800" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(345 850)"><path d="M127.8 -187.9C181.7 -190.3 252.4 -188.4 285 -156.4C317.7 -124.3 312.3 -62.2 278.8 -19.4C245.3 23.4 183.5 46.9 163.4 100.7C143.4 154.6 164.9 238.8 144.6 282.4C124.3 326 62.2 329 1.3 326.8C-59.7 324.7 -119.3 317.4 -152.5 281.2C-185.7 245 -192.5 180 -220.6 128.3C-248.8 76.7 -298.4 38.3 -319.3 -12.1C-340.3 -62.5 -332.5 -125 -297.2 -164.3C-261.8 -203.5 -198.9 -219.5 -144.8 -217C-90.7 -214.4 -45.3 -193.2 -4.2 -186C37 -178.8 74 -185.5 127.8 -187.9" fill="#d9a8b9"></path></g></svg>
            <svg id="visual" viewBox="0 0 3000 1800" width="3000" height="1800" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(345 850) rotate(80)"><path d="M127.8 -187.9C181.7 -190.3 252.4 -188.4 285 -156.4C317.7 -124.3 312.3 -62.2 278.8 -19.4C245.3 23.4 183.5 46.9 163.4 100.7C143.4 154.6 164.9 238.8 144.6 282.4C124.3 326 62.2 329 1.3 326.8C-59.7 324.7 -119.3 317.4 -152.5 281.2C-185.7 245 -192.5 180 -220.6 128.3C-248.8 76.7 -298.4 38.3 -319.3 -12.1C-340.3 -62.5 -332.5 -125 -297.2 -164.3C-261.8 -203.5 -198.9 -219.5 -144.8 -217C-90.7 -214.4 -45.3 -193.2 -4.2 -186C37 -178.8 74 -185.5 127.8 -187.9" fill="#FFE7B3"></path></g></svg>
            
        </BackgroundStyle>
    )
}

export default Background;