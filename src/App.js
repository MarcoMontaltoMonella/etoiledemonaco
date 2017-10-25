import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import AthletesPage from './pages/AthletesPage';
import TrainersPage from './pages/TrainersPage';
import CoursesPage from './pages/CoursesPage';
import ContactsPage from './pages/ContactsPage';
import RegistrationPage from './pages/RegistrationPage';
import NoFoundPage from './pages/NoFoundPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red100, red500, red700 } from 'material-ui/styles/colors';
import "./styles/Body.css";

class App extends Component {
    render() {
        const muiTheme = getMuiTheme({
            palette: {
                primary1Color: red500,
                primary2Color: red700,
                primary3Color: red100,
            },
        }, {
            avatar: {
                borderColor: null,
            },
            userAgent: 'all',
        });

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <HashRouter>
                        <div>
                            <Header/>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                                <Route exact path="/apropos" component={AboutPage}/>
                                <Route exact path="/equipe" component={TeamPage}/>
                                <Route exact path="/equipe/entraineurs" component={TrainersPage}/>
                                <Route exact path="/equipe/athletes" component={AthletesPage}/>
                                <Route exact path="/cours" component={CoursesPage}/>
                                <Route exact path="/inscription" component={RegistrationPage}/>
                                <Route exact path="/contacts" component={ContactsPage}/>
                                <Route component={NoFoundPage}/>
                            </Switch>
                        </div>
                    </HashRouter>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;