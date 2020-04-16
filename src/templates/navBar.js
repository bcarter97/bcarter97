import React, { useState } from 'react';
import '../App.sass';
import banner from '../images/banner.png';

function NavBar() {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={banner} height="28" alt="Site logo" />
                    </div>

                    <div
                        role="button"
                        className={`navbar-burger burger ${menuVisible ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={() => setMenuVisible(!menuVisible)}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${menuVisible ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <a className="navbar-item" href="#Home">
                            Home
                        </a>

                        <a className="navbar-item" href="#Documentation">
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href="#more" className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item"
                                    href="#About">
                                    About
                                </a>
                                <a className="navbar-item"
                                    href="#Jobs">
                                    Jobs
                                </a>
                                <a className="navbar-item"
                                    href="#Contact">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item"
                                    href="#Report">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="#signup" className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a href="#login" className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;