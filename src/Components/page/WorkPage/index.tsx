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
                    Since starting in 2017, I helped forefront the launch of Kids, Maternity, Plus, and the expansion to
                    the UK. My initial responsibilities included working directly with marketing & design building AB
                    tests for our Conversion team. Alongside another engineer and partnership of{' '}
                    <a styleName="link" href="https://www.carbonfive.com/">
                        Carbon 5
                    </a>
                    , we built a Node.js static site using Jekyll. Later, my team grew and began focusing on a
                    customized static react app/rails server. During this time I managed an intern and led small
                    projects using&nbsp;Jira.
                </p>
            </div>
            <img styleName="sfix-logo" src={sfixLogo} />
            <div styleName="ft" href="https://www.flashtalking.com/">
                <h2 styleName="workplace">
                    <a href="https://www.flashtaking.com/">Flashtalking</a>
                </h2>
                <p styleName="p">
                    Starting with ActionScript 2, I designed and built advertisement creatives for large and small
                    businesses including clients such as Hulu, Gap, and CBS. I worked with our internal developers in
                    Leeds and New York directly, to help improve internal webapp tooling. After HTML began dominating
                    the industry, I worked mostly in vanilla CSS using a JavaScript webGL framework,&nbsp;
                    <a styleName="link" href="https://threejs.org/">
                        Three.js
                    </a>
                    .
                </p>
            </div>
            <img styleName="ft-logo" src={ftLogo} />
        </div>
    </PageContent>
);
export default WorkPage;
