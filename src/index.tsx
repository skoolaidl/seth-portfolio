import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';
import store from './redux/store';

const Portfolio = () => {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
                rel="stylesheet"
            />
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <CssBaseline>
                        <App />
                    </CssBaseline>
                </Provider>
            </ThemeProvider>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Portfolio />);
