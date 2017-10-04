import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TrainersPage from './pages/TrainersPage';
import CoursesPage from './pages/CoursesPage';
import ContactsPage from './pages/ContactsPage';
import NoFoundPage from './pages/NoFoundPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red100, red500, red700 } from 'material-ui/styles/colors';

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
                        <Switch>
                            <Header/>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/trainers" component={TrainersPage}/>
                            <Route path="/courses" component={CoursesPage}/>
                            <Route path="/contacts" component={ContactsPage}/>
                            <Route component={NoFoundPage}/>
                        </Switch>
                    </HashRouter>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;