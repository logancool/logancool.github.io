import React from 'react';
import Twitter from './icons/Twitter';
import LinkedIn from './icons/LinkedIn';
import Instagram from './icons/Instagram';
import './styles.module.scss';

const Footer = () => (
    <footer styleName="footer">
        <div styleName="container">
            <div styleName="icons">
                <Twitter />
                <LinkedIn />
                <Instagram />
            </div>
        </div>
    </footer>
);

export default Footer;
