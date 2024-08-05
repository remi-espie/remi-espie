import {
    AppBar,
    Box,
    IconButton,
    SvgIcon,
    Toolbar,
    Typography,
    useTheme,
} from '@suid/material'
import MyLink from './MyLink.tsx'
import { Show } from 'solid-js'
import DarkModeOutlinedIcon from '@suid/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@suid/icons-material/LightModeOutlined'
import { saveDarkMode, useLayoutContext } from '../LayoutContext.ts'

function Header() {
    const context = useLayoutContext()
    const theme = useTheme()

    return (
        <AppBar position="fixed" enableColorOnDark>
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src="/icon.png"
                        alt="Logo"
                        style={{
                            width: '48px',
                            height: '48px',
                            'margin-right': '24px',
                        }}
                    />

                    <Typography variant="h6">Le portfolio de Rémi !</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                    }}
                >
                    <MyLink
                        to="#about"
                        text="A propos de moi"
                        color={theme.palette.primary.contrastText}
                    />
                    <MyLink
                        to="#experiences"
                        text="Mes expériences"
                        color={theme.palette.primary.contrastText}
                    />
                    <MyLink
                        to="#projects"
                        text="Mes projets"
                        color={theme.palette.primary.contrastText}
                    />

                    <IconButton
                        component="a"
                        target="_blank"
                        href="https://www.linkedin.com/in/rémi-espié/"
                    >
                        <SvgIcon
                            sx={{
                                color: theme.palette.primary.contrastText,
                            }}
                        >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        component="a"
                        target="_blank"
                        href="https://github.com/remi-espie"
                    >
                        <SvgIcon
                            sx={{
                                color: theme.palette.primary.contrastText,
                            }}
                        >
                            <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                        </SvgIcon>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        title="Toggle light/dark mode"
                        onClick={() => {
                            context.darkMode = !context.darkMode
                            saveDarkMode(context.darkMode)
                        }}
                    >
                        <Show
                            when={theme.palette.mode === 'dark'}
                            fallback={<LightModeOutlinedIcon />}
                        >
                            <DarkModeOutlinedIcon />
                        </Show>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
