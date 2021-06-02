import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/workshops">List of workshops</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;