import { Box, SvgIcon, useTheme } from '@suid/material'
import TimelineStyle from '../../css/timeline.module.css'
import { useLayoutContext } from '~/LayoutContext.ts'
import { createMemo, For } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '~/i18n/types.ts'
import BgImage from '../../css/backgroundimage.module.css'
import ShapeStyle from '../../css/shape.module.css'
import UM from '../../assets/um.webp'
import Appear from '../../component/Appear.tsx'
import MyTypography from '~/component/MyTypography.tsx'

function Education() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    const t = i18n.translator(dict)

    return (
        <>
            <MyTypography
                variant="h4"
                id={'education'}
                sx={{
                    m: 'auto',
                    width: 'fit-content',
                    textAlign: 'center',
                    mt: 4,
                    mb: 8,
                }}
            >
                {t('education')}
            </MyTypography>
            <Box
                class={`${TimelineStyle.timeline} ${BgImage.bgimage}`}
                style={{
                    '--primary': theme.palette.primary.main,
                    '--contrast': theme.palette.background.default,
                }}
                sx={{
                    color: theme.palette.common.white,
                    backgroundImage:
                        'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(' +
                        UM +
                        ')',
                }}
            >
                <ul style={{ 'padding-bottom': '64px' }}>
                    <li>
                        <Appear margin={'-150px'}>
                            <MyTypography variant={'h5'}>2025</MyTypography>
                            <MyTypography variant={'h6'}>
                                {t('ingeTitle')}
                            </MyTypography>
                            <For each={t('ingeText')}>
                                {(item) => (
                                    <MyTypography variant={'body1'}>
                                        {item}
                                    </MyTypography>
                                )}
                            </For>
                            <MyTypography variant={'subtitle2'}>
                                Polytech - Montpellier, France 🇫🇷
                            </MyTypography>
                        </Appear>
                    </li>
                    <li>
                        <Appear margin={'-150px'}>
                            <MyTypography variant={'h5'}>2022</MyTypography>
                            <MyTypography variant={'h6'}>
                                {t('duetiTitle')}
                            </MyTypography>
                            <For each={t('duetiText')}>
                                {(item) => (
                                    <MyTypography variant={'body1'}>
                                        {item}
                                    </MyTypography>
                                )}
                            </For>
                            <MyTypography variant={'subtitle2'}>
                                UQAC - Chicoutimi, Québec, Canada 🇨🇦
                            </MyTypography>
                        </Appear>
                    </li>
                    <li>
                        <Appear margin={'-150px'}>
                            <MyTypography variant={'h5'}>2021</MyTypography>
                            <MyTypography variant={'h6'}>
                                {t('dutTitle')}
                            </MyTypography>
                            <For each={t('dutText')}>
                                {(item) => (
                                    <MyTypography variant={'body1'}>
                                        {item}
                                    </MyTypography>
                                )}
                            </For>
                            <MyTypography variant={'subtitle2'}>
                                IUT Montpellier-Sète - Montpellier, France 🇫🇷
                            </MyTypography>
                        </Appear>
                    </li>
                    <li>
                        <Appear margin={'-150px'}>
                            <MyTypography variant={'h5'}>2018</MyTypography>
                            <MyTypography variant={'h6'}>
                                {t('bacTitle')}
                            </MyTypography>
                            <For each={t('bacText')}>
                                {(item) => (
                                    <MyTypography variant={'body1'}>
                                        {item}
                                    </MyTypography>
                                )}
                            </For>
                            <MyTypography variant={'subtitle2'}>
                                Lycée Henry Fabre - Carpentras, France 🇫🇷
                            </MyTypography>
                        </Appear>
                    </li>
                </ul>
                <Box
                    class={`${ShapeStyle.shape} ${ShapeStyle.wave} ${ShapeStyle.bottom}`}
                    color={theme.palette.background.default}
                >
                    <SvgIcon viewBox="0 0 1500 120" preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5"
                        />
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
                    </SvgIcon>
                </Box>
            </Box>
        </>
    )
}

export default Education
