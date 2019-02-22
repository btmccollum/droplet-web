import React, { Component } from 'react';
import {bubble as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class SidebarMenu extends Component {
    render () {
        return (
            <ReduxBurgerMenu isOpen={ this.props.isOpen } width={ 200 }>
            <nav className="bm-item-list">
                <a id="home" className="bm-item" href="/"><FontAwesomeIcon icon="home" /><span>Home</span></a>
                <a id="posts" className="bm-item" href="/posts"><FontAwesomeIcon icon="images" /><span>Posts</span></a>
                <a id="login" className="bm-item" href="/login"><FontAwesomeIcon icon="sign-in-alt" /><span>Log In</span></a>
                <a id="signup" className="bm-item" href="/signup"><FontAwesomeIcon icon="user-plus" /><span>Signup</span></a>
                <a id="logout" className="bm-item" href="/logout"><FontAwesomeIcon icon="sign-out-alt" /><span>Log Out</span></a>
            </nav>
            </ReduxBurgerMenu>
        );
    }
}

export default SidebarMenu;