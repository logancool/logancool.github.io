import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResumePage from './page/ResumePage';
import StackPage from './page/StackPage';
import WorkPage from './page/WorkPage';
import PageNotFound from './page/PageNotFound';
import Header from './nav/Header';
import Footer from './nav/Footer';
import './app.module.scss';

const App = () => (
    <Router>
        <Fragment>
            <Header />
            <div styleName="page">
                <Switch>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="work" exact path="/work" component={WorkPage} />
                    <Route name="resume" exact path="/resume" component={ResumePage} />
                    <Route name="stack" exact path="/stack" component={StackPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            <Footer />
        </Fragment>
    </Router>
);

export default App;
