import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaWhatsapp,
    FaPhone,
    FaShieldAlt,
    FaMedal,
    FaRulerCombined,
    FaWrench,
    FaCheckCircle
} from 'react-icons/fa';
import './Products.css';
import {useEffect} from "react";

const Products = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const gutterStyles = [
        {
            title: 'Industrial Gutters',
            size: '125x150mm',
            profile: 'Ogee Profile',
            icon: '🏭',
            description: 'Heavy-duty gutters designed for industrial and commercial applications'
        },
        {
            title: 'Domestic Gutters',
            size: '100x125mm',
            profile: 'Ogee Profile',
            icon: '🏠',
            description: 'Classic Ogee profile for residential homes'
        },
        {
            title: 'Domestic Gutters',
            size: '100x100mm',
            profile: 'Square Profile',
            icon: '📐',
            description: 'Modern square profile for contemporary homes'
        }
    ];

    const downpipes = [
        { size: '85mm', profile: 'Round', icon: '⭕' },
        { size: '50x75mm', profile: 'Rectangular Fluted', icon: '▬' },
        { size: '75x100mm', profile: 'Rectangular Fluted', icon: '▬' }
    ];

    const fascias = [
        { size: '12x150mm', icon: '📏' },
        { size: '15x225mm', icon: '📏' },
        { size: '15x300mm', icon: '📏' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className="page products-page">
            {/* ===== HERO SECTION ===== */}
            <section className="products-hero">
                <div className="products-hero-overlay"></div>
                <div className="container products-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="products-hero-title">Products & Services</h1>
                        <p className="products-hero-subtitle">
                            All our seamless aluminium gutters are durable and guaranteed
                            not to fade, leak or rust.
                        </p>
                        <div className="products-hero-badges">
                     <span className="hero-badge">
                     <FaShieldAlt /> 20 Year Material Guarantee
                     </span>
                            <span className="hero-badge">
                     <FaMedal /> 5 Year Workmanship Guarantee
                     </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                {/* ===== GUTTER STYLES ===== */}
                <motion.section
                    className="products-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Gutter Styles</h2>
                        <p className="section-description">
                            We roll-form all our gutters on-site to precise lengths using our gutter machines
                            housed in our mobile trucks. The process is fast, efficient and hassle-free.
                        </p>
                    </motion.div>

                    <motion.div className="products-grid" variants={itemVariants}>
                        {gutterStyles.map((gutter, index) => (
                            <motion.div
                                key={index}
                                className="product-card"
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="product-icon">{gutter.icon}</div>
                                <h3>{gutter.title}</h3>
                                <div className="product-size">{gutter.size}</div>
                                <div className="product-profile">{gutter.profile}</div>
                                <p className="product-description">{gutter.description}</p>
                                <div className="product-tag">✓ Available</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* ===== CUSTOM GUTTERS ===== */}
                <motion.section
                    className="custom-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="custom-content" variants={itemVariants}>
                        <div className="custom-icon-wrapper">
                            <FaRulerCombined className="custom-icon" />
                        </div>
                        <div className="custom-text">
                            <h2>Custom Gutters</h2>
                            <p>
                                Custom gutters with a circumference of up to <strong>1225 mm</strong> can be
                                manufactured to the client's specification.
                            </p>
                            <div className="custom-features">
                                <span>✓ Any Size</span>
                                <span>✓ Any Profile</span>
                                <span>✓ Any Colour</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== DOWN PIPES ===== */}
                <motion.section
                    className="products-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Down Pipes</h2>
                        <p className="section-description">
                            Quality down pipes designed to efficiently channel water from your gutters.
                        </p>
                    </motion.div>

                    <motion.div className="downpipes-grid" variants={itemVariants}>
                        {downpipes.map((pipe, index) => (
                            <motion.div
                                key={index}
                                className="downpipe-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="downpipe-icon">{pipe.icon}</div>
                                <div className="downpipe-size">{pipe.size}</div>
                                <div className="downpipe-profile">{pipe.profile}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div className="custom-note" variants={itemVariants}>
                        <div className="custom-note-icon">🔧</div>
                        <div className="custom-note-text">
                            <h4>Custom Down Pipes</h4>
                            <p>Any size custom down pipe, square or round can be manufactured to the client's specifications.</p>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== FASCIAS ===== */}
                <motion.section
                    className="products-section fascias-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Fascias</h2>
                        <p className="section-description">
                            We install fascias to round off the look of your house and ensure that gutters look neat.
                        </p>
                    </motion.div>

                    <motion.div className="fascias-grid" variants={itemVariants}>
                        {fascias.map((fascia, index) => (
                            <motion.div
                                key={index}
                                className="fascia-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="fascia-icon">{fascia.icon}</div>
                                <div className="fascia-size">{fascia.size}</div>
                                <div className="fascia-label">Fascia Board</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div className="custom-note" variants={itemVariants}>
                        <div className="custom-note-icon">🎨</div>
                        <div className="custom-note-text">
                            <h4>Custom Fascias</h4>
                            <p>We also do custom Aluminium / Colorlume® fascias to match our guttering system.</p>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== MAINTENANCE ===== */}
                <motion.section
                    className="maintenance-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="maintenance-content" variants={itemVariants}>
                        <div className="maintenance-icon-wrapper">
                            <FaWrench className="maintenance-icon" />
                        </div>
                        <h2>Maintenance Services</h2>
                        <p>
                            We do complete fascia board inspection, replacement & installation as well as
                            inspection & replacement of rotten wooden beams on all our gutter replacement projects.
                            After inspection a quote will be provided for replacement.
                        </p>
                        <div className="maintenance-features">
                            <div className="maintenance-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Fascia Board Inspection</span>
                            </div>
                            <div className="maintenance-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Fascia Board Replacement</span>
                            </div>
                            <div className="maintenance-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Rotten Wooden Beam Inspection</span>
                            </div>
                            <div className="maintenance-feature">
                                <FaCheckCircle className="feature-icon" />
                                <span>Rotten Wooden Beam Replacement</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== GUARANTEES ===== */}
                <motion.section
                    className="guarantees-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="guarantees-grid" variants={itemVariants}>
                        <div className="guarantee-card">
                            <FaMedal className="guarantee-icon" />
                            <h3>20 Year</h3>
                            <p>Material Guarantee</p>
                            <span className="guarantee-badge">Premium</span>
                        </div>
                        <div className="guarantee-card">
                            <FaShieldAlt className="guarantee-icon" />
                            <h3>5 Year</h3>
                            <p>Workmanship Guarantee</p>
                            <span className="guarantee-badge">Trusted</span>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== CTA SECTION ===== */}
                <motion.section
                    className="cta-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="cta-content" variants={itemVariants}>
                        <h2>Contact Us Now</h2>
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
                </motion.section>
            </div>
        </div>
    );
};

export default Products;