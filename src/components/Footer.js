import React, { Component } from 'react';
import '../styles/Footer.css';
import logo from '../images/logos/etoile-logo-1.png';
import { Image } from 'react-bootstrap';

class Footer extends Component {
    
    render() {
        var year = new Date().getFullYear();
        return (
            <div className='sticky-footer'>
                <Image src={logo} height={40} width={40}/>
                &copy; &Eacute;toile de Monaco - {year}
            </div>
        );
    }
}

export default Footer;