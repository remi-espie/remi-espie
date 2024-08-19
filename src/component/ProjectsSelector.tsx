import {
    Box,
    Card,
    CardContent,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
    useTheme,
} from '@suid/material'
import { createEffect, createSignal, For } from 'solid-js'
import { Technologies } from '../i18n/technologies.ts'
import MyLink from './MyLink.tsx'
import { SelectChangeEvent } from '@suid/material/Select'
import MyCardMedia from './MyCardMedia.tsx'
import { Motion } from 'solid-motionone'

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
    const theme = useTheme()

    const [techList, setTechList] = createSignal<string[]>([])

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value },
        } = event
        setTechList(value)
    }

    // False positive
    // eslint-disable-next-line solid/reactivity
    const [projects, setProjects] = createSignal(props.projectsList)

    createEffect(() => {
        setProjects(
            props.projectsList.filter((project) =>
                techList().every((tech) => project.technologies.includes(tech))
            )
        )
    })

    return (
        <>
            <FormControl
                sx={{
                    m: 'auto',
                    width: '80vw',
                    maxWidth: 400,
                    display: 'flex',
                }}
            >
                <InputLabel>Tech</InputLabel>
                <Select
                    multiple
                    value={techList()}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tech" />}
                    MenuProps={{
                        disableScrollLock: true,
                        PaperProps: {
                            style: {
                                'max-height': '400px',
                            },
                        },
                    }}
                    sx={{
                        backgroundColor: theme.palette.background.default,
                    }}
                >
                    <For each={[...props.techs]}>
                        {(tech) => <MenuItem value={tech}>{tech}</MenuItem>}
                    </For>
                </Select>
            </FormControl>
            <Grid
                container
                sx={{ width: '80vw', m: 'auto', mb: 32 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
            >
                <For each={projects()}>
                    {(item) => (
                        <Grid item xs={4} sx={{ p: 2 }}>
                            <Motion
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
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
                                                <Typography
                                                    component="div"
                                                    variant="h5"
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant="subtitle1"
                                                    color="text.secondary"
                                                    component="div"
                                                >
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <MyCardMedia img={item.image} />
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
                                            <For each={item.technologies}>
                                                {(tech) => (
                                                    <Chip
                                                        label={tech}
                                                        sx={{
                                                            backgroundColor:
                                                                Technologies.find(
                                                                    (t) => {
                                                                        return (
                                                                            t.name ===
                                                                            tech
                                                                        )
                                                                    }
                                                                )?.color,
                                                        }}
                                                    />
                                                )}
                                            </For>
                                        </Box>
                                        <MyLink
                                            to={item.url}
                                            text={item.url}
                                            target={'_blank'}
                                            color={theme.palette.primary.main}
                                        />
                                    </Box>
                                </Card>
                            </Motion>
                        </Grid>
                    )}
                </For>
            </Grid>
        </>
    )
}

export default ProjectsSelector
