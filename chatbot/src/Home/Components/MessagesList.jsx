import { Typography } from '@mui/material'
import React from 'react'

import { Message } from '../Components/Message'
import { MessageIA } from '../Components/MessageIA'

export const MessagesList = ({ messages }) => {

    const messageFilter = (message) => {

        if (message.user === 'IA') {

            return <MessageIA msg={message.text}/>

        } else {

            return <Message msg={message.text}/>

        }

    }

    return (

        <>

            {messages.map(message => messageFilter(message))}

        </>

    )
}
