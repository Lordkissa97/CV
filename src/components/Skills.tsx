import React from 'react';

type Skill = {
    name: string;
    level: string;
};

const skills: Skill[] = [
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    // Add more skills as needed
];

const Skills: React.FC = () => (
    <section>
        <h2>Skills</h2>
        <ul>
            {skills.map((skill) => (
                <li key={skill.name}>
                    <strong>{skill.name}</strong>: {skill.level}
                </li>
            ))}
        </ul>
    </section>
);

export default Skills;