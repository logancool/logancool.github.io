const data = {
    headline: {
        name: '',
        role: '',
    },
    experience: [
        {
            company: 'Stitch Fix',
            location: 'San Francisco',
            title: 'Lead Front-End Engineer',
            date: {
                start: 'April 2017',
                end: 'Present',
            },
            skills: [
                'Built the logged-out experience from "/women" only to 100+ pages using a custom webpack/rails hybrid application',
                'Created a front end focussed team responsible for visitor signups',
                'Developed internal WYSIWYG editor that automates page development',
                'Rebuilt front end stack leveraging babel, webpack and ECMAScript',
                'Led technical projects collaborating across seo, growth, marketing, security, devops, and algorithms',
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
                'Led QA efforts implementing new practices and policies',
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
            'Attended honours computer science and math classes',
            'Coached recreational volleyball team',
            'Volunteered for student orientation',
        ],
    },
    skills: {
        proficient: ['JavaScript ECMAScript 6', 'Ruby', 'Git', 'JQuery', 'Wordpress', 'Python', 'Rails', 'zsh', 'Java', 'C++'],
        familiar: ['Go', 'AWS', 'Rails'],
    },
    links: {
        twitter: 'https://twitter.com/mrlogancool',
        email: 'contact@logancool.com',
    },
};

export default data;
