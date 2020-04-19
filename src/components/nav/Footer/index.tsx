import React from 'react';
import Twitter from './icons/Twitter';
import LinkedIn from './icons/LinkedIn';
import Instagram from './icons/Instagram';
import './styles.module.scss';

const Footer = () => (
    <footer styleName="placeholder">
        <div styleName="footer">
            <div styleName="icons">
                <Twitter />
                <LinkedIn />
                <Instagram />
            </div>
        </div>
    </footer>
);

export default Footer;
