import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import RouterNavItem from './RouterNavItem';

class Header extends Component {
    
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
                        <RouterNavItem eventKey={1} to="/apropos">&Agrave; propos</RouterNavItem>
                        <RouterNavItem eventKey={2} to="/equipe">&Eacute;quipe</RouterNavItem>
                        <RouterNavItem eventKey={3} to="/cours">Cours</RouterNavItem>
                        <RouterNavItem eventKey={4} to="/inscription">Inscription</RouterNavItem>
                        <RouterNavItem eventKey={5} to="/contacts">Contacts</RouterNavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
      }
}

export default Header;