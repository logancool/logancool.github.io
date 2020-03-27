import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AnotherPage from './AnotherPage';
import AThirdPage from './AThirdPage';
import NavBar from './NavBar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route name="home" exact path="/" component={HomePage} />
                        <Route name="home" exact path="/another-page" component={AnotherPage} />
                        <Route name="home" exact path="/a-third-page" component={AThirdPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
