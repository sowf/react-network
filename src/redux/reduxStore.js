import { combineReducers, createStore } from 'redux';

import { messageReducer } from './messageReducer';
import { peopleReducer } from './peopleReducer';
import { profileReducer } from './profileReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    peoplePage: peopleReducer
})

let store = createStore(reducers);

window.state = store.getState();


export default store