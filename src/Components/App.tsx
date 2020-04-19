import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ProjectPage from './ProjectPage';
import NavBar from './Header';
import Footer from './Footer';

const App = () => (
    <Router>
        <Fragment>
            <NavBar />
            <Switch>
                <Route name="home" exact path="/" component={HomePage} />
                <Route name="home" exact path="/resume" component={ResumePage} />
                <Route name="home" exact path="/projects" component={ProjectPage} />
            </Switch>
            <Footer />
        </Fragment>
    </Router>
);

export default App;
