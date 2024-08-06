import {
    Box,
    createPalette,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from '@suid/material'
import Header from './Layout/Header.tsx'
import { createEffect, createMemo } from 'solid-js'
import { baseTheme, themeDark, themeLight } from './theme.ts'
import LayoutContext, { createLayoutMutable } from './LayoutContext.ts'
import './global.css'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from './i18n/types.ts'
import Footer from './Layout/Footer.tsx'
import Loremipsum from './component/loremipsum.tsx'

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

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
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
                        height: '72px',
                    }}
                />
                <Loremipsum />
                <Footer />
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default App
