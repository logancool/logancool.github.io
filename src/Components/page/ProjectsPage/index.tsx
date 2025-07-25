import React, { useEffect } from 'react';
import PageContent from '../../layout/PageContent';
import './styles.module.scss';

const ProjectsPage = () => {
    useEffect(() => {
        // Add robots meta tag to prevent indexing
        const robotsMeta = document.createElement('meta');
        robotsMeta.name = 'robots';
        robotsMeta.content = 'noindex, nofollow';
        document.head.appendChild(robotsMeta);
        
        return () => {
            // Clean up when component unmounts
            const meta = document.querySelector('meta[name="robots"]');
            if (meta) document.head.removeChild(meta);
        };
    }, []);
    
    return (
    <PageContent>
        <div styleName="projects">
            
            <div styleName="project">
                <h3>
                    <a href="https://daddies-ten.vercel.app" target="_blank" rel="noopener noreferrer">
                        Daddies - Dad Social Network
                    </a>
                </h3>
                <img styleName="projectImage" src="/images/daddies.jpg" alt="Daddies app screenshot" />
                <p styleName="description">
                    A location-based social app for dads to connect with other dads nearby. Features include interactive map with real-time dad locations, 
                    profile system with dad bod selection, meetup requests, and SMS authentication.
                </p>
                <div styleName="techStack">
                    <strong>Tech Stack:</strong> Next.js 14, React, TypeScript, Tailwind CSS, Firebase Auth, Firestore, Google Maps API
                </div>
                <div styleName="loginInfo">To demo: Use phone number 555-123-4567 with verification code 123456.</div>
                <div styleName="links">
                    <a href="https://daddies-ten.vercel.app" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href="https://github.com/logancool/daddies" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </div>
            </div>
            
            <div styleName="project">
                <h3>
                    <a href="https://farmers-market-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Farmers Market - SMS Authentication
                    </a>
                </h3>
                <img styleName="projectImage" src="/images/farmers_market.jpg" alt="Farmers Market app screenshot" />
                <p styleName="description">
                    A Next.js application with Firebase phone authentication for farmers market access. Features mobile-responsive design,
                    SMS-based verification, and secure user management for local farmers and customers.
                </p>
                <div styleName="techStack">
                    <strong>Tech Stack:</strong> Next.js, Firebase Authentication, Tailwind CSS, TypeScript
                </div>
                <div styleName="loginInfo">To demo: Use phone number 555-123-4567 with verification code 123456.</div>
                <div styleName="links">
                    <a href="https://farmers-market-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href="https://github.com/logancool/farmers-market" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </div>
            </div>

            <div styleName="project">
                <h3>
                    <a href="https://github.com/logancool/nexpisode" target="_blank" rel="noopener noreferrer">
                        Nexpisode - TV Show Tracker
                    </a>
                </h3>
                <img styleName="projectImage" src="/images/nexpisode.jpg" alt="Nexpisode app screenshot" />
                <p styleName="description">
                    A React application that tracks and displays countdown timers for upcoming TV show episodes. 
                    Features AWS Cognito authentication, dynamic time formatting, and support for multiple popular shows.
                </p>
                <div styleName="techStack">
                    <strong>Tech Stack:</strong> React, AWS Cognito, React Router, TV Database API
                </div>
                <div styleName="links">
                    <a href="http://www.logan.cool/nexpisode/my-shows" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                    <a href="https://github.com/logancool/nexpisode" target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                    </a>
                </div>
            </div>
        </div>
    </PageContent>
);
};

export default ProjectsPage;