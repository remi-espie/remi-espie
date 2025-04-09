import BGStyle from '../css/backgroundimage.module.css'
import { Box, Grid, SvgIcon, Typography, useTheme } from '@suid/material'
import ShapeStyle from '../css/shape.module.css'
import Appear from '../component/Appear.tsx'
import MyLink from '../component/MyLink.tsx'
import { useLayoutContext } from '../LayoutContext.ts'
import { createMemo, For } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '../i18n/types.ts'
import ProjectsSelector from '../component/ProjectsSelector.tsx'
import Background from '../assets/macro-heat-sink.webp'
import GitHubCard from '~/component/GitHubCard.tsx'

function Projects() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    const t = i18n.translator(dict)

    const techs = new Set<string>()
    dictionaries[context.language].AcademicProjectsList.map((project) =>
        project.technologies.map((tech) => techs.add(tech))
    )

    return (
        <Box
            sx={{
                backgroundImage: 'url(' + Background + ')',
            }}
            class={BGStyle.bgimage}
            id={'projects'}
            color={theme.palette.common.white}
        >
            <Box
                class={`${ShapeStyle.shape} ${ShapeStyle.wave} ${ShapeStyle.top}`}
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
            <Appear>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        mt: 4,
                        maxWidth: '60vw',
                        m: 'auto',
                        textShadow:
                            '-1px -1px 0 #000,0 -1px 0 #000,1px -1px 0 #000,1px 0 0 #000,1px 1px 0 #000,0 1px 0 #000,-1px 1px 0 #000,-1px 0 0 #000;',
                    }}
                >
                    {t('GitHubProjects')}
                    <MyLink
                        to={'https://github.com/remi-espie'}
                        text={'https://github.com/remi-espie'}
                        target={'_blank'}
                        color={theme.palette.primary.light}
                    />
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        m: 4,
                        textShadow:
                            '-1px -1px 0 #000,0 -1px 0 #000,1px -1px 0 #000,1px 0 0 #000,1px 1px 0 #000,0 1px 0 #000,-1px 1px 0 #000,-1px 0 0 #000;',
                    }}
                >
                    {t('AcademicProjects')}
                </Typography>
                <ProjectsSelector
                    techs={techs}
                    projectsList={t('AcademicProjectsList')}
                />
            </Appear>

            <Appear>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        m: 4,
                        textShadow:
                            '-1px -1px 0 #000,0 -1px 0 #000,1px -1px 0 #000,1px 0 0 #000,1px 1px 0 #000,0 1px 0 #000,-1px 1px 0 #000,-1px 0 0 #000;',
                    }}
                >
                    {t('PersonalProjects')}
                </Typography>
                <ProjectsSelector
                    techs={techs}
                    projectsList={t('PersonalProjectsList')}
                />
            </Appear>

            <Appear>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        m: 4,
                        textShadow:
                            '-1px -1px 0 #000,0 -1px 0 #000,1px -1px 0 #000,1px 0 0 #000,1px 1px 0 #000,0 1px 0 #000,-1px 1px 0 #000,-1px 0 0 #000;',
                    }}
                >
                    {t('GitHubPRs')}
                </Typography>
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 2, sm: 8, md: 12 }}
                    sx={{ width: '80vw', m: 'auto', mb: 32 }}
                >
                    <For each={t('GitHubPRsList')}>
                        {(pr: string) => <GitHubCard link={pr} />}
                    </For>
                </Grid>
            </Appear>

            <Box
                class={`${ShapeStyle.shape} ${ShapeStyle.wave} ${ShapeStyle.bottom}`}
                color={theme.palette.background.default}
                id={'hobbies'}
            >
                <SvgIcon viewBox="0 0 1000 120" preserveAspectRatio="none">
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

export default Projects
