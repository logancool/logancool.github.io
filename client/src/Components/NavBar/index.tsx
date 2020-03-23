import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <li className={styles.container}>
                        <Link to="">Home</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
export default NavBar;
