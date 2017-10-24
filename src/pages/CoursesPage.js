import React, { Component } from 'react';
import { Table, Panel, PanelGroup } from 'react-bootstrap';

class CoursesPage extends Component {
    render() {
        return (
            <div className="main-body">
                <h1>Cours</h1>
                <hr/>
                <h3>Gymnastique Masculine</h3>
                <h4>&Eacute;cole de gym et DR</h4>
                <Table striped bordered condensed responsive>
                    <thead>
                    <tr>
                        <th>Horaires</th>
                        <th>Mercredi</th>
                        <th>Samedi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>9h30 - 11h00</td>
                        <td></td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>14h00 - 15h30</td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
                <h4>Coupe formation</h4>
                <Table striped bordered condensed responsive>
                    <thead>
                    <tr>
                        <th>Horaires</th>
                        <th>Lundi</th>                        
                        <th>Mercredi</th>
                        <th>Samedi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>11h00 - 14h00</td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>16h00 - 19h00</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>17h00 - 19h30</td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>    
                <h4>Performants</h4> 
                <Table striped bordered condensed responsive>
                    <thead>
                    <tr>
                        <th>Horaires</th>
                        <th>Lun</th>                        
                        <th>Mar</th>                        
                        <th>Mer</th>
                        <th>Jeu</th>
                        <th>Ven</th>
                        <th>Sam</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Contactez nous</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    </tbody>
                </Table> 
                <hr/>
                <h3>Pr&eacute;paration acrobatique, physique et tumbling</h3>
                <Table striped bordered condensed responsive>
                    <thead>
                    <tr>
                        <th>Horaires</th>
                        <th>Lunedi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>19h30 - 21h00</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    </tbody>
                </Table>
                <hr/>
                <h3>Trampoline</h3>
                <Table striped bordered condensed responsive>
                    <thead>
                    <tr>
                        <th>Horaires</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Samedi <small>(cours &agrave; la carte)</small></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>12h30 - 14h00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>13h30 - 14h45</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>14h00 - 15h30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>14h45 - 16h00</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>16h00 - 17h15</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>17h00 - 18h15</td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>17h15 - 18h30</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>18h15 - 19h30</td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>18h30 - 19h45</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table> 
                <hr/>
                <h2>Tarifs des differ&eacute;nts cours</h2>
                <PanelGroup>
                    <Panel header="&Eacute;cole de Gym et DR">
                        350 &euro; par an
                    </Panel>
                    <Panel header="Coupe formation">
                        400 &euro; par an
                    </Panel>
                    <Panel header="Trampoline">
                        300 &euro; par an
                    </Panel>
                    <Panel header="Pr&eacute;paration acrobatique, physique et tumbling">
                        50 &euro; la cotisation, puis 70 &euro; la carte de 10 cours
                    </Panel>
                    <Panel header="Trampoline &agrave; la carte">
                        20 &euro; par cour, &agrave; r&eacute;server &agrave; l'avance (4 enfants minimum)
                    </Panel>
                </PanelGroup>
            </div>
        );
    }
}
export default CoursesPage;