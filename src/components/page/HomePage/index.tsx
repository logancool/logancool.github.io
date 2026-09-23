import React, { useEffect, useState } from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';
import data from './data';

const HomePage = () => {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setWordIndex(index => (index + 1) % data.buildWords.length);
        }, wordIndex === 0 ? 6000 : 4200);

        return () => window.clearTimeout(timeout);
    }, [wordIndex]);

    return (
        <PageContent>
            <main styleName="wrapper">
                <p styleName="eyebrow">{data.eyebrow}</p>
                <h1 styleName="title">
                    {data.intro}{' '}
                    <strong key={data.buildWords[wordIndex]} styleName="titleWord">
                        {data.buildWords[wordIndex]}
                    </strong>
                </h1>
                <p styleName="summary">
                    Farm kid from Saskatchewan, dad of three, and now based in{' '}
                    <span styleName="noWrap">San Francisco</span>. Top 1% of{' '}
                    <a href="https://open.spotify.com/search/Jon%20Bellion">
                        Jon Bellion
                    </a>
                    {' '}listeners on Spotify; partial to running up Twin Peaks.
                </p>
                <div styleName="interests">
                    <span styleName="interestLabel">Outside the browser</span>
                    <ul styleName="loves">
                    {data.loves.map((love, index) => (
                        <li key={index} styleName="love">
                            {love}
                        </li>
                    ))}
                    </ul>
                </div>
            </main>
        </PageContent>
    );
};

export default HomePage;
