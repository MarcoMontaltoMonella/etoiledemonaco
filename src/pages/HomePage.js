import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../styles/Body.css';
import '../styles/HomePage.css';
import logo from '../images/logos/etoile-logo-1.png';

class HomePage extends Component {
    render() {

        return (
            <div className="main-body" id="background-video">
                <h1 id="hero-title">Un club, un passion, des ambitions</h1>
                <Image src={logo}/>
                <p id="news">
                    <strong>Stages Loisirs Trampoline/Acrobatie</strong><br/>
                    Saison 2017/2018<br/>
                    <br/>
                    Prix : 25 &euro; la matin&eacute;e ou 100 &euro; la semaine<br/>
                    Inscriptions : <a href="mailTo:etoile@libello.com">etoile@libello.com</a><br/>
                    Barbara : <a href="tel:00330687001954">06 87 00 19 54</a><br/>
                    Ou directement au bureau du club de l'&Eacute;toile<br/>
                    <br/>
                    <strong>VACANCES DE LA TOUSSAINT 2017</strong><br/>
                    Du jeudi 26 octobre au vendredi 27 octobre : 10h00-12h00<br/>
                    Du lundi 30 octobre au mardi 31 octobre : 10h00-12h00<br/>
                    Du jeudi 2 novembre au vendredi 3 novembre : 10h00-12h00<br/>
                    <br/>
                    <strong>VACANCES DE NO&Euml;L 2018</strong><br/>
                    Du mercredi 3 janvier au vendredi 5 janvier : 10h00-12h00<br/>
                    <br/>
                    <strong>VACANCES DE F&Eacute;VRIER 2018</strong><br/>
                    Du lundi 26 f&eacute;vrier au vendredi 2 mars : 10h00-12h00<br/>
                    Du lundi 5 mars au vendredi 9 mars : 10h00-12h00<br/>
                    <br/>
                    <strong>VACANCES DE PRINTEMPS 2018</strong><br/>
                    Du lundi 23 avril au vendredi 27 avril : 10h00-12h00<br/>
                    Le lundi 30 avril : 10h00-12h00<br/>
                    Du mercredi 2 mai au vendredi 4 mai : 10h00-12h00<br/>
                    ​<br/>
                    <strong>VACANCES D'ETE 2018</strong><br/>
                    Du lundi 2 juillet au vendredi 6 juillet : 10h00-12h00<br/>
                    Du lundi 9 juillet au vendredi 13 juillet : 10h00-12h00<br/>
                </p>
            </div>
        );
    }
}
export default HomePage;