import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ProjectPage from './ProjectPage';
import NavBar from './NavBar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route name="home" exact path="/" component={HomePage} />
                        <Route name="home" exact path="/resume" component={ResumePage} />
                        <Route name="home" exact path="/projects" component={ProjectPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
