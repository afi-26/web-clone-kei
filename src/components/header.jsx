import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../logo.svg';
import logoMini from '../logo-mini.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { href: "#home", text: "Home" },
        { href: "#cards", text: "Cards" },
        { href: "#trade", text: "Trade" },
        { href: "#presale", text: "Presale" },
        { href: "#roadmap", text: "Roadmap" },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <div className="logo">
                    <img src={isScrolled ? logoMini : logo} alt="KEI Finance Logo" />
                </div>
                <div className="menu-and-buttons">
                    {windowWidth > 990 ? (
                        <nav>
                            <ul className="nav-menu">
                                {menuItems.map((item, index) => (
                                    <li key={index}><a href={item.href}>{item.text}</a></li>
                                ))}
                            </ul>
                        </nav>
                    ) : (
                        <div className="dropdown">
                            <button onClick={toggleMenu} className="dropdown-toggle">
                                {isMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
                            </button>
                            {isMenuOpen && (
                                <nav className="mobile-nav">
                                    <ul className="mobile-nav-menu">
                                        {menuItems.map((item, index) => (
                                            <li key={index}><a href={item.href} onClick={toggleMenu}>{item.text}</a></li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </div>
                    )}
                    {windowWidth > 990 && (
                        <div className="right-menu">
                            <button className="menu-button">Docs</button>
                            <button className="menu-button">App</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
