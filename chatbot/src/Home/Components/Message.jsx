import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

export const Message = ({ msg }) => {
    return (
        <Box mb={1}>

            <Stack direction={'row'} spacing={1} p={1} justifyContent={'end'}>
                <Avatar sx={{ backgroundColor: 'primary.light' }}>
                </Avatar>
                <Box my={'auto'}>
                    <Typography variant="h6" color="initial" >Yo</Typography>
                </Box>
            </Stack>
            <Box display={'flex'} justifyContent={'end'}>
                <Box component={Paper} elevation={6} maxWidth={'60%'} mr={2} p={2}>
                    <Typography variant="body1" color="initial">
                        {msg}
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}
