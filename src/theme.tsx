import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FDC5F4'
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