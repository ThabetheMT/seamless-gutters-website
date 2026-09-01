import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaCalendarAlt,
    FaUsers,
    FaTools,
    FaIndustry,
    FaShieldAlt,
    FaMedal,
    FaCheckCircle,
    FaMapMarker,
    FaTruck,
    FaBuilding,
    FaWhatsapp,
    FaPhone,
    FaAward,
    FaStar
} from 'react-icons/fa';
import './About.css';

const About = () => {
    const milestones = [
        {
            year: '1998',
            title: 'Company Founded',
            description: 'Seamless Gutters was founded in Pretoria/Tshwane by Steve Loock',
            icon: '🏗️'
        },
        {
            year: '2011',
            title: 'New Leadership',
            description: 'Ettiene Loock took over operations, joined by Peter Makgoba as director',
            icon: '👥'
        },
        {
            year: '2024',
            title: '25+ Years of Excellence',
            description: 'Over two decades of trusted gutter installation services',
            icon: '🏆'
        }
    ];

    const services = [
        {
            icon: FaTools,
            title: 'On-Site Manufacturing',
            description: 'Gutters manufactured on-site by rolling pre-painted sheet metal into an Ogee profile with industrial quality machines.'
        },
        {
            icon: FaIndustry,
            title: 'Domestic & Industrial',
            description: 'Gutters manufactured for domestic as well as industrial requirements and sizes.'
        },
        {
            icon: FaBuilding,
            title: 'Custom Sizes',
            description: 'Custom size gutters can be manufactured at the factory on request and can be up to 1.2m wide.'
        },
        {
            icon: FaTruck,
            title: 'Wide Coverage',
            description: 'All projects in Gauteng and surrounding areas. Larger and industrial projects accepted country wide.'
        }
    ];

    const guarantees = [
        {
            icon: FaMedal,
            title: '20 Year',
            description: 'Material Guarantee',
            color: '#E8A87C'
        },
        {
            icon: FaShieldAlt,
            title: '5 Year',
            description: 'Workmanship Guarantee',
            color: '#5B8A9A'
        }
    ];

    const stats = [
        { number: '25+', label: 'Years of Experience', icon: FaCalendarAlt },
        { number: '1000+', label: 'Projects Completed', icon: FaCheckCircle },
        { number: '5', label: 'Provinces Covered', icon: FaMapMarker },
        { number: '100%', label: 'Customer Satisfaction', icon: FaStar }
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
        <div className="page about-page">
            {/* ===== HERO SECTION ===== */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="about-hero-title">About Us</h1>
                        <p className="about-hero-subtitle">
                            Seamless Gutters has been in the gutter business since 1998.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                {/* ===== STATS SECTION ===== */}
                <motion.section
                    className="stats-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <div className="stats-grid">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="stat-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="stat-icon-wrapper">
                                        <Icon className="stat-icon" />
                                    </div>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* ===== COMPANY STORY ===== */}
                <motion.section
                    className="story-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="story-content" variants={itemVariants}>
                        <h2 className="section-title">Our Story</h2>
                        <div className="story-grid">
                            <div className="story-text">
                                <p>
                                    <strong>Seamless Gutters</strong> was founded in <strong>1998</strong> in
                                    Pretoria/Tshwane by <strong>Steve Loock</strong> after working in the gutter
                                    industry for many years.
                                </p>
                                <p>
                                    <strong>Ettiene Loock</strong> has since taken over operations and lead,
                                    joined by <strong>Peter Makgoba</strong> as director in <strong>2011</strong>.
                                </p>
                                <p>
                                    With over two decades of experience, we have grown to become a trusted name
                                    in the gutter installation industry, serving both domestic and industrial
                                    clients across South Africa.
                                </p>
                            </div>
                            <div className="story-timeline">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        className="timeline-item"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="timeline-icon">{milestone.icon}</div>
                                        <div className="timeline-content">
                                            <div className="timeline-year">{milestone.year}</div>
                                            <h4>{milestone.title}</h4>
                                            <p>{milestone.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== SERVICES & CAPABILITIES ===== */}
                <motion.section
                    className="capabilities-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Our Services & Capabilities</h2>
                        <p className="section-description">
                            We provide comprehensive gutter solutions for all types of properties.
                        </p>
                    </motion.div>

                    <div className="capabilities-grid">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="capability-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="capability-icon-wrapper">
                                        <Icon className="capability-icon" />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* ===== GUARANTEES SECTION ===== */}
                <motion.section
                    className="about-guarantees-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Our Guarantees</h2>
                        <p className="section-description">
                            We stand behind our work with comprehensive guarantees.
                        </p>
                    </motion.div>

                    <div className="about-guarantees-grid">
                        {guarantees.map((guarantee, index) => {
                            const Icon = guarantee.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className="about-guarantee-card"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div
                                        className="about-guarantee-icon-wrapper"
                                        style={{ background: `${guarantee.color}15` }}
                                    >
                                        <Icon style={{ color: guarantee.color }} />
                                    </div>
                                    <h3>{guarantee.title}</h3>
                                    <p>{guarantee.description}</p>
                                    <span className="about-guarantee-badge">Guaranteed</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* ===== REFERENCES & B-BBEE ===== */}
                <motion.section
                    className="certifications-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="certifications-grid" variants={itemVariants}>
                        {/* References */}
                        <div className="certification-card references-card">
                            <div className="certification-icon-wrapper">
                                <FaUsers className="certification-icon" />
                            </div>
                            <h3>References</h3>
                            <p>
                                We are glad to provide references upon request.
                                Our satisfied customers are our best testimony.
                            </p>
                            <div className="reference-badge">
                                <FaCheckCircle />
                                <span>Trusted Since 1998</span>
                            </div>
                        </div>

                        {/* B-BBEE */}
                        <div className="certification-card bbeee-card">
                            <div className="certification-icon-wrapper">
                                <FaAward className="certification-icon" />
                            </div>
                            <h3>B-BBEE Certified</h3>
                            <p>
                                Seamless Gutters is B-BBEE certified. Please contact us for a copy
                                of our B-BBEE certificate.
                            </p>
                            <Link to="/contact" className="certification-btn">
                                Request Certificate →
                            </Link>
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
                        <h2>Ready to Work With Us?</h2>
                        <p>Contact us for a free quote on your gutter project</p>
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

export default About;