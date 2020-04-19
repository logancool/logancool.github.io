import React, { Fragment, Component } from 'react';
import data from './data';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const ResumePage = () => (
    <PageContent>
        <div className="columns">
            <div className="headline">
                <div className="headline-name">{data.headline.name}</div>
                <span className="headline-description">{data.headline.role}</span>
            </div>
            <div className="experience">
                {data.experience.map(job => (
                    <div key={job.company}>
                        <h3 className="section-title">
                            <strong>{job.company}</strong>
                            {`, ${job.location} \u2014 ${job.title}`}
                        </h3>
                        <h5 className="section-date">{`${job.date.start} \u2014 ${job.date.end}`}</h5>

                        <ul className="skills">
                            {job.skills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </PageContent>
);

export default ResumePage;
