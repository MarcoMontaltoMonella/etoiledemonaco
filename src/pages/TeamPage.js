import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import '../styles/Body.css';
import '../styles/TeamPage.css'
import TrainersPic from '../images/people/athletes.jpg';
import AthletesPic from '../images/people/athletes.jpg';
import { Link } from 'react-router-dom';

class TeamPage extends Component {
    render() {

        return (
            <div className="main-body">
                <h1>&Eacute;quipe</h1>
                <hr/>
                <Grid>
                    <Link to="/equipe/athletes">
                        <Row className="show-grid">
                            <Col sm={6} md={5} smOffset={3} mdOffset={3}><Image src={AthletesPic} responsive/></Col>
                        </Row>
                        <Row>
                            <Col sm={6} md={5} smOffset={3} mdOffset={3}><h2>Athl&egrave;tes</h2></Col>
                        </Row>
                    </Link>
                    <hr/>
                    <Link to="/equipe/entraineurs">
                    <Row className="show-grid">
                        <Col sm={6} md={5} smOffset={3} mdOffset={3}><Image src={TrainersPic} responsive /></Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={5} smOffset={3} mdOffset={3}><h2>Entraineurs</h2></Col>
                    </Row>
                    </Link>
                </Grid>
            </div>
        );
    }
}
export default TeamPage;
