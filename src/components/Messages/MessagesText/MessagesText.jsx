import Message from './Message';
import React from 'react';

const Text = (props) => {

    let messagesElements = props.messages.map( message => <Message key={message.id} text={message.text} align={message.align}/>)

    return(
        <div className="col-md-7 col-sm-8">
            {messagesElements}
        </div>
    )
}

export default Text;