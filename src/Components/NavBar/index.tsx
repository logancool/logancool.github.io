import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li styleName="container">
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/another-page">Another Page</Link>
                    </li>
                    <li>
                        <Link to="/a-third-page">A Third Page</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
export default NavBar;
