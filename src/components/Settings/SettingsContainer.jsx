import { getPhotos, getProfilePage } from "../../redux/profileSelector";
import {
    getProfile,
    updateProfile,
    updateProfilePhoto,
} from "../../redux/profileReducer";

import { Preloader } from "../Preloader";
import React from "react";
import Settings from "./Settings";
import { compose } from "redux";
import { connect } from "react-redux";
import { getId } from "../../redux/authSelector";
import { reduxForm } from "redux-form";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let SettingsReduxForm = reduxForm({ form: "settings" })(Settings);

class SettingsContainer extends React.Component {
    componentWillMount() {
        this.props.getProfile(this.props.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.photos.large != this.props.photos.large) {
            this.props.getProfile(this.props.id);
        }
    }

    onSubmitSettings = (formData) => {
        this.props.updateProfile(formData);
    };

    onPhotoChanged = (e) => {
        this.props.updateProfilePhoto(e.target.files[0]);
    };

    render() {
        if (this.props.profilePage.isFetching){
            return <Preloader />
        }
        return (
            <SettingsReduxForm
                initialValues={this.props.profilePage.profile}
                {...this.props}
                photo={this.props.photos ? this.props.photos.large : ""}
                onPhotoChanged={this.onPhotoChanged}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profilePage: getProfilePage(state),
    id: getId(state),
    photos: getPhotos(state),
});

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { getProfile, updateProfile, updateProfilePhoto })
)(SettingsContainer);
