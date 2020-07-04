import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const HomePage = () => (
    <PageContent>
        <div styleName="intro">
            <p styleName="p">
                Hi there 👋, Logan here. If you have ever met me, I consider myself as a very positive person who loves
                music, travelling, and being outside. I moved to the bay area about 5 years ago from a beautiful farm up
                in Canada...eh? I have always loved technology, and have been lucky enough/been told to have an eye for
                detail. I love working with others, and I am always excited to hear other people’s ideas. Currently most
                of my time is spent in the <code styleName="code">.front-end</code> bucket however on-call seems to
                enlighten me of all of the other cool things happening on the web. Wishing you the best of days with no
                connectivity issues. Thanks for taking the time to surf over my&nbsp;way.&nbsp;🌊
            </p>
        </div>
    </PageContent>
);
export default HomePage;
