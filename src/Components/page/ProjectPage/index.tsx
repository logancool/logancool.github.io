import React from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';
import data from './data';

const disableProjectPage = false;

const ProjectPage = () => {
    return disableProjectPage ? (
        <PageContent>projects and stack coming soon...</PageContent>
    ) : (
        <PageContent>
            <div styleName="page">
                <div styleName="project-a">project a</div>
                <div styleName="project-b">project b</div>
                <div styleName="stack">
                    <h1>Stack</h1>
                    <h2>Proficient</h2>
                    {data.stack.proficient.map(language => (
                        <div>{language}</div>
                    ))}
                    <h2>Familiar</h2>
                    {data.stack.familiar.map(language => (
                        <div>{language}</div>
                    ))}
                </div>
            </div>
        </PageContent>
    );
};

export default ProjectPage;
