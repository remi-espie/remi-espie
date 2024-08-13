import { Motion } from 'solid-motionone'
import { Box, Grid, Typography, useTheme } from '@suid/material'
import ZoomStyle from '../../css/zoom-on-hover.module.css'
import { useLayoutContext } from '../../LayoutContext.ts'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../../i18n/types.ts'

function PersonalExperience() {
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
                    {t('personalXP')}
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
                            Game Jams
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ mb: 4 }}>
                            2020, 2021 & 2022
                        </Typography>
                        <Typography variant={'body1'}>
                            {t('JamsParagraph')}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ width: 'inherit' }}>
                        <Box class={ZoomStyle.zoomContainer}>
                            <img
                                src={
                                    'https://drive.google.com/u/0/drive-viewer/AKGpihZIBy5HHovtM5NNJLmWEm87MykliHhNLbDhjUbH7g7JZFqQpD-snks1HMf6Ls8WXk_Fot3QpgsqLJPeE5Ai-5aJ3NG2kbGc_NY'
                                }
                                style={{
                                    height: '405px',
                                    width: '720px',
                                }}
                                alt={'Code Game Jam 2020 - Montpellier'}
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
                                    'https://iut-montpellier-sete.edu.umontpellier.fr/files/2023/02/La_halle_ca_taffe-1024x768.jpg'
                                }
                                style={{
                                    height: '405px',
                                    width: '720px',
                                }}
                                alt={"Nuit de l'info 2023 - Montpellier"}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            Nuits de l'Info
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ mb: 4 }}>
                            2019, 2020 & 2023
                        </Typography>
                        <Typography variant={'body1'}>
                            {t('NDIparagraph')}
                        </Typography>
                    </Grid>
                </Grid>
            </Motion>
        </Box>
    )
}

export default PersonalExperience
