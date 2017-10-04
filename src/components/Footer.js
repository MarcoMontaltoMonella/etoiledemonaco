import React, { Component } from 'react';
import '../styles/Footer.css'

class Footer extends Component {
    
    render() {
        var year = new Date().getFullYear();
        return (
            <div className='sticky-footer'>&copy; Etoile de Monaco - {year}</div>
        );
    }
}

export default Footer;