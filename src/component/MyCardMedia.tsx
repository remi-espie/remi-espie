import { CardMedia } from '@suid/material'
import { createSignal } from 'solid-js'
import { getImage } from '~/ImgImporter.ts'
import { SxProps } from '@suid/system'

function MyCardMedia(props: { img: string; alt: string; sx?: SxProps }) {
    const [image, setImage] = createSignal<string>('')

    if (props.img.startsWith('http')) {
        setImage(props.img)
    } else {
        setImage(getImage(props.img))
    }

    return (
        <CardMedia
            component="img"
            image={image()}
            alt={props.alt}
            sx={props.sx}
        />
    )
}

export default MyCardMedia
