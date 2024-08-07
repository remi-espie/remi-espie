import { cyan, teal } from '@suid/material/colors'

export const baseTheme = {
    typography: {
        fontFamily: ['Courier', 'Segoe UI', 'sans-serif'].join(','),
        fontSize: 16,
        h6: {
            fontWeight: 'bold',
        },
    },
}

export const themeLight = {
    primary: {
        light: cyan[400],
        main: cyan[500],
        dark: cyan[700],
        contrastText: '#f0f0f0',
    },
    secondary: {
        light: teal[300],
        main: teal[500],
        dark: teal[700],
        contrastText: '#1d1d1d',
    },
    background: {
        default: '#f0f0f0',
    },
    common: {
        white: '#f0f0f0',
        black: '#1d1d1d',
    },
}

export const themeDark = {
    primary: {
        light: cyan[900],
        main: cyan[700],
        dark: cyan[500],
        contrastText: '#1d1d1d',
    },
    secondary: {
        light: teal[900],
        main: teal[800],
        dark: teal[600],
        contrastText: '#f0f0f0',
    },
    background: {
        default: '#1d1d1d',
    },
    common: {
        white: '#f0f0f0',
        black: '#1d1d1d',
    },
}
