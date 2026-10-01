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
    FaStar,
    FaFemale
} from 'react-icons/fa';
import './About.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const milestones = [
        {
            year: '1998',
            title: 'Gutter Division Roots',
            description: 'Seamless gutter manufacturing expertise dating back to 1998 in Pretoria/Tshwane.',
            icon: '🏗️'
        },
        {
            year: '2010',
            title: 'IMVELO Founded',
            description: 'IMVELO Facility Management Services established by a female entrepreneur born in Tsakane.',
            icon: '🏢'
        },
        {
            year: 'Today',
            title: 'Gutters + Facility Management',
            description: 'IMVELO now delivers seamless gutters alongside a full range of facility management services.',
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
        { number: '2010', label: 'IMVELO Established', icon: FaCalendarAlt },
        { number: '100%', label: 'Female Owned', icon: FaFemale },
        { number: '1000+', label: 'Projects Completed', icon: FaCheckCircle },
        { number: '9+', label: 'Service Categories', icon: FaTools }
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
                        <h1 className="about-hero-title">About IMVELO</h1>
                        <p className="about-hero-subtitle">
                            Delivering services above and beyond expectations — 100% female owned, since 2010.
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
                                    <strong>IMVELO Facility Management Services</strong> is a <strong>100% female-owned</strong> company,
                                    proudly founded by an entrepreneur born in <strong>Tsakane</strong>.
                                    Established in <strong>2010</strong>, our mission has always been to drive
                                    socioeconomic growth by providing top-tier facility management solutions.
                                </p>
                                <p>
                                    Over the years, we have successfully partnered with government institutions and
                                    private sector clients, creating sustainable employment opportunities. Recognising
                                    a critical gap in the cleaning and facility management industry, we expanded our
                                    services to offer innovative, high-quality, and client-centric solutions.
                                </p>
                                <p>
                                    Our <strong>Seamless Gutters division</strong> brings together decades of gutter manufacturing
                                    expertise with IMVELO's commitment to excellence — delivering durable, pre-painted
                                    Chromadek®, ZINCALUME® and Colorlume® gutter systems for domestic and industrial clients
                                    across South Africa.
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
                        <h2 className="section-title">Our Gutter Capabilities</h2>
                        <p className="section-description">
                            We provide comprehensive seamless gutter solutions for all types of properties.
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

                {/* ===== VISION & MISSION ===== */}
                <motion.section
                    className="capabilities-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Vision & Mission</h2>
                        <p className="section-description">
                            What drives us every day at IMVELO.
                        </p>
                    </motion.div>

                    <div className="capabilities-grid">
                        <motion.div className="capability-card" variants={itemVariants} whileHover={{ y: -10 }}>
                            <div className="capability-icon-wrapper">
                                <FaStar className="capability-icon" />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted and preferred facility management service provider,
                                setting the benchmark for quality, innovation, and customer satisfaction in the industry.
                            </p>
                        </motion.div>
                        <motion.div className="capability-card" variants={itemVariants} whileHover={{ y: -10 }}>
                            <div className="capability-icon-wrapper">
                                <FaAward className="capability-icon" />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide superior facility management services by ensuring safe, fully functional,
                                and sustainable environments. We leverage cutting-edge technologies and best practices
                                to maintain operational excellence while exceeding client expectations.
                            </p>
                        </motion.div>
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

                {/* ===== CORE VALUES ===== */}
                <motion.section
                    className="capabilities-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-description">
                            The principles that guide everything we do.
                        </p>
                    </motion.div>
                    <div className="capabilities-grid">
                        {[
                            { icon: FaShieldAlt, title: 'Integrity', desc: 'We do what is right, always.' },
                            { icon: FaUsers, title: 'Collaboration', desc: 'We work together with our clients and communities.' },
                            { icon: FaStar, title: 'Innovation', desc: 'We embrace cutting-edge technologies and best practices.' },
                            { icon: FaMedal, title: 'Excellence', desc: 'We deliver world-class quality in every engagement.' },
                            { icon: FaUsers, title: 'Diversity', desc: 'We celebrate our differences and grow stronger together.' },
                            { icon: FaCheckCircle, title: 'Ownership', desc: 'We take responsibility for our outcomes.' },
                            { icon: FaCheckCircle, title: 'Customer Centricity', desc: 'Our clients are at the heart of every decision.' },
                        ].map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={i}
                                    className="capability-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="capability-icon-wrapper">
                                        <Icon className="capability-icon" />
                                    </div>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
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
                                <span>Trusted Since 2010</span>
                            </div>
                        </div>

                        <div className="certification-card bbeee-card">
                            <div className="certification-icon-wrapper">
                                <FaAward className="certification-icon" />
                            </div>
                            <h3>B-BBEE & 100% Female Owned</h3>
                            <p>
                                IMVELO is a 100% female-owned company and B-BBEE certified.
                                Please contact us for a copy of our B-BBEE certificate.
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
                        <h2>Ready to Work With IMVELO?</h2>
                        <p>Contact us for a free quote on your gutter or facility project</p>
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