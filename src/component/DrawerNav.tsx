import MyLink from './MyLink.tsx'
import { useLayoutContext } from '../LayoutContext.ts'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import NavIcons from './NavIcons.tsx'

function DrawerNav(props: { color: string }) {
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    return (
        <>
            <MyLink to="#about" text={t('about')} color={props.color} />
            <MyLink
                to="#experiences"
                text={t('experiences')}
                color={props.color}
            />
            <MyLink to="#projects" text={t('projects')} color={props.color} />
            <MyLink to="#hobbies" text={t('hobbies')} color={props.color} />
            <NavIcons />
        </>
    )
}

export default DrawerNav
