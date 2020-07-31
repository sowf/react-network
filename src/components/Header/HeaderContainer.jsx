import { getUserAuthenticated, logout, setUserAuthenticated, setUserData } from "../../redux/authReducer";

import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { getAuth } from "../../redux/authSelector";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthenticated()
    }

    render() {
        return (
            <Header
                isAuthenticated={this.props.auth.isAuthenticated}
                login={this.props.auth.login}
                logout={this.props.logout}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        auth: getAuth(state)
    };
};

export default connect(mapStateToProps, { setUserData, setUserAuthenticated, getUserAuthenticated, logout })(
    HeaderContainer
);
