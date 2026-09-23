import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const WorkPage = () => (
    <PageContent>
        <main styleName="work">
            <p styleName="intro">
                Selected experience building front-end products, internal tools,
                and customer-facing systems.
            </p>

            <section styleName="company">
                <div styleName="companyMark amazonMark">
                    <a styleName="companyLogoLink" href="https://leo.amazon.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/amazon_leo_logo.png" alt="Amazon Leo logo" />
                    </a>
                </div>
                <div styleName="companyContent">
                    <p styleName="dates">2023–present</p>
                    <p styleName="p">
                        I build visualization software for satellite constellation
                        planning, turning complex geospatial data into clear,
                        responsive tools for teams making decisions at scale.
                    </p>
                    <ul styleName="details">
                        <li>
                            Built mapping interfaces with MapLibre, PMTiles,
                            Zustand, TanStack, and Vite.
                        </li>
                        <li>
                            Integrated Amazon Location Service with CloudFront and
                            Cognito for a secure, reliable product experience.
                        </li>
                    </ul>
                </div>
            </section>

            <section styleName="company">
                <div styleName="companyMark">
                    <a styleName="companyLogoLink" href="https://www.zappos.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/zappos_logo.png" alt="Zappos logo" />
                    </a>
                </div>
                <div styleName="companyContent">
                    <p styleName="dates">2023–2025</p>
                    <p styleName="p">
                        Built a Next.js workwear shopping experience and sales
                        intake site for <a styleName="link" href="https://zapposatwork.com">Zappos at Work</a>,
                        including partner onboarding support.
                    </p>
                    <ul styleName="details">
                        <li>
                            Refactored authentication and the partner subsidy
                            management CMS.
                        </li>
                        <li>
                            Improved the returns flow and order tracking for
                            <a styleName="link" href="https://www.zappos.com/"> zappos.com</a>.
                        </li>
                    </ul>
                    <img
                        styleName="zawImage"
                        src="/images/zaw_shop.png"
                        alt="Zappos at Work shopping experience"
                    />
                    <p styleName="caption">Zappos at Work shopping experience</p>
                </div>
            </section>

            <section styleName="company">
                <div styleName="companyMark">
                    <a styleName="companyLogoLink" href="https://www.stitchfix.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/sfix_logo.png" alt="Stitch Fix logo" />
                    </a>
                </div>
                <div styleName="companyContent">
                    <p styleName="dates">2017–2023</p>
                    <p styleName="p">
                        Built the logged-out stitchfix.com experience from /women
                        to more than 100 pages and led a front-end-focused team
                        responsible for visitor signups.
                    </p>
                    <p styleName="p">
                        Created an internal WYSIWYG editor, rebuilt the front-end
                        stack with Babel and Webpack, and led technical projects
                        across SEO, growth, marketing, security, DevOps, and
                        algorithms.
                    </p>
                </div>
            </section>

            <section styleName="company">
                <div styleName="companyMark">
                    <a styleName="companyLogoLink" href="https://www.flashtalking.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/ft_logo.png" alt="Flashtalking logo" />
                    </a>
                </div>
                <div styleName="companyContent">
                    <p styleName="dates">2015–2017</p>
                    <p styleName="p">
                        Built JavaScript and HTML5 creatives for clients delivering
                        more than four million impressions, led technical
                        presentations and team meetings, and improved QA practices.
                    </p>
                </div>
            </section>
        </main>
    </PageContent>
);

export default WorkPage;
