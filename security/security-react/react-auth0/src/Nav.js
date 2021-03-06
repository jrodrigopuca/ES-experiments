import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './nav.css'

class Nav extends Component {
    

    render() {
        const {isAuthenticated, login, logout, userHasScopes}= this.props.auth;
        return (
            <nav style={styles}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/public">Public</Link></li>
                    <li><Link to="/private">Private</Link></li>
                    {isAuthenticated() && userHasScopes(["read:courses"]) &&
                    (<li><Link to="/courses">Courses</Link></li>)}

                    {isAuthenticated() &&
                    (<li><Link to="/admin">Admin</Link></li>)}
                    <li>
                        <button onClick={isAuthenticated()? logout: login}>
                            {isAuthenticated()? "Log Out": "Log In"}
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;