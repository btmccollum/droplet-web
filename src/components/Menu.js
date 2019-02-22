import React, { Component } from 'react';
import {bubble as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class SidebarMenu extends Component {
    render () {
        return (
            <ReduxBurgerMenu isOpen={ this.props.isOpen } width={ 200 }>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="posts" className="menu-item" href="/posts">Posts</a>
                <a id="login" className="menu-item" href="/login">Login</a>
                <a id="signup" className="menu-item" href="/signup">Signup</a>
                <a id="logout" className="menu-item" href="/logout">Logout</a>
            </ReduxBurgerMenu>
        );
    }
}

export default SidebarMenu;