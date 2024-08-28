import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    SvgIcon,
    Typography,
    useTheme,
} from '@suid/material'
import ShapeStyle from '../css/shape.module.css'
import { useLayoutContext } from '~/LayoutContext.ts'
import { createMemo, createSignal, For } from 'solid-js'
import * as i18n from '@solid-primitives/i18n'
import { dictionaries } from '~/i18n/types.ts'
import Appear from '~/component/Appear'
import ReactiveCardStyle from '../css/reactive-card.module.css'

function CustomCardMedia(props: { img: string; alt: string }) {
    const [image, setImage] = createSignal<string>('')

    // eslint-disable-next-line solid/reactivity
    if (props.img.startsWith('http')) {
        // eslint-disable-next-line solid/reactivity
        setImage(props.img)
    } else {
        // @vite-ignore
        // eslint-disable-next-line solid/reactivity
        import(`../assets/${props.img}.jpg`).then((img) => {
            setImage(img.default)
        })
    }

    return (
        <CardMedia
            component="img"
            image={image()}
            alt={props.alt}
            sx={{
                height: 200,
            }}
        />
    )
}

function Hobbies() {
    const theme = useTheme()
    const context = useLayoutContext()

    const dict = createMemo(() => {
        return i18n.flatten(dictionaries[context.language])
    })

    // Working thanks to context
    // eslint-disable-next-line solid/reactivity
    const t = i18n.translator(dict)

    return (
        <>
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
                {t('hobbies')}
            </Typography>
            <For each={t('HobbiesList')}>
                {(hobby, index) => (
                    <Box
                        sx={{
                            mt: index() !== 0 ? '-100px' : '0',
                            transform:
                                index() % 2 === 0
                                    ? 'translateX(-250px)'
                                    : 'translateX(250px)',
                        }}
                        class={ReactiveCardStyle.small_screen}
                    >
                        <Appear>
                            <Card
                                sx={{
                                    width: '100%',
                                    borderRadius: 3,
                                }}
                            >
                                <CardHeader
                                    title={hobby.title}
                                    sx={{ textAlign: 'center' }}
                                />
                                <CustomCardMedia
                                    img={hobby.image}
                                    alt={hobby.title + ' - illustration'}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        textAlign={'justify'}
                                    >
                                        {hobby.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Appear>
                    </Box>
                )}
            </For>
            <Box
                class={`${ShapeStyle.shape} ${ShapeStyle.wave} ${ShapeStyle.bottom}`}
                color={theme.palette.primary.main}
            >
                <SvgIcon viewBox="100 0 1500 120" preserveAspectRatio="none">
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
        </>
    )
}

export default Hobbies
