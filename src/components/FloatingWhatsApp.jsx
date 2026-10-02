import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return createPortal(
        <div className="floating-whatsapp">
            <a
                href="https://wa.me/[IMVELO WHATSAPP NUMBER]"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
            >
                <div className="pulse-ring"></div>
                <FaWhatsapp size={28} />
                <span>Let's Talk</span>
            </a>
        </div>,
        document.body
    );
};

export default FloatingWhatsApp;