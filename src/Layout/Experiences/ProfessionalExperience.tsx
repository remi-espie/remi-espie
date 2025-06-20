import { Box, Grid, useTheme } from '@suid/material'
import { createMemo, For } from 'solid-js'
import ZoomStyle from '../../css/zoom-on-hover.module.css'
import { useLayoutContext } from '~/LayoutContext.ts'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '~/i18n/types.ts'
import GE from '../../assets/ge.webp'
import ATS from '../../assets/ats.webp'
import Appear from '../../component/Appear.tsx'
import MyTypography from '~/component/MyTypography.tsx'

function ProfessionalExperience() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    const t = i18n.translator(dict)

    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Appear>
                <MyTypography
                    variant="h4"
                    id={'professionalXP'}
                    sx={{
                        m: 'auto',
                        width: 'fit-content',
                        textAlign: 'center',
                        mt: 4,
                        mb: 8,
                    }}
                >
                    {t('professionalXP')}
                </MyTypography>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={4}
                    sx={{ width: '80vw', m: 'auto', mb: 32 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                >
                    <Grid
                        item
                        xs={6}
                        sx={{
                            alignContent: 'center',
                        }}
                    >
                        <MyTypography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            GE: Grid Solutions
                        </MyTypography>
                        <MyTypography variant={'subtitle1'} sx={{ mb: 4 }}>
                            🇫🇷 Montpellier - 2022-2025
                        </MyTypography>
                        <MyTypography variant={'body1'}>
                            {t('GEparagraph')}
                            <ul>
                                <For each={t('GElist')}>
                                    {(item) => <li>{item}</li>}
                                </For>
                            </ul>
                        </MyTypography>
                    </Grid>
                    <Grid item xs={6} sx={{ width: 'inherit' }}>
                        <Box class={ZoomStyle.zoomContainer}>
                            <img
                                src={GE}
                                style={{
                                    'max-height': '480px',
                                }}
                                alt={'GE Grid Solutions Montpellier'}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Appear>
            <Appear>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={4}
                    sx={{ width: '80vw', m: 'auto', mb: 32 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                >
                    <Grid item xs={6} sx={{ width: 'inherit' }}>
                        <Box class={ZoomStyle.zoomContainer}>
                            <img
                                src={ATS}
                                style={{
                                    'max-height': '480px',
                                }}
                                alt={'ATS Sport - Pignan'}
                            />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        sx={{
                            alignContent: 'center',
                        }}
                    >
                        <MyTypography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            ATS Sport
                        </MyTypography>
                        <MyTypography variant={'subtitle1'} sx={{ mb: 4 }}>
                            🇫🇷 Pignan - 2021
                        </MyTypography>
                        <MyTypography variant={'body1'}>
                            {t('ATSparagraph')}
                            <ul>
                                <For each={t('ATSlist')}>
                                    {(item) => <li>{item}</li>}
                                </For>
                            </ul>
                        </MyTypography>
                    </Grid>
                </Grid>
            </Appear>
        </Box>
    )
}

export default ProfessionalExperience
