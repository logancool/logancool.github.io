import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const HomePage = () => (
    <PageContent>
        <div styleName="intro">
            <p styleName="p">
                Hi there 👋, Logan here. Welcome to paradise! If you have ever met me, I consider myself as a very
                positive person who loves music, travelling, and being outside. I moved to the bay area about 5 years
                ago from a beautiful farm up in Canada...eh? I have always loved technology, and have been lucky
                enough/been told to have an eye for detail. I love working with others, and I am always excited to hear
                other people’s ideas. Currently most of my time is spent in the <code styleName="code">.front-end</code>{' '}
                bucket however on-call seems to enlighten me of all of the other cool things happening on the web.
                Wishing you the best of days with no connectivity issues. Thanks for taking the time to surf over
                my&nbsp;way.&nbsp;🌊
            </p>
        </div>
        <a styleName="link sfix" href="https://www.stitchfix.com/">
            <h2 styleName="h2"> Stitch Fix </h2>
            <p styleName="p">
                Since starting in 2017, I helped forefront the launch of Kids, Maternity, Plus, and the expansion to the
                UK. My initial responsibilities included working directly with marketing & design building AB tests for
                our Conversion team. Alongside another engineer and partnership of{' '}
                <a href="https://www.carbonfive.com/">Carbon 5</a>, we built a Node.js static site using Jekyll. Later,
                my team grew and began focusing on a customized static react app/rails server. During this time I led
                and broke down both internal and external facing projects using&nbsp;Jira.
            </p>
        </a>
        <a styleName="link ft" href="https://www.flashtalking.com/">
            <h2 styleName="h2">Flashtalking</h2>
            <p styleName="p">
                Starting with ActionScript 2, I designed and built advertisement creatives for large and small
                businesses including clients such as Hulu, Gap, and CBS. I worked with our internal developers in Leeds
                and New York directly, to help improve internal webapp tooling. After HTML began dominating the
                industry, I worked mostly with CSS and JavaScript frameworks such as&nbsp;Three.js.
            </p>
        </a>
    </PageContent>
);
export default HomePage;
