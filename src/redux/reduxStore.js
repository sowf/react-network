import { applyMiddleware, combineReducers, createStore } from 'redux';

import { authReducer } from './authReducer';
import { reducer as formReducer } from 'redux-form'
import { messageReducer } from './messageReducer';
import { peopleReducer } from './peopleReducer';
import { profileReducer } from './profileReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    peoplePage: peopleReducer,
    auth: authReducer,
    form: formReducer
    
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store.getState();


export default store