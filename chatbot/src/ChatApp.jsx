import React from 'react'
import { Chat } from './Home/Pages/Chat'
import { Box, CssBaseline } from '@mui/material'



export const ChatApp = () => {
    return (
        <div>
            <CssBaseline />
            <Box height={'100vh'} display={'flex'} bgcolor={'grey'} p={5} justifyContent={'center'}>
                <Chat />
            </Box>
        </div>
    )
}
