import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery, useTheme,
} from '@suid/material'
import { createMemo, createSignal } from 'solid-js'
import { useLayoutContext } from '../LayoutContext.ts'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import NavList from '../component/NavList.tsx'
import MyDrawer from './Drawer.tsx'
import MenuOutlined from '@suid/icons-material/MenuOutlined'

function Header() {
    const theme = useTheme()

    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    const [open, setOpen] = createSignal(false)

    const small_screen = useMediaQuery('(max-width:960px)')

    return (
        <>
            <MyDrawer open={open} setOpen={setOpen} />
            <AppBar position="fixed" enableColorOnDark>
                <Toolbar>
                    {small_screen() && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => setOpen(true)}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <MenuOutlined />
                        </IconButton>
                    )}
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
                        <Typography variant="h6">{t('title')}</Typography>
                    </Box>
                    {!small_screen() && (
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexGrow: 1,
                                justifyContent: 'flex-end',
                            }}
                        >
                            <NavList color={theme.palette.primary.contrastText} />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
