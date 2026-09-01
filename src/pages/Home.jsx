import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaShieldAlt,
    FaStar,
    FaCheckCircle,
    FaTools,
    FaHome,
    FaBuilding,
    FaTruck,
    FaClock,
    FaMedal,
    FaWhatsapp,
    FaPhone,
    FaArrowRight,
    FaLeaf,
    FaWater,
    FaSun,
    FaCloudRain
} from 'react-icons/fa';
import './Home.css';

// Hero Background Image
import heroBg from '../assets/hero-bg.jpg';
// Project Images
import homes from '../assets/homes.jpg';
import gutter from '../assets/gutter.jpg';
import fascia from '../assets/fascia.jpg';
import commercial from '../assets/homes.jpg';

const Home = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const projects = [
        {
            id: 1,
            title: 'Residential Installation',
            image: homes,
            description: 'Complete gutter system for family home'
        },
        {
            id: 2,
            title: 'Commercial Project',
            image: commercial,
            description: 'Large-scale commercial installation'
        },
        {
            id: 3,
            title: 'Gutter Replacement',
            image: gutter,
            description: 'Modern upgrade for older property'
        },
        {
            id: 4,
            title: 'Fascia Installation',
            image: fascia,
            description: 'New fascia and bargeboard installation'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [projects.length]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Floating elements with different animations
    const floatingElements = [
        { icon: '⭐', text: '5-Star Service', x: 5, y: 10, delay: 0 },
        { icon: '🏆', text: 'Since 1998', x: 85, y: 15, delay: 0.5 },
        { icon: '👷', text: 'Expert Team', x: 10, y: 75, delay: 1 },
        { icon: '🛡️', text: '20 Year Guarantee', x: 90, y: 80, delay: 1.5 },
        { icon: '✨', text: 'Premium Materials', x: 15, y: 45, delay: 2 },
        { icon: '🔨', text: '5 Year Workmanship', x: 80, y: 50, delay: 2.5 },
        { icon: '💰', text: 'Best Value', x: 50, y: 5, delay: 3 },
        { icon: '🌧️', text: 'Rainwater Solutions', x: 50, y: 92, delay: 3.5 },
    ];

    // Parallax floating icons
    const floatingIcons = [
        { icon: FaCloudRain, x: 8, y: 20, size: 40, delay: 0 },
        { icon: FaSun, x: 92, y: 25, size: 35, delay: 1 },
        { icon: FaWater, x: 5, y: 60, size: 30, delay: 2 },
        { icon: FaLeaf, x: 95, y: 65, size: 32, delay: 3 },
    ];

    return (
        <div>
            {/* ===== HERO SECTION WITH BACKGROUND IMAGE ===== */}
            <section className="hero-section">
                {/* Background Image with Overlay */}
                <div className="hero-background">
                    <div className="hero-bg-image">
                        <img
                            src={heroBg}
                            alt="Beautiful home with gutters"
                            className="bg-image"
                        />
                        <div className="bg-gradient"></div>
                    </div>
                </div>

                {/* Animated Background Particles */}
                <div className="particles-container">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            initial={{
                                // eslint-disable-next-line react-hooks/purity
                                x: Math.random() * 100 + '%',
                                // eslint-disable-next-line react-hooks/purity
                                y: Math.random() * 100 + '%',
                                // eslint-disable-next-line react-hooks/purity
                                opacity: 0.1 + Math.random() * 0.3
                            }}
                            animate={{
                                y: ['0%', '100%', '0%'],
                                // eslint-disable-next-line react-hooks/purity
                                x: [`${Math.random() * 50}%`, `${Math.random() * 50}%`, `${Math.random() * 50}%`],
                            }}
                            transition={{
                                // eslint-disable-next-line react-hooks/purity
                                duration: 15 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                // eslint-disable-next-line react-hooks/purity
                                width: 2 + Math.random() * 4,
                                // eslint-disable-next-line react-hooks/purity
                                height: 2 + Math.random() * 4,
                                background: '#E8A87C',
                                borderRadius: '50%',
                                position: 'absolute',
                            }}
                        />
                    ))}
                </div>

                {/* Floating Elements */}
                <div className="floating-elements-container">
                    {floatingElements.map((item, index) => (
                        <motion.div
                            key={index}
                            className="floating-element"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: [0.6, 1, 0.6],
                                scale: [0.9, 1.1, 0.9],
                                y: [0, -15, 0]
                            }}
                            transition={{
                                duration: 4 + index * 0.3,
                                delay: item.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                position: 'absolute',
                                left: `${item.x}%`,
                                top: `${item.y}%`,
                                transform: 'translate(-50%, -50%)',
                                color: 'rgba(255,255,255,0.15)',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                pointerEvents: 'none',
                                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                                whiteSpace: 'nowrap',
                                zIndex: 2
                            }}
                        >
                            <span style={{ marginRight: '8px' }}>{item.icon}</span>
                            {item.text}
                        </motion.div>
                    ))}
                </div>

                {/* Floating Icons with Parallax */}
                <div className="floating-icons-container">
                    {floatingIcons.map((item, index) => {
                        const Icon = item.icon;
                        const offsetX = (mousePosition.x - 0.5) * 40;
                        const offsetY = (mousePosition.y - 0.5) * 40;
                        return (
                            <motion.div
                                key={index}
                                className="floating-icon"
                                animate={{
                                    x: [0, 20, 0],
                                    y: [0, -20, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 6 + index * 0.5,
                                    delay: item.delay,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    position: 'absolute',
                                    left: `${item.x}%`,
                                    top: `${item.y}%`,
                                    transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
                                    color: 'rgba(232, 168, 124, 0.15)',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }}
                            >
                                <Icon size={item.size} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Hero Content */}
                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        {/* Trust Badge with Glass Effect */}
                        <motion.div
                            className="trust-badge"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <FaShieldAlt className="trust-icon" />
                            <span>5 Year Workmanship • 20 Year Material Guarantee</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Seamless Gutters
                            <span className="highlight">Quality Rainwater Products</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="hero-description"
                        >
                            New installation or replacement of gutters, down pipes, facias and bargeboards
                            with durable pre-painted Chromadek®, ZINCALUME® or Colorlume®.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <Link to="/contact" className="btn-primary">
                                <FaWhatsapp style={{ marginRight: '8px' }} />
                                Get a Quote
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <FaArrowRight style={{ marginLeft: '8px' }} />
                                </motion.span>
                            </Link>
                            <Link to="/products" className="btn-secondary">
                                Our Services
                            </Link>
                        </motion.div>

                        <motion.div
                            className="trust-indicators"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className="trust-item">
                                <FaCheckCircle className="check-icon" />
                                <span>5 Year Workmanship</span>
                            </div>
                            <div className="trust-item">
                                <FaMedal className="check-icon" />
                                <span>20 Year Material Guarantee</span>
                            </div>
                            <div className="trust-item">
                                <FaStar className="check-icon" />
                                <span>Since 1998</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span>Scroll Down</span>
                    <div className="scroll-line"></div>
                </motion.div>
            </section>

            {/* ===== OUR SERVICES ===== */}
            <section className="services-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-subtitle">Professional gutter solutions tailored to your needs</p>
                    </motion.div>

                    <div className="services-grid">
                        <motion.div
                            className="service-card"
                            whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="service-icon-wrapper">
                                <div className="service-icon">🏗️</div>
                            </div>
                            <h3>On-Site Manufacturing</h3>
                            <p>Gutters manufactured on-site with a mobile factory to the required length and width (domestic and industrial widths).</p>
                            <div className="service-tag">Domestic & Industrial</div>
                        </motion.div>

                        <motion.div
                            className="service-card"
                            whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="service-icon-wrapper">
                                <div className="service-icon">🔧</div>
                            </div>
                            <h3>Custom Made Gutters</h3>
                            <p>Custom made gutters (up to 1.2m wide) can be ordered and manufactured in our factory and installed.</p>
                            <div className="service-tag">Up to 1.2m Wide</div>
                        </motion.div>

                        <motion.div
                            className="service-card"
                            whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="service-icon-wrapper">
                                <div className="service-icon">🎨</div>
                            </div>
                            <h3>Pre-Painted Finishes</h3>
                            <p>Gutters, facias and bargeboards are pre-painted inside and outside for maximum durability.</p>
                            <div className="service-tag">Inside & Outside</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== QUALITY PRODUCTS ===== */}
            <section className="quality-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Quality Products
                    </motion.h2>

                    <div className="quality-grid">
                        <motion.div
                            className="quality-card"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="quality-badge">⭐</div>
                            <h3>Colorlume®</h3>
                            <p>Structural steel base with Zinc/aluminium alloy coating, conversion coating, corrosion inhibitive primer, high performance exterior finish.</p>
                            <div className="quality-features">
                                <span>✓ Corrosion Resistant</span>
                                <span>✓ High Performance</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="quality-card"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="quality-badge">✨</div>
                            <h3>Chromadek®</h3>
                            <p>Minimum zinc coating of Z200, with the top coat paint system developed for harsh UV environments and effective heat reflective qualities.</p>
                            <div className="quality-features">
                                <span>✓ UV Resistant</span>
                                <span>✓ Heat Reflective</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="quality-card"
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className="quality-badge">🏅</div>
                            <h3>ZINCALUME®</h3>
                            <p>Alloy metal consisting out of 50% Zinc and 50% Aluminum for superior corrosion resistance.</p>
                            <div className="quality-features">
                                <span>✓ 50% Zinc</span>
                                <span>✓ 50% Aluminum</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== WHERE WE OPERATE ===== */}
            <section className="locations-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Where We Operate
                    </motion.h2>

                    <p className="locations-intro">
                        From our head office in Pretoria, we regularly travel in and around Gauteng and the neighbouring provinces.
                    </p>

                    <div className="locations-grid">
                        {['Gauteng', 'Limpopo', 'Mpumalanga', 'North West', 'Free State'].map((location, index) => (
                            <motion.div
                                key={index}
                                className="location-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, backgroundColor: '#E8A87C', color: '#ffffff' }}
                            >
                                <FaTruck className="location-icon" />
                                <span>{location}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="why-choose-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why Choose Seamless Gutters?
                    </motion.h2>

                    <div className="why-grid">
                        <motion.div className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                            <div className="why-icon-wrapper">
                                <FaTools className="why-icon" />
                            </div>
                            <h4>Owner Operated & Supervised</h4>
                            <p>Since 1998 with personal attention to every project</p>
                        </motion.div>

                        <motion.div className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                            <div className="why-icon-wrapper">
                                <FaBuilding className="why-icon" />
                            </div>
                            <h4>Industrial & Domestic</h4>
                            <p>Complete gutter installation for all property types</p>
                        </motion.div>

                        <motion.div className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                            <div className="why-icon-wrapper">
                                <FaCheckCircle className="why-icon" />
                            </div>
                            <h4>Complete Range of Colours</h4>
                            <p>Wide selection to match your property aesthetic</p>
                        </motion.div>

                        <motion.div className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                            <div className="why-icon-wrapper">
                                <FaHome className="why-icon" />
                            </div>
                            <h4>Fascia Board Services</h4>
                            <p>Inspection, replacement & installation of fascia boards</p>
                        </motion.div>

                        <motion.div className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                            <div className="why-icon-wrapper">
                                <FaTools className="why-icon" />
                            </div>
                            <h4>Wooden Beam Inspection</h4>
                            <p>Inspection & replacement of rotten wooden beams</p>
                        </motion.div>

                        <motion.div className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                            <div className="why-icon-wrapper">
                                <FaClock className="why-icon" />
                            </div>
                            <h4>Reliable Service</h4>
                            <p>Timely completion with quality workmanship</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS SLIDER ===== */}
            <section className="projects-section">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Projects
                    </motion.h2>

                    <div className="projects-slider">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentProject}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6 }}
                                className="project-card"
                            >
                                <div className="project-image-wrapper">
                                    <img
                                        src={projects[currentProject].image}
                                        alt={projects[currentProject].title}
                                        className="project-image"
                                    />
                                </div>
                                <h3>{projects[currentProject].title}</h3>
                                <p className="project-description">{projects[currentProject].description}</p>
                                <div className="project-badges">
                                    <span className="badge">✓ Quality Guaranteed</span>
                                    <span className="badge">⭐ Professional</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="project-dots">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentProject ? 'active' : ''}`}
                                    onClick={() => setCurrentProject(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GUARANTEES ===== */}
            <section className="guarantees-section">
                <div className="container">
                    <div className="guarantees-grid">
                        <motion.div
                            className="guarantee-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="guarantee-icon-wrapper">
                                <FaMedal className="guarantee-icon" />
                            </div>
                            <h3>20 Year</h3>
                            <p>Material Guarantee</p>
                            <span className="guarantee-badge">Premium</span>
                        </motion.div>

                        <motion.div
                            className="guarantee-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <div className="guarantee-icon-wrapper">
                                <FaShieldAlt className="guarantee-icon" />
                            </div>
                            <h3>5 Year</h3>
                            <p>Workmanship Guarantee</p>
                            <span className="guarantee-badge">Trusted</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Protect Your Home?</h2>
                        <p>Get a free quote on your gutter project today</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-primary">
                                <FaWhatsapp style={{ marginRight: '8px' }} />
                                Get a Quote
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                <FaPhone style={{ marginRight: '8px' }} />
                                Call Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;