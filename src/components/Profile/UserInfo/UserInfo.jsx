import ProfileStatus from "./ProfileStatus";
import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = (props) => {
    return (
        <div className="col-lg-6 col-md-5 col-sm-6 pb-3">
            {props.contacts ? (
                <>
                    <div className="card p-3 mt-2">
                        <div className={`${styles.userName}`}>
                            {props.fullName}
                        </div>
                        <ProfileStatus
                            status={props.status}
                            updateUserStatus={props.updateUserStatus}
                        />
                        <div className={`${styles.aboutMe} mt-2`}>
                            <span className={styles.info}>Обо мне:</span>{" "}
                            {props.aboutMe}
                            <br />
                            <span className={styles.info}>
                                Аккаунт facebook:
                            </span>{" "}
                            {props.contacts.facebook
                                ? props.contacts.facebook
                                : "Нет"}
                            <br />
                            <span className={styles.info}>Сайт:</span>{" "}
                            {props.contacts.website
                                ? props.contacts.website
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>
                                Аккаунт vk:
                            </span>{" "}
                            {props.contacts.vk ? props.contacts.vk : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>
                                Аккаунт twitter:
                            </span>{" "}
                            {props.contacts.twitter
                                ? props.contacts.twitter
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>
                                Аккаунт instagram:
                            </span>{" "}
                            {props.contacts.instagram
                                ? props.contacts.instagram
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>
                                Аккаунт github:
                            </span>{" "}
                            {props.contacts.github
                                ? props.contacts.github
                                : "Нет"}{" "}
                            <br />
                            <span className={styles.info}>
                                Ищу работу:
                            </span>{" "}
                            {props.lookingForAJob ? "Да" : "Нет"} <br />
                            <span className={styles.info}>
                                Описание желаемой вакансии:
                            </span>{" "}
                            {props.lookingForAJobDescription ? props.lookingForAJobDescription : "Нет"} <br />
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

export default UserInfo;
