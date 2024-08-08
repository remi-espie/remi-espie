import { Box, Button, Grid, Typography } from '@suid/material'
import Person from '@suid/icons-material/Person'
import SubdirectoryArrowRight from '@suid/icons-material/SubdirectoryArrowRight'
import { useLayoutContext } from '../LayoutContext.ts'
import { createEffect, createMemo, createSignal } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import TypeStyle from '../component/typewriter.module.css'
import Typer from '../component/Typer.tsx'

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

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    return (
        <Grid container sx={{ height: '90vh' }}>
            <Grid item xs={8}>
                <Box
                    sx={{
                        p: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h4">
                        {helloText() ? (
                            <Typer
                                fulltext={t('entrypoint_hello')}
                                delay={1000}
                                timeout={150}
                                onFinish={() => setDescText(true)}
                            />
                        ) : (
                            ' '
                        )}
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
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
                            ' '
                        )}
                    </Typography>
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
                        <Typography variant="h6">
                            {t('entrypoint_button')}
                        </Typography>
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <Person
                        sx={{ width: 'max-content', height: 'max-content' }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Entrypoint
