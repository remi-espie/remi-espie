import MyLink from './MyLink.tsx'
import {
    IconButton,
    Menu,
    MenuItem,
    SvgIcon,
    Typography,
    useTheme,
} from '@suid/material'
import {
    saveDarkMode,
    saveLanguage,
    useLayoutContext,
} from '../LayoutContext.ts'
import { createMemo, createSignal, Show } from 'solid-js'
import LightModeOutlinedIcon from '@suid/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@suid/icons-material/DarkModeOutlined'
import TranslateOutlined from '@suid/icons-material/TranslateOutlined'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'

function NavList() {
    const context = useLayoutContext()
    const theme = useTheme()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    const [anchorEl, setAnchorEl] = createSignal<null | HTMLElement>(null)
    const open = () => Boolean(anchorEl())
    const handleClose = () => setAnchorEl(null)

    return (
        <>
            <MyLink to="#about" text={t('about')} color="inherit" />
            <MyLink to="#experiences" text={t('experiences')} color="inherit" />
            <MyLink to="#projects" text={t('projects')} color="inherit" />
            <IconButton
                color="inherit"
                component="a"
                target="_blank"
                href="https://www.linkedin.com/in/rémi-espié/"
                sx={{ width: 'min-content', alignSelf: 'center' }}
            >
                <SvgIcon>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </SvgIcon>
            </IconButton>
            <IconButton
                color="inherit"
                component="a"
                target="_blank"
                href="https://github.com/remi-espie"
                sx={{ width: 'min-content', alignSelf: 'center' }}
            >
                <SvgIcon>
                    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                </SvgIcon>
            </IconButton>
            <IconButton
                color="inherit"
                title={t('darkMode')}
                onClick={() => {
                    context.darkMode = !context.darkMode
                    saveDarkMode(context.darkMode)
                }}
                sx={{ width: 'min-content', alignSelf: 'center' }}
            >
                <Show
                    when={theme.palette.mode === 'dark'}
                    fallback={<LightModeOutlinedIcon />}
                >
                    <DarkModeOutlinedIcon />
                </Show>
            </IconButton>
            <IconButton
                color="inherit"
                title={t('language')}
                onClick={(event) => setAnchorEl(event.currentTarget)}
                aria-controls={open() ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open() ? 'true' : undefined}
                sx={{ width: 'min-content', alignSelf: 'center' }}
            >
                <TranslateOutlined />
            </IconButton>
            <Menu
                anchorEl={anchorEl()}
                id="account-menu"
                open={open()}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        ['& .MuiAvatar-root']: {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{
                    horizontal: 'right',
                    vertical: 'top',
                }}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom',
                }}
            >
                <MenuItem
                    onClick={() => {
                        context.language = 'en'
                        saveLanguage('en')
                    }}
                >
                    <SvgIcon
                        viewBox="0 0 50 30"
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginRight: 1,
                        }}
                    >
                        <clipPath id="t">
                            <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z" />
                        </clipPath>
                        <path d="M0,0v30h50v-30z" fill="#012169" />
                        <path
                            d="M0,0 50,30M50,0 0,30"
                            stroke="#fff"
                            stroke-width="6"
                        />
                        <path
                            d="M0,0 50,30M50,0 0,30"
                            clip-path="url(#t)"
                            stroke="#C8102E"
                            stroke-width="4"
                        />
                        <path
                            d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z"
                            fill="#C8102E"
                            stroke="#FFF"
                            stroke-width="2"
                        />
                    </SvgIcon>
                    <Typography variant="body1">{t('lang_en')}</Typography>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        context.language = 'fr'
                        saveLanguage('fr')
                    }}
                >
                    <SvgIcon
                        viewBox="0 0 900 600"
                        sx={{
                            width: '24px',
                            height: '24px',
                            marginRight: 1,
                        }}
                    >
                        <rect width="900" height="600" fill="#ED2939" />
                        <rect width="600" height="600" fill="#fff" />
                        <rect width="300" height="600" fill="#002395" />
                    </SvgIcon>
                    <Typography variant="body1">{t('lang_fr')}</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default NavList
