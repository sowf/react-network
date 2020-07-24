import Messages from './Messages'
import { sendMessageCreator, createMessageCreator } from '../../redux/store';
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