import { Box, Typography, type SxProps } from '~/ui.tsx'
import { JSXElement } from 'solid-js'
import { Link, LinkIcon } from '~/ui.tsx'

function MyTypography(props: {
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'caption'
    color?: string
    sx?: SxProps
    id?: string
    children?: JSXElement
    textAlign?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}) {
    if (props.id) {
        return (
            <Box
                class={'anchor'}
                sx={{
                    ...props.sx,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link
                    href={`#${props.id}`}
                    sx={{
                        mr: 2,
                        visibility: 'hidden',
                    }}
                    color={props.color || 'inherit'}
                >
                    <LinkIcon />
                </Link>
                <Typography
                    variant={props.variant || 'body1'}
                    color={props.color}
                    id={props.id}
                    textAlign={props.textAlign}
                >
                    {props.children}
                </Typography>
            </Box>
        )
    }
    return (
        <Typography
            variant={props.variant || 'body1'}
            color={props.color}
            sx={props.sx}
            textAlign={props.textAlign}
        >
            {props.children}
        </Typography>
    )
}

export default MyTypography
