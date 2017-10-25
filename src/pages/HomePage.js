import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../styles/Body.css';
import '../styles/HomePage.css';
import logo from '../images/logos/etoile-logo-1.png';

class HomePage extends Component {
    render() {

        return (
            <div className="main-body" id="background-video">
                <h1 id="hero-title">Un club, un passion, des ambitions</h1>
                <Image src={logo}/>
            </div>
        );
    }
}
export default HomePage;