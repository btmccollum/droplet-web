import React, { Component } from 'react';
import {bubble as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class SidebarMenu extends Component {
    render () {
        return (
            <ReduxBurgerMenu isOpen={ this.props.isOpen } width={ 225 }>
                <nav className="bm-item-list">
                    <NavLink id="home" className="bm-item" to="/"><FontAwesomeIcon icon="home" /><span>Home</span></NavLink>
                    <NavLink id="posts" className="bm-item" to="/posts"><FontAwesomeIcon icon="images" /><span>Posts</span></NavLink>
                    <NavLink id="login" className="bm-item" to="/login"><FontAwesomeIcon icon="sign-in-alt" /><span>Log In</span></NavLink>
                    <NavLink id="signup" className="bm-item" to="/signup"><FontAwesomeIcon icon="user-plus" /><span>Signup</span></NavLink>
                    <NavLink id="logout" className="bm-item" to="/logout"><FontAwesomeIcon icon="sign-out-alt" /><span>Log Out</span></NavLink>
                </nav>
            </ReduxBurgerMenu>
        );
    }
}

export default SidebarMenu;