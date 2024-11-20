import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    Typography,
    useTheme,
} from '@suid/material'
import { createEffect, createSignal, For } from 'solid-js'
import { Technologies } from '../i18n/technologies.ts'
import MyLink from './MyLink.tsx'
import MyCardMedia from './MyCardMedia.tsx'
import { Motion } from 'solid-motionone'
import { Select } from '@thisbeyond/solid-select'
import '@thisbeyond/solid-select/style.css'
import SelectStyle from '../css/selector.module.css'

const theme = useTheme()

function GetCard(props: {
    item: {
        title: string
        description: string
        technologies: string[]
        image: string
        url: string
    }
}) {
    return (
        <Grid item xs={4} sx={{ p: 2 }}>
            <Motion
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.5 }}
                inView={{ opacity: 1, scale: 1 }}
                inViewOptions={{
                    once: true,
                }}
                style={{
                    height: '100%',
                }}
            >
                <Card
                    elevation={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'background-color 0.33s',
                        height: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ display: 'flex' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <CardContent
                                sx={{
                                    flex: '1 0 auto',
                                }}
                            >
                                <Typography component="div" variant="h5">
                                    {props.item.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {props.item.description}
                                </Typography>
                            </CardContent>
                        </Box>
                        <MyCardMedia
                            img={props.item.image}
                            alt={props.item.title + ' - illustration'}
                        />
                    </Box>
                    <Box sx={{ m: 1 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 1,
                            }}
                        >
                            <For each={props.item.technologies}>
                                {(tech) => (
                                    <Chip
                                        label={tech}
                                        sx={{
                                            backgroundColor: Technologies.find(
                                                (t) => {
                                                    return t.name === tech
                                                }
                                            )?.color,
                                        }}
                                    />
                                )}
                            </For>
                        </Box>
                        <MyLink
                            to={props.item.url}
                            text={props.item.url}
                            target={'_blank'}
                            color={theme.palette.primary.main}
                        />
                    </Box>
                </Card>
            </Motion>
        </Grid>
    )
}

function ProjectsSelector(props: {
    techs: Set<string>
    projectsList: {
        title: string
        description: string
        technologies: string[]
        image: string
        url: string
    }[]
}) {
    const [techList, setTechList] = createSignal<string[]>([...props.techs])

    const [projects, setProjects] = createSignal(props.projectsList)

    const [selectedTechs, setSelectedTechs] = createSignal<string[]>([])

    createEffect(() => {
        setTechList([...props.techs])
        setProjects(props.projectsList)
    })

    function handleSelectChange(value: string[]) {
        setSelectedTechs(value)

        setTechList(() => {
            return [...props.techs].filter(
                (tech) => !selectedTechs().includes(tech)
            )
        })

        setProjects(() => {
            return props.projectsList.filter((project) =>
                selectedTechs().every((tech) =>
                    project.technologies.includes(tech)
                )
            )
        })
    }

    return (
        <>
            <Box
                style={{
                    '--bg-color': theme.palette.common.white,
                    '--text-color': theme.palette.common.black,
                }}
                class={SelectStyle.select}
            >
                <Select
                    multiple
                    options={[...techList()]}
                    onChange={handleSelectChange}
                    placeholder={'Technologies...'}
                />
            </Box>
            <Grid
                container
                sx={{ width: '80vw', m: 'auto', mb: 32 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
            >
                <For each={projects()}>{(item) => <GetCard item={item} />}</For>
            </Grid>
        </>
    )
}

export default ProjectsSelector
