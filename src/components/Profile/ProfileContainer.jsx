import {
    createPost,
    getProfile,
    getUserStatus,
    publishPost,
    setUserProfile,
    toggleHomeProfile,
    toggleIsFetching,
    updateUserStatus
} from "../../redux/profileReducer";
import {
    getProfilePage,
    getStatus
} from "../../redux/profileSelector"

import { Preloader } from "../Preloader";
import Profile from "./Profile";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getId } from "../../redux/authSelector";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "react-router-dom";

class ProfileAPIContainer extends React.Component {

    profileUpdate = () =>{
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId)
        
        this.props.toggleHomeProfile(this.props.id === Number(userId))
    }

    componentDidMount() {
        this.profileUpdate()
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            this.profileUpdate()
        }
    }

    render() {
        if (this.props.profilePage.isFetching){
            return <Preloader />
        }
        return <Profile {...this.props} />;
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: getProfilePage(state),
        status: getStatus(state),
        id: getId(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        createPost,
        publishPost,
        getProfile,
        getUserStatus,
        updateUserStatus,
        toggleHomeProfile,
        toggleIsFetching
    }),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer);
