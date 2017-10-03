import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import RouterNavItem from './RouterNavItem';
// import logo from '../images/logo.png';

class Header extends Component {
    
    render() {
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Etoile de Monaco</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <RouterNavItem eventKey={1} to="/">Home</RouterNavItem>
                        <RouterNavItem eventKey={2} to="/about">About</RouterNavItem>
                        <RouterNavItem eventKey={3} to="/trainers">Trainers</RouterNavItem>
                        <RouterNavItem eventKey={4} to="/courses">Courses</RouterNavItem>
                        <RouterNavItem eventKey={5} to="/contacts">Contacts</RouterNavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
      }
}

export default Header;