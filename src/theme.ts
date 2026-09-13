const cyan = {
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#0097a7',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
}
const teal = {
    300: '#4db6ac',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
    800: '#00695c',
    900: '#004d40',
}

export const baseTheme = {
    typography: {
        fontFamily: ['Courier', 'Segoe UI', 'sans-serif'].join(','),
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
        paper: '#dedede',
    },
    common: {
        white: '#f0f0f0',
        black: '#1d1d1d',
    },
}

export const themeDark = {
    primary: {
        dark: cyan[900],
        main: cyan[700],
        light: cyan[500],
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
        paper: '#292929',
    },
    common: {
        white: '#f0f0f0',
        black: '#1d1d1d',
    },
}
