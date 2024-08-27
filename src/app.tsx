import {
    createPalette,
    createTheme,
    CssBaseline,
    ThemeProvider,
} from '@suid/material'
import Header from './Layout/Header.tsx'
import { createMemo, onMount } from 'solid-js'
import { baseTheme, themeDark, themeLight } from './theme.ts'
import LayoutContext, {
    createLayoutMutable,
    getSavedDarkMode,
    getSavedLanguage,
    isSysThemeDark,
} from './LayoutContext.ts'
import './global.css'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from './i18n/types.ts'
import Footer from './Layout/Footer.tsx'
import Entrypoint from './Layout/Entrypoint.tsx'
import About from './Layout/About.tsx'
import Experiences from './Layout/Experiences.tsx'
import Projects from './Layout/Projects.tsx'
import Hobbies from './Layout/Hobbies.tsx'
import { Link, Meta, MetaProvider, Title } from '@solidjs/meta'

function App() {
    const context = createLayoutMutable()

    onMount(() => {
        if (context.darkMode === undefined) {
            context.darkMode = getSavedDarkMode() ?? isSysThemeDark()
        }
        if (getSavedLanguage() === null) {
            context.language = navigator.language === 'fr' ? 'fr' : 'en'
        } else {
            context.language = getSavedLanguage() ?? 'en'
        }
    })

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

    return (
        <LayoutContext.Provider value={context}>
            <MetaProvider>
                <Title>{t('title') + ' | ' + t('author')}</Title>
                <Meta charset="utf-8" />
                <Meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <Meta http-equiv="Content-Language" content="en,fr" />
                <Meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />

                <Meta name="author" content="Rémi Espié" />
                <Link rel="shortcut icon" type="image/ico" href="/icon.png" />
                <Link rel="index" title="value" href="/" />

                <Meta name="HandheldFriendly" content="true" />

                <ThemeProvider theme={theme}>
                    {context.language === 'fr' ? (
                        <>
                            <Meta
                                name="application-name"
                                content="Portfolio de présentation | Rémi Espié"
                                lang="fr"
                            />
                            <Meta
                                name="description"
                                content="Le portfolio de Rémi Espié, un développeur français bilingue anglais et recentré sur le DevOps."
                                lang="fr"
                            />
                            <Meta
                                name="keywords"
                                content="Rémi Espié, Rémi, Espié, Portfolio, DevOps, Développeur, Français, Anglais"
                                lang="fr"
                            />
                        </>
                    ) : (
                        <>
                            <Meta
                                name="application-name"
                                content="Introduction Portfolio | Rémi Espié"
                                lang="en"
                            />
                            <Meta
                                name="description"
                                content="The portfolio of Rémi Espié, a French developer fluent in english and centered on DevOps."
                                lang="en"
                            />
                            <Meta
                                name="keywords"
                                content="Rémi Espié, Rémi, Espié, Portfolio, DevOps, Developer, French, English"
                                lang="en"
                            />
                        </>
                    )}

                    <CssBaseline />
                    <Header />
                    <Entrypoint />
                    <About />
                    <Experiences />
                    <Projects />
                    <Hobbies />
                    <Footer />
                </ThemeProvider>
            </MetaProvider>
        </LayoutContext.Provider>
    )
}

export default App