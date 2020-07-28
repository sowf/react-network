import {followAC, setPeopleAC, unfollowAC} from '../../redux/peopleReducer'

import People from './People'
import React from 'react'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return(
        {
            peoplePage: state.peoplePage
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return(
        {
            addPeople: people =>{
                dispatch(setPeopleAC(people))
            },
            follow: personId =>{
                dispatch(followAC(personId))
            },
            unfollow: personId =>{
                dispatch(unfollowAC(personId))
            }
        }
    )
}


const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;