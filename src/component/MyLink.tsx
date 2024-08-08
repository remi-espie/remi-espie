import { Link } from '@suid/material'
import styles from './link.module.css'
import SxProps from '@suid/system/sxProps'
import { Theme } from '@suid/material/styles'

function MyLink(props: {
    to: string
    text: string
    color?: string
    sx?: SxProps<Theme>
}) {
    return (
        <Link
            href={props.to}
            class={styles.underline}
            variant="body1"
            underline="none"
            color={props.color}
            style={{
                '--underline-color': props.color || 'primary',
            }}
            sx={{ m: 1, width: 'max-content', ...props.sx }}
        >
            {props.text}
        </Link>
    )
}

export default MyLink
