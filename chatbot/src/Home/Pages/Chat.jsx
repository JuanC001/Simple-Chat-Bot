import React, { useState } from 'react'

import { Box, Paper, AppBar, Toolbar, Typography, TextField, FormControl, Input, Button, IconButton, Stack } from '@mui/material'


import SendIcon from '@mui/icons-material/Send';
import { MessagesList } from '../Components/MessagesList';

export const Chat = () => {

    const [messages, setMessages] = useState([
        {
            user: 'User',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta obcaecati natus officia quam expedita ratione soluta sunt vitae eum. Debitis adipisci consequatur magnam maiores eveniet amet enim nam pariatur sunt?'
        },
        {
            user: 'IA',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta obcaecati natus officia quam expedita ratione soluta sunt vitae eum. Debitis adipisci consequatur magnam maiores eveniet amet enim nam pariatur sunt?'
        }
    ])


    const [messageText, setMessageText] = useState('')

    const send = (e) => {

        e.preventDefault()
        let messagesAux = messages;
        messagesAux.push({
            text: messageText,
            user: 'user'
        })
        setMessages(
            messagesAux
        )

        setMessageText('')

    }

    return (
        <Box component={Paper} elevation={6} bgcolor={'white'} width={'80vh'}>

            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h4">
                        <strong>Chat Bot</strong>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box height={'80%'} sx={{overflowY: 'scroll'}}>
                <MessagesList messages={messages} />
            </Box>

            <Box width={'90%'} mx={'auto'}>
                <form onSubmit={send}>
                    <Stack direction={'row'}>
                        <Input variant='filled' fullWidth value={messageText} onChange={e => setMessageText(e.target.value)} />
                        <IconButton type='submit'>
                            <SendIcon />
                        </IconButton>
                    </Stack>
                </form>
            </Box>

        </Box>
    )
}
