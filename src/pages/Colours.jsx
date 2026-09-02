import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaPalette,
    FaWhatsapp,
    FaPhone,
    FaInfoCircle,
    FaCheckCircle
} from 'react-icons/fa';
import './Colours.css';
import {useEffect, useState} from "react";

const Colours = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const colours = [
        { name: 'GEMSBOK SAND', hex: '#D4A574', category: 'Neutral' },
        { name: 'SILVER WHITE', hex: '#E8E8E8', category: 'Neutral' },
        { name: 'AFRICAN CREAM', hex: '#F5E6CA', category: 'Neutral' },
        { name: 'WHEAT', hex: '#E8D5B7', category: 'Neutral' },
        { name: 'KALAHARI TAN', hex: '#C4A67A', category: 'Earthy' },
        { name: 'TUSCAN CLAY', hex: '#B8735A', category: 'Earthy' },
        { name: 'SAFARI BROWN', hex: '#8B6B4A', category: 'Earthy' },
        { name: 'CAPE RED', hex: '#8B2F3A', category: 'Red' },
        { name: 'RIVER GUM', hex: '#7A9B7A', category: 'Green' },
        { name: 'COLONIAL GREEN', hex: '#4A7A4A', category: 'Green' },
        { name: 'ATTOL GREEN', hex: '#2D5A2D', category: 'Green' },
        { name: 'AZURE BLUE', hex: '#4A7A9B', category: 'Blue' },
        { name: 'CHARCOAL', hex: '#4A4A4A', category: 'Dark' },
        { name: 'ARMOUR GREY', hex: '#6A6A6A', category: 'Grey' },
        { name: 'BLACK', hex: '#1A1A1A', category: 'Dark' }
    ];

    const categories = ['All', 'Neutral', 'Earthy', 'Red', 'Green', 'Blue', 'Dark', 'Grey'];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredColours = activeCategory === 'All'
        ? colours
        : colours.filter(c => c.category === activeCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    // Add useState for filter
    const [filter, setFilter] = useState('All');

    return (
        <div className="page colours-page">
            {/* ===== HERO SECTION ===== */}
            <section className="colours-hero">
                <div className="colours-hero-overlay"></div>
                <div className="container colours-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="colours-hero-title">Colours</h1>
                        <p className="colours-hero-subtitle">
                            All gutters are available in any of our fifteen unique colours.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                {/* ===== NOTICE ===== */}
                <motion.div
                    className="colour-notice"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <FaInfoCircle className="notice-icon" />
                    <p>
                        Please note that colours may vary due to display properties of your screen.
                        A colour chart is available to choose colours during the quotation process.
                    </p>
                </motion.div>

                {/* ===== FILTER BUTTONS ===== */}
                <motion.div
                    className="filter-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3>Filter by Category</h3>
                    <div className="filter-buttons">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* ===== COLOURS GRID ===== */}
                <motion.section
                    className="colours-grid-section"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="colours-grid">
                        {filteredColours.map((colour, index) => (
                            <motion.div
                                key={index}
                                className="colour-card"
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div
                                    className="colour-swatch"
                                    style={{ backgroundColor: colour.hex }}
                                >
                                    <div className="colour-hex">{colour.hex}</div>
                                </div>
                                <div className="colour-info">
                                    <h3>{colour.name}</h3>
                                    <span className="colour-category">{colour.category}</span>
                                    <div className="colour-hex-code">{colour.hex}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ===== COLOUR CHART NOTE ===== */}
                <motion.section
                    className="colour-chart-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="colour-chart-content">
                        <FaPalette className="chart-icon" />
                        <h2>Need to see the colours in person?</h2>
                        <p>
                            We have physical colour charts available for you to view during the quotation process.
                            This ensures you get the perfect colour match for your property.
                        </p>
                        <div className="chart-features">
                            <span>
                                <FaCheckCircle />
                                Physical colour samples
                            </span>
                            <span>
                                <FaCheckCircle />
                                Accurate colour matching
                            </span>
                            <span>
                                <FaCheckCircle />
                                Expert colour advice
                            </span>
                        </div>
                        <Link to="/contact" className="btn-primary">
                            Request a Colour Chart
                        </Link>
                    </div>
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
                        <h2>Ready to Choose Your Colour?</h2>
                        <p>Contact us for a free quote and colour consultation</p>
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

export default Colours;