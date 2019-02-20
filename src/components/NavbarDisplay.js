import React from 'react';
// import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

const linkStyle = {
    width: '200px',
    padding: '12px',
    margin: '10px 6px 6px 10px',
    background: '#a6a6a6',
    textDecoration: 'none',
    color: 'white'
  }
  

const NavbarDisplay = () => {
    return (
        <div className="navbar">
        <NavLink
          to="/"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >Droplet</NavLink>
        <NavLink
          to="/posts"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >All Posts</NavLink>
        <NavLink
          to="/signup"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >Signup</NavLink>
          <NavLink
          to="/logout"
          exact
          style={linkStyle}
          activeStyle={{
            background: '#3333FF'
          }}
          >Logout</NavLink>
        </div>
    )
}

export default NavbarDisplay;