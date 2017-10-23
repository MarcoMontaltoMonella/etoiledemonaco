import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix, Panel, Image } from 'react-bootstrap';
import "../styles/Body.css";
import DominiquePic from '../images/people/dominique.jpg';
import GymPic from '../images/salledegym/gym_1.jpg';
import KevPBar from '../images/people/kevin_pbar.jpg';
import ThierryJul from '../images/people/thierry_julien.jpg';
import '../styles/AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="main-body">
                <h1>&Agrave; propos</h1>
                <hr/>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={6}>
                            <h2>L'Historie</h2>
                            <p>
                                L'&Eacute;toile de Monaco est le club de gymnastique masculine et trampoline de Monaco depuis 1890.
                                C'est le plus ancien club de sports fond&eacute; &agrave; Monaco.
                                Le club a la particularit&eacute; d'&ecirc;tre affili&eacute; &agrave; la fois &agrave;
                                la F&eacute;d&eacute;ration fran&ccedil;aise de gymnastique et &agrave; 
                                la F&eacute;d&eacute;ration Mon&eacute;gasque de Gymnastique. 
                                Elle participe donc &agrave; la fois au Championnat de France de Gymnastique et 
                                peut &eacute;galement repr&eacute;senter la Principaut&eacute; de Monaco 
                                lors de comp&eacute;titions internationales relevant du Comit&eacute; international olympique 
                                en y envoyant ses athl&egrave;tes de nationalit&eacute; mon&eacute;gasque.
                                Depuis septembre 2012, le club est parrain&eacute; par Hamilton Sabot,
                                r&eacute;cent m&eacute;daill&eacute; aux Jeux Olympiques de Londres 2012.<br/>
                                &Agrave; ce jour la pr&eacute;sidente du club est Madame Dominique BERTOLOTTO.
                            </p>
                        </Col>
                        <Clearfix visibleSmBlock></Clearfix>
                        <Col sm={6} md={3}><Image src={DominiquePic} responsive /></Col>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                        <Col sm={6} md={3}><Image src={GymPic} responsive /></Col>
                        <Clearfix visibleSmBlock></Clearfix>
                        <Col sm={6} md={6}>
                        <h2>La salle de sport</h2>
                        <p>
                            La salle de sport se trouve au -9 de la gare de Monaco.
                            Vous trouverez au sein de cette salle tout le mat&eacute;riel n&eacute;cessaire 
                            pour la pratique d'un sport de qualit&eacute;.<br/>
                            Avec un praticable, des barres fixes et parall&egrave;les, des anneaux,
                            un cheval d'ar&ccedil;on, un tapis de course et bien d'autre accessoires 
                            pour la pratique de la gymnastique.<br/> 
                            Et bien sur des cours encadr&eacute;s par des entraineurs tr&egrave;s performents.
                        </p>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                        <Col sm={6} md={6}>
                            <h2>La place du sport dans la notre vie</h2>
                            <p className="quote-block">
                                Le sport est plus qu'une activit&eacute;: il contribue &agrave; 
                                l'&eacute;quilibre <strong>PHYSIQUE</strong> et <strong>PSYCHIQUE</strong> de chacun.
                                Les personnes qui pratiquent ou qui ont pratiqu&eacute; un sport dans le pass&eacute;,
                                 de fa&ccedil;on assidue et intense, ont tous un &laquo;plus&raquo; qui se manifeste par:
                                 <br/><br/>
                                <ul id="principles">
                                    <li>- Savoir atteindre un objectif sportif ou professionnel</li>
                                    <li>- Mettre en place un &eacute;ch&eacute;ancier dans le travail</li>
                                    <li>- Organiser et planifier chaque &eacute;tape</li>
                                    <li>- Savoir se d&eacute;passer, affronter les difficult&eacute;s</li>
                                </ul>
                            </p>
                        </Col>
                        <Col sm={6} md={3}><Image src={KevPBar} responsive /></Col>
                        <Clearfix visibleSmBlock></Clearfix>
                    </Row>
                    <hr/>
                    <Row className="show-grid">
                        <Col sm={6} md={3}><Image src={ThierryJul} responsive /></Col>
                        <Clearfix visibleSmBlock></Clearfix>
                        <Col sm={6} md={6}>   
                                <blockquote>
                                    &ldquo;Ancien sportif de haut niveau et actuellement directeur sportif de gymnastique &agrave; Monaco,
                                     je suis convaincu que donner ces valeurs sportives et &eacute;ducatives &agrave; mes gymnastes, 
                                     leur donnent un &laquo;bagage&raquo; et un atout indispensable pour leur vie professionnelle future. 
                                     Ils sont organis&eacute;s et structur&eacute;s, ils savent g&eacute;rer leurs &eacute;motions, 
                                     et savent o&ugrave; se trouvent leurs limites et comment arriver au r&eacute;sultat escompt&eacute;. 
                                     Le sport aide &agrave; affronter les &eacute;checs et aide &agrave; 
                                     se donner de nouveau challenge &agrave; relever. 
                                     Je remercie mes anciens entraineurs de m&apos;avoir transmis et inculquer cette passion
                                     pour le sport et pour la vie, et &agrave; mon tour, je transmets ces valeurs &agrave;
                                     mes gymnastes afin qu&apos;ils les transmettent &agrave; leur tour.&rdquo;
                                    <br/><br/>
                                    - <a href="//etoiledemonaco.com/trainers">Thierry Aymes</a>
                                </blockquote>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default AboutPage;