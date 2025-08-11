import React from "react";

const cvData = {
  name: "Chris Example",
  title: "Software Engineer",
  contact: {
    email: "chris@example.com",
    phone: "+1 234 567 8901",
    location: "City, Country",
    linkedin: "linkedin.com/in/chrisexample",
  },
  summary: `Experienced software engineer with expertise in TypeScript, React, and modern web development.`,
  skills: [
    "TypeScript",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
  ],
  experience: [
    {
      company: "Tech Corp",
      role: "Senior Developer",
      period: "2021 - Present",
      description:
        "Lead development of scalable web applications using React and TypeScript.",
    },
    {
      company: "Web Solutions",
      role: "Frontend Developer",
      period: "2018 - 2021",
      description:
        "Built responsive user interfaces and collaborated with backend teams.",
    },
  ],
  education: [
    {
      institution: "University of Example",
      degree: "B.Sc. Computer Science",
      period: "2014 - 2018",
    },
  ],
};

const App: React.FC = () => (
  <div
    style={{
      maxWidth: 800,
      margin: "2rem auto",
      fontFamily: "Arial, sans-serif",
      padding: "2rem",
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    }}
  >
    <header>
      <h1>{cvData.name}</h1>
      <h2 style={{ color: "#555", fontWeight: 400 }}>{cvData.title}</h2>
      <div style={{ marginBottom: "1rem", fontSize: "0.95rem", color: "#333" }}>
        <span>{cvData.contact.email} | </span>
        <span>{cvData.contact.phone} | </span>
        <span>{cvData.contact.location} | </span>
        <span>
          <a
            href={`https://${cvData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cvData.contact.linkedin}
          </a>
        </span>
      </div>
    </header>
    <section>
      <h3>Profile</h3>
      <p>{cvData.summary}</p>
    </section>
    <section>
      <h3>Skills</h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {cvData.skills.map((skill) => (
          <li
            key={skill}
            style={{
              background: "#eee",
              padding: "0.3rem 0.7rem",
              borderRadius: 4,
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h3>Experience</h3>
      {cvData.experience.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: "1rem" }}>
          <strong>{exp.role}</strong> at <em>{exp.company}</em>{" "}
          <span style={{ color: "#888" }}>({exp.period})</span>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
    <section>
      <h3>Education</h3>
      {cvData.education.map((edu, idx) => (
        <div key={idx}>
          <strong>{edu.degree}</strong>, {edu.institution}{" "}
          <span style={{ color: "#888" }}>({edu.period})</span>
        </div>
      ))}
    </section>
  </div>
);

export default App;
