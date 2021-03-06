import { UsersAPI } from "../api/api";

const SET_PEOPLE = "SET_PEOPLE";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_COUNT_PEOPLE = "SET_COUNT_PEOPLE";
const IS_FETCHING = "IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    people: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    usersInFollowingProgress: [],
};

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE:
            return {
                ...state,
                people: [...action.people],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_COUNT_PEOPLE:
            return {
                ...state,
                totalUsersCount: action.countPeople,
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                usersInFollowingProgress: action.isFetching
                    ? [...state.usersInFollowingProgress, action.userId]
                    : state.usersInFollowingProgress.filter(
                          (id) => id !== action.userId
                      ),
            };
        case FOLLOW_USER:
            return {
                ...state,
                people: state.people.map((person) => {
                    if (action.personId === person.id) {
                        return { ...person, followed: true };
                    }
                    return person;
                }),
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                people: state.people.map((person) => {
                    if (action.personId === person.id) {
                        return { ...person, followed: false };
                    }
                    return person;
                }),
            };
        default:
            return state;
    }
};
export const follow = (personId) => ({
    type: FOLLOW_USER,
    personId: personId,
});
export const unfollow = (personId) => ({
    type: UNFOLLOW_USER,
    personId: personId,
});
export const setPeople = (people) => ({ type: SET_PEOPLE, people: people });
export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    currentPage: page,
});
export const setCountPeople = (number) => ({
    type: SET_COUNT_PEOPLE,
    countPeople: number,
});
export const isFetching = (isFetching) => ({
    type: IS_FETCHING,
    isFetching,
});
export const toggleIsFollowing = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(isFetching(false));
            dispatch(setPeople(data.items));
            dispatch(setCountPeople(data.totalCount));
        });
    };
};
export const followRequest = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        UsersAPI.follow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId))
                dispatch(toggleIsFollowing(false, userId))
            }
        });
    };
};
export const unfollowRequest = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        UsersAPI.unfollow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(userId))
                dispatch(toggleIsFollowing(false, userId))
            }
        });
    };
};
