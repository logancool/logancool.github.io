import React, { useState, useEffect } from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';
import data from './data';

const HomePage = () => {
    return (
        <PageContent>
            <div styleName="wrapper">
                <div styleName="title">{data.intro}</div>
                <ul styleName="loves">
                    {`i `}
                    {data.loves.map((love, index) => (
                        <li key={index} styleName="love">
                            {love}
                        </li>
                    ))}
                </ul>
            </div>
        </PageContent>
    );
};

export default HomePage;
