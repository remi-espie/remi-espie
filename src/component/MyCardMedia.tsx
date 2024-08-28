import { CardMedia } from '@suid/material'
import { createSignal } from 'solid-js'

// This component does not need any reactivity
function MyCardMedia(props: { img: string, alt: string }) {
    const [image, setImage] = createSignal<string>('')

    // eslint-disable-next-line solid/reactivity
    if (props.img.startsWith('http')) {
        // eslint-disable-next-line solid/reactivity
        setImage(props.img)
    } else {
        // @vite-ignore
        // eslint-disable-next-line solid/reactivity
        import(`../assets/${props.img}.png`).then((img) => {
            setImage(img.default)
        })
    }

    return (
        <CardMedia
            component="img"
            image={image()}
            alt={props.alt}
            sx={{
                objectFit: 'contain',
                m: 1,
            }}
        />
    )
}

export default MyCardMedia
