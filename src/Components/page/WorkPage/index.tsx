import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const WorkPage = () => (
    <PageContent>
        <div styleName="work">
            <div styleName="amazon" href="https://www.amazon.com/">
                <h2 styleName="workplace">
                    <a href="https://www.amazon.com/">Amazon</a>
                </h2>
                <p styleName="p">
                    Since 2023, I've built a Next.js workwear shopping site with employee onboarding and the sales
                    intake site&nbsp;
                    <a styleName="link" href="https://zapposatwork.com">
                        zapposatwork.com
                    </a>
                    &nbsp;with partner onboarding support. I refactored authentication and framework for partner subsidy
                    management CMS and improved /returns flow and order tracking for zappos.com.
                </p>
            </div>
            <img styleName="amazon-logo" src="/images/amazon_logo.png" alt="Amazon logo" />
            <img styleName="zappos-logo" src="/images/zappos_logo.png" alt="Zappos logo" />
            <div styleName="zawDemo">
                <img src="/images/zaw_shop.png" alt="workwear shopping experience for a demo customer" styleName="zawImage" />
                <p styleName="zawCaption">Workwear shopping experience for a demo customer</p>
            </div>
            <div styleName="sfix" href="https://www.stitchfix.com/">
                <h2 styleName="workplace">
                    <a href="https://www.stitchfix.com/"> Stitch Fix </a>
                </h2>
                <p styleName="p">
                    From 2017-2023, I built logged-out&nbsp;
                    <a styleName="link" href="https://www.stitchfix.com">
                        stitchfix.com
                    </a>
                    &nbsp;from /women to 100+ pages. I created a front end focussed team responsible for visitor
                    signups, developed internal WYSIWYG editor that automates page development, rebuilt front end stack
                    leveraging babel, webpack and ECMAScript 6, and led technical projects collaborating across seo,
                    growth, marketing, security, devops, and algorithms.
                </p>
            </div>
            <img styleName="sfix-logo" src="/images/sfix_logo.png" alt="Stitch Fix logo" />
            <div styleName="ft" href="https://www.flashtalking.com/">
                <h2 styleName="workplace">
                    <a href="https://www.flashtalking.com/">Flashtalking</a>
                </h2>
                <p styleName="p">
                    From 2015-2017, I built JavaScript/HTML 5 creatives for clients delivering over 4 million
                    impressions. I led on-site technical presentations for client tools, led small team meetings
                    discussing creative development triaging issues and outlining solutions, and led QA efforts
                    implementing new practices and policies.
                </p>
            </div>
            <img styleName="ft-logo" src="/images/ft_logo.png" alt="Flashtalking logo" />
            {/* <div styleName="side" href="https://www.flashtalking.com/">
            <h2>Side Project</h2>
            <a styleName="link code" href="https://nexpisode.com"> Nexpisode </a>
            </div> */}
        </div>
    </PageContent>
);
export default WorkPage;
