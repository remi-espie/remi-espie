import { AppBar, Box, useTheme } from '@suid/material'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import { useLayoutContext } from '../LayoutContext.ts'
import MyLink from '~/component/MyLink.tsx'
import MyTypography from '~/component/MyTypography.tsx'

function footer() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    const t = i18n.translator(dict)

    return (
        <AppBar
            position="relative"
            sx={{
                top: 'auto',
                bottom: 0,
                boxShadow: 'none',
                backgroundImage: 'none',
            }}
            enableColorOnDark
        >
            <Box sx={{ m: 1, display: 'flex', flexDirection: 'column' }}>
                <MyTypography variant="caption">{t('footer')}</MyTypography>
                <Box>
                    <MyTypography variant="caption">
                        {t('attribution')}
                    </MyTypography>
                    <MyLink
                        to="/license"
                        text={'license'}
                        variant={'caption'}
                        color={theme.palette.secondary.contrastText}
                    />
                </Box>
            </Box>
        </AppBar>
    )
}

export default footer
