import { addPostCreator, createPostCreator } from '../../redux/profileReducer'

import Profile from './Profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        typePost: (text) => {
            dispatch(createPostCreator(text))
        },
        publishPost: () => {
            dispatch(addPostCreator())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)


export default ProfileContainer;