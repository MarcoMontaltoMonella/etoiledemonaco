import React, { Component } from 'react';
import { NavDropdown, MenuItem, Navbar, Nav } from 'react-bootstrap';
import RouterNavItem from './RouterNavItem';

class Header extends Component {

    constructor() {
        super();
        this.setLanguage.bind(this);
    }

    setLanguage() {
        return;
    }
    
    render() {
        return(
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='/'>&Eacute;toile de Monaco</a>
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
                        <NavDropdown eventKey={6} title="Language" id='basic-nav-dropdown'>
                            <MenuItem eventKey={6.1} id='en' onClick={this.setLanguage()}>English</MenuItem>
                            <MenuItem eventKey={6.2} id='fr' onClick={this.setLanguage()}>Fran&ccedil;ais</MenuItem>
                            <MenuItem eventKey={6.3} id='it' onClick={this.setLanguage()}>Italiano</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
      }
}

export default Header;