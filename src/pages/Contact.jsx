import {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarker,
    FaWhatsapp,
    FaUser,
    FaClock,
    FaPaperPlane,
    FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        loading: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ ...formStatus, loading: true });

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormStatus({
                submitted: true,
                loading: false,
                error: null
            });
            setFormData({ name: '', email: '', phone: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus({ submitted: false, loading: false, error: null });
            }, 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Office Phone',
            details: ['Tel: 012 562 2071'],
            color: '#5B8A9A'
        },
        {
            icon: FaWhatsapp,
            title: 'Mobile',
            details: ['Cell: 082 230 1447'],
            color: '#25D366'
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            details: ['info@seamlessgutters.co.za'],
            color: '#E8A87C'
        },
        {
            icon: FaMapMarker,
            title: 'Address',
            details: ['113 Johan Uys, Rosslyn, 1820'],
            color: '#D48C6B'
        }
    ];

    const teamMembers = [
        {
            name: 'Peter Makgoba',
            role: 'Director',
            phone: '082 333 3412',
            email: 'peter@seamlessgutters.co.za',
            icon: '👔'
        },
        {
            name: 'Florence',
            role: 'Director',
            phone: '084 581 3931',
            email: 'florence@seamlessgutters.co.za',
            icon: '👩‍💼'
        }
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
        <div className="page contact-page">
            {/* ===== HERO SECTION ===== */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="container contact-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="contact-hero-title">Contact Us</h1>
                        <p className="contact-hero-subtitle">
                            Contact us for a quote on new or replacement gutter projects.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                {/* ===== CONTACT INFO & FORM ===== */}
                <motion.div
                    className="contact-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {/* Contact Information */}
                    <motion.div className="contact-info-section" variants={itemVariants}>
                        <h2>Get In Touch</h2>
                        <p className="contact-info-description">
                            We're here to help with all your gutter needs. Reach out to us through any of the
                            following channels.
                        </p>

                        <div className="contact-info-grid">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-info-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div
                                        className="contact-info-icon"
                                        style={{ background: `${item.color}15` }}
                                    >
                                        <item.icon style={{ color: item.color }} />
                                    </div>
                                    <h4>{item.title}</h4>
                                    {item.details.map((detail, i) => (
                                        <p key={i}>{detail}</p>
                                    ))}
                                </motion.div>
                            ))}
                        </div>

                        {/* Team Section */}
                        <div className="team-section">
                            <h3>Our Team</h3>
                            <div className="team-grid">
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        className="team-card"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="team-avatar">{member.icon}</div>
                                        <div className="team-info">
                                            <h4>{member.name}</h4>
                                            <span className="team-role">{member.role}</span>
                                            <div className="team-contact">
                                                <FaPhone className="team-contact-icon" />
                                                <span>{member.phone}</span>
                                            </div>
                                            <div className="team-contact">
                                                <FaEnvelope className="team-contact-icon" />
                                                <span>{member.email}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div className="contact-form-section" variants={itemVariants}>
                        <div className="form-container">
                            <h2>Send Us a Message</h2>
                            <p className="form-description">
                                Fill in the form below and we'll get back to you as soon as possible.
                            </p>

                            {formStatus.submitted ? (
                                <motion.div
                                    className="form-success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <FaCheckCircle className="success-icon" />
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <FaUser className="form-label-icon" />
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your full name"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <FaEnvelope className="form-label-icon" />
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            <FaPhone className="form-label-icon" />
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="082 123 4567"
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">
                                            <FaPaperPlane className="form-label-icon" />
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="5"
                                            placeholder="Tell us about your gutter project..."
                                            className="form-textarea"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary submit-btn"
                                        disabled={formStatus.loading}
                                    >
                                        {formStatus.loading ? (
                                            <>
                                                <span className="spinner"></span>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                {/* ===== BUSINESS HOURS ===== */}
                <motion.section
                    className="hours-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="hours-content" variants={itemVariants}>
                        <FaClock className="hours-icon" />
                        <h2>Business Hours</h2>
                        <div className="hours-grid">
                            <div className="hours-item">
                                <span className="day">Monday - Friday</span>
                                <span className="time">8:00 AM - 6:00 PM</span>
                            </div>
                            <div className="hours-item">
                                <span className="day">Saturday</span>
                                <span className="time">9:00 AM - 4:00 PM</span>
                            </div>
                            <div className="hours-item">
                                <span className="day">Sunday</span>
                                <span className="time">Closed</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* ===== MAP PLACEHOLDER ===== */}
                <motion.section
                    className="map-section"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="map-container" variants={itemVariants}>
                        <h2>Find Us</h2>
                        <div className="map-placeholder">
                            <div className="map-content">
                                <FaMapMarker className="map-marker" />
                                <h3>113 Johan Uys, Rosslyn, 1820</h3>
                                <p>Pretoria, Gauteng</p>
                                <a
                                    href="https://maps.google.com/maps?q=113+Johan+Uys+Rosslyn+1820"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="map-link"
                                >
                                    Open in Google Maps →
                                </a>
                            </div>
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
                        <h2>Ready to Get Started?</h2>
                        <p>Contact us today for a free quote on your gutter project</p>
                        <div className="cta-buttons">
                            <a href="https://wa.me/27822301447" className="btn-primary">
                                <FaWhatsapp style={{ marginRight: '8px' }} />
                                WhatsApp Us
                            </a>
                            <a href="tel:0125622071" className="btn-secondary">
                                <FaPhone style={{ marginRight: '8px' }} />
                                Call Us
                            </a>
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};

export default Contact;