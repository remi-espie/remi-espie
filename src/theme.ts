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
        contrastText: '#fff',
    },
    secondary: {
        light: teal[300],
        main: teal[500],
        dark: teal[700],
        contrastText: '#fff',
    },
    background: {
        default: '#f0f0f0',
    },
}

export const themeDark = {
    primary: {
        light: cyan[900],
        main: cyan[800],
        dark: cyan[600],
        contrastText: '#000',
    },
    secondary: {
        light: teal[900],
        main: teal[800],
        dark: teal[600],
        contrastText: '#000',
    },
    background: {
        default: '#1c1c1c',
    },
}
