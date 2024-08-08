import { Box } from '@suid/material'
import { For } from 'solid-js'

function EmojiText(props: { emoji: string; text: string[] }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                mb: 3,
                lineHeight: '1.25',
            }}
        >
            <Box sx={{ mr: 3 }}>{props.emoji}</Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <For each={props.text}>{(text) => <span>{text}</span>}</For>
            </Box>
        </Box>
    )
}

export default EmojiText
