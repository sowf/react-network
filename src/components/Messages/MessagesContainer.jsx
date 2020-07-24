import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Text from './MessagesText/MessagesText'
import CreateMessage from './CreateMessage/CreateMessage'


const Messages = (props) => {
    return (
        <div className="col-9">
            <div className="row">
                <Dialogs people={props.state.people} />
                <Text messages={props.state.messages} />
                <CreateMessage textInputValue={ props.state.newMessage } dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Messages;