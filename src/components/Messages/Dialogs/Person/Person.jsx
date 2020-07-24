import React from 'react'
import styles from './Person.module.css'
import { NavLink } from 'react-router-dom';


const Person = (props) => {
    return(
        <div className='p-2 w-100 my-1'>
            <NavLink to={`/messages/` + props.id} className={styles.text}>{props.name}</NavLink>
        </div>
    )
}

export default Person;