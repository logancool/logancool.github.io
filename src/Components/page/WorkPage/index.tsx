import React from 'react';
import PageContent from '../../layout/PageContent';
import ftLogo from './images/ft_logo.png';
import sfixLogo from './images/sfix_logo.png';

import './styles.module.scss';

const WorkPage = () => (
    <PageContent>
        <div styleName="work">
            <div styleName="sfix" href="https://www.stitchfix.com/">
                <h2 styleName="workplace">
                    <a href="https://www.stitchfix.com/"> Stitch Fix </a>
                </h2>
                <p styleName="p">
                    Starting in 2017, I helped forefront the launch of <a styleName="link" href="https://www.stitchfix.com/men">Men</a>, <a styleName="link" href="https://www.stitchfix.com/kids">Kids</a> ,<a styleName="link" href="https://www.stitchfix.com/women/plus">Plus</a>, and the expansion to
                    the <a styleName="link" href="https://www.stitchfix.co.uk">UK</a>. My responsibilities included rewriting front end applications and managing evergreen AB experiments. 
                    I worked with other front-end focussed engineers to align our designs systems across the site. I currently work on
                    internal tooling that enables business partners access to user data and ui tweaks. 
                </p>
            </div>
            <img styleName="sfix-logo" src={sfixLogo} />
            <div styleName="ft" href="https://www.flashtalking.com/">
                <h2 styleName="workplace">
                    <a href="https://www.flashtalking.com/">Flashtalking</a>
                </h2>
                <p styleName="p">
                    Starting with ActionScript 2, I designed and built advertisement creatives for large and small
                    businesses including clients such as Hulu, Gap, and CBS. I worked with our internal developers in
                    Leeds and New York directly, to help improve internal web app tooling. After HTML began dominating
                    the industry, I worked mostly in vanilla CSS using a JavaScript webGL framework,&nbsp;
                    <a styleName="link" href="https://threejs.org/">
                        Three.js
                    </a>
                    .
                </p>
            </div>
            <img styleName="ft-logo" src={ftLogo} />
            <div styleName="side" href="https://www.flashtalking.com/">
            <h2>Side Project</h2>
            <a styleName="link code" href="https://nexpisode.com"> Nexpisode </a>
            </div>

        </div>
    </PageContent>
);
export default WorkPage;
