import React from 'react'
import Dialogs from './Dialogs/Dialogs'
import Text from './MessagesText/MessagesText'
import CreateMessageContainer from './CreateMessage/CreateMessageContainer'


const Messages = (props) => {
    return (
        <div className="col-9">
            <div className="row">
                <Dialogs people={props.state.people} />
                <Text messages={props.state.messages} />
                <CreateMessageContainer textInputValue={ props.state.newMessage } dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Messages;