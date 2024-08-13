import { Motion } from 'solid-motionone'
import { Box, Grid, Typography, useTheme } from '@suid/material'
import { createMemo, For } from 'solid-js'
import ZoomStyle from '../../css/zoom-on-hover.module.css'
import { useLayoutContext } from '../../LayoutContext.ts'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../../i18n/types.ts'

function ProfessionalExperience() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Motion
                initial={false}
                animate={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                inView={{ opacity: 1, y: 0 }}
                inViewOptions={{ once: true }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        m: 'auto',
                        width: 'fit-content',
                        textAlign: 'center',
                        mt: 4,
                        mb: 8,
                    }}
                >
                    {t('professionalXP')}
                </Typography>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={4}
                    sx={{ width: '80vw', m: 'auto', mb: 32 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                >
                    <Grid item xs={6}>
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            GE: Grid Solutions
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ mb: 4 }}>
                            🇫🇷 Montpellier - 2022-2025
                        </Typography>
                        <Typography variant={'body1'}>
                            {t('GEparagraph')}
                            <ul>
                                <For each={t('GElist')}>
                                    {(item) => <li>{item}</li>}
                                </For>
                            </ul>
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ width: 'inherit' }}>
                        <Box class={ZoomStyle.zoomContainer}>
                            <img
                                src={
                                    'https://lh3.googleusercontent.com/p/AF1QipNnbtUADkWph3sGd6Zx4esS3KNEjrcLsKURaGgA=s680-w680-h510'
                                }
                                alt={'GE Grid Solutions Montpellier'}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Motion>
            <Motion
                initial={false}
                animate={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                inView={{ opacity: 1, y: 0 }}
                inViewOptions={{ once: true }}
            >
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
                                src={
                                    'https://lh3.googleusercontent.com/p/AF1QipPOlBTShD2SeUyNX5ugqSRP7l3EY8hu1oQvj6jD=s920'
                                }
                                style={{
                                    height: '405px',
                                    width: '720px',
                                }}
                                alt={'ATS Sport - Pignan'}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            ATS Sport
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ mb: 4 }}>
                            🇫🇷 Pignan - 2021
                        </Typography>
                        <Typography variant={'body1'}>
                            {t('ATSparagraph')}
                            <ul>
                                <For each={t('ATSlist')}>
                                    {(item) => <li>{item}</li>}
                                </For>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
            </Motion>
        </Box>
    )
}

export default ProfessionalExperience
