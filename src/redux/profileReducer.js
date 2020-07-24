const ADD_POST = "ADD_POST";
const CREATE_POST = "CREATE_POST";

let initialState = {
  posts: [
    {text:"Hello? Anyone here?", likes:15},
    {text:"It is my second post", likes:10},
    {text:"It is my first post", likes:5}
  ],
  newPost:''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
          return {
            ...state,
            posts: [...state.posts, {text:state.newPost, likes:0}],
            newPost: ""
          }
        case CREATE_POST:
          return {
            ...state,
            newPost: action.text
          }
        default:
          return state
      }
}
