import { createSignal, JSX, onMount } from 'solid-js'

function Appear(props: {
    direction?: 'left' | 'right' | 'top' | 'bottom' | 'none'
    margin?: string
    children: JSX.Element
}) {
    let element!: HTMLDivElement
    const [visible, setVisible] = createSignal(false)
    const [javascriptReady, setJavascriptReady] = createSignal(false)

    onMount(() => {
        setJavascriptReady(true)
        if (!('IntersectionObserver' in window)) {
            setVisible(true)
            return
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { rootMargin: props.margin ?? '-50px' }
        )
        observer.observe(element)
    })

    return (
        <div
            ref={element}
            class={`appear appear-${props.direction ?? 'bottom'} ${
                javascriptReady() ? 'appear-js' : ''
            } ${visible() ? 'appear-visible' : ''}`}
        >
            {props.children}
        </div>
    )
}

export default Appear
