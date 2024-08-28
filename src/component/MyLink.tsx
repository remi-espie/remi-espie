import { Link } from '@suid/material'
import styles from '../css/link.module.css'
import SxProps from '@suid/system/sxProps'
import { Theme } from '@suid/material/styles'
import { TypographyProps } from '@suid/material/Typography'

function MyLink(props: {
    to: string
    text: string
    color?: string
    sx?: SxProps<Theme>
    target?: string
    variant?: TypographyProps['variant']
}) {
    return (
        <Link
            href={props.to}
            class={styles.underline}
            underline="none"
            color={props.color}
            target={props.target}
            style={{
                '--underline-color': props.color || 'primary',
            }}
            sx={{ m: 1, width: 'max-content', ...props.sx }}
            variant={props.variant}
        >
            {props.text}
        </Link>
    )
}

export default MyLink
