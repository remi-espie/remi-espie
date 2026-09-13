import {
    createContext,
    createMemo,
    JSX,
    ParentProps,
    Show,
    splitProps,
    useContext,
} from 'solid-js'
import { Dynamic } from 'solid-js/web'

export type SxProps = Record<string, string | number | undefined>
export type Theme = {
    palette: {
        mode: 'light' | 'dark'
        primary: Record<string, string>
        secondary: Record<string, string>
        background: Record<string, string>
        common: Record<string, string>
    }
}

const defaultTheme: Theme = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#0097a7',
            light: '#26c6da',
            dark: '#006064',
            contrastText: '#1d1d1d',
        },
        secondary: {
            main: '#009688',
            light: '#80cbc4',
            dark: '#00695c',
            contrastText: '#f0f0f0',
        },
        background: { default: '#1d1d1d', paper: '#252525' },
        common: { white: '#f0f0f0', black: '#1d1d1d' },
    },
}

const ThemeContext = createContext<Theme>(defaultTheme)

export const createPalette = (palette: Partial<Theme['palette']>) => ({
    ...defaultTheme.palette,
    ...palette,
})

export const createTheme = (
    theme: Omit<Partial<Theme>, 'palette'> & {
        palette?: Theme['palette'] | (() => Theme['palette'])
    }
) => {
    const palette = theme.palette
    return {
        ...defaultTheme,
        ...theme,
        get palette() {
            const current = typeof palette === 'function' ? palette() : palette
            return { ...defaultTheme.palette, ...current }
        },
    } as Theme
}

export function useTheme() {
    return useContext(ThemeContext) ?? defaultTheme
}

export function ThemeProvider(props: ParentProps<{ theme: Theme }>) {
    const palette = () => props.theme.palette
    return (
        <ThemeContext.Provider value={props.theme}>
            <div
                class="theme-root"
                style={{
                    '--color-primary': palette().primary.main,
                    '--color-primary-light': palette().primary.light,
                    '--color-primary-contrast': palette().primary.contrastText,
                    '--color-secondary': palette().secondary.main,
                    '--color-background': palette().background.default,
                    '--color-surface':
                        palette().background.paper ??
                        palette().background.default,
                    '--color-text':
                        palette().mode === 'dark'
                            ? palette().common.white
                            : palette().common.black,
                    '--color-text-muted':
                        palette().mode === 'dark' ? '#c7c7c7' : '#4a4a4a',
                }}
            >
                {props.children}
            </div>
        </ThemeContext.Provider>
    )
}

const spacing = (value: string | number) =>
    typeof value === 'number' ? `${value * 0.25}rem` : value

function toStyle(sx: SxProps | undefined) {
    if (!sx) return undefined
    const style: Record<string, string | number> = {}
    for (const [key, value] of Object.entries(sx)) {
        if (value === undefined) continue
        const aliases: Record<string, string> = {
            m: 'margin',
            mt: 'margin-top',
            mr: 'margin-right',
            mb: 'margin-bottom',
            ml: 'margin-left',
            p: 'padding',
            pt: 'padding-top',
            pr: 'padding-right',
            pb: 'padding-bottom',
            pl: 'padding-left',
            width: 'width',
            height: 'height',
        }
        const cssKey =
            aliases[key] ??
            key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
        style[cssKey] = [
            'margin',
            'padding',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
        ].includes(cssKey)
            ? spacing(value)
            : value
    }
    return style
}

function resolveColor(color: string | undefined) {
    if (!color) return undefined
    const colors: Record<string, string> = {
        inherit: 'inherit',
        'text.primary': 'var(--color-text)',
        'text.secondary': 'var(--color-text-muted, var(--color-text))',
        'background.paper': 'var(--color-surface)',
        'background.default': 'var(--color-background)',
        'primary.main': 'var(--color-primary)',
        'primary.light': 'var(--color-primary-light)',
    }
    return colors[color] ?? color
}

type BaseProps = JSX.HTMLAttributes<HTMLElement> & {
    sx?: SxProps
    component?: string
    color?: string
    [key: string]: unknown
}

function Surface(props: BaseProps) {
    const [local, rest] = splitProps(props, [
        'sx',
        'component',
        'children',
        'style',
        'color',
    ])
    const currentStyle =
        typeof local.style === 'object' && local.style !== null
            ? local.style
            : {}
    return (
        <Dynamic
            component={local.component ?? 'div'}
            {...rest}
            style={{
                color: resolveColor(local.color),
                ...toStyle(local.sx),
                ...currentStyle,
            }}
        >
            {local.children}
        </Dynamic>
    )
}

export const Box = Surface

export function Grid(
    props: BaseProps & {
        container?: boolean
        item?: boolean
        xs?: number
        spacing?: number
        columns?: unknown
        rowSpacing?: number
        columnSpacing?: number
        margin?: string
    }
) {
    const [local, rest] = splitProps(props, [
        'container',
        'item',
        'xs',
        'spacing',
        'columns',
        'rowSpacing',
        'columnSpacing',
        'margin',
        'sx',
        'children',
        'style',
    ])
    const sx = createMemo(() => ({
        display: local.container ? 'grid' : undefined,
        'grid-template-columns': local.container
            ? 'repeat(12, minmax(0, 1fr))'
            : undefined,
        gap: local.spacing ? spacing(local.spacing) : undefined,
        'row-gap': local.rowSpacing ? spacing(local.rowSpacing) : undefined,
        'column-gap': local.columnSpacing
            ? spacing(local.columnSpacing)
            : undefined,
        'grid-column':
            local.item && local.xs
                ? `span ${local.xs} / span ${local.xs}`
                : undefined,
        ...local.sx,
    }))
    return (
        <Surface {...rest} sx={sx()} style={local.style}>
            {local.children}
        </Surface>
    )
}

const typographyTags: Record<string, string> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'p',
    subtitle2: 'p',
    body1: 'p',
    body2: 'p',
    caption: 'small',
}

export function Typography(
    props: BaseProps & { variant?: string; color?: string; textAlign?: string }
) {
    const [local, rest] = splitProps(props, [
        'variant',
        'color',
        'textAlign',
        'sx',
        'children',
    ])
    return (
        <Dynamic
            component={typographyTags[local.variant ?? 'body1'] ?? 'p'}
            {...rest}
            style={{
                color: resolveColor(local.color),
                'text-align': local.textAlign,
                ...toStyle(local.sx),
            }}
        >
            {local.children}
        </Dynamic>
    )
}

export function Link(
    props: BaseProps & {
        href?: string
        color?: string
        target?: string
        underline?: string
        variant?: string
    }
) {
    const currentStyle =
        typeof props.style === 'object' && props.style !== null
            ? props.style
            : {}
    const [, rest] = splitProps(props, [
        'sx',
        'component',
        'children',
        'style',
        'color',
        'underline',
        'variant',
    ])
    return (
        <a
            {...rest}
            href={props.href}
            style={{
                color: resolveColor(props.color),
                ...toStyle(props.sx),
                ...currentStyle,
            }}
        >
            {props.children}
        </a>
    )
}

export function Button(
    props: BaseProps & {
        href?: string
        endIcon?: JSX.Element
        variant?: string
    }
) {
    const [, rest] = splitProps(props, [
        'sx',
        'component',
        'children',
        'style',
        'endIcon',
        'variant',
    ])
    const currentStyle =
        typeof props.style === 'object' && props.style !== null
            ? props.style
            : {}
    return props.href ? (
        <a
            {...rest}
            href={props.href}
            class={`ui-button ${props.class ?? ''}`}
            style={{ ...toStyle(props.sx), ...currentStyle }}
        >
            {props.children}
            {props.endIcon}
        </a>
    ) : (
        <button
            {...rest}
            class={`ui-button ${props.class ?? ''}`}
            style={{ ...toStyle(props.sx), ...currentStyle }}
        >
            {props.children}
            {props.endIcon}
        </button>
    )
}

export function IconButton(
    props: BaseProps & {
        href?: string
        onClick?: JSX.EventHandlerUnion<HTMLElement, MouseEvent>
    }
) {
    const [, rest] = splitProps(props, [
        'sx',
        'component',
        'children',
        'style',
        'color',
    ])
    return props.href ? (
        <a
            {...rest}
            href={props.href}
            class={`ui-icon-button ${props.class ?? ''}`}
            style={toStyle(props.sx)}
        >
            {props.children}
        </a>
    ) : (
        <button
            {...rest}
            class={`ui-icon-button ${props.class ?? ''}`}
            style={toStyle(props.sx)}
        >
            {props.children}
        </button>
    )
}

export function SvgIcon(
    props: JSX.SvgSVGAttributes<SVGSVGElement> & { sx?: SxProps }
) {
    const [local, rest] = splitProps(props, ['sx', 'children'])
    return (
        <svg
            width="1em"
            height="1em"
            aria-hidden="true"
            {...rest}
            style={{ fill: 'currentColor', ...toStyle(local.sx) }}
        >
            {local.children}
        </svg>
    )
}

export function AppBar(
    props: ParentProps<{
        position?: string
        sx?: SxProps
        [key: string]: unknown
    }>
) {
    return (
        <header
            class={`ui-app-bar ${props.position === 'relative' ? 'ui-app-bar-footer' : ''}`}
            style={toStyle(props.sx)}
        >
            {props.children}
        </header>
    )
}

export function Toolbar(props: ParentProps) {
    return <div class="ui-toolbar">{props.children}</div>
}

export function Card(
    props: ParentProps & {
        sx?: SxProps
        class?: string
        elevation?: number
        [key: string]: unknown
    }
) {
    return <Surface {...props} class={`ui-card ${props.class ?? ''}`} />
}

export function CardHeader(
    props: ParentProps<{
        title?: JSX.Element
        sx?: SxProps
        [key: string]: unknown
    }>
) {
    return (
        <div class="ui-card-header" style={toStyle(props.sx)}>
            {props.title}
            {props.children}
        </div>
    )
}

export function CardContent(
    props: ParentProps<{ sx?: SxProps; [key: string]: unknown }>
) {
    return <Surface {...props} class="ui-card-content" />
}

export function CardActions(
    props: ParentProps<{ sx?: SxProps; [key: string]: unknown }>
) {
    return <Surface {...props} class="ui-card-actions" />
}

export function CardMedia(props: {
    image: string
    alt: string
    sx?: SxProps
    [key: string]: unknown
}) {
    return (
        <img
            class="ui-card-media"
            src={props.image}
            alt={props.alt}
            style={toStyle(props.sx)}
        />
    )
}

export function Chip(props: { label: string; sx?: SxProps }) {
    return (
        <span class="ui-chip" style={toStyle(props.sx)}>
            {props.label}
        </span>
    )
}

export function CssBaseline() {
    return null
}

export function Menu(
    props: ParentProps<{
        open?: boolean
        onClose?: () => void
        [key: string]: unknown
    }>
) {
    const isOpen = createMemo(() => props.open)
    return (
        <Show when={isOpen()}>
            <div class="ui-menu" role="menu">
                {props.children}
            </div>
        </Show>
    )
}

export function MenuItem(props: ParentProps<{ onClick?: () => void }>) {
    return (
        <button class="ui-menu-item" onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export const LinkIcon = () => <span aria-hidden="true">#</span>
export const LightModeOutlinedIcon = () => <span aria-hidden="true">☀</span>
export const DarkModeOutlinedIcon = () => <span aria-hidden="true">☾</span>
export const TranslateOutlined = () => <span aria-hidden="true">文</span>
export const MenuOutlined = () => <span aria-hidden="true">☰</span>
export const MenuOpenOutlined = () => <span aria-hidden="true">×</span>
export const SubdirectoryArrowRight = () => <span aria-hidden="true">↳</span>
