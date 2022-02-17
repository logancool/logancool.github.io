const data = {
    headline: {
        name: '',
        role: '',
    },
    experience: [
        {
            company: 'Stitch Fix',
            location: 'San Francisco',
            title: 'Lead Front End Engineer',
            date: {
                start: 'April 2017',
                end: 'Present',
            },
            skills: [
                'Built the logged-out experience from "/women" only to 100+ pages using a custom webpack/rails hybrid app',
                'Created a front-end focussed team responsible for visitor signup',
                'Developed internal WYSIWYG editor that automates page development',
                'Rebuild front-end stack leveraging babel, webpack and ECMAScript',
                'Led technical projects collaborating across marketing, security, devops, and algorithms',
            ],
        },
        {
            company: 'Flashtalking',
            location: 'San Francisco',
            title: 'Systems Analyst',
            date: {
                start: 'May 2015',
                end: 'April 2017',
            },
            skills: [
                'Built JavaScript/HTML 5 creatives for clients delivering over 4 million impressions',
                'Led on-site technical presentations for client tools',
                'Led small team meetings discussing creative development triaging issues and outlining solutions',
                'Led QA practices implementing new practices and policies',
            ],
        },
        {
            company: 'JKLM Farms',
            location: 'Saskatchewan, Canada',
            title: 'Farmer',
            date: {
                start: 'April 2014',
                end: 'April 2015',
            },
            skills: [
                'Led operations for my 4500 acre grain farm',
                'Performed mechanical maintenance on very old equipment',
                'Executed agriculture software updates, debug errors, and lead hired workers',
                'Closed large financial and business deals',
            ],
        },
    ],
    education: {
        college: 'University of Saskatchewan',
        location: 'Saskatchewan, Canada',
        degree: 'Computer Science, minor in Applied Mathematics',
        year: {
            from: '2010',
            to: '2014',
        },
        skills: [
            '4 years of honours math classes',
            'Coached a volleyball team',
            'Volunteered for all orientations for new potential students',
        ],
    },
    skills: {
        proficient: ['JavaScript ECMAScript 5/6', 'Ruby', 'Git', 'JQuery', 'Wordpress', 'Python', 'Java', 'C++', 'zsh'],
        familiar: ['Go', 'AWS', 'Rails'],
    },
    links: {
        twitter: 'https://twitter.com/logancooll',
        email: 'contact@logancool.com',
    },
};

export default data;
