import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d720.6619649896626!2d7.4191670359291075!3d43.73864167675615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc28be4900dcb%3A0xc25b313323903781!2sStar+De+Monaco+(L&#39;)!5e0!3m2!1sen!2sus!4v1508709587455" width={100+"%"} height={300} frameborder={0} style={{border:0, overflow: "auto", clear: "both"}}></iframe>
            </div>
        );
    }
}
export default ContactsPage;