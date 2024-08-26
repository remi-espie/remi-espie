import { Box, Drawer, IconButton, SvgIcon, useTheme } from '@suid/material'
import { createSignal } from 'solid-js'
import MenuOpenOutlined from '@suid/icons-material/MenuOpenOutlined'
import DrawerNav from '../component/DrawerNav.tsx'
import Reactivity from '~/css/reactivity.module.css'
import { MenuOutlined } from '@suid/icons-material'

const theme = useTheme()
const [open, setOpen] = createSignal(false)

const DrawerList = (
    <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}
        >
            <SvgIcon
                viewBox={'0 0 54.597659 69.501127'}
                sx={{ m: 2, height: '2em' }}
            >
                <g transform="translate(-195.51805,-476.97869)">
                    <path d="m 197.17039,546.47981 v -11.23829 h 1.24219 v 9.9961 h 4.75781 v 1.24219 z m 2.48438,-2.48438 v -8.75391 h 1.24219 v 7.51172 h 2.27343 v 1.24219 z m 2.27344,0 v -1.24219 h 8.27343 v 1.24219 z m 0,2.48438 v -1.24219 h 8.27343 v 1.24219 z m 7.03125,0 v -1.24219 h 4.75781 v -9.9961 h 1.24219 v 11.23829 z m 0,-2.48438 v -1.24219 h 2.27343 v -7.51172 h 1.24219 v 8.75391 z m 23.36718,2.48438 v -11.23829 h 1.24219 v 9.9961 h 4.75781 v 1.24219 z m 2.48438,-2.48438 v -8.75391 h 1.24219 v 7.51172 h 2.27343 v 1.24219 z m 2.27344,0 v -1.24219 h 8.27343 v 1.24219 z m 0,2.48438 v -1.24219 h 8.27343 v 1.24219 z m 7.03125,0 v -1.24219 h 4.75781 v -9.9961 h 1.24219 v 11.23829 z m 0,-2.48438 v -1.24219 h 2.27343 v -7.51172 h 1.24219 v 8.75391 z m -48.59766,-4.54398 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 11.16797,2.40821 v -18.75 h 1.24219 v 18.75 z m -2.48438,0 v -18.75 h 1.24219 v 18.75 z m 19.44141,-2.40821 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 11.16797,2.40821 v -18.75 h 1.24219 v 18.75 z m -2.48438,0 v -18.75 h 1.24219 v 18.75 z m -50.87109,-14.54007 v -13.94532 h 7.03125 v 13.94532 z m 7.03125,0 v -13.94532 h 7.03125 v 13.94532 z m 8.68359,2.4082 v -11.23828 h 6 v 1.24218 h -4.75781 v 9.9961 z m 2.48438,0 v -8.75391 h 3.51562 v 1.24219 h -2.27343 v 7.51172 z m 2.27344,-9.9961 v -1.24218 h 8.27343 v 1.24218 z m 0,2.48438 v -1.24219 h 8.27343 v 1.24219 z m 7.03125,-2.48438 v -1.24218 h 8.27343 v 1.24218 z m 0,2.48438 v -1.24219 h 8.27343 v 1.24219 z m 7.65234,5.10352 v -13.94532 h 7.03125 v 13.94532 z m 7.03125,0 v -13.94532 h 7.03125 v 13.94532 z m 11.16797,2.4082 v -9.9961 h -4.75781 v -1.24218 h 6 v 11.23828 z m -2.48438,0 v -7.51172 h -2.27343 v -1.24219 h 3.51562 v 8.75391 z M 195.51805,515.18772 V 501.2424 h 7.03125 v 13.94532 z m 7.03125,0 V 501.2424 h 7.03125 v 13.94532 z m 7.03125,0 V 501.2424 h 7.03125 v 13.94532 z m 7.03125,0 V 501.2424 h 7.03125 v 13.94532 z m 7.03125,0 V 501.2424 h 7.03125 v 13.94532 z m 7.03125,0 V 501.2424 h 7.03125 v 13.94532 z m 8.68359,2.4082 v -11.23828 h 6 v 1.24219 h -4.75781 v 9.99609 z m 2.48438,0 v -8.75391 h 3.51562 v 1.24219 h -2.27343 v 7.51172 z m 2.27344,-7.51172 v -1.24219 h 4.75781 v -9.99609 h 1.24219 v 11.23828 z m 0,-2.48437 v -1.24219 h 2.27343 v -7.51172 h 1.24219 v 8.75391 z m -48.59766,-4.54398 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 8.68359,2.4082 v -11.23828 h 6 v 1.24219 h -4.75781 v 9.99609 z m 2.48438,0 v -8.7539 h 3.51562 v 1.24218 h -2.27343 v 7.51172 z m 2.27344,-9.99609 v -1.24219 h 8.27343 v 1.24219 z m 0,2.48437 v -1.24218 h 8.27343 v 1.24218 z m 7.03125,-2.48437 v -1.24219 h 8.27343 v 1.24219 z m 0,2.48437 v -1.24218 h 8.27343 v 1.24218 z m 7.65234,5.10352 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 11.16797,2.4082 v -9.99609 h -4.75781 v -1.24219 h 6 v 11.23828 z m -2.48438,0 v -7.51172 h -2.27343 v -1.24218 h 3.51562 v 8.7539 z m -50.87109,-14.54007 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 7.03125,0 v -13.94531 h 7.03125 v 13.94531 z m 11.16797,2.4082 v -9.99609 h -4.75781 v -1.24219 h 6 v 11.23828 z m -2.48438,0 v -7.51171 h -2.27343 v -1.24219 h 3.51562 v 8.7539 z" />
                </g>
            </SvgIcon>
            <IconButton
                color="inherit"
                aria-label="close drawer"
                onClick={() => setOpen(false)}
                sx={{ width: 'min-content', alignSelf: 'center' }}
            >
                <MenuOpenOutlined />
            </IconButton>
        </Box>
        <DrawerNav color={theme.palette.secondary.contrastText} />
    </>
)

function MyDrawer() {
    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                edge="start"
                sx={{ mr: 2 }}
                class={Reactivity.small_screen}
            >
                <MenuOutlined />
            </IconButton>
            <Drawer open={open()} onClose={() => setOpen(false)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default MyDrawer
