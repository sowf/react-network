const SET_PEOPLE = "SET_PEOPLE";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_COUNT_PEOPLE = "SET_COUNT_PEOPLE";
const IS_FETCHING = "IS_FETCHING";

let initialState = {
    people: [
        // {
        //   name: "nastjaz",
        //   id: 955678,
        //   uniqueUrlName: null,
        //   photos: {
        //     small:
        //       "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        //     large:
        //       "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
        //   },
        //   status: null,
        //   followed: false,
        // },
        // {
        //   name: "Ozzy_Noizy1",
        //   id: 955578,
        //   uniqueUrlName: null,
        //   photos: {
        //     small: null,
        //     large: null,
        //   },
        //   status: null,
        //   followed: false,
        // },
    ],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false
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
