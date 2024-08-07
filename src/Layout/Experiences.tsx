import Loremipsum from '../component/loremipsum.tsx'
import { useTheme } from '@suid/material'

function Experiences() {
    const theme = useTheme()
    return (
        <>
            <Loremipsum color={theme.palette.secondary.contrastText} />
            <Loremipsum color={theme.palette.secondary.contrastText} />
        </>
    )
}

export default Experiences
