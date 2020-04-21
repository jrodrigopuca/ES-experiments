import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './nav.css'

class Nav extends Component {
    render() {
        return (
            <nav style={styles}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;