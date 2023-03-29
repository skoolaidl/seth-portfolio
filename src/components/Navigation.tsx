import React from 'react';
import { Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/system';

const TestStyle = styled('div')({
    padding: '385px 0px 0px 125px',
});

const Navigation = () => {
    return(
        <TestStyle>
            <Stack spacing={3}>
                <Button variant='contained'>
                    <Typography variant='body1'>home</Typography>
                </Button>
                <Button variant='contained'>
                    <Typography>about</Typography>
                </Button>
                <Button variant='contained'>
                    <Typography>contact</Typography>
                </Button>
            </Stack>
        </TestStyle>
    )
}

export default Navigation;