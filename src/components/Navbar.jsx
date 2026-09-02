import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <span className="logo-icon">🏠</span>
                    Seamless<span>Gutters</span>
                </NavLink>

                <button className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
                </button>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <NavLink
                            to="/"
                            onClick={closeMenu}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            onClick={closeMenu}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Products & Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/colours"
                            onClick={closeMenu}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Colours
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            onClick={closeMenu}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={closeMenu}
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;