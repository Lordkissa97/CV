import React from 'react';
import { cvData } from '@/data/cv-data';
import '@/styles/components/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-hero">
          <h1 className="home-name">{cvData.fullName}</h1>
          <h2 className="home-title">{cvData.title}</h2>
          <p className="home-summary">{cvData.summary}</p>
        </div>

        <div className="home-contact">
          <h3>Contact Information</h3>
          <div className="contact-grid">
            <div className="contact-item">
              <strong>📧 Email:</strong>
              <a href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a>
            </div>
            {cvData.contact.phone && (
              <div className="contact-item">
                <strong>📱 Phone:</strong> {cvData.contact.phone}
              </div>
            )}
            {cvData.contact.location && (
              <div className="contact-item">
                <strong>📍 Location:</strong> {cvData.contact.location}
              </div>
            )}
            {cvData.contact.linkedIn && (
              <div className="contact-item">
                <strong>💼 LinkedIn:</strong>
                <a
                  href={`https://${cvData.contact.linkedIn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            )}
            {cvData.contact.github && (
              <div className="contact-item">
                <strong>🐙 GitHub:</strong>
                <a
                  href={`https://${cvData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Projects
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="home-quick-overview">
        <div className="overview-section">
          <h3>🛠️ Key Skills</h3>
          <div className="skills-preview">
            {cvData.skills.slice(0, 8).map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="overview-section">
          <h3>💼 Recent Experience</h3>
          <div className="experience-preview">
            {cvData.experience.slice(0, 2).map((exp, idx) => (
              <div key={idx} className="experience-card">
                <h4>{exp.position}</h4>
                <p className="company">
                  {exp.company} • {exp.startDate} - {exp.endDate || 'Present'}
                </p>
                <p className="description">{exp.description.substring(0, 120)}...</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overview-section">
          <h3>🎓 Education</h3>
          <div className="education-preview">
            {cvData.education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <h4>{edu.degree}</h4>
                <p>
                  {edu.institution} • {edu.startDate} - {edu.endDate || 'Present'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
