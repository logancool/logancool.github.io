import React, { Component } from 'react';
import './styles.module.scss';

class HomePage extends Component {
    render() {
        return (
            <div styleName="page">
                <p>
                    Hi there 👋, Logan here. Yes, “Cool” is my real last name, and no, I did not change it. If you have
                    ever met me, I consider myself as a very positive person who loves music, travelling, and being
                    outside. I moved to the bay area about 5 years ago from a beautiful farm up in Canada...eh? I have
                    always loved technology, and have been lucky enough/been told to have an eye for detail. I love
                    working with others, and I am always excited to hear other people’s ideas. Currently most of my time
                    is spent in the <code>.front-end</code> bucket however on-call seems to enlighten me of all of the
                    other cool things happening on the web. Wishing you the best of days with no connectivity issues.
                    Thanks for taking the time to surf over my&nbsp;way.&nbsp;🌊
                </p>

                <h2> Stitch Fix </h2>
                <p>
                    Since starting in 2017, I helped forefront the launch of Kids, Maternity, Plus, and the expansion to
                    the UK. My initial responsibilities included working directly with marketing & design building AB
                    tests for our Conversion team. Alongside another engineer and partnership of{' '}
                    <a href="https://www.carbonfive.com/">Carbon 5</a>, we built a Node.js static site using Jekyll.
                    Later, my team grew and began focusing on a customized static react app/rails server. During this
                    time I led and broke down both internal and external facing projects using&nbsp;Jira.
                </p>

                <h2>Flashtalking</h2>
                <p>
                    Starting with ActionScript 2, I designed and built advertisement creatives for large and small
                    businesses including clients such as Hulu, Gap, and CBS. I worked with our internal developers in
                    Leeds and New York directly, to help improve internal webapp tooling. After HTML began dominating
                    the industry, I worked mostly with CSS and JavaScript frameworks such as&nbsp;Three.js.
                </p>
            </div>
        );
    }
}
export default HomePage;
