import { createEffect, createSignal } from 'solid-js'
import style from './typewriter.module.css'

function Typer(props: {
    fulltext: string
    delay?: number
    timeout?: number
    onFinish?: () => void
}) {
    const [text, setText] = createSignal('')
    const [index, setIndex] = createSignal(0)

    createEffect(() => {
        if (index() === 0) {
            setTimeout(() => {
                setIndex(1)
            }, props.delay || 0)
        } else if (index() <= props.fulltext.length) {
            setTimeout(() => {
                setText(props.fulltext.slice(0, index()))
                setIndex(index() + 1)
            }, props.timeout || 100)
        } else {
            if (props.onFinish) {
                props.onFinish()
            }
        }
    })

    return (
        <>
            <span>{text()}</span>
            {index() < props.fulltext.length && (
                <span class={style.cursor}>_</span>
            )}
        </>
    )
}

export default Typer
