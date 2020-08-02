import { NavLink } from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux'
import { getId } from '../../redux/authSelector';

const Navbar = (props) => {
    return (
        <div className="col-md-3 border-right p-0 pb-5" id="sidebar-wrapper">
            <div className="list-group list-group-flush w-100">
                <NavLink className="list-group-item list-group-item-action" to={`/profile/${props.id}`}>Профиль</NavLink> 
                <NavLink className="list-group-item list-group-item-action" to="/messages">Сообщения</NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/people">Люди</NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/music">Музыка</NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/pictures">Картинки</NavLink>
                <NavLink className="list-group-item list-group-item-action" to="/settings">Настройки</NavLink>
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