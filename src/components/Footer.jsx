import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarker, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3>🏢 IMVELO Gutters</h3>
                        <p>Seamless gutter manufacturing & installation — a proud division of IMVELO Facility Management Services. 100% female owned, since 2010.</p>
                        <div className="footer-social">
                            <a href="#" className="social-link">📱</a>
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">📸</a>
                        </div>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gutters">Gutters</Link></li>
                            <li><Link to="/colours">Colours</Link></li>
                            <li><Link to="/services">Facility Services</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li><FaMapMarker className="contact-icon" /><span>Tsakane, Gauteng</span></li>
                            <li><FaPhone className="contact-icon" /><span>[IMVELO PHONE]</span></li>
                            <li><FaWhatsapp className="contact-icon" /><span>[IMVELO WHATSAPP]</span></li>
                            <li><FaEnvelope className="contact-icon" /><span>[IMVELO EMAIL]</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Guarantees</h3>
                        <ul className="guarantees-list">
                            <li>✓ 20 Year Material Guarantee</li>
                            <li>✓ 5 Year Workmanship Guarantee</li>
                            <li>✓ 100% Female Owned</li>
                            <li>✓ Since 2010</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} IMVELO Facility Management Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;