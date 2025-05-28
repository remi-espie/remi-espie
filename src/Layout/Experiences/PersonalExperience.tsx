import { Box, Grid, Typography, useTheme } from '@suid/material'
import ZoomStyle from '../../css/zoom-on-hover.module.css'
import { useLayoutContext } from '~/LayoutContext.ts'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '~/i18n/types.ts'
import CGJ from '../../assets/cgj.webp'
import NDI from '../../assets/ndi.webp'
import hackathon from '../../assets/hackathon.webp'
import polycloud from '../../assets/polycloud.webp'
import Appear from '../../component/Appear.tsx'

function PersonalExperience() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    const t = i18n.translator(dict)

    return (
        <Box sx={{ textAlign: 'justify' }}>
            <Appear>
                <Typography
                    variant="h4"
                    id={'personalXP'}
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
                    <Grid
                        item
                        xs={6}
                        sx={{
                            alignContent: 'center',
                        }}
                    >
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            Hackathon Rust
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ mb: 4 }}>
                            2024
                        </Typography>
                        <Typography variant={'body1'}>
                            {t('HackathonParagraph')}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ width: 'inherit' }}>
                        <Box class={ZoomStyle.zoomContainer}>
                            <img
                                src={hackathon}
                                style={{
                                    'max-height': '480px',
                                }}
                                alt={
                                    'Hackathon Rust 2024 - Polytech Montpellier'
                                }
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
                                src={polycloud}
                                style={{
                                    'max-height': '480px',
                                }}
                                alt={'Polycloud 2024 - Montpellier'}
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
                        <Typography
                            variant={'h6'}
                            color={theme.palette.primary.main}
                        >
                            Polycloud
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ mb: 4 }}>
                            2024
                        </Typography>
                        <Typography variant={'body1'}>
                            {t('PolycloudParagraph')}
                        </Typography>
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
                    <Grid
                        item
                        xs={6}
                        sx={{
                            alignContent: 'center',
                        }}
                    >
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
                                src={CGJ}
                                style={{
                                    'max-height': '480px',
                                }}
                                alt={'Code Game Jam 2020 - Montpellier'}
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
                                src={NDI}
                                style={{
                                    'max-height': '480px',
                                }}
                                alt={"Nuit de l'info 2023 - Montpellier"}
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
            </Appear>
        </Box>
    )
}

export default PersonalExperience
