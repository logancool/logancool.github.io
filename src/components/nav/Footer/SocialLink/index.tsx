import React, { ReactNode } from 'react';
import './styles.module.scss';

type SocialLinkProps = {
    href: string;
    children: ReactNode;
};

const SocialLink = ({ href, children }: SocialLinkProps) => (
    <a styleName="social-link" href={href}>
        {children}
    </a>
);

export default SocialLink;
