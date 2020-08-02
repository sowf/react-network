import React from "react";
import defaulUserImage from "../../../assets/defaultUserImage.png";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className="col-md-9 ml-auto mt-2">
            <table>
                <tbody>
                    <tr>
                        <th>
                            <img
                                alt=""
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
                            <div className={styles.text}>
                                {props.likes} likes
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Post;
