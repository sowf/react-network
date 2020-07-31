import {profileReducer} from './profileReducer'

test('fetching should change to true', () => {
    //1. Test Data
    let action = {
        type:'TOGGLE_IS_FETCHING',
        isFetching: true
    }
    //2. Action
    let newState = profileReducer(null, action)

    //3. Expectation
    expect(newState.isFetching).toBe(true)
});
test('fetching should change to false', () => {
    //1. Test Data
    let action = {
        type:'TOGGLE_IS_FETCHING',
        isFetching: false
    }
    //2. Action
    let newState = profileReducer(null, action)

    //3. Expectation
    expect(newState.isFetching).toBe(false)
});