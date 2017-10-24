import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
                        <RouterNavItem eventKey={1} to="/about">&Agrave; props</RouterNavItem>
                        <RouterNavItem eventKey={2} to="/trainers">Entraineurs</RouterNavItem>
                        <RouterNavItem eventKey={3} to="/courses">Courses</RouterNavItem>
                        <RouterNavItem eventKey={4} to="/contacts">Contacts</RouterNavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
      }
}

export default Header;