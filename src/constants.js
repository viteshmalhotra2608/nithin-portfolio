import Global from "./assets/Global.png"
import AICTE from "./assets/AICTE.png"

export const services = [
    {
        title: "Data Analyst",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Web3 / Blockchain ",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Vitesh';

export const experiences = [
    {
        'company': 'Global Education PVT LTD',
        'role': 'Full Stack Developer Full Time',
        'duration': 'August 2023 - Present ',
        'logo': Global,
        'points': [
            'With a proven track record in diverse technologies, solving complex challenges and optimizing processes, ensuring successful outcomes for clients and stakeholders are the primary goals.',
            'Enhanced product performance through significant contributions to backend development, optimizing essential components for improved efficiency.',
            'Implemented data security for the company’s product to provide role-based access control.',
            'Developed an independent platform for online proctoring and assessment of simulator procedures in SVL lab for different colleges, LMS integration possible for all student data and updation was directly linked with the LMS data.',
            'Skills: JavaScript · Web Development · Node.js · Software Testing · Bootstrap · HTML5 · REST APIs · Postman API · MongoDB · TypeScript · NestJS · API Testing · Cascading Style Sheets (CSS) · React.js · Express.js · Software Requirements · Problem Solving',
        ],
        'url': 'https://globaledu.net.in/',
    },
    {
        'company': 'Global Education PVT LTD',
        'role': 'Full Stack Developer Intern',
        'duration': 'Feb 2021 - July 2023',
        'logo': Global,
        'points': [
        'Designed and developed the latest version of the LMS portal for more than 20 Institutes and 7000+ users. This involved creating a highly interactive platform, resulting in improved user engagement and satisfaction.',
        'Created an Admin Dashboard for the Management Board, Teacher Dashboard, and Student Dashboard and added extra features like Adding Private Files, Creating Online quizzes, and Creating Online Reporting for all three users, i.e., Admin, Teacher, and Student. ',
        'Skills: JavaScript · Web Development · Node.js · MERN Stack · Software Testing · HTML5 · MySQL · REST APIs · Postman API · SQL · Python (Programming Language) · Back-End Web Development · API Testing · Cascading Style Sheets (CSS) · Git · React.js · Express.js · Software Requirements · Problem Solving · Representational State Transfer (REST)',
        ],
        'url': 'https://globaledu.net.in/',
    },
    {
        'company': 'All India Council for Technical Education (AICTE)',
        'role': 'Full Stack Developer Intern',
        'duration': 'Aug 2022 - Oct 2022',
        'logo': AICTE,
        'points': [
        'Developed the backend for a high-profile national translation project that facilitated the translation of documents into 100 regional languages using python. Also worked on ReactJS and MYSQL to build a robust and efficient platform project started by Prime Minister of India. ONOD(One Nation One Data) .',
        'Implemented performance enhancements and user interface improvements resulting in 30% increase in efficiency and effective user experience.',
        'Revamping government website from .NET framework to ReactJS(Frontend) and from SQL to MySQL, NodeJs Server in the Backend. Worked with a team of more than 20 people directly under CCO of AICTE.',
        'Skills: JavaScript · Web Development · Node.js · MERN Stack · Software Testing · HTML5 · MySQL · REST APIs · Postman API · SQL · Python (Programming Language) · Back-End Web Development · API Testing · Cascading Style Sheets (CSS) · Git · React.js · Express.js · Software Requirements · Problem Solving · Representational State Transfer (REST)',
     ],
        'url': 'https://www.aicte-india.org/',
    },

]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
