import React from "react";
import defaultUserImage from "../../../assets/defaultUserImage.png";
import styles from "./UserImage.module.css";

const UserImage = (props) => {
    return (
        <div className="col-lg-3 col-md-4 mt-4 col-sm-6">
            <img
                className={`${styles.photo} d-block mx-auto`}
                src={props.image ? props.image : defaultUserImage}
            />
        </div>
    );
};

export default UserImage;
