import React from 'react';
import Twitter from './icons/Twitter';
import LinkedIn from './icons/LinkedIn';
import Instagram from './icons/Instagram';
import './styles.module.scss';

const Footer = () => (
    <footer styleName="footer">
        <div styleName="icons">
            <Twitter />
            <LinkedIn />
            <Instagram />
        </div>
    </footer>
);

export default Footer;
