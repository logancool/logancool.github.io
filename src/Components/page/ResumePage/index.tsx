import React, { Fragment, Component } from 'react';
import data from './data';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const ResumePage = () => (
    <PageContent>
        <div styleName="resume">
            <div styleName="columns">
                <div styleName="headline">
                    <div styleName="headline-name">{data.headline.name}</div>
                    <span styleName="headline-description">
                        <i>{data.headline.role}</i>
                    </span>
                </div>
                <div styleName="experience">
                    {data.experience.map(job => (
                        <div key={job.company}>
                            <h3 styleName="section-title">
                                <strong>{job.company}</strong>
                                {`, ${job.location} \u2014 ${job.title}`}
                            </h3>
                            <h5 styleName="section-date">{`${job.date.start} \u2014 ${job.date.end}`}</h5>

                            <ul styleName="skills">
                                {job.skills.map(skill => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </PageContent>
);

export default ResumePage;
