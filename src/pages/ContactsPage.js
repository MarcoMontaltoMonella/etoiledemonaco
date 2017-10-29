import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Image, Row, Col } from 'react-bootstrap';
import GMaps from '../components/GMaps';
import '../styles/Body.css';
import '../styles/ContactsPage.css';
import FBIcon from '../images/icons/facebook-logo.png';
import TwitterIcon from '../images/icons/twitter-logo.png';
import DownloadIcon from '../images/icons/download.png';
import SponsorshipPDF from '../docs/dossier_sponsoring.pdf';
import Gramaglia from '../images/sponsors/gramaglia.jpg';
import MonacoInformatique from '../images/sponsors/monaco_informatique.jpg';
import Olympstars from '../images/sponsors/olympstars.jpg';
import Footer from '../components/Footer';

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
                    <ListGroupItem>
                        <div className="list-header">Socials</div>
                            <Row className="show-grid">
                                <a href="https://www.facebook.com/etoiledemonaco">
                                    <Image alt="fb-icon" src={FBIcon} width={28} height={28} />
                                </a>
                                &emsp;
                                <a href="https://twitter.com/etoiledemonaco">
                                    <Image alt="fb-icon" src={TwitterIcon} width={28} height={28} />
                                </a>
                            </Row>
                        <Grid>
                        </Grid>
                    </ListGroupItem>
                    <ListGroupItem href="mailTo:etoile@libello.com">
                        <div className="list-header">Email</div>
                        etoile@libello.com
                    </ListGroupItem>
                    <ListGroupItem href={SponsorshipPDF}>
                        <div className="list-header">Sponsors</div>
                            Le Club est &agrave; la  recherche de sponsor et m&eacute;c&egrave;ne afin
                             de pouvoir emmener nos jeunes gymnastes &agrave; leur plus haut niveau.<br/>
                             Merci par avance pour votre participation.<br/>
                            Dossier de sponsoring
                        <br/>
                        <strong>en t&eacute;l&eacute;chargement ci-dessous</strong>
                        <br/>
                        <Image src={DownloadIcon} height={30} width={30} />
                    </ListGroupItem>
                    <ListGroupItem>
                        <div className="list-header">Support&eacute; par</div>
                        <a href="https://www.gramaglia.mc">
                            <Image alt="fb-icon" src={Gramaglia} height={80} />
                        </a>
                        <a href="http://www.monacoinformatiqueservice.mc">
                            <Image alt="fb-icon" src={MonacoInformatique} height={80} />
                        </a>
                        <a href="http://www.olympstars.com">
                            <Image alt="fb-icon" src={Olympstars} height={80} />
                        </a>
                    </ListGroupItem>
                </ListGroup>
                
                <GMaps
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <Footer/>
            </div>
        );
    }
}
export default ContactsPage;