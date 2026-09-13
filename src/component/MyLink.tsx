import { Link, SxProps } from '~/ui.tsx'
import styles from '../css/link.module.css'

function MyLink(props: {
    to: string
    text: string
    color?: string
    sx?: SxProps
    target?: string
    variant?: string
}) {
    return (
        <Link
            href={props.to}
            class={styles.underline}
            underline="none"
            color={props.color}
            target={props.target}
            sx={{ m: 1, width: 'max-content', ...props.sx }}
            variant={props.variant}
        >
            {props.text}
        </Link>
    )
}

export default MyLink
