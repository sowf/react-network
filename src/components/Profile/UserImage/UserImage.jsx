import React from 'react';
import defaultUserImage from '../../../assets/defaultUserImage.png'
import styles from './UserImage.module.css'

const UserImage = (props) => {
    return (
        <div className="col-3">
            <img className={`${styles.photo} m-2`} 
            src={props.image ? props.image : defaultUserImage} />
        </div>
    )
}

export default UserImage;