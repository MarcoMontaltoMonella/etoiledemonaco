import React, { Component } from 'react';
import { Image, Grid, Row, Col, Clearfix, Panel } from 'react-bootstrap';
import ThierryPic from '../images/people/thierry.jpg';
import SebastienPic from '../images/people/seb.jpg';
import DavidPic from '../images/people/david.jpg';
import BarbaraPic from '../images/people/barbara.jpg';

class TrainersPage extends Component {
    render() {

        return (
            <div className="main-body">
                <h1>Trainers</h1>
                <hr/>
                <Grid>
                    <Row className="show-grid">
                    <Col sm={6} md={3}><Image src={ThierryPic} responsive /></Col>
                    <Clearfix visibleSmBlock></Clearfix>
                    <Col sm={6} md={6}>
                        <Panel header="Thierry AYMES">
                            4&egrave;me aux JO d'Atlanta de 1996,<br/>
                            4&egrave;me au Sol aux Championnats du Monde,<br/>
                            6&egrave;me toujours au Sol aux Championnats du Monde de Porto Rico,<br/>
                            Champion d'Europe en 1998 St Petersbourg,<br/>
                            Thierry a eu une carri&egrave;re internationale des plus prestigieuses.<br/>
                            Il a rejoint l'&Eacute;toile de Monaco en 2005 et a permis &agrave; ce dernier de franchir un palier important
                            vers le haut et tr&egrave;s haut niveau, permettant au club de gagner ses premiers titres de champions de France,
                            et d'envoyer ses premiers gymnastes &agrave; diff&eacute;rentes comp&eacute;titions internationales.
                        </Panel>
                    </Col>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                    <Col sm={6} md={6}>
                        <Panel header="S&eacute;bastien GUIZOL">
                         Vice-Champion de France DN2 avec l'OAJLP en 1990,<br/>
                         6&egrave;me en Finale de DN1,<br/>
                         3&egrave;me de la Coupe d'Europe par &eacute;quipe &agrave; Luzerne en 1991,<br/>
                         S&eacute;bastien Guizol est aux c&ocirc;t&eacute;s de Thierry depuis de nombreuses ann&eacute;es.<br/>
                         S&eacute;bastien a rejoint le club en 2007 et a permis, avec Thierry, &agrave; faire passer un cap &agrave; l'&Eacute;toile de Monaco.
                        </Panel>
                    </Col>
                    <Clearfix visibleSmBlock></Clearfix>
                    <Col sm={6} md={3}><Image src={SebastienPic} responsive /></Col>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                    <Col sm={6} md={3}><Image src={DavidPic} responsive /></Col>
                    <Clearfix visibleSmBlock></Clearfix>
                    <Col sm={6} md={6}>
                        <Panel header="David MARTIN">
                            Double Champion du Monde en 1996 et 1998,<br/>
                            multiples vainqueurs de la Coupe du Monde en 1998, 2001 et 2002,<br/>
                            4&egrave;me au JO de Sydney en 2000,<br/>
                            8&egrave;me aux JO d'Ath&egrave;nes en 2004,<br/>
                            double Champions d'Europe en 1997 et 2000,<br/>
                            multiple Champions de France,<br/>
                            David Martin poss&egrave;de l'un des palmar&egrave;s sportif les plus impressionnants de France.<br/>
                            Il rejoint l'&Eacute;toile de Monaco en 2010, prenant la rel&egrave;ve de Magali Trouche et
                             souhaite amener le club vers de nouveaux firmaments.
                        </Panel>
                    </Col>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                    <Col sm={6} md={6}>
                        <Panel header="Barbara AYMES">
                            11&egrave;me par &eacute;quipe aux Championnats du Monde en 1991 &agrave; Indianapolis.
                            Rempla&ccedil;ante aux JO de Barcelone en 1992.
                            En &eacute;quipe de France de 1989 &agrave; 1992.
                            Elle rejoint l'&Eacute;toile de Monaco en 2016.
                        </Panel>
                    </Col>
                    <Clearfix visibleSmBlock></Clearfix>
                    <Col sm={6} md={3}><Image src={BarbaraPic} responsive /></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default TrainersPage;
