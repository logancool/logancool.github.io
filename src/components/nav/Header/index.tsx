import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './styles.module.scss';

const Header = () => {
    const pages = ['me', 'work', 'resume', 'projects', 'stack'];
    const navigate = useNavigate();

    const [activePage, setActive] = useState('me');

    // if user refreshes page update active state
    const {pathname } = useLocation();
    useEffect(() => {
        if (pathname !== '/') {
            setActive(pathname.replace('/', ''));
        }
    }, [pathname]);

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
                                    navigate(`/${page}`);
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
