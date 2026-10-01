import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaWhatsapp, FaPhone, FaShieldAlt, FaMedal,
    FaBroom, FaTrash, FaLeaf, FaUtensils, FaBug, FaSoap, FaHardHat, FaBoxOpen, FaLock
} from 'react-icons/fa';
import './Products.css';
import { useEffect } from "react";

const Services = () => {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

    const services = [
        { title: 'Commercial & Industrial Cleaning', icon: FaBroom,
            description: 'Window/high access cleaning, specialised carpets, upholstery, chemical cleaning, underground cleaning, industrial plant cleaning, structural roof cleaning, sump cleaning, boiler/refrigeration cleaning, access cleaning, shutdown cleaning, conveyor cleaning, coal plant cleaning, ash plant cleaning, HP unit cleaning, vacuum unit cleaning, pre/post-cut and drain cleaning, standard silt trap cleaning, sludge removal.' },
        { title: 'Waste Management', icon: FaTrash,
            description: 'Commercial waste management for hotels, restaurants, resorts, shopping centres, educational institutions, office blocks and related trade locations. Construction rubble and building waste removal.' },
        { title: 'Landscaping', icon: FaLeaf,
            description: 'Softscape installation and maintenance — planting, mowing, gardening. Hardscape installation — paving, irrigation installation, pest control, car washing.' },
        { title: 'Catering Services', icon: FaUtensils,
            description: 'Menu design, preparation, cuisine, on-site preparation, venue sourcing, table and equipment rental, event and clean-up crew. Corporate functions, weddings, social events, gala dinners, food truck catering, long/short term, restaurant catering.' },
        { title: 'Pest Management', icon: FaBug,
            description: 'Control of rats and mice, cockroaches, biting insects, flies. Rodents, birds and insects can carry diseases — our specialised pest management ensures a safe, clean work environment.' },
        { title: 'Hygiene Services', icon: FaSoap,
            description: 'Hygienic washrooms and communal areas are paramount in any office or commercial space. We keep them germ-free and hygienic to prevent the spread of illness to employees and visitors.' },
        { title: 'Structural Maintenance', icon: FaHardHat,
            description: 'Keeping good repair of building foundation, structural members, and repair of casualty damage to exterior walls and roof. Four maintenance strategies: preventative, risk-based, condition-based.' },
        { title: 'Supply Services', icon: FaBoxOpen,
            description: 'We provide goods and services to other organisations. We form part of the supply chain, providing high-quality products from manufacturers at reasonable prices to distributors or retailers for resale.' },
        { title: 'Building Security (Coming Soon)', icon: FaLock,
            description: 'Monitoring and control of mechanical and electrical installations, fire protection, escape, burglary, assault and emergency communication per our client\'s needs.' },
    ];

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
    const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

    return (
        <div className="page products-page">
            <section className="products-hero">
                <div className="products-hero-overlay"></div>
                <div className="container products-hero-content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="products-hero-title">Facility Services</h1>
                        <p className="products-hero-subtitle">
                            Beyond gutters, IMVELO Facility Management Services offers a full range of
                            facility solutions — 100% female owned, delivering above and beyond expectations.
                        </p>
                        <div className="products-hero-badges">
                            <span className="hero-badge"><FaShieldAlt /> 100% Female Owned</span>
                            <span className="hero-badge"><FaMedal /> Established 2010</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container">
                <motion.section className="products-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description">
                            Comprehensive facility management solutions for government, corporate and
                            private sector clients across South Africa.
                        </p>
                    </motion.div>

                    <motion.div className="products-grid" variants={itemVariants}>
                        {services.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div key={i} className="product-card" whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <div className="product-icon" style={{ display:'flex', justifyContent:'center' }}>
                                        <Icon style={{ color: '#1877F2' }} />
                                    </div>
                                    <h3>{s.title}</h3>
                                    <p className="product-description">{s.description}</p>
                                    <div className="product-tag">✓ Available</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.section>

                {/* Clients section */}
                <motion.section className="products-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                    <motion.div variants={itemVariants}>
                        <h2 className="section-title">Trusted By</h2>
                        <p className="section-description">
                            We are proud to serve leading government institutions and private sector clients.
                        </p>
                    </motion.div>
                    <div className="downpipes-grid">
                        {['SABS', 'Dept. of Health', 'LiquorCity', 'Dept. of Justice & Constitutional Development',
                            'Dept. of Public Works', 'National Nuclear Regulator', 'Collaborate Consulting',
                            'Ntsangala Holdings', 'SA Law Reform Commission'].map((c, i) => (
                            <motion.div key={i} className="downpipe-card" whileHover={{ scale: 1.05 }}>
                                <div className="downpipe-size" style={{ fontSize: '1.1rem' }}>{c}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section className="cta-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                    <motion.div className="cta-content" variants={itemVariants}>
                        <h2>Contact Us Now</h2>
                        <p>Get a free quote on your facility management needs today</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-primary"><FaWhatsapp style={{ marginRight: '8px' }} />Get a Quote</Link>
                            <Link to="/contact" className="btn-secondary"><FaPhone style={{ marginRight: '8px' }} />Call Us</Link>
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
};

export default Services;