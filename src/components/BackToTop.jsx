import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isMounted) return null;

    return createPortal(
        <div
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <FaArrowUp size={20} />
        </div>,
        document.body
    );
};

export default BackToTop;