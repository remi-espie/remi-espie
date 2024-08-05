import { Link } from '@suid/material'
import styles from './link.module.css'

function MyLink(props: { to: string; text: string; color?: string }) {
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
            sx={{ m: 1 }}
        >
            {props.text}
        </Link>
    )
}

export default MyLink
