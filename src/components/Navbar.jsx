import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // 'gutters' | 'services' | null
    const location = useLocation();
    const closeTimer = useRef(null);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Scroll-aware navbar
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.nav-item-dropdown')) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const guttersDropdown = [
        { to: '/gutters', label: 'All Gutters' },
        { to: '/gutters#styles', label: 'Gutter Styles' },
        { to: '/gutters#custom', label: 'Custom Gutters' },
        { to: '/gutters#downpipes', label: 'Down Pipes' },
        { to: '/gutters#fascias', label: 'Fascias' },
        { to: '/gutters#maintenance', label: 'Maintenance' },
        { to: '/colours', label: 'Colour Range' },
    ];

    const servicesDropdown = [
        { to: '/services', label: 'All Facility Services' },
        { to: '/services#cleaning', label: 'Commercial & Industrial Cleaning' },
        { to: '/services#waste', label: 'Waste Management' },
        { to: '/services#landscaping', label: 'Landscaping' },
        { to: '/services#catering', label: 'Catering Services' },
        { to: '/services#pest', label: 'Pest Management' },
        { to: '/services#hygiene', label: 'Hygiene Services' },
        { to: '/services#structural', label: 'Structural Maintenance' },
        { to: '/services#supply', label: 'Supply Services' },
        { to: '/services#security', label: 'Building Security (Coming Soon)' },
    ];

    const plainLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
    ];

    const handleDropdownEnter = (name) => {
        clearTimeout(closeTimer.current);
        setOpenDropdown(name);
    };

    const handleDropdownLeave = () => {
        closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
    };

    return (
        <>
            <motion.nav
                className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <div className="nav-container-modern">
                    {/* Logo */}
                    <NavLink to="/" className="logo-modern" onClick={() => setIsOpen(false)}>
                        <span className="logo-mark">
                            <span className="logo-bar" />
                            <span className="logo-bar short" />
                            <span className="logo-bar" />
                        </span>
                        <span className="logo-text">
                            IMVELO
                            {/*<span className="logo-accent">Gutters</span>*/}
                        </span>
                    </NavLink>

                    {/* Desktop Nav Links */}
                    <ul className="nav-links-modern">
                        {/* Home */}
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => `nav-link-modern ${isActive ? 'active' : ''}`}
                            >
                                {({ isActive }) => (
                                    <>
                                        <span>Home</span>
                                        {isActive && (
                                            <motion.span
                                                className="nav-link-underline"
                                                layoutId="nav-underline"
                                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </li>

                        {/* Gutters Dropdown */}
                        <li
                            className="nav-item-dropdown"
                            onMouseEnter={() => handleDropdownEnter('gutters')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <button
                                className={`nav-link-modern nav-link-button ${openDropdown === 'gutters' ? 'open' : ''} ${location.pathname.startsWith('/gutters') || location.pathname === '/colours' ? 'active' : ''}`}
                                onClick={() => setOpenDropdown(openDropdown === 'gutters' ? null : 'gutters')}
                            >
                                <span>Gutters</span>
                                <FaChevronDown className={`nav-caret ${openDropdown === 'gutters' ? 'rotated' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openDropdown === 'gutters' && (
                                    <motion.div
                                        className="nav-dropdown"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="nav-dropdown-inner">
                                            {guttersDropdown.map((item) => (
                                                <Link
                                                    key={item.to}
                                                    to={item.to}
                                                    className="nav-dropdown-item"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <span>{item.label}</span>
                                                    <FaChevronRight className="nav-dropdown-arrow" />
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* Facility Services Dropdown */}
                        <li
                            className="nav-item-dropdown"
                            onMouseEnter={() => handleDropdownEnter('services')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <button
                                className={`nav-link-modern nav-link-button ${openDropdown === 'services' ? 'open' : ''} ${location.pathname === '/services' ? 'active' : ''}`}
                                onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                            >
                                <span>Facility Services</span>
                                <FaChevronDown className={`nav-caret ${openDropdown === 'services' ? 'rotated' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openDropdown === 'services' && (
                                    <motion.div
                                        className="nav-dropdown nav-dropdown-wide"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="nav-dropdown-inner nav-dropdown-grid">
                                            {servicesDropdown.map((item) => (
                                                <Link
                                                    key={item.to}
                                                    to={item.to}
                                                    className="nav-dropdown-item"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    <span>{item.label}</span>
                                                    <FaChevronRight className="nav-dropdown-arrow" />
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>

                        {/* About + Contact */}
                        {plainLinks.slice(1).map((item) => (
                            <li key={item.to}>
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) => `nav-link-modern ${isActive ? 'active' : ''}`}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <span>{item.label}</span>
                                            {isActive && (
                                                <motion.span
                                                    className="nav-link-underline"
                                                    layoutId="nav-underline"
                                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="nav-cta-wrap">
                        <Link to="/contact" className="nav-cta">
                            <FaWhatsapp />
                            <span>Get a Quote</span>
                        </Link>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="hamburger-modern"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen ? (
                                <motion.span
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaTimes size={26} />
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="open"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaBars size={26} />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="mobile-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.aside
                            className="mobile-drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                        >
                            <div className="drawer-header">
                                <span className="drawer-title">Menu</span>
                            </div>

                            <ul className="drawer-links">
                                <motion.li initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }}>
                                    <NavLink to="/" end className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                                        <span>Home</span>
                                        <FaChevronRight className="drawer-arrow" />
                                    </NavLink>
                                </motion.li>

                                {/* Gutters group */}
                                <motion.li initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.14 }}>
                                    <div className="drawer-group-title">Gutters</div>
                                    {guttersDropdown.map((item) => (
                                        <NavLink key={item.to} to={item.to} className="drawer-sublink" onClick={() => setIsOpen(false)}>
                                            <span>{item.label}</span>
                                            <FaChevronRight className="drawer-arrow" />
                                        </NavLink>
                                    ))}
                                </motion.li>

                                {/* Facility Services group */}
                                <motion.li initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <div className="drawer-group-title">Facility Services</div>
                                    {servicesDropdown.map((item) => (
                                        <NavLink key={item.to} to={item.to} className="drawer-sublink" onClick={() => setIsOpen(false)}>
                                            <span>{item.label}</span>
                                            <FaChevronRight className="drawer-arrow" />
                                        </NavLink>
                                    ))}
                                </motion.li>

                                <motion.li initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26 }}>
                                    <NavLink to="/about" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                                        <span>About</span>
                                        <FaChevronRight className="drawer-arrow" />
                                    </NavLink>
                                </motion.li>

                                <motion.li initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.32 }}>
                                    <NavLink to="/contact" className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                                        <span>Contact</span>
                                        <FaChevronRight className="drawer-arrow" />
                                    </NavLink>
                                </motion.li>
                            </ul>

                            <motion.div
                                className="drawer-cta-wrap"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                            >
                                <Link to="/contact" className="drawer-cta" onClick={() => setIsOpen(false)}>
                                    <FaWhatsapp />
                                    Get a Quote
                                </Link>
                            </motion.div>

                            <div className="drawer-footer">
                                <p>IMVELO Facility Management Services</p>
                                <p className="drawer-footer-sub">Since 2010 • 100% Female Owned</p>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;