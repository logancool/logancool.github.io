import React from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

const Header = () => (
    <header styleName="header">
        <div styleName="container">
            <input type="checkbox" styleName="toggle" />
            <div styleName="hamburger-menu">
                <div styleName="hamburger-menu-line" />
            </div>
            <ul styleName="items">
                <li styleName="item">
                    <Link to="/">Me</Link>
                </li>
                <li styleName="item">
                    <Link to="/resume">Resume</Link>
                </li>
                <li styleName="item">
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
