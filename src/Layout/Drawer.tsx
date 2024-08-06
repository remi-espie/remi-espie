import { Box, Drawer, IconButton } from '@suid/material'
import NavList from '../component/NavList.tsx'
import { Accessor } from 'solid-js'
import MenuOpenOutlined from '@suid/icons-material/MenuOpenOutlined'

function MyDrawer(props: {
    open: Accessor<boolean>
    setOpen: (newOpen: boolean) => void
}) {
    const toggleDrawer = (newOpen: boolean) => () => {
        props.setOpen(newOpen)
    }

    return (
        <Drawer open={props.open()} onClose={toggleDrawer(false)}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <img
                    src="/icon.png"
                    alt="Logo"
                    style={{
                        width: '48px',
                        height: '48px',
                        margin: '16px',
                    }}
                />
                <IconButton
                    color="inherit"
                    aria-label="close drawer"
                    onClick={toggleDrawer(false)}
                    sx={{ width: 'min-content', alignSelf: 'center' }}
                >
                    <MenuOpenOutlined />
                </IconButton>
            </Box>
            <NavList />
        </Drawer>
    )
}

export default MyDrawer
