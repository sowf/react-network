import React from 'react';
import styles from './Profile.module.css'
import UserImage from './UserImage/UserImage'
import UserInfo from './UserInfo/UserInfo';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Profile = (props) => {

    let postElements = props.profilePage.posts.map(post => <Post key={post.id} likes={post.likes} text={post.text} />)

    let textInputArea = new React.createRef()

    return (
        <div className="col-9">
            <div className="row">
                <div className="col-12 p-0">
                    <img className={`${styles.background} m-0`} src="https://upload.wikimedia.org/wikipedia/commons/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG" />
                </div>
                <UserImage />
                <UserInfo />
                <NewPost textInputValue={props.profilePage.newPost} publishPost={props.publishPost} typePost={props.typePost} />
                {postElements}
            </div>
        </div>
    );
}

export default Profile;