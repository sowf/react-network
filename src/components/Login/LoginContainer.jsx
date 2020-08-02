import { login, toggleIsFetching } from "../../redux/authReducer";

import Login from "./Login";
import React from "react";
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {getAuth} from "../../redux/authSelector";
import {reduxForm} from "redux-form";

let LoginReduxForm = reduxForm({ form: "login" })(Login);

class LoginContainer extends React.Component {
    onSubmitLogin = (formData) => {
        this.props.login(formData.email, formData.password, formData.rememberMe = false, formData.captcha)
        this.props.toggleIsFetching(true)
    }

    render() {
        if (this.props.auth.isAuthenticated){
            return <Redirect to={'/profile/'+ this.props.auth.id} />
        }
        return <LoginReduxForm onSubmit={this.onSubmitLogin} {...this.props} />;
    }
}

let mapStateToProps = (state) => ({
    auth: getAuth(state)
})

export default connect(mapStateToProps, {login, toggleIsFetching})(LoginContainer)
