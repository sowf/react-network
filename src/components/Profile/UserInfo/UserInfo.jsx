import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
    return (
        <>
            <div className="col-8">
                {props.contacts ? (
                    <>
                        <div className={`${styles.userName} mt-1`}>
                            {props.fullName}
                        </div>
                        <div className={`${styles.aboutMe} mt-1`}>
                            {props.aboutMe}
                        </div>
                        <div className={`${styles.contacts} mt-1`}>
                            <span className={styles.info}>Аккаунт facebook:</span>{" "}
                            {props.contacts.facebook
                                ? props.contacts.facebook
                                : "Нет"}
                            <br />
                            <span className={styles.info}>Сайт:</span>{" "}
                            {props.contacts.website
                                ? props.contacts.website
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>Аккаунт vk:</span>{" "}
                            {props.contacts.vk ? props.contacts.vk : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>Аккаунт twitter:</span>{" "}
                            {props.contacts.twitter
                                ? props.contacts.twitter
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>Аккаунт instagram:</span>{" "}
                            {props.contacts.instagram
                                ? props.contacts.instagram
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>Аккаунт github:</span>{" "}
                            {props.contacts.github
                                ? props.contacts.github
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>Ищу работу:</span>{" "}
                            {props.lookingForAJob
                                ? "Да"
                                : "Нет"}{" "}
                            <br />
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default UserInfo;
