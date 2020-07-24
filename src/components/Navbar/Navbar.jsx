import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="col-3 border-right p-0" id="sidebar-wrapper">
            <div className="list-group list-group-flush w-100">
                <NavLink className="list-group-item list-group-item-action" to="/profile">Profile</NavLink> 
                <NavLink className="list-group-item list-group-item-action" to="/messages">Messages</NavLink>
                <a href="#" className="list-group-item list-group-item-action">Music</a>
                <a href="#" className="list-group-item list-group-item-action">Settings</a>
                <a href="#" className="list-group-item list-group-item-action">Log out</a>
            </div>
        </div>
    );
}

export default Navbar;