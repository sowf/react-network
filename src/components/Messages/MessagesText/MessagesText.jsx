import React from 'react';
import Message from './Message';


const Text = (props) => {

    let messagesElements = props.messages.map( message => <Message key={message.id} text={message.text} align={message.align}/>)

    return(
        <div className="col-10 p-">
            {messagesElements}
        </div>
    )
}

export default Text;