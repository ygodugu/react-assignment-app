import React, { useState } from 'react';
import Icon from "../assets/images/chrome-logo-m100.svg";

const Navbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <div className="navbar">
            <div className="navbar__container">
                <button
                    type="button"
                    className="navbar__toggle"
                    onClick={toggleOffcanvas}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar__toggle-icon">&#9776;</span>
                </button>
                <a href="#" title="Google Chrome" className="navbar__brand-link">
                    <div className="navbar__brand-content">
                        <img src={Icon} alt="Icon" />
                        <span>
                            <h2>Chrome</h2>
                        </span>
                    </div>
                </a>
                {/* Navigation links */}
                <nav className={`navbar__menu ${showOffcanvas ? '' : 'large-screen'}`} aria-label="navigation menu">
                    <ul className="navbar__menu-list" id="navbarMenu">
                        <li className="navbar__menu-item Nav-margin">
                            <a href="#" className="navbar__menu-link">AI Innovations</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">Features</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">Safety</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">By Google</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">Extensions <span>⭡</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Offcanvas menu */}
            <div className={`offcanvas offcanvas-start ${showOffcanvas ? 'show' : ''}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas Menu</h5>
                    <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar__menu-list offcanvas-menu">
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">AI Innovations</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">Features</a>
                        </li>
                        <li className="navbar__menu-item">
                            <a href="#" className="navbar__menu-link">Safety</a>
                        </li>
                        <button className="btn btn-primary">Action Button</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
