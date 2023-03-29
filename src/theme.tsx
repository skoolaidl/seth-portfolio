import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: ['Montsserat','sans-serif'].join(','),
        body1: {
            "fontSize": 14,
            "fontWeight": 100,
            textTransform: 'none',
            color: '#5B5B5B'
        },
    },
    palette: {
        primary: {
            main: '#F3AC92'
        },
        secondary: {
            main: "#CBCBCB"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: () => ({
                body: {
                    margin: 0,
                    padding: 0
                },
            }),
        },
    }
});

export default theme;