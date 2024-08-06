import { AppBar, Typography } from '@suid/material'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import { useLayoutContext } from '../LayoutContext.ts'

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
            sx={{ top: 'auto', bottom: 0 }}
            enableColorOnDark
        >
            <Typography variant="caption" sx={{ m: 1 }}>
                {t('footer')}
            </Typography>
        </AppBar>
    )
}

export default footer
