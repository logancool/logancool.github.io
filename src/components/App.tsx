import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResumePage from './page/ResumePage';
import StackPage from './page/StackPage';
import WorkPage from './page/WorkPage';
import PageNotFound from './page/PageNotFound';
import Header from './nav/Header';
import Footer from './nav/Footer';
import './app.module.scss';

const App = () => {
    console.log('here');
	return (
    <BrowserRouter>
        {/* <Header /> */}
        {/* <div styleName="page"> */}
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                {/* <Route name="work" exact path="/work" component={WorkPage} />
                <Route name="resume" exact path="/resume" component={ResumePage} />
                <Route name="stack" exact path="/stack" component={StackPage} />
                <Route component={PageNotFound} /> */}
            </Routes>
        {/* </div> */}
        {/* <Footer /> */}
    </BrowserRouter>
)};

export default App;
