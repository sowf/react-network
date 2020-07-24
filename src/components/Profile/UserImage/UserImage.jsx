import React from 'react';
import styles from './UserImage.module.css'

const UserImage = () => {
    return (
        <div className="col-2">
            <img className={`${styles.photo} m-2`} src="https://offvkontakte.ru/wp-content/uploads/avatarka-pustaya-vk_0.jpg" />
        </div>
    )
}

export default UserImage;