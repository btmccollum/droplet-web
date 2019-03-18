import React, { Component } from 'react';
import {bubble as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class SidebarMenu extends Component {
    // handles conditional rendering of links dependent on whether or not a user is logged in
    statusOptions = () => {
        if (sessionStorage.getItem('logged_in') === 'true') {
            return (
                <React.Fragment>
                    <NavLink id="home" className="bm-item" to="/"><FontAwesomeIcon icon="home" /><span>Home</span></NavLink>
                    <NavLink id="posts" className="bm-item" to="/posts"><FontAwesomeIcon icon="images" /><span>Feed</span></NavLink>
                    <NavLink id="login" className="bm-item" to="/profile"><FontAwesomeIcon icon="user-circle" /><span>Profile</span></NavLink>
                    <NavLink id="logout" className="bm-item" to="/logout"><FontAwesomeIcon icon="sign-out-alt" /><span>Log Out</span></NavLink>
                </React.Fragment>   
            )
        }
        else {
            return (
                <React.Fragment>
                    <NavLink id="login" className="bm-item" to="/login"><FontAwesomeIcon icon="sign-in-alt" /><span>Log In</span></NavLink>
                    <NavLink id="signup" className="bm-item" to="/signup"><FontAwesomeIcon icon="user-plus" /><span>Signup</span></NavLink>
                </React.Fragment>
            )
        }
    }

    render () {
        return (
            <ReduxBurgerMenu isOpen={ this.props.isOpen } width={ 225 }>
                <nav className="bm-item-list">
                    {this.statusOptions()}
                </nav>
            </ReduxBurgerMenu>
        );
    }
}

export default SidebarMenu;