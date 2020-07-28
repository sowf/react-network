const ADD_POST = "ADD_POST";
const CREATE_POST = "CREATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { text: "Hello? Anyone here?", likes: 15 },
        { text: "It is my second post", likes: 10 },
        { text: "It is my first post", likes: 5 },
    ],
    newPost: "",
    profile: null,
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
        default:
            return state;
    }
};

export const publishPost = () => {
    return { type: ADD_POST };
};
export const createPost = (text) => {
    return { type: CREATE_POST, text: text };
};
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};
