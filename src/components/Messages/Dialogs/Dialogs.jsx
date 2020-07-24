import React from 'react'
import Person from './Person/Person'
import { NavLink } from 'react-router-dom'



const Dialogs = (props) => {

    let peopleElements = props.people.map(person => <Person name={person.name} id={person.id}/>)

    return (
        <div className="col-2 border-right">
            {peopleElements}
        </div>
    )
}

export default Dialogs;