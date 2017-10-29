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
                            N&eacute; le 10 juin 1992, il est un gymnaste 
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
                            N&eacute; le 11 d&eacute;cembre 1990, il est membre de l'&eacute;quipe National de France GAM.<br/>
                            Il a particip&eacute; aux JO de Rio pendant l'&eacute;t&eacute; de 2016.
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
