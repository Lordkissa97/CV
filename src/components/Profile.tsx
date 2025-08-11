import React from 'react';

interface ProfileProps {
    name: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        phone?: string;
        linkedin?: string;
        github?: string;
    };
    experience: Array<{
        company: string;
        role: string;
        duration: string;
        description: string;
    }>;
    education: Array<{
        institution: string;
        degree: string;
        year: string;
    }>;
    skills: string[];
}

const Profile: React.FC<ProfileProps> = ({
    name,
    title,
    summary,
    contact,
    experience,
    education,
    skills,
}) => (
    <div className="cv-profile">
        <header>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                <li>Email: {contact.email}</li>
                {contact.phone && <li>Phone: {contact.phone}</li>}
                {contact.linkedin && <li>LinkedIn: {contact.linkedin}</li>}
                {contact.github && <li>GitHub: {contact.github}</li>}
            </ul>
        </header>
        <section>
            <h3>Experience</h3>
            <ul>
                {experience.map((exp, idx) => (
                    <li key={idx}>
                        <strong>{exp.company}</strong> - {exp.role} ({exp.duration})
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </section>
        <section>
            <h3>Education</h3>
            <ul>
                {education.map((edu, idx) => (
                    <li key={idx}>
                        <strong>{edu.institution}</strong> - {edu.degree} ({edu.year})
                    </li>
                ))}
            </ul>
        </section>
        <section>
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                ))}
            </ul>
        </section>
    </div>
);

export default Profile;