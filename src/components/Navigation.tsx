import React from 'react';
import { Button, Typography } from '@mui/material';

const Navigation = () => {
    return(
        <div>
            <Button variant='contained'>
                <Typography variant='body1'>Home</Typography>
            </Button>
            <Button variant='contained'>
                <Typography>About</Typography>
            </Button>
            <Button variant='contained'>
                <Typography>Contact</Typography>
            </Button>
        </div>
    )
}

export default Navigation;