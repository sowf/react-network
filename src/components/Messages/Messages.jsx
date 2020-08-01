import CreateMessage from './CreateMessage/CreateMessage'
import Dialogs from './Dialogs/Dialogs'
import React from 'react'
import Text from './MessagesText/MessagesText'

const Messages = (props) => {
    return (
        <>
                <Dialogs people={props.messagesPage.people} />
                <Text messages={props.messagesPage.messages} />
                <CreateMessage textInputValue={ props.messagesPage.newMessage } sendMessage={props.sendMessage} createMessage={props.createMessage} />
        </>
    )
}

export default Messages;