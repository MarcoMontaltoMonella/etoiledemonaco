import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import '../styles/Body.css';
import DownloadIcon from '../images/icons/download.png';
import InscriptionPDF from '../docs/dossier_inscription.pdf';

class RegistrationPage extends Component {
    render() {

        return (

            <div className="main-body">
            <h1>Inscription</h1>
            <hr/>
            <h3>A fournir obligatoirement</h3>
            <hr/>
            <ListGroup>
                <ListGroupItem>
                    La fiche d'inscription individuelle et charte de bonne conduite<br/>
                    <a href={InscriptionPDF} >
                        <strong>en t&eacute;l&eacute;chargement ci-dessous</strong><br/>
                        <Image src={DownloadIcon} height={30} width={30} />
                    </a>
                </ListGroupItem>
                <ListGroupItem>
                    1 certificat m&eacute;dical (pratique de la gymnastique ou trampoline)
                </ListGroupItem>
                <ListGroupItem>
                    2 photos d'identit&eacute; (nom et pr&eacute;nom au dos)
                </ListGroupItem>
                <ListGroupItem>
                    1 enveloppe timbr&eacute;e (MC avec nom et adresse)
                </ListGroupItem>
                <ListGroupItem href="/courses">
                    La cotisation annuelle
                </ListGroupItem>
            </ListGroup>
            <p>
                Lors du d&eacute;p&ocirc;t de votre dossier, il ne vous restera plus qu'&agrave; signer le r&egrave;glement int&eacute;rieur,
                et le bulletin d'adh&eacute;sion &agrave; la FFG.<br/>
                Nous sommes impatients de vous joindre &agrave; nous!
            </p>

            </div>
        );
    }
}
export default RegistrationPage;