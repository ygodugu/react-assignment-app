import React, { useState, useEffect } from 'react';
import Icon from "../assets/images/chrome-logo-m100.svg"

const Header = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='header-container'>
                <img src={Icon} alt="Icon" />
                <h1>The browser <br /> built to be yours</h1>
            </div>
            <div className={`nav-header-container ${isScrolled ? 'scrolled' : ''} ${isSmallScreen ? 'hidden' : ''} mb-5`}>
                <div className='header-nav'>
                    <ul className='header-navbar'>
                        <li className='header-nav-item'>
                            <a href="#" className='header-nav-link'>Updates</a>
                        </li>
                        <li className='header-nav-item'>
                            <a href="#" className='header-nav-link'>AI</a>
                        </li>
                        <li className='header-nav-item'>
                            <a href="#" className='header-nav-link'>Yours</a>
                        </li>
                        <li className='header-nav-item'>
                            <a href="#" className='header-nav-link'>Safe</a>
                        </li>
                        <li className='header-nav-item'>
                            <a href="#" className='header-nav-link'>Fast</a>
                        </li>
                        <li className='header-nav-item'>
                            <a href="#" className='header-nav-link'>By Google</a>
                        </li>
                    </ul>
                </div>
                <div className="additional-content">
                    <p>Need the Chrome installer? Download <a href="#">here</a></p>
                </div>
            </div>
        </>
    )
}

export default Header;
