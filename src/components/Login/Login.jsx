import { Field } from "redux-form";
import { Preloader } from "../Preloader";
import React from "react";

const Login = (props) => {
    if (props.auth.isFetching) {
        return <Preloader />;
    }
    return (
        <div className="col-md-4 col-sm-6  mx-auto my-3">
            <div className="card p-4">
                <form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label>Адрес почты</label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            className="form-control"
                            placeholder="Введите email"
                        />
                        <small className="form-text text-muted">
                            Мы не занимаемся распространением вашей приватной
                            информации
                        </small>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            className="form-control"
                            placeholder="Пароль"
                        />
                        <small className="form-text text-muted">
                            Для входа используйте тестовые почту и пароль.
                            <br />
                            Email: free@samuraijs.com <br />
                            Пароль: free
                        </small>
                    </div>

                    {!!props.auth.Captcha && (
                        <div className="form-group mt-3">
                            <label>Введите символы с картинки</label>
                            <img alt='' src={props.auth.Captcha} />
                            <Field
                                name="captcha"
                                component="input"
                                className="form-control"
                            />
                        </div>
                    )}
                    
                    <div className="form-check">
                        <Field
                            name="rememberMe"
                            component="input"
                            type="checkbox"
                            className="form-check-input"
                        />
                        <label className="form-check-label">
                            Запомнить меня
                        </label>
                    </div>
                    {props.error && (
                        <div className="alert alert-danger" role="alert">
                            {props.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary btn-block mt-2"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
