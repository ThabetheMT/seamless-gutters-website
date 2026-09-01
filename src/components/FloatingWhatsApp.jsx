import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    return (
        <div className="floating-whatsapp">
            <a
                href="https://wa.me/27822301447"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
            >
                <div className="pulse-ring"></div>
                <FaWhatsapp size={28} />
                <span>Let's Talk</span>
            </a>
        </div>
    );
};

export default FloatingWhatsApp;