import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const WorkPage = () => (
    <div styleName="work">
        <div styleName="full-width">
            <div styleName="sfix" href="https://www.stitchfix.com/">
                <h2 styleName="h2"> Stitch Fix </h2>
                <p styleName="p">
                    Since starting in 2017, I helped forefront the launch of Kids, Maternity, Plus, and the expansion to
                    the UK. My initial responsibilities included working directly with marketing & design building AB
                    tests for our Conversion team. Alongside another engineer and partnership of{' '}
                    <a styleName="a" href="https://www.carbonfive.com/">
                        Carbon 5
                    </a>
                    , we built a Node.js static site using Jekyll. Later, my team grew and began focusing on a
                    customized static react app/rails server. During this time I led and broke down both internal and
                    external facing projects using&nbsp;Jira.
                </p>
            </div>
        </div>
        <div styleName="full-width">
            <div styleName="ft" href="https://www.flashtalking.com/">
                <h2 styleName="h2">Flashtalking</h2>
                <p styleName="p">
                    Starting with ActionScript 2, I designed and built advertisement creatives for large and small
                    businesses including clients such as Hulu, Gap, and CBS. I worked with our internal developers in
                    Leeds and New York directly, to help improve internal webapp tooling. After HTML began dominating
                    the industry, I worked mostly with CSS and JavaScript frameworks such as&nbsp;Three.js.
                </p>
            </div>
        </div>
    </div>
);
export default WorkPage;
