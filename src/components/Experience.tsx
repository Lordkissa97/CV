import React from 'react';

type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    description: string;
};

const experiences: ExperienceItem[] = [
    {
        company: 'Example Corp',
        role: 'Software Engineer',
        period: 'Jan 2022 - Present',
        description: 'Developed scalable web applications using React and TypeScript.',
    },
    {
        company: 'Tech Solutions',
        role: 'Frontend Developer',
        period: 'Jun 2020 - Dec 2021',
        description: 'Implemented UI components and optimized performance for client projects.',
    },
];

const Experience: React.FC = () => (
    <section>
        <h2>Experience</h2>
        <ul>
            {experiences.map((exp, idx) => (
                <li key={idx}>
                    <h3>{exp.role} @ {exp.company}</h3>
                    <p><strong>{exp.period}</strong></p>
                    <p>{exp.description}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default Experience;