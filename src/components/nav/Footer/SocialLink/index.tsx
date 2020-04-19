import React from 'react';
import './styles.module.scss';

const SocialLink = ({ href, children }) => (
    <a styleName="social-link" href={href}>
        {children}
    </a>
);

export default SocialLink;
