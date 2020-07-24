import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg border-bottom">
            <a className="navbar-brand text-secondary" href="#">
                <img src="https://www.roscosmos.ru/media/files/identity/roscosmos-logo-main.png" width="40" height="40" class="d-inline-block align-top" alt="" />
            Social
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default Header;