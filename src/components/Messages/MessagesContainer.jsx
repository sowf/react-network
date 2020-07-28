import { createMessageCreator, sendMessageCreator } from '../../redux/messageReducer';

import Messages from './Messages'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        createMessage: (text) => {
            dispatch(createMessageCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;