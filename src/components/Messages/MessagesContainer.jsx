import {
    createMessageCreator,
    sendMessageCreator,
} from "../../redux/messageReducer";

import Messages from "./Messages";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class MessagesAPIContainer extends React.Component {
    render() {
        return <Messages {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

let MessagesContainerWithAuthRedirect = withAuthRedirect(MessagesAPIContainer);

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        createMessage: (text) => {
            dispatch(createMessageCreator(text));
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesAPIContainer);
