import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const stackGroups = [
    {
        title: 'Front end',
        tools: 'React · TypeScript · JavaScript · Next.js · Vite · HTML · CSS · SCSS',
    },
    {
        title: 'Mapping and data',
        tools: 'MapLibre · PMTiles · TanStack · GraphQL · REST',
    },
    {
        title: 'Platform',
        tools: 'AWS · Amazon Location Service · CloudFront · Cognito · Lambda · DynamoDB',
    },
    {
        title: 'Delivery and quality',
        tools: 'Webpack · Babel · Jest · React Testing Library · Storybook · Accessibility · Performance',
    },
];

const StackPage = () => (
    <PageContent>
        <main styleName="stack">
            <p styleName="eyebrow">Tools and practices</p>
            <h1 styleName="title">A practical front-end stack.</h1>
            <p styleName="description">
                The technologies I reach for when a product needs to be clear,
                reliable, and easy to evolve.
            </p>
            <div styleName="groups">
                {stackGroups.map(group => (
                    <section key={group.title} styleName="group">
                        <h2 styleName="groupTitle">{group.title}</h2>
                        <p styleName="tools">{group.tools}</p>
                    </section>
                ))}
            </div>
        </main>
    </PageContent>
);

export default StackPage;
