import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => (
    <div style={{ fontFamily: 'sans-serif', margin: '2rem' }}>
        <h1>Chris's CV</h1>
        <section>
            <h2>Profile</h2>
            <p>
                Experienced software developer with expertise in TypeScript, React, and modern web technologies.
            </p>
        </section>
        <section>
            <h2>Skills</h2>
            <ul>
                <li>TypeScript, JavaScript</li>
                <li>React, Redux</li>
                <li>Node.js, Express</li>
                <li>HTML, CSS, SASS</li>
                <li>Git, GitHub</li>
            </ul>
        </section>
        <section>
            <h2>Experience</h2>
            <ul>
                <li>
                    <strong>Software Engineer</strong> - ABC Corp (2021–Present)
                    <br />
                    Developed scalable web applications using React and TypeScript.
                </li>
                <li>
                    <strong>Frontend Developer</strong> - XYZ Ltd (2018–2021)
                    <br />
                    Built responsive user interfaces and collaborated with backend teams.
                </li>
            </ul>
        </section>
        <section>
            <h2>Education</h2>
            <ul>
                <li>BSc Computer Science, University of Somewhere (2014–2018)</li>
            </ul>
        </section>
        <section>
            <h2>Contact</h2>
            <p>Email: chris@example.com</p>
        </section>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);