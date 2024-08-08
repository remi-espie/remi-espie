import MyLink from './MyLink.tsx'
import { Box } from '@suid/material'
import { useLayoutContext } from '../LayoutContext.ts'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import NavIcons from './NavIcons.tsx'

function HeaderNav(props: { color: string }) {
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    return (
        <Box>
            <MyLink
                to="#about"
                text={t('about')}
                color={props.color}
                sx={{
                    display: 'inline-block',
                    height: 'max-content',
                    letterSpacing: '-0.1px',
                }}
            />
            |
            <MyLink
                to="#experiences"
                text={t('experiences')}
                color={props.color}
                sx={{
                    display: 'inline-block',
                    height: 'max-content',
                    letterSpacing: '-0.1px',
                }}
            />
            |
            <MyLink
                to="#projects"
                text={t('projects')}
                color={props.color}
                sx={{
                    display: 'inline-block',
                    height: 'max-content',
                    letterSpacing: '-0.1px',
                }}
            />
            <NavIcons />
        </Box>
    )
}

export default HeaderNav
