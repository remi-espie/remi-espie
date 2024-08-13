import { Motion } from 'solid-motionone'
import { createSignal, JSX, onMount } from 'solid-js'

function Appear(props: {
    direction?: 'left' | 'right' | 'top' | 'bottom' | 'none'
    children: JSX.Element
}) {
    const [startCoordinate, setStartCoordinate] = createSignal({
        x: 0,
        y: 50,
    })

    onMount(() => {
        switch (props.direction) {
            case 'bottom':
                setStartCoordinate({ x: 0, y: 50 })
                break
            case 'top':
                setStartCoordinate({ x: 0, y: -50 })
                break
            case 'left':
                setStartCoordinate({ x: -50, y: 0 })
                break
            case 'right':
                setStartCoordinate({ x: 50, y: 0 })
                break
            case 'none':
                setStartCoordinate({ x: 0, y: 0 })
                break
            default:
                break
        }
    })

    return (
        <Motion
            initial={false}
            animate={{ opacity: 0, ...startCoordinate() }}
            transition={{ duration: 1 }}
            inView={{ opacity: 1, x: 0, y: 0 }}
            inViewOptions={{ once: true, margin: '-200px' }}
        >
            {props.children}
        </Motion>
    )
}

export default Appear
