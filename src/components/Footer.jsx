import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarker, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

    const currectYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3>🏠 Seamless Gutters</h3>
                        <p>Quality rainwater products and services since 1998.</p>
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
                            <li><Link to="/products">Products & Services</Link></li>
                            <li><Link to="/colours">Colours</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contact Info</h3>
                        <ul className="contact-info">
                            <li>
                                <FaMapMarker className="contact-icon" />
                                <span>Pretoria, Gauteng</span>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>(012) 562-2071</span>
                            </li>
                            <li>
                                <FaWhatsapp className="contact-icon" />
                                <span>082 230 1447</span>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>info@seamlessgutters.co.za</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Guarantees</h3>
                        <ul className="guarantees-list">
                            <li>✓ 20 Year Material Guarantee</li>
                            <li>✓ 5 Year Workmanship Guarantee</li>
                            <li>✓ Licensed & Insured</li>
                            <li>✓ Since 1998</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currectYear} Seamless Gutters. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;