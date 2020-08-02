import { AuthAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_AUTHENTICATED = "SET_USER_AUTHENTICATED";
const SET_USER_DEAUTHENTICATED = "SET_USER_DEAUTHENTICATED";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_CAPTCHA_NEEDED = "TOGGLE_IS_CAPTCHA_NEEDED";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false,
    isFetching: false,
    isCaptchaNeeded: false,
    Captcha: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
            };
        case SET_USER_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_CAPTCHA:
            return {
                ...state,
                Captcha: action.Captcha,
            };
        case TOGGLE_IS_CAPTCHA_NEEDED:
            return {
                ...state,
                isCaptchaNeeded: action.isCaptchaNeeded,
            };
        case SET_USER_DEAUTHENTICATED:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export const setUserData = ({ id, email, login }) => {
    return { type: SET_USER_DATA, id, email, login };
};
export const setCaptcha = (Captcha) => {
    return { type: SET_CAPTCHA, Captcha };
};
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleIsCaptcha = (isCaptcha) => {
    return { type: TOGGLE_IS_CAPTCHA_NEEDED, isCaptcha };
};
export const setUserAuthenticated = () => {
    return { type: SET_USER_AUTHENTICATED };
};
export const setUserDeauthenticated = () => {
    return { type: SET_USER_DEAUTHENTICATED };
};
export const getUserAuthenticated = () => {
    return (dispatch) => {
        AuthAPI.getUserAuthenticated().then((response) => {
            dispatch(setUserData(response.data));
            if (response.resultCode === 0) {
                dispatch(setUserAuthenticated());
            }
        });
    };
};
export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        AuthAPI.loginRequest(
            email,
            password,
            (rememberMe = false),
            captcha
        ).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getUserAuthenticated());
                dispatch(toggleIsFetching(false));
                dispatch(setCaptcha(null));
            } else if (response.data.resultCode === 10) {
                dispatch(toggleIsCaptcha(true));
                Promise.all([
                    AuthAPI.getCaptcha().then((response) =>
                        dispatch(setCaptcha(response.data.url))
                    ),
                ]).then(() => {
                    dispatch(getUserAuthenticated());
                    dispatch(toggleIsFetching(false));
                });
            } else {
                dispatch(
                    stopSubmit("login", { _error: "Неверный логин/пароль" })
                );
                dispatch(toggleIsFetching(false));
            }
        });
    };
};
export const logout = () => {
    return (dispatch) => {
        AuthAPI.logoutRequest().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDeauthenticated());
            }
        });
    };
};
