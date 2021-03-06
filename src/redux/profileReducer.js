import { ProfileAPI, UsersAPI } from "../api/api";

import { stopSubmit } from "redux-form";

const ADD_POST = "ADD_POST";
const CREATE_POST = "CREATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const TOGGLE_HOME_PROFILE = "TOGGLE_HOME_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_IMAGE = "SET_IMAGE";

let initialState = {
    posts: [
        { id:1, text: "Hello? Anyone here?", likes: 15 },
        { id:2, text: "It is my second post", likes: 10 },
        { id:3, text: "It is my first post", likes: 5 },
    ],
    newPost: "",
    profile: null,
    isHomeProfile: false,
    status: "",
    isFetching: false,
    isError: false,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { text: state.newPost, likes: 0 }],
                newPost: "",
            };
        case CREATE_POST:
            return {
                ...state,
                newPost: action.text,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_IMAGE:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            };
        case TOGGLE_HOME_PROFILE:
            return {
                ...state,
                isHomeProfile: action.isHomeProfile,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
};

export const publishPost = () => {
    return { type: ADD_POST };
};
export const toggleHomeProfile = (isHomeProfile) => {
    return { type: TOGGLE_HOME_PROFILE, isHomeProfile };
};
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const createPost = (text) => {
    return { type: CREATE_POST, text: text };
};
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};
export const setUserImage = (photos) => {
    return { type: SET_IMAGE, photos };
};
export const setUserStatus = (status) => {
    return { type: SET_USER_STATUS, status };
};
export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        Promise.all([
            UsersAPI.getProfile(userId).then((data) => {
                dispatch(setUserProfile(data));
            }),
            ProfileAPI.getStatus(userId).then((response) => {
                dispatch(setUserStatus(response.data));
            }),
        ]).then(() => {
            dispatch(toggleIsFetching(false));
        });
    };
};
export const getUserStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then((response) => {
            dispatch(setUserStatus(response.data));
        });
    };
};
export const updateUserStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    };
};
export const updateProfile = (profile) => {
    return (dispatch) => {
        ProfileAPI.updateProfile(profile).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfile(profile));
            } else {
                dispatch(
                    stopSubmit("settings", {
                        _error:
                            "Одно из полей заполнено неверно, проверьте правильность заполнения формы.",
                    })
                );
            }
        });
    };
};
export const updateProfilePhoto = (imageResource) => {
    return (dispatch) => {
        ProfileAPI.updateProfilePhoto(imageResource).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserImage(response.data.data));
            }
        });
    };
};
