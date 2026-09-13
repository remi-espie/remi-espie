import {
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    Typography,
    useTheme,
} from '~/ui.tsx'
import { createEffect, createMemo, createSignal, For, Show } from 'solid-js'
import { Technologies } from '../i18n/technologies.ts'
import MyLink from './MyLink.tsx'
import MyCardMedia from './MyCardMedia.tsx'
import SelectStyle from '../css/selector.module.css'

function GetCard(props: {
    item: {
        title: string
        description: string
        technologies: string[]
        image: string
        url: string
    }
}) {
    const theme = useTheme()
    return (
        <Grid item xs={4} sx={{ p: 2 }}>
            <div class="appear appear-visible" style={{ height: '100%' }}>
                <Card
                    elevation={12}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'background-color 0.33s',
                        height: '100%',
                        justifyContent: 'space-between',
                        padding: '0.5em',
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
                                    sx={{ fontSize: '1.65rem' }}
                                >
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
                            sx={{
                                objectFit: 'contain',
                                m: 1,
                                maxWidth: '140px',
                                maxHeight: '140px',
                            }}
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
                                            margin: '2px',
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
            </div>
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
    const [search, setSearch] = createSignal('')
    const [focused, setFocused] = createSignal(false)
    const [activeIndex, setActiveIndex] = createSignal(0)

    createEffect(() => {
        setTechList([...props.techs])
        setProjects(props.projectsList)
    })

    function handleSelectChange(value: string[]) {
        setSelectedTechs(value)

        setProjects(() => {
            return props.projectsList.filter((project) =>
                value.every((tech) => project.technologies.includes(tech))
            )
        })
    }

    const availableTechs = createMemo(() =>
        techList().filter(
            (tech) =>
                !selectedTechs().includes(tech) &&
                tech.toLowerCase().includes(search().toLowerCase())
        )
    )

    function addTechnology(tech: string) {
        handleSelectChange([...selectedTechs(), tech])
        setSearch('')
        setActiveIndex(0)
    }

    function handleSearchKeyDown(event: KeyboardEvent) {
        const options = availableTechs()
        if (event.key === 'ArrowDown' && options.length > 0) {
            event.preventDefault()
            setFocused(true)
            setActiveIndex((index) => (index + 1) % options.length)
        } else if (event.key === 'ArrowUp' && options.length > 0) {
            event.preventDefault()
            setActiveIndex((index) =>
                index === 0 ? options.length - 1 : index - 1
            )
        } else if (event.key === 'Enter' && options[activeIndex()]) {
            event.preventDefault()
            addTechnology(options[activeIndex()])
        } else if (event.key === 'Escape') {
            setFocused(false)
        }
    }

    return (
        <>
            <Box
                style={{
                    '--bg-color': 'var(--color-surface)',
                    '--text-color': 'var(--color-text)',
                }}
                class={SelectStyle.select}
            >
                <div class={SelectStyle.searchbox}>
                    <div
                        class={SelectStyle.input}
                        classList={{
                            [SelectStyle.focused]: focused(),
                        }}
                    >
                        <For each={selectedTechs()}>
                            {(tech) => (
                                <span class={SelectStyle.chip}>
                                    {tech}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleSelectChange(
                                                selectedTechs().filter(
                                                    (item) => item !== tech
                                                )
                                            )
                                        }
                                        aria-label={`Remove ${tech}`}
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                        </For>
                        <input
                            id="technology-search"
                            type="text"
                            role="combobox"
                            value={search()}
                            placeholder={
                                selectedTechs().length === 0
                                    ? 'Technologies'
                                    : 'Add technology'
                            }
                            autocomplete="off"
                            aria-autocomplete="list"
                            aria-expanded={
                                focused() && availableTechs().length > 0
                            }
                            aria-controls="technology-options"
                            onFocus={() => setFocused(true)}
                            onBlur={() =>
                                setTimeout(() => setFocused(false), 100)
                            }
                            onInput={(event) => {
                                setSearch(event.currentTarget.value)
                                setActiveIndex(0)
                            }}
                            onKeyDown={handleSearchKeyDown}
                        />
                        <span class={SelectStyle.arrow} aria-hidden="true">
                            ▾
                        </span>
                    </div>
                    <Show when={focused() && availableTechs().length > 0}>
                        <div
                            class={SelectStyle.options}
                            id="technology-options"
                            role="listbox"
                        >
                            <For each={availableTechs()}>
                                {(tech, index) => (
                                    <button
                                        type="button"
                                        role="option"
                                        aria-selected={
                                            index() === activeIndex()
                                        }
                                        classList={{
                                            [SelectStyle.active]:
                                                index() === activeIndex(),
                                        }}
                                        onMouseDown={(event) =>
                                            event.preventDefault()
                                        }
                                        onClick={() => addTechnology(tech)}
                                    >
                                        {tech}
                                    </button>
                                )}
                            </For>
                        </div>
                    </Show>
                </div>
            </Box>
            <Grid
                container
                rowSpacing={2}
                sx={{ width: '80vw', m: 'auto', mb: 32 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
            >
                <For each={projects()}>{(item) => <GetCard item={item} />}</For>
            </Grid>
        </>
    )
}

export default ProjectsSelector
