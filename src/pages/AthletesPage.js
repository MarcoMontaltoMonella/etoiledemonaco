import React, { Component } from 'react';
import { Image, Grid, Row, Col, Clearfix, Panel } from 'react-bootstrap';
import '../styles/Body.css';
import KevinPic from '../images/people/kevin.jpg';
import JulienPic from '../images/people/julien.jpg';
import IGLogo from '../images/icons/ig-logo.png';

class AthletesPage extends Component {
    render() {

        return (
            <div className="main-body">
                <h1>Athl&egrave;tes</h1>
                <hr/>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={3}><Image src={KevinPic} /></Col>
                    <Clearfix visibleSmBlock></Clearfix>
                    <Col sm={6} md={6}>
                        <Panel header="Kevin CROVETTO">
                            Kevin Crovetto (n&eacute; le 10 juin 1992) est un gymnaste 
                            artistique masculin mon&eacute;gasque, repr&eacute;sentant sa nation 
                            dans les comp&eacute;titions internationales.<br/>
                            Il a particip&eacute; &agrave; deux &eacute;ditions des Championnats
                            du monde (2014 &agrave; Nanjing, en Chine, et 2015 &agrave; Glasgow, en &Eacute;cosse), 
                            et plus r&eacute;cemment aux JO de Rio pendant l'&eacute;t&eacute; de 2016.
                            <br/>
                            <a href="https://www.instagram.com/crovettokevin/">
                                <Image src={IGLogo} width={25} height={25} />
                            </a>
                        </Panel>
                    </Col>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                    <Col sm={6} md={6}>
                        <Panel header="Julien GOBAUX">
                            Vice-Champion de France DN2 avec l'OAJLP en 1990,<br/>
                            6&egrave;me en Finale de DN1,<br/>
                            3&egrave;me de la Coupe d'Europe par &eacute;quipe &agrave; Luzerne en 1991,<br/>
                            S&eacute;bastien Guizol est aux c&ocirc;t&eacute;s de Thierry depuis de nombreuses ann&eacute;es.<br/>
                            S&eacute;bastien a rejoint le club en 2007 et a permis, avec Thierry, &agrave; faire passer un cap &agrave; l'&Eacute;toile de Monaco.
                            <br/>
                            <a href="https://www.instagram.com/gobaux_julien/">
                                <Image src={IGLogo} width={25} height={25} />
                            </a>
                        </Panel>
                    </Col>
                    <Clearfix visibleSmBlock></Clearfix>
                    <Col sm={6} md={3}><Image src={JulienPic} responsive /></Col>
                    </Row>
                    <hr/>
                </Grid>
            </div>
        );
    }
}
export default AthletesPage;
