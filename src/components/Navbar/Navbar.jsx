import { NavLink } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux'
import { getId } from '../../redux/authSelector';

const Navbar = (props) => {
    return (
        <div className="col-3 border-right p-0" id="sidebar-wrapper">
            <div className="list-group list-group-flush w-100">
                <NavLink className="list-group-item list-group-item-action" to={`/profile/${props.id}`}>Профиль</NavLink> 
                <NavLink className="list-group-item list-group-item-action" to="/messages">Сообщения</NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/people">Люди</NavLink>
                <a href="#" className="list-group-item list-group-item-action">Музыка</a>
                <a href="#" className="list-group-item list-group-item-action">Настройки</a>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        id: getId(state)
    }
}

let NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;