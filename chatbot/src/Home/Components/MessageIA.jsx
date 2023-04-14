import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

import MemoryIcon from '@mui/icons-material/Memory';

export const MessageIA = ({msg}) => {
    return (


        <Box mb={1}>

            <Stack direction={'row'} spacing={1} p={1}>
                <Avatar color='primary' sx={{ backgroundColor: 'secondary.main' }}>
                    <MemoryIcon />
                </Avatar>
                <Box my={'auto'}>
                    <Typography variant="h6" color="initial" >IA</Typography>
                </Box>
            </Stack>
            <Box component={Paper} elevation={6} maxWidth={'60%'} ml={2} p={2} bgcolor={'primary.light'}>
                <Typography variant="body1" color="initial">
                    {msg}
                </Typography>
            </Box>

        </Box>


    )
}
