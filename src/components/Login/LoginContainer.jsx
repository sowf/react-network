import { getId, getIsAuthenticated } from "../../redux/authSelector";
import { login, toggleIsFetching } from "../../redux/authReducer";

import Login from "./Login";
import React from "react";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {getIsFetching} from "../../redux/authSelector"
import {reduxForm} from "redux-form";

let LoginReduxForm = reduxForm({ form: "login" })(Login);

class LoginContainer extends React.Component {
    onSubmitLogin = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberMe = false)
        this.props.toggleIsFetching(true)
    }
    render() {
        if (this.props.isAuthenticated){
            return <Redirect to={'/profile/'+ this.props.id} />
        }
        return <LoginReduxForm onSubmit={this.onSubmitLogin} isFetching={this.props.isFetching} />;
    }
}

let mapStateToProps = (state) => ({
    isAuthenticated: getIsAuthenticated(state), 
    id: getId(state),
    isFetching: getIsFetching(state)
})

export default connect(mapStateToProps, {login, toggleIsFetching})(LoginContainer)
