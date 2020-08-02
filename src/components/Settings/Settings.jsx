import { Field } from "redux-form";
import React from "react";
import defaultUserImage from "../../assets/defaultUserImage.png";
import styles from "./SettingsImage.module.css";

const Settings = (props) => {
    return (
        <div className="col-md-5 mx-auto p-2">
            <div className="card p-4">
                <div className="mb-3 border-bottom">
                    <img
                        alt=""
                        className={`${styles.photo} d-block mx-auto my-2`}
                        src={
                            props.profilePage.profile.photos
                                ? props.profilePage.profile.photos.large
                                : defaultUserImage
                        }
                    />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Обновление аватара
                            </span>
                        </div>
                        <div className="custom-file">
                            <input
                                type="file"
                                className="custom-file-input"
                                onChange={props.onPhotoChanged}
                            />
                            <label
                                className="custom-file-label"
                            >
                                Выберите файл
                            </label>
                        </div>
                    </div>
                </div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <div className="form-group">
                            <label>Псевдоним</label>
                            <Field
                                required
                                name="fullName"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Обо мне</label>
                            <Field
                                required
                                name="aboutMe"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>
                                Аккаунт Facebook
                            </label>
                            <Field
                                name="contacts.facebook"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Веб-сайт</label>
                            <Field
                                name="contacts.website"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>VK</label>
                            <Field
                                name="contacts.vk"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Twitter</label>
                            <Field
                                name="contacts.twitter"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Instagram</label>
                            <Field
                                name="contacts.instagram"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>GitHub</label>
                            <Field
                                name="contacts.github"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-check mb-2">
                            <Field
                                required
                                name="lookingForAJob"
                                type="checkbox"
                                component="input"
                                className="form-check-input"
                            />
                            <label className="form-check-label">
                                В поисках работы
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Описание желаемой вакансии
                            </label>
                            <Field
                                required
                                name="lookingForAJobDescription"
                                component="input"
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                    {props.error && (
                        <div className="alert alert-danger" role="alert">
                            {props.error}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="btn btn-block btn-primary mt-3"
                    >
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
