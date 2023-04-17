import React from 'react'
import { Chat } from './Home/Pages/Chat'
import { Box, CssBaseline } from '@mui/material'

import './Home/chat.css'

export const ChatApp = () => {
    return (
        <div>
            <CssBaseline />
            <Box className={'fondo'} height={'100vh'} display={'flex'} p={1} justifyContent={'center'}>
                <Chat />
            </Box>
        </div>
    )
}
