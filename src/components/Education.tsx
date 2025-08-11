import React from 'react';

interface EducationItem {
    institution: string;
    degree: string;
    field: string;
    startYear: number;
    endYear?: number;
    description?: string;
}

const educationData: EducationItem[] = [
    {
        institution: 'University of Example',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startYear: 2018,
        endYear: 2022,
        description: 'Focused on software engineering and data structures.',
    },
    // Add more items as needed
];

const Education: React.FC = () => (
    <section>
        <h2>Education</h2>
        <ul>
            {educationData.map((edu, idx) => (
                <li key={idx}>
                    <strong>{edu.degree}</strong> in {edu.field} <br />
                    {edu.institution} ({edu.startYear}
                    {edu.endYear ? ` - ${edu.endYear}` : ''})
                    {edu.description && <div>{edu.description}</div>}
                </li>
            ))}
        </ul>
    </section>
);

export default Education;