import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <>
            <Header />
            <div styleName="page">
                <Routes>
                    <Route name="home" exact path="/" element={<HomePage />} />
                    <Route name="work" exact path="/work" element={<WorkPage />} />
                    <Route name="resume" exact path="/resume" element={<ResumePage />} />
                    <Route name="stack" exact path="/stack" element={<StackPage />} />
                    <Route element={<PageNotFound />} />
                </Routes>
            </div>
            <Footer />
        </>
    </Router>
);

export default App;
