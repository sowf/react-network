import React from 'react';
import styles from './Profile.module.css'
import UserImage from './UserImage/UserImage'
import UserInfo from './UserInfo/UserInfo';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

const Profile = (props) => {

    let postElements = props.state.posts.map( post => <Post likes={post.likes} text={post.text}/>)

    return (
        <div className="col-9">
            <div className="row">
                <div className="col-12 p-0">
                    <img className={`${styles.background} m-0`} src="https://upload.wikimedia.org/wikipedia/commons/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG" />
                </div>
                <UserImage />
                <UserInfo />
                <NewPost dispatch={props.dispatch} textInputValue={ props.state.newPost } />
                {postElements}
            </div>
        </div>
    );
}

export default Profile;