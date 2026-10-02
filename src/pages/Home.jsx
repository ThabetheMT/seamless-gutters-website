import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaShieldAlt, FaStar, FaCheckCircle, FaTools, FaHome, FaBuilding,
    FaTruck, FaClock, FaMedal, FaWhatsapp, FaPhone, FaArrowRight,
    FaLeaf, FaWater, FaSun, FaCloudRain, FaBroom, FaTrash, FaUtensils,
    FaBug, FaSoap, FaHardHat, FaBoxOpen, FaLock
} from 'react-icons/fa';
import './Home.css';

import heroBg from '../assets/34.jpg';

import onsiteManufacturing from '../assets/6.jpg';
import customMadeGutter from '../assets/16.jpg';
import prePaintedFinishes from '../assets/28.jpg';

import m19 from '../assets/19.jpg';
import m18 from '../assets/16.jpg';
import m12 from '../assets/12.jpg';
import m29 from '../assets/28.jpg';

import m9 from '../assets/9.jpg';
import m4 from '../assets/4.jpg';
import m3 from '../assets/3.jpg';
import m1 from '../assets/1.jpg';

const Home = () => {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

    const [currentProject, setCurrentProject] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const projects = [
        { id: 1, title: 'Residential Installation', image: m9, description: 'Complete gutter system for family home' },
        { id: 2, title: 'Commercial Project', image: m3, description: 'Large-scale commercial installation' },
        { id: 3, title: 'Gutter Replacement', image: m4, description: 'Modern upgrade for older property' },
        { id: 4, title: 'Fascia Installation', image: m1, description: 'New fascia and bargeboard installation' },

        { id: 5, title: 'Residential Installation', image: m19, description: 'Complete gutter system for family home' },
        { id: 6, title: 'Commercial Project', image: m18, description: 'Large-scale commercial installation' },
        { id: 7, title: 'Gutter Replacement', image: m12, description: 'Modern upgrade for older property' },
        { id: 8, title: 'Fascia Installation', image: m29, description: 'New fascia and bargeboard installation' },
    ];

    useEffect(() => {
        const interval = setInterval(() => setCurrentProject(p => (p + 1) % projects.length), 4000);
        return () => clearInterval(interval);
    }, [projects.length]);

    useEffect(() => {
        const handleMouseMove = (e) => setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Prev / Next handlers
    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Primary: Gutter services
    const gutterServices = [
        { icon: onsiteManufacturing, title: 'On-Site Manufacturing', desc: 'Gutters manufactured on-site with a mobile factory to the required length and width (domestic and industrial widths).', tag: 'Domestic & Industrial' },
        { icon: customMadeGutter, title: 'Custom Made Gutters', desc: 'Custom made gutters (up to 1.2m wide) can be ordered and manufactured in our factory and installed.', tag: 'Up to 1.2m Wide' },
        { icon: prePaintedFinishes, title: 'Pre-Painted Finishes', desc: 'Gutters, facias and bargeboards are pre-painted inside and outside for maximum durability.', tag: 'Inside & Outside' },
    ];

    // Secondary: IMVELO facility services
    const facilityServices = [
        { icon: FaBroom, title: 'Commercial & Industrial Cleaning', desc: 'Specialised cleaning for offices, schools, hospitals, retail and industrial plants.' },
        { icon: FaTrash, title: 'Waste Management', desc: 'Commercial waste, construction rubble and industrial waste removal.' },
        { icon: FaLeaf, title: 'Landscaping', desc: 'Softscape & hardscape installation, irrigation, mowing, gardening.' },
        { icon: FaUtensils, title: 'Catering Services', desc: 'Corporate functions, weddings, canteen management and event catering.' },
        { icon: FaBug, title: 'Pest Management', desc: 'Control of rodents, cockroaches, biting insects and flies.' },
        { icon: FaSoap, title: 'Hygiene Services', desc: 'Hygienic washrooms and communal area management.' },
        { icon: FaHardHat, title: 'Structural Maintenance', desc: 'Foundation, structural and roof repair with preventative strategies.' },
        { icon: FaBoxOpen, title: 'Supply Services', desc: 'High-quality products supplied to distributors and retailers.' },
        { icon: FaLock, title: 'Building Security', desc: 'Monitoring, fire protection and emergency communication. (Coming Soon)' },
    ];

    const floatingElements = [
        { icon: '⭐', text: '5-Star Service', x: 5, y: 10, delay: 0 },
        { icon: '🏆', text: 'Since 2010', x: 85, y: 15, delay: 0.5 },
        { icon: '👷', text: 'Expert Team', x: 10, y: 75, delay: 1 },
        { icon: '🛡️', text: '20 Year Guarantee', x: 90, y: 80, delay: 1.5 },
        { icon: '✨', text: 'Premium Materials', x: 15, y: 45, delay: 2 },
        { icon: '🔨', text: '5 Year Workmanship', x: 80, y: 50, delay: 2.5 },
        { icon: '💰', text: 'Best Value', x: 50, y: 5, delay: 3 },
        { icon: '🌧️', text: 'Rainwater Solutions', x: 50, y: 92, delay: 3.5 },
    ];

    const floatingIcons = [
        { icon: FaCloudRain, x: 8, y: 20, size: 40, delay: 0 },
        { icon: FaSun, x: 92, y: 25, size: 35, delay: 1 },
        { icon: FaWater, x: 5, y: 60, size: 30, delay: 2 },
        { icon: FaLeaf, x: 95, y: 65, size: 32, delay: 3 },
    ];

    return (
        <div>
            {/* ===== HERO — GUTTERS FIRST ===== */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-bg-image">
                        <img src={heroBg} alt="Beautiful home with seamless gutters" className="bg-image" />
                        <div className="bg-gradient"></div>
                    </div>
                </div>

                <div className="particles-container">
                    {[...Array(20)].map((_, i) => (
                        <motion.div key={i} className="particle"  />
                    ))}
                </div>

                <div className="floating-elements-container">
                    {floatingElements.map((item, index) => (
                        <motion.div key={index} className="floating-element" /* ...keep existing... */>
                            <span style={{ marginRight: '8px' }}>{item.icon}</span>{item.text}
                        </motion.div>
                    ))}
                </div>

                <div className="floating-icons-container">
                    {floatingIcons.map((item, index) => {
                        const Icon = item.icon;
                        const offsetX = (mousePosition.x - 0.5) * 40;
                        const offsetY = (mousePosition.y - 0.5) * 40;
                        return (
                            <motion.div key={index} className="floating-icon" /* ...keep existing... */>
                                <Icon size={item.size} />
                            </motion.div>
                        );
                    })}
                </div>

                <div className="container hero-content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-text">
                        <motion.div className="trust-badge" whileHover={{ scale: 1.05 }}>
                            <FaShieldAlt className="trust-icon" />
                            <span>5 Year Workmanship • 20 Year Material Guarantee</span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                            IMVELO Seamless Gutters
                            <span className="highlight">Quality Rainwater Products</span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="hero-description">
                            New installation or replacement of gutters, down pipes, facias and bargeboards
                            with durable pre-painted Chromadek®, ZINCALUME® or Colorlume®.
                            A proud division of IMVELO Facility Management Services — 100% female owned, since 2010.
                        </motion.p>

                        <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                            <Link to="/contact" className="btn-primary">
                                <FaWhatsapp style={{ marginRight: '8px' }} /> Get a Quote
                                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                                    <FaArrowRight style={{ marginLeft: '8px' }} />
                                </motion.span>
                            </Link>
                            <Link to="/gutters" className="btn-secondary">Our Gutters</Link>
                        </motion.div>

                        <motion.div className="trust-indicators" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                            <div className="trust-item"><FaCheckCircle className="check-icon" /><span>5 Year Workmanship</span></div>
                            <div className="trust-item"><FaMedal className="check-icon" /><span>20 Year Material Guarantee</span></div>
                            <div className="trust-item"><FaStar className="check-icon" /><span>100% Female Owned</span></div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div className="scroll-indicator" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <span>Scroll Down</span><div className="scroll-line"></div>
                </motion.div>
            </section>

            {/* ===== PRIMARY: GUTTER SERVICES ===== */}
            <section className="services-section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title">Our Gutter Services</h2>
                        <p className="section-subtitle">Professional seamless gutter solutions tailored to your needs</p>
                    </motion.div>

                    <div className="services-grid">
                        {gutterServices.map((s, i) => (
                            <motion.div
                                key={i}
                                className="service-card"
                                whileHover={{ y: -10, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="service-icon-wrapper" style={{ marginBottom: '1rem' }}>
                                    <div
                                        className="service-icon"
                                        style={{
                                            width: '100%',
                                            height: '160px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden',
                                            borderRadius: '14px',
                                        }}
                                    >
                                        <img
                                            src={s.icon}
                                            alt={s.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '14px',
                                                display: 'block',
                                            }}
                                        />
                                    </div>
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="service-tag">{s.tag}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== QUALITY PRODUCTS ===== */}
            <section className="quality-section">
                <div className="container">
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Quality Products
                    </motion.h2>
                    <div className="quality-grid">
                        <motion.div className="quality-card" whileHover={{ scale: 1.02, y: -5 }}>
                            <div className="quality-badge">⭐</div>
                            <h3>Colorlume®</h3>
                            <p>Structural steel base with Zinc/aluminium alloy coating, conversion coating, corrosion inhibitive primer, high performance exterior finish.</p>
                            <div className="quality-features"><span>✓ Corrosion Resistant</span><span>✓ High Performance</span></div>
                        </motion.div>
                        <motion.div className="quality-card" whileHover={{ scale: 1.02, y: -5 }}>
                            <div className="quality-badge">✨</div>
                            <h3>Chromadek®</h3>
                            <p>Minimum zinc coating of Z200, with the top coat paint system developed for harsh UV environments and effective heat reflective qualities.</p>
                            <div className="quality-features"><span>✓ UV Resistant</span><span>✓ Heat Reflective</span></div>
                        </motion.div>
                        <motion.div className="quality-card" whileHover={{ scale: 1.02, y: -5 }}>
                            <div className="quality-badge">🏅</div>
                            <h3>ZINCALUME®</h3>
                            <p>Alloy metal consisting out of 50% Zinc and 50% Aluminum for superior corrosion resistance.</p>
                            <div className="quality-features"><span>✓ 50% Zinc</span><span>✓ 50% Aluminum</span></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== SECONDARY: IMVELO FACILITY SERVICES ===== */}
            <section className="services-section" style={{ background: 'white' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="section-title">More From IMVELO</h2>
                        <p className="section-subtitle">
                            Beyond gutters, IMVELO Facility Management Services offers a full range of
                            facility solutions — 100% female owned, delivering above and beyond expectations.
                        </p>
                    </motion.div>

                    <div className="why-grid">
                        {facilityServices.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div key={i} className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                                    <div className="why-icon-wrapper"><Icon className="why-icon" /></div>
                                    <h4>{s.title}</h4>
                                    <p>{s.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <Link to="/services" className="btn-primary">View All Facility Services</Link>
                    </div>
                </div>
            </section>

            {/* ===== WHERE WE OPERATE ===== */}
            <section className="locations-section">
                <div className="container">
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Where We Operate
                    </motion.h2>
                    <p className="locations-intro">
                        From our head office in Tsakane, we regularly travel in and around Gauteng and the neighbouring provinces.
                    </p>
                    <div className="locations-grid">
                        {['Gauteng', 'Limpopo', 'Mpumalanga', 'North West', 'Free State'].map((loc, i) => (
                            <motion.div key={i} className="location-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.1, backgroundColor: '#E8A87C', color: '#ffffff' }}>
                                <FaTruck className="location-icon" /><span>{loc}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className="why-choose-section">
                <div className="container">
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Why Choose IMVELO Gutters?
                    </motion.h2>
                    <div className="why-grid">
                        {[
                            { icon: FaTools, title: 'Owner Operated & Supervised', desc: 'Since 2010 with personal attention to every project' },
                            { icon: FaBuilding, title: 'Industrial & Domestic', desc: 'Complete gutter installation for all property types' },
                            { icon: FaCheckCircle, title: 'Complete Range of Colours', desc: 'Wide selection to match your property aesthetic' },
                            { icon: FaHome, title: 'Fascia Board Services', desc: 'Inspection, replacement & installation of fascia boards' },
                            { icon: FaTools, title: 'Wooden Beam Inspection', desc: 'Inspection & replacement of rotten wooden beams' },
                            { icon: FaClock, title: 'Reliable Service', desc: 'Timely completion with quality workmanship' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={i} className="why-card" whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                                    <div className="why-icon-wrapper"><Icon className="why-icon" /></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS SLIDER ===== */}
            <section className="projects-section">
                <div className="container">
                    <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Our Projects
                    </motion.h2>

                    <div className="projects-slider">
                        {/* Prev arrow */}
                        <button
                            className="project-arrow prev"
                            onClick={prevProject}
                            aria-label="Previous project"
                        >
                            ‹
                        </button>

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

                        {/* Next arrow */}
                        <button
                            className="project-arrow next"
                            onClick={nextProject}
                            aria-label="Next project"
                        >
                            ›
                        </button>

                        <div className="project-dots">
                            {projects.map((_, i) => (
                                <button
                                    key={i}
                                    className={`dot ${i === currentProject ? 'active' : ''}`}
                                    onClick={() => setCurrentProject(i)}
                                    aria-label={`Go to project ${i + 1}`}
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
                        <motion.div className="guarantee-card" whileHover={{ scale: 1.05, y: -5 }}>
                            <div className="guarantee-icon-wrapper"><FaMedal className="guarantee-icon" /></div>
                            <h3>20 Year</h3>
                            <p>Material Guarantee</p>
                            <span className="guarantee-badge">Premium</span>
                        </motion.div>
                        <motion.div className="guarantee-card" whileHover={{ scale: 1.05, y: -5 }}>
                            <div className="guarantee-icon-wrapper"><FaShieldAlt className="guarantee-icon" /></div>
                            <h3>5 Year</h3>
                            <p>Workmanship Guarantee</p>
                            <span className="guarantee-badge">Trusted</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="cta-section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2>Ready to Protect Your Home?</h2>
                        <p>Get a free quote on your seamless gutter project today</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-primary"><FaWhatsapp style={{ marginRight: '8px' }} />Get a Quote</Link>
                            <Link to="/contact" className="btn-secondary"><FaPhone style={{ marginRight: '8px' }} />Call Us</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;