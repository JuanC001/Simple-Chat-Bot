import React, { useState } from 'react'

import { Box, Paper, AppBar, Toolbar, Typography, TextField, FormControl, Input, Button, IconButton, Stack } from '@mui/material'


import SendIcon from '@mui/icons-material/Send';
import { MessagesList } from '../Components/MessagesList';
import { useBot } from '../Hooks/useBot';

export const Chat = () => {


    const [respuesta, setrespuesta] = useState('')

    const [past_user_inputs, setPast_user_inputs] = useState([])
    const [generated_responses, setGenerated_responses] = useState([])
    const [messageText, setMessageText] = useState('')

    const [messages, setMessages] = useState([

    ])

    const send = async (e) => {

        e.preventDefault()
        const { botSend } = useBot()
        console.log('==========================')
        console.log(past_user_inputs)
        console.log(generated_responses)
        console.log('==========================')

        const { generated_text } = await botSend(past_user_inputs, generated_responses, messageText)

        let messagesAux = messages;
        messagesAux.push({
            text: messageText,
            user: 'user'
        })

        messagesAux.push({
            text: generated_text,
            user: 'IA'
        })

        setMessages(
            messagesAux
        )

        let arrayAux = past_user_inputs
        arrayAux.push(messageText)
        setPast_user_inputs(arrayAux)

        arrayAux = generated_responses
        arrayAux.push(generated_text)
        setGenerated_responses(arrayAux)

        console.log(past_user_inputs)
        console.log(generated_responses)

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

            <Box height={'80%'} sx={{ overflowY: 'scroll' }}>
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
