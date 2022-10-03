import * as React from 'react';
import {createTheme, responsiveFontSizes, ThemeOptions, ThemeProvider} from "@mui/material/styles";
import App from "../App";
import {CssBaseline, StyledEngineProvider} from "@mui/material";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    }
});

export default function DarkLightTheme() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    let theme = React.useMemo(() => {
            const themeOptionsDark: ThemeOptions = {
                palette: {
                    mode: 'dark',
                    primary: {
                        main: '#d2d228',
                    },
                    secondary: {
                        main: '#1786c3',
                    },
                    background: {
                        default: '#191932',
                        paper: '#191932',
                    },
                    warning: {
                        main: '#ff5900',
                    },
                    error: {
                        main: '#d20a0a',
                    }
                }
            }

            const themeOptionsLight: ThemeOptions = {
                palette: {
                    mode: "light",
                    primary: {
                        main: "#3f51b5",
                    },
                    secondary: {
                        main: "#ff5722",
                    },
                    error: {
                        main: "#d50000",
                    },
                    background: {
                        default: "#fafafa"
                    }
                }
            }

            if(mode === "dark")
                return createTheme(themeOptionsDark);
            else
                return createTheme(themeOptionsLight);
        },
        [mode],
    );

    theme = responsiveFontSizes(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App/>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </StyledEngineProvider>
    );
}