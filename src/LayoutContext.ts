import { DeepPartial } from '@suid/types'
import merge from '@suid/utils/merge'
import { createContext, useContext } from 'solid-js'
import { createMutable } from 'solid-js/store'
import { isServer } from 'solid-js/web'

type Options = {
    darkMode: boolean
}

function isSysThemeDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const defaultOptions: Options = {
    darkMode: isServer ? false : (getSavedDarkMode() ?? isSysThemeDark()),
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

export function getSavedDarkMode() {
    const value = localStorage.getItem('darkMode')
    if (value === 'true') return true
    if (value === 'false') return false
}

export default LayoutContext
