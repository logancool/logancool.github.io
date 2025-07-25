import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from './page/HomePage';
import ResumePage from './page/ResumePage';
import StackPage from './page/StackPage';
import WorkPage from './page/WorkPage';
import ProjectsPage from './page/ProjectsPage';
import PageNotFound from './page/PageNotFound';
import Header from './nav/Header';
import Footer from './nav/Footer';
import './app.module.scss';
import RedirectPage from './page/RedirectPage';

const AppContent = () => {
    const location = useLocation();
    const hideFooter = location.pathname === '/stack';
    
    return (
        <>
            <Header />
            <div styleName="page">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="work" element={<WorkPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="resume" element={<ResumePage />} />
                    <Route path="download" element={<RedirectPage />} />
                    <Route path="stack" element={<StackPage />} />
                    <Route element={<PageNotFound />} />
                </Routes>
            </div>
            {!hideFooter && <Footer />}
        </>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
