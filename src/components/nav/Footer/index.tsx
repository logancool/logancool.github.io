import React, { useState, useEffect } from 'react';
import Twitter from './icons/Twitter';
import LinkedIn from './icons/LinkedIn';
import './styles.module.scss';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            
            const nearBottom = scrollTop + windowHeight >= docHeight - 100;
            const tallScreen = windowHeight >= 800;
            
            setIsVisible(nearBottom || tallScreen);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer styleName="placeholder">
            <div styleName={`footer ${isVisible ? 'visible' : ''}`}>
                <div styleName="icons">
                    <Twitter />
                    <LinkedIn />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
