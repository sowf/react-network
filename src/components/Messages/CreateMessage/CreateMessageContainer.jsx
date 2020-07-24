import React from 'react';
import { sendMessageCreator, createMessageCreator } from '../../../redux/store';
import CreateMessage from './CreateMessage'


const CreateMessageContainer = (props) => {

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    let createMessage = (text) => {
        props.dispatch(createMessageCreator(text))
    }

    return (<CreateMessage textInputValue={ props.textInputValue } sendMessage={sendMessage} createMessage={createMessage} />
    )
}

export default CreateMessageContainer;