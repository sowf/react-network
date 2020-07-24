import React from 'react';
import { sendMessageCreator, createMessageCreator } from '../../../redux/store';


const CreateMessage = (props) => {
    
    let inputTextArea = React.createRef()

    let sendMessage = () => {
        props.sendMessage()
    }
    let createMessage = () => {
        let text = inputTextArea.current.value
        props.createMessage(text)
    }

    return (
        <div className="col-10 ml-auto my-2">
            <input ref={inputTextArea} value={ props.textInputValue } onChange={createMessage} className="form-control" placeholder="Enter your message" />
            <button onClick={sendMessage} className="btn btn-primary btn-block float-right">Send</button>

        </div>
    )
}

export default CreateMessage;