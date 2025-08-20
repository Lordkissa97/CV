import { Profile } from '@/types/Profile';

export const cvData: Profile = {
  fullName: 'Christian Eieland Ålykkja',
  title: 'Software Engineer, Frontend Developer, UX/UI Designer',
  contact: {
    email: 'christian.eieland@hotmail.com',
    phone: '(47) 99395695',
    location: 'Vennesla, Norway',
    linkedIn: 'linkedin.com/in/christian-eieland-alykkja-06b211258',
    github: 'github.com/Lordkissa97',
  },
  summary: `Experienced software engineer with expertise in TypeScript, React, and modern web development.`,
  skills: [
    'TypeScript',
    'React',
    'JavaScript/C#',
    'HTML',
    'CSS',
    'Node.js',
    'Git',
    'UX/UI Design',
    'Vercel',
    'Docker',
    'Figma',
    'SQL',
    'PSQL',
  ],
  experience: [
    {
      company: 'Phonero',
      position: 'Frontend developer: Bachelorproject',
      startDate: 'Jan. 2025',
      endDate: 'Jun. 2025',
      description:
        'Bachelorproject with two groupmates, with focus on migrating a product in a legacy system to a modern customer self-service web application. Experience for this project gave insight into teamwork, analytics, risk analysis, redesigning/designing, and gave real life experiance of project management. Language used: TypeScript, React, GraphQL. Softwares: Figma, GitHub, Microsoft programs for documentation and writing of project.',
    },
    {
      company: 'Norwegian Defence',
      position: 'Security Officer',
      startDate: 'Jan. 2018',
      endDate: 'Jul. 2020',
      description:
        'Worked on various security projects with focus on physical security for defence structures',
    },
    {
      company: 'Apcoa Norway AS',
      position: 'Parking Officer',
      startDate: 'Sep. 2020',
      endDate: 'Present',
      description:
        'Parking officer with focus on drift management and customer service of parking lots in Southern Norway. also involved in planning around new parking lots and infrastructure planning both physical and digital.',
    },
  ],
  education: [
    {
      institution: 'University of Agder',
      degree: 'B.Sc. IT and Information Systems',
      fieldOfStudy: 'IT and Information Systems',
      startDate: 'Aug. 2022',
      endDate: 'Jun. 2025',
    },
  ],
};
