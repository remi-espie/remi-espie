import {
    Box,
    Button,
    createPalette,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from '@suid/material'
import Header from './component/Header.tsx'
import { createMemo } from 'solid-js'
import { baseTheme, themeDark, themeLight } from './theme.ts'
import LayoutContext, { createLayoutMutable } from './LayoutContext.ts'

function App() {
    const context = createLayoutMutable()

    const palette = createMemo(() => {
        return createPalette({
            mode: context.darkMode ? 'dark' : 'light',
            ...(context.darkMode ? themeDark : themeLight),
        })
    })

    const theme = createTheme({
        palette,
        ...baseTheme,
    })

    return (
        <LayoutContext.Provider value={context}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Box
                    sx={{
                        height: '64px',
                    }}
                />
                <Button variant="contained" onClick={() => {}} sx={{ m: 1 }}>
                    {theme.palette.mode}
                </Button>
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default App
