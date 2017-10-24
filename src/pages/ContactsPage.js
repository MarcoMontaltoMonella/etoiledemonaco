import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import GMaps from '../components/GMaps';
import '../styles/ContactsPage.css';

class ContactsPage extends Component {
    render() {
        return (
            <div className="main-body">
                <h2>Association de Gymnastique l'&Eacute;toile de Monaco</h2>
                <hr/>
                <ListGroup>
                    <ListGroupItem href="https://maps.google.com?q=43.738708,7.419059">
                        <div className="list-header">Address</div>
                        Salles de Gymnastique<br/>
                        Vallon de St D&eacute;vote<br/>
                        <small>(Parking de la Gare -9)</small><br/>
                        98000 MONACO<br/>
                    </ListGroupItem>
                    <ListGroupItem href="tel:0037797703320">
                        <div className="list-header">Tel / Fax</div>
                        00 377 97 70 33 20
                    </ListGroupItem>
                    <ListGroupItem href="mailTo:etoile@libello.com">
                        <div className="list-header">Email</div>
                        etoile@libello.com
                    </ListGroupItem>
                </ListGroup>
                
                <GMaps
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}
export default ContactsPage;