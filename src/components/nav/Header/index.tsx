import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.module.scss';

const Header = () => {
    const pages = ['me', 'work', 'resume', 'projects'];
    const history = useHistory();

    const [activePage, setActive] = useState('me');

    // if user refreshes page update active state
    useEffect(() => {
        if (history.location.pathname !== '/') {
            setActive(history.location.pathname.replace('/', ''));
        }
    }, []);

    return (
        <header styleName="placeholder">
            <nav styleName="header">
                <ul styleName="items">
                    {pages.map(page => (
                        <li key={page} styleName={`item ${activePage === page ? 'active' : ''}`}>
                            <Link
                                styleName="link"
                                onClick={() => {
                                    setActive(page);
                                    history.push(`/${page}`);
                                }}
                                to={page === 'me' ? '/' : `/${page}`}
                            >
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
