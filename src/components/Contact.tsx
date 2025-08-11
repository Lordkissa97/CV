import React from 'react';

const Contact: React.FC = () => {
    return (
        <section>
            <h2>Contact Information</h2>
            <ul>
                <li><strong>Name:</strong> Chris</li>
                <li><strong>Email:</strong> chris@example.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Location:</strong> City, Country</li>
                <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/chris" target="_blank" rel="noopener noreferrer">linkedin.com/in/chris</a></li>
            </ul>
        </section>
    );
};

export default Contact;