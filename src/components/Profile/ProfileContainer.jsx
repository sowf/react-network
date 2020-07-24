import { connect } from 'react-redux';
import { addPostCreator, createPostCreator } from '../../redux/store'
import Profile from './Profile';

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