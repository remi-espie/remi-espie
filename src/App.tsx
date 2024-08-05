import {
    Box,
    Button,
    createPalette,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from '@suid/material'
import Header from './component/Header.tsx'
import { createEffect, createMemo } from 'solid-js'
import { baseTheme, themeDark, themeLight } from './theme.ts'
import LayoutContext, {
    createLayoutMutable,
    saveLanguage,
} from './LayoutContext.ts'
import './global.css'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from './i18n/types.ts'

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

    const dict = createMemo(() => i18n.flatten(dictionaries[context.language]))

    const t = i18n.translator(dict)

    createEffect(() => {
        document.title = t('title')
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
                <Button
                    variant="contained"
                    onClick={() => {
                        context.language =
                            context.language === 'en' ? 'fr' : 'en'
                        saveLanguage(context.language)
                    }}
                    sx={{ m: 1 }}
                >
                    {t('title')}
                </Button>
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default App
