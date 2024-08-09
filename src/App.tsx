import {
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
import Entrypoint from './Layout/Entrypoint.tsx'
import About from './Layout/About.tsx'
import Experiences from './Layout/Experiences.tsx'
import Projects from './Layout/Projects.tsx'
import Hobbies from './Layout/Hobbies.tsx'

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
        document.title = t('title') + ' | ' + t('author')
    })

    return (
        <LayoutContext.Provider value={context}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Entrypoint />
                <About />
                <Experiences />
                <Projects />
                <Hobbies />
                <Footer />
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default App
