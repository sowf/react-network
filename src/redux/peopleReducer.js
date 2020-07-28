const SET_PEOPLE = "SET_PEOPLE";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";

let initialState = {
  people: [],
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        people: [...state.people, ...action.people],
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
export const followAC = (personId) => ({
  type: FOLLOW_USER,
  personId: personId,
});
export const unfollowAC = (personId) => ({
  type: UNFOLLOW_USER,
  personId: personId,
});
export const setPeopleAC = (people) => ({ type: SET_PEOPLE, people: people });
