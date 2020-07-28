// import {profileReducer} from './profileReducer'
// import {messageReducer} from './messageReducer'

const ADD_POST = "ADD_POST";
const CREATE_POST = "CREATE_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const CREATE_MESSAGE = "CREATE_MESSAGE";


// let store = {
//   _state: {
//     messagesPage: {
//       messages: [
//         {id:1, text:'Hi', align:'mr-auto'},
//         {id:2, text:'Whats up', align:'ml-auto'},
//         {id:3, text:'Nice and how are you', align:'mr-auto'},
//         {id:4, text:'Its allright thanks', align:'ml-auto'},
//         {id:5, text:'Bye', align:'mr-auto'}
//       ],
//       people: [
//         { id: 1, name: 'Andrei' },
//         { id: 2, name: 'Boris' },
//         { id: 3, name: 'Vasya' },
//         { id: 4, name: 'Gennady' },
//         { id: 5, name: 'Dmitry' }
//       ],
//       newMessage:''
//     },
//     profilePage:{
//       posts: [
//         {text:"Hello? Anyone here?", likes:15},
//         {text:"It is my second post", likes:10},
//         {text:"It is my first post", likes:5}
//       ],
//       newPost:''
//     }
//   },
//   getState () {
//     return this._state;
//   },
//   _callSubscriber () {
//     console.log('State changed')
//   },
//   dispatch (action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.messagesPage = messageReducer(this._state.messagesPage, action)  

//     this._callSubscriber(this._state)
//   },
//   subscribe (observer) {
//     this._callSubscriber = observer
//   }
// }


export const sendMessageCreator = () => {
  return {type:SEND_MESSAGE}
}
export const createMessageCreator = (text) => {
  return {type:CREATE_MESSAGE, text:text}
}

// export default store;

// window.store = store;