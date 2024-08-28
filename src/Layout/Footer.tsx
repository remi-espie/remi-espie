import { AppBar, Box, Typography } from '@suid/material'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import { useLayoutContext } from '../LayoutContext.ts'
import MyLink from '~/component/MyLink.tsx'

function footer() {
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
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
                <Typography variant="caption">{t('footer')}</Typography>
                <Box>
                    <Typography variant="caption">
                        {t('attribution')}
                    </Typography>
                    <MyLink to="/license.md" text={'license'} variant={"caption"} color={"white"} />
                </Box>
            </Box>
        </AppBar>
    )
}

export default footer
