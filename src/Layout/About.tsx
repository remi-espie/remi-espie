import BGStyle from '../css/backgroundimage.module.css'
import {
    Box,
    Grid,
    IconButton,
    SvgIcon,
    Typography,
    useTheme,
} from '@suid/material'
import ShapeStyle from '../css/shape.module.css'
import { useLayoutContext } from '../LayoutContext.ts'
import { createMemo } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import EmojiText from '../component/EmojiText.tsx'
import MyLink from '../component/MyLink.tsx'
import Appear from '../component/Appear.tsx'
import Background from '../assets/computer-ram.jpg'

function About() {
    const theme = useTheme()

    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    return (
        <Box
            sx={{
                backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
                    Background +
                    ')',
                color: theme.palette.common.white,
            }}
            class={BGStyle.bgimage}
            id={'about'}
        >
            <Box
                class={`${ShapeStyle.shape} ${ShapeStyle.arrow} ${ShapeStyle.top}`}
                color={theme.palette.background.default}
            >
                <SvgIcon viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" />
                </SvgIcon>
            </Box>

            <Appear>
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            width: 'fit-content',
                            margin: 'auto',
                            mb: 4,
                            textAlign: 'center',
                        }}
                    >
                        {t('getCV')}{' '}
                        <MyLink
                            to={t('CVurl').toString()}
                            text={t('CVtext').toString()}
                            color={theme.palette.primary.light}
                            sx={{ fontWeight: 'bold' }}
                        />
                        .
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            m: 'auto',
                            width: 'max-content',
                            mb: 4,
                        }}
                    >
                        {t('about')}
                    </Typography>
                    <Box sx={{ width: 'max-content', margin: 'auto', mb: 4 }}>
                        <EmojiText emoji={'🥖'} text={t('birthText')} />
                        <EmojiText emoji={'🏠'} text={t('residencyText')} />
                        <EmojiText emoji={'📚'} text={t('studyText')} />
                        <EmojiText emoji={'💼'} text={t('workingText')} />
                        <EmojiText emoji={'🎓'} text={t('diplomaText')} />
                        <EmojiText emoji={'🌎'} text={t('langText')} />
                        <EmojiText emoji={'🚗'} text={t('carText')} />
                    </Box>
                </Box>
            </Appear>

            <Appear>
                <Typography
                    variant="h4"
                    sx={{ width: 'max-content', margin: 'auto', mb: 4 }}
                >
                    {t('contactMe')}
                </Typography>
                <Grid
                    container
                    sx={{ width: '80vw', mb: 4 }}
                    margin="auto"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                >
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                width: 'max-content',
                                m: 'auto',
                                mr: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <IconButton
                                    color="inherit"
                                    component="a"
                                    target="_blank"
                                    href="tel:+33604196893"
                                    sx={{ mr: '0.5em', fontSize: '1.25em' }}
                                >
                                    ☎️
                                </IconButton>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    {t('phone')} :
                                    <MyLink
                                        to={'tel:+33604196893'}
                                        text={'+33.6.04.19.68.93'}
                                        color={theme.palette.primary.light}
                                        sx={{ fontWeight: 'bold' }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'start',
                                    mt: '8px',
                                }}
                            >
                                <IconButton
                                    color="inherit"
                                    component="a"
                                    target="_blank"
                                    href="mailto:rem-e.84@orange.fr"
                                    sx={{
                                        mr: '0.5em',
                                        fontSize: '1.25em',
                                        transform: 'translateY(-8px)',
                                    }}
                                >
                                    📧
                                </IconButton>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {t('mail')} :
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'inline',
                                            }}
                                        >
                                            <MyLink
                                                to={'mailto:rem-e.84@orange.fr'}
                                                text={'rem-e.84@orange.fr'}
                                                color={
                                                    theme.palette.primary.light
                                                }
                                                sx={{
                                                    mt: 0,
                                                    mb: 0,
                                                    fontWeight: 'bold',
                                                }}
                                            />
                                            /
                                        </Box>
                                        <MyLink
                                            to={
                                                'mailto:remi.espie@etu.umontpellier.fr'
                                            }
                                            text={
                                                'remi.espie@etu.umontpellier.fr'
                                            }
                                            color={theme.palette.primary.light}
                                            sx={{
                                                mt: 0,
                                                mb: 0,
                                                fontWeight: 'bold',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <IconButton
                                color="inherit"
                                component="a"
                                target="_blank"
                                href="https://www.linkedin.com/in/rémi-espié/"
                                sx={{
                                    mr: 1,
                                }}
                            >
                                <SvgIcon>
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                                </SvgIcon>
                            </IconButton>
                            <Typography variant="body1">
                                Linkedin :
                                <MyLink
                                    to={
                                        'https://www.linkedin.com/in/rémi-espié/'
                                    }
                                    text={
                                        'https://www.linkedin.com/in/rémi-espié/'
                                    }
                                    color={theme.palette.primary.light}
                                    sx={{ fontWeight: 'bold' }}
                                    target={'_blank'}
                                />
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <IconButton
                                color="inherit"
                                component="a"
                                target="_blank"
                                href="https://github.com/remi-espie"
                                sx={{
                                    mr: 1,
                                }}
                            >
                                <SvgIcon>
                                    <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27" />
                                </SvgIcon>
                            </IconButton>
                            <Typography variant="body1">
                                GitHub :
                                <MyLink
                                    to={'https://github.com/remi-espie/'}
                                    text={'https://github.com/remi-espie/'}
                                    color={theme.palette.primary.light}
                                    sx={{ fontWeight: 'bold' }}
                                    target={'_blank'}
                                />
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Appear>

            <Box
                class={`${ShapeStyle.shape} ${ShapeStyle.wave} ${ShapeStyle.bottom}`}
                color={theme.palette.background.default}
                id={'experiences'}
            >
                <SvgIcon viewBox="0 0 1200 120" preserveAspectRatio="none">
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
    )
}

export default About
