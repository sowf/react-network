import { Field } from "redux-form";
import React from "react";
import defaultUserImage from "../../assets/defaultUserImage.png";
import styles from "./SettingsImage.module.css";

const Settings = (props) => {
    return (
        <div className="col-md-5 mx-auto p-2">
            <div class="card p-4">
                <div className="mb-3 border-bottom">
                    <img
                        className={`${styles.photo} d-block mx-auto my-2`}
                        src={props.photo ? props.photo : defaultUserImage}
                    />
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                Обновление аватара
                            </span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" onChange={props.onPhotoChanged} />
                            <label
                                class="custom-file-label"
                                for="inputGroupFile01"
                            >
                                Выберите файл
                            </label>
                        </div>
                    </div>
                </div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Псевдоним</label>
                            <Field
                                required
                                name="fullName"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Обо мне</label>
                            <Field
                                required
                                name="aboutMe"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">
                                Аккаунт Facebook
                            </label>
                            <Field
                                name="contacts.facebook"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label>Веб-сайт</label>
                            <Field
                                name="contacts.website"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label>VK</label>
                            <Field
                                name="contacts.vk"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label>Twitter</label>
                            <Field
                                name="contacts.twitter"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label>Instagram</label>
                            <Field
                                name="contacts.instagram"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-group">
                            <label>GitHub</label>
                            <Field
                                name="contacts.github"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="form-check mb-2">
                            <Field
                                required
                                name="lookingForAJob"
                                type="checkbox"
                                component="input"
                                class="form-check-input"
                            />
                            <label class="form-check-label">
                                В поисках работы
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">
                                Описание желаемой вакансии
                            </label>
                            <Field
                                required
                                name="lookingForAJobDescription"
                                component="input"
                                type="text"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        class="btn btn-block btn-primary mt-3"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Settings;
