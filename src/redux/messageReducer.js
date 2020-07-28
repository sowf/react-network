const SEND_MESSAGE = "SEND_MESSAGE";
const CREATE_MESSAGE = "CREATE_MESSAGE";

let initialState = {
  messages: [
    {id:1, text:'Hi', align:'mr-auto'},
    {id:2, text:'Whats up', align:'ml-auto'},
    {id:3, text:'Nice and how are you', align:'mr-auto'},
    {id:4, text:'Its allright thanks', align:'ml-auto'},
    {id:5, text:'Bye', align:'mr-auto'}
  ],
  people: [
    { id: 1, name: 'Andrei' },
    { id: 2, name: 'Boris' },
    { id: 3, name: 'Vasya' },
    { id: 4, name: 'Gennady' },
    { id: 5, name: 'Dmitry' }
  ],
  newMessage:''
}

export const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
          return {
            ...state,
            messages: [...state.messages, {id:6, text:state.newMessage, align:'ml-auto'}],
            newMessage: ""
          }
        case CREATE_MESSAGE:
          return {
            ...state,
            newMessage: action.text
          }
        default:
          return state
      }
}

export const sendMessageCreator = () => {
  return {type:SEND_MESSAGE}
}
export const createMessageCreator = (text) => {
  return {type:CREATE_MESSAGE, text:text}
}

