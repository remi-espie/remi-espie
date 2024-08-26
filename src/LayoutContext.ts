import { DeepPartial } from '@suid/types'
import merge from '@suid/utils/merge'
import { createContext, useContext } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { isServer } from 'solid-js/web'
import { Locale } from './i18n/types.ts'

type Options = {
    darkMode: boolean
    language: Locale
}

function isSysThemeDark() {
    return isServer
        ? false
        : window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const defaultOptions: Options = {
    darkMode: isServer ? false : (getSavedDarkMode() ?? isSysThemeDark()),
    language: isServer ? 'fr' : navigator.language === 'fr' ? 'fr' : 'en',
}

const LayoutContext = createContext(defaultOptions)

export function createLayoutMutable(input: DeepPartial<Options> = {}) {
    return createMutable(merge({}, defaultOptions, input)) as Options
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

export function getSavedDarkMode() {
    const value = localStorage.getItem('darkMode')
    // if value is not 'true', it is 'false' or null
    return value === 'true'
}

export default LayoutContext
