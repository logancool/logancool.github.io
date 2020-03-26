import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.module.scss';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li styleName="container">
                        <Link to="">Homer Simpson</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
export default NavBar;
