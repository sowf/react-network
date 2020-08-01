import { NavLink } from 'react-router-dom'
import Person from './Person/Person'
import React from 'react'

const Dialogs = (props) => {

    let peopleElements = props.people.map(person => <Person key={person.id} name={person.name} id={person.id}/>)

    return (
        <div className="col-md-2 col-sm-4 border-right">
            {peopleElements}
        </div>
    )
}

export default Dialogs;