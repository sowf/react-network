import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Text from './MessagesText/MessagesText'
import CreateMessage from './CreateMessage/CreateMessage'


const Messages = (props) => {
    return (
        <div className="col-9">
            <div className="row">
                <Dialogs people={props.messagesPage.people} />
                <Text messages={props.messagesPage.messages} />
                <CreateMessage textInputValue={ props.messagesPage.newMessage } sendMessage={props.sendMessage} createMessage={props.createMessage} />
            </div>
        </div>
    )
}

export default Messages;