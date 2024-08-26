import { DeepPartial } from '@suid/types'
import merge from '@suid/utils/merge'
import { createContext, useContext } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { isServer } from 'solid-js/web'
import { Locale } from './i18n/types.ts'

type Options = {
    darkMode: boolean | undefined
    language: Locale
}

export function isSysThemeDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const defaultOptionsSrv: Options = {
    darkMode: undefined,
    language: 'en',
}

export const defaultOptionsClient: Options = {
    darkMode: isServer ? false : (getSavedDarkMode() ?? isSysThemeDark()),
    language: isServer
        ? 'en'
        : (getSavedLanguage() ?? navigator.language === 'fr')
          ? 'fr'
          : 'en',
}

const LayoutContext = isServer
    ? createContext(defaultOptionsSrv)
    : createContext(defaultOptionsClient)

export function createLayoutMutable(input: DeepPartial<Options> = {}) {
    return createMutable(merge({}, defaultOptionsSrv, input)) as Options
}
export function createLayoutMutableClient(input: DeepPartial<Options> = {}) {
    return createMutable(merge({}, defaultOptionsClient, input)) as Options
}

export function useLayoutContext() {
    return useContext(LayoutContext)
}

export function saveDarkMode(value: boolean) {
    localStorage.setItem('darkMode', value ? 'true' : 'false')
}

export function saveLanguage(value: Locale) {
    localStorage.setItem('language', value)
}

export function getSavedLanguage() {
    const locale = localStorage.getItem('language')
    if (locale === null) return null
    return locale === 'fr' ? 'fr' : 'en'
}

export function getSavedDarkMode() {
    const value = localStorage.getItem('darkMode')
    // if value is not 'true', it is 'false' or null
    return value === 'true'
}

export default LayoutContext
