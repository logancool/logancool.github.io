import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

class NavBar extends Component {
    render() {
        return (
            <header styleName='header'>
                <div styleName="container">
                    <input type="checkbox" styleName="toggle" />
                    <div styleName="hamburger-menu">
                        <div styleName="hamburger-menu-line" />
                    </div>
                    <ul styleName="items">
                        <li styleName="item">
                            <Link to="/">Home</Link>
                        </li>
                        <li styleName="item">
                            <Link to="/another-page">Another Page</Link>
                        </li>
                        <li styleName="item">
                            <Link to="/a-third-page">A Third Page</Link>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
export default NavBar;
