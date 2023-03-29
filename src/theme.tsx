import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: ['Montserrat', 'serif'].join(','),
        body1: {
            "fontSize": 14,
            "fontWeight": 400,
        }
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