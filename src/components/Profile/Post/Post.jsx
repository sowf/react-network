import React from "react";
import styles from "./Post.module.css";
import defaulUserImage from "../../../assets/defaultUserImage.png";

const Post = (props) => {
    return (
        <div className="col-12 mt-2">
            <table>
                <tr>
                    <th>
                        <img
                            className={`${styles.photo}`}
                            src={defaulUserImage}
                        />
                    </th>
                    <th className="pl-2">
                        <div className={styles.text}>{props.text}</div>
                    </th>
                </tr>
                <tr>
                    <th></th>
                    <th className="pl-2">
                        <div className={styles.text}>{props.likes} likes</div>
                    </th>
                </tr>
            </table>
        </div>
    );
};

export default Post;
