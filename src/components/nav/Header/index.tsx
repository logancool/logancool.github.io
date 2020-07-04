import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

const Header = () => {
    const pages = ['me', 'work', 'resume', 'projects'];

    const [activePage, setActive] = useState('me');

    return (
        <header styleName="placeholder">
            <div styleName="header">
                <ul styleName="items">
                    {pages.map(page => (
                        <li key={page} styleName={`item ${activePage === page ? 'active' : ''}`}>
                            <Link
                                styleName="link"
                                onClick={() => {
                                    setActive(page);
                                }}
                                to={page === 'me' ? '/' : `/${page}`}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
