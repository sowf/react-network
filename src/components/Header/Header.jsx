import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";

const Header = (props) => {
    let onLogoutClick = () => {
        props.logout();
    };
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <NavLink className="navbar-brand text-secondary" to="/">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt=""
                />
                React Network
            </NavLink>
            {props.isAuthenticated && (
                <NavLink className="ml-auto" to="/login">
                    <button
                        type="button"
                        onClick={onLogoutClick}
                        className="btn btn-outline-primary"
                    >
                        {props.login} <i className="fas fa-sign-out-alt"></i>
                    </button>
                </NavLink>
            )}
            {!props.isAuthenticated && (
                <NavLink className="ml-auto" to="/login">
                    <button type="button" className="btn btn-outline-primary">
                        Войти
                    </button>
                </NavLink>
            )}

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
};

export default Header;
