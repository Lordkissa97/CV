import React, { useState } from 'react';
import { experiences } from '@/data/experience';
import PDFViewer from '@/components/PDFViewer';
import '@/styles/components/ExperiencePage.css';

const ExperiencePage: React.FC = () => {
  const [selectedPDF, setSelectedPDF] = useState<{url: string, title: string} | null>(null);

  const openPDF = (url: string, title: string) => {
    setSelectedPDF({ url, title });
  };

  const closePDF = () => {
    setSelectedPDF(null);
  };

  return (
    <div className="experience-page">
      <header className="page-header">
        <h1>💼 Professional Experience</h1>
        <p>My journey through various roles and the skills I've developed</p>
      </header>

      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="timeline-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h2>{exp.position}</h2>
                <h3>{exp.company}</h3>
                <div className="experience-meta">
                  <span className="period">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                  {exp.location && <span className="location">📍 {exp.location}</span>}
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="experience-section">
                  <h4>Key Responsibilities</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((responsibility, respIdx) => (
                      <li key={respIdx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.technologies && exp.technologies.length > 0 && (
                <div className="experience-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="experience-section">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achIdx) => (
                      <li key={achIdx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.documents && exp.documents.length > 0 && (
                <div className="experience-section">
                  <h4>📄 Documents & Certificates</h4>
                  <div className="documents-grid">
                    {exp.documents.map((doc, docIdx) => (
                      <div key={docIdx} className="document-card">
                        <div className="document-info">
                          <strong>{doc.name}</strong>
                          {doc.description && <p>{doc.description}</p>}
                        </div>
                        <div className="document-actions">
                          <button
                            onClick={() => openPDF(doc.url, doc.name)}
                            className="btn-view"
                          >
                            👁️ View
                          </button>
                          <a
                            href={doc.url}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-download"
                          >
                            📥 Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedPDF && (
        <PDFViewer
          url={selectedPDF.url}
          title={selectedPDF.title}
          onClose={closePDF}
        />
      )}
    </div>
  );
};

export default ExperiencePage;
