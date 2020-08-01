import { Field, reduxForm } from "redux-form";

import { Preloader } from "../Preloader";
import React from "react";

const Login = (props) => {
    if (props.auth.isFetching) {
        return <Preloader />;
    }
    return (
        <div className="col-md-4 col-sm-6  mx-auto my-3">
            <div class="card p-4">
                <form onSubmit={props.handleSubmit}>
                    <div class="form-group">
                        <label>Адрес почты</label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            class="form-control"
                            placeholder="Введите email"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                            Мы не занимаемся распространением вашей приватной
                            информации
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Пароль</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Пароль"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                            Для входа используйте тестовые почту и пароль.
                            <br />
                            Email: free@samuraijs.com <br />
                            Пароль: free
                        </small>
                    </div>

                    {!!props.auth.Captcha && (
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Введите символы с картинки</label>
                            <img src={props.auth.Captcha} />
                            <Field
                                name="captcha"
                                component="input"
                                class="form-control"
                            />
                        </div>
                    )}
                    
                    <div class="form-check">
                        <Field
                            name="rememberMe"
                            component="input"
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                            Запомнить меня
                        </label>
                    </div>
                    {props.error && (
                        <div class="alert alert-danger" role="alert">
                            {props.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        class="btn btn-primary btn-block mt-2"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
