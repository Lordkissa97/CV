import React from 'react';

const Header: React.FC = () => (
    <header style={{
        padding: '2rem',
        background: '#f5f5f5',
        textAlign: 'center',
        borderBottom: '1px solid #ddd'
    }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>Chris Doe</h1>
        <p style={{ margin: '0.5rem 0', fontSize: '1.2rem', color: '#555' }}>
            Software Engineer | Typescript & React Specialist
        </p>
        <p style={{ margin: '0.5rem 0', fontSize: '1rem', color: '#777' }}>
            chris.doe@email.com | +1 (555) 123-4567 | LinkedIn: linkedin.com/in/chrisdoe
        </p>
    </header>
);

export default Header;