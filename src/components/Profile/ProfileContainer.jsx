import { createPost, publishPost, setUserProfile } from '../../redux/profileReducer'

import Axios from "axios";
import Profile from './Profile';
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        debugger
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/`+userId,
            {
                headers: {
                    "API-KEY": "aac71a96-ea21-4187-aca1-6ee0cb0d5ac1",
                },
            }
        ).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return <Profile {...this.props}  />
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let profileURLDataContainerComponent = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, {setUserProfile, createPost, publishPost})(profileURLDataContainerComponent)



export default ProfileContainer;