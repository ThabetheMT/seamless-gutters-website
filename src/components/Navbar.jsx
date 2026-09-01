import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">🏠</span>
                    Seamless<span>Gutters</span>
                </Link>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes size={24} color="#fff" /> : <FaBars size={24} color="#fff" />}
                </div>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/products" onClick={() => setIsOpen(false)}>Products & Services</Link></li>
                    <li><Link to="/colours" onClick={() => setIsOpen(false)}>Colours</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;