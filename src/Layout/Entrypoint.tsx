import { Box, Button, Grid, Typography } from '@suid/material'
import SubdirectoryArrowRight from '@suid/icons-material/SubdirectoryArrowRight'
import { useLayoutContext } from '../LayoutContext.ts'
import { createEffect, createMemo, createSignal } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import TypeStyle from '../css/typewriter.module.css'
import Typer from '../component/Typer.tsx'
import MyTypography from '~/component/MyTypography.tsx'

function Entrypoint() {
    const context = useLayoutContext()

    const [helloText, setHelloText] = createSignal(true)
    const [descText, setDescText] = createSignal(false)
    const [cursor, setCursor] = createSignal(false)

    const dict = createMemo(() => {
        setHelloText(false)
        setDescText(false)
        setCursor(false)
        return i18n.flatten(dictionaries[context.language])
    })

    createEffect(() => {
        if (!helloText()) {
            setHelloText(true)
        }
    })

    const t = i18n.translator(dict)

    return (
        <Grid
            container
            sx={{ height: '90vh' }}
            columns={{ xs: 2, sm: 8, md: 12 }}
        >
            <Grid item xs={7}>
                <Box
                    sx={{
                        p: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <MyTypography variant="h4">
                        {helloText() ? (
                            <Typer
                                fulltext={t('entrypoint_hello')}
                                delay={1000}
                                timeout={150}
                                onFinish={() => setDescText(true)}
                            />
                        ) : (
                            <noscript>{t('entrypoint_hello')}</noscript>
                        )}
                    </MyTypography>
                    <MyTypography variant="h5" sx={{ mt: 2, mb: 4 }}>
                        {descText() ? (
                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typer
                                    fulltext={t('entrypoint_description')}
                                    timeout={100}
                                    delay={1000}
                                    onFinish={() => setCursor(true)}
                                />
                                {cursor() && (
                                    <Typography
                                        class={TypeStyle.cursor}
                                        variant="h5"
                                    >
                                        _
                                    </Typography>
                                )}
                            </Box>
                        ) : (
                            <noscript>
                                {t('entrypoint_description')}
                                <span class={TypeStyle.cursor}>_</span>
                            </noscript>
                        )}
                    </MyTypography>
                    <Button
                        href="#about"
                        variant="contained"
                        color="primary"
                        sx={{ width: 'max-content', p: 2 }}
                        style={{
                            border: '0',
                            'border-radius': '37% 49% 77% 32%/45% 63% 42% 58%',
                        }}
                        endIcon={<SubdirectoryArrowRight />}
                    >
                        <MyTypography variant="h6">
                            {t('entrypoint_button')}
                        </MyTypography>
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={'/me.webp'}
                        alt="Rémi Espié"
                        style={{
                            width: '60%',
                            height: 'auto',
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Entrypoint
