import React, { useState, useEffect } from 'react';
import cookies from 'browser-cookies';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';
import data from './data';

const HomePage = () => {
    const [introShown, setIntroShown] = useState(false);

    // if new user visit, set the cookie
    // otherwise, setIntroShown to be true
    useEffect(() => {
        cookies.get('lc-intro') === 'true' ? setIntroShown(true) : cookies.set('lc-intro', 'true');
    }, []);

    return (
        <PageContent>
            {!introShown ? (
                <div styleName="intro">
                    {data.intro.map((text, index) => (
                        <p
                            key={`intro-${index}`}
                            styleName={`intro intro-${index + 1}`}
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                    ))}
                    <ul styleName="intro-facts">
                        <div styleName="facts-title">{data.title}</div>
                        {data.facts.map((fact, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: fact }} styleName="fact" />
                        ))}
                        {data.outro.map((text, index) => (
                            <p
                                key={`outro-${index}`}
                                styleName={`outro outro-${index + 1}`}
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <ul styleName="facts">
                    <div styleName="facts-title">{data.title}</div>
                    {data.facts.map((fact, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: fact }} styleName="fact" />
                    ))}
                </ul>
            )}
        </PageContent>
    );
};

export default HomePage;
