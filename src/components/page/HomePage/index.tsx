import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';
import data from './data';

const HomePage = () => (
    <PageContent>
        <div styleName="intro">
            <p styleName="p intro-text">Hi there 👋, Logan here.</p>
            <h3> Logan facts</h3>
            <div styleName="facts">
                {data.facts.map((fact, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: fact }} styleName="fact" />
                ))}
            </div>
            <p styleName="p">Thanks for taking the time to surf over my&nbsp;way.&nbsp;🌊</p>
        </div>
    </PageContent>
);
export default HomePage;
