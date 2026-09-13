import { createSignal, onCleanup, onMount } from 'solid-js'
import style from '../css/typewriter.module.css'

function Typer(props: {
    fulltext: string
    delay?: number
    timeout?: number
    onFinish?: () => void
}) {
    const [text, setText] = createSignal('')
    const [finished, setFinished] = createSignal(false)

    onMount(() => {
        let index = 0
        let timer: ReturnType<typeof setTimeout>
        const tick = () => {
            if (index < props.fulltext.length) {
                index += 1
                setText(props.fulltext.slice(0, index))
                timer = setTimeout(tick, props.timeout || 100)
            } else {
                setFinished(true)
                props.onFinish?.()
            }
        }
        timer = setTimeout(tick, props.delay || 0)
        onCleanup(() => clearTimeout(timer))
    })

    return (
        <>
            <span>{text()}</span>
            {!finished() && <span class={style.cursor}>_</span>}
        </>
    )
}

export default Typer
