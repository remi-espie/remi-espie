import { Box, Typography } from '@suid/material'
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
            <Typography sx={{ mr: '1.5em' }}>{props.emoji}</Typography>
            <Typography
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '80vw',
                    textShadow:
                        '-1px -1px 0 #000,0 -1px 0 #000,1px -1px 0 #000,1px 0 0 #000,1px 1px 0 #000,0 1px 0 #000,-1px 1px 0 #000,-1px 0 0 #000;',
                }}
            >
                <For each={props.text}>{(text) => <span>{text}</span>}</For>
            </Typography>
        </Box>
    )
}

export default EmojiText
