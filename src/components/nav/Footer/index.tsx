import React from 'react';
import Twitter from './icons/Twitter';
import LinkedIn from './icons/LinkedIn';
import './styles.module.scss';

const Footer = () => {
    return (
        <footer styleName="footer">
            <div styleName="footerContent">
                <p styleName="signature">Logan Cool · San Francisco</p>
                <div styleName="icons">
                    <Twitter />
                    <LinkedIn />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
