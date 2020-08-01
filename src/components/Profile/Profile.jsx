import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import React from "react";
import UserImage from "./UserImage/UserImage";
import UserInfo from "./UserInfo/UserInfo";
import styles from "./Profile.module.css";

const Profile = (props) => {
    let postElements = props.profilePage.posts.map((post) => (
        <Post key={post.id} likes={post.likes} text={post.text} />
    ));

    let textInputArea = new React.createRef();

    return (
        <>
            <UserImage
                image={
                    props.profilePage.profile
                        ? props.profilePage.profile.photos.large
                        : ""
                }
            />
            <UserInfo
                {...props.profilePage.profile}
                status={props.profilePage.status}
                updateUserStatus={props.updateUserStatus}
            />
            {props.profilePage.isHomeProfile && (
                <NewPost
                    textInputValue={props.profilePage.newPost}
                    publishPost={props.publishPost}
                    createPost={props.createPost}
                />
            )}
            {props.profilePage.isHomeProfile && postElements}
        </>
    );
};

export default Profile;
