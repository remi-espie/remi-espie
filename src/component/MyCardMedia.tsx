import { CardMedia } from '@suid/material'
import { createSignal } from 'solid-js'

function MyCardMedia(props: { img: string }) {
    const [image, setImage] = createSignal<string>('')

    // @vite-ignore
    // eslint-disable-next-line solid/reactivity
    import(`../assets/${props.img}.png`).then((img) => {
        setImage(img.default)
    })

    return (
        <CardMedia
            component="img"
            image={image()}
            alt={props.img}
            sx={{
                objectFit: 'contain',
            }}
        />
    )
}

export default MyCardMedia
