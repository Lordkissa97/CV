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
      maxWidth: 900,
      margin: "2rem auto",
      fontFamily: "Inter, Arial, sans-serif",
      padding: "2.5rem 2rem",
      background: "#f8f9fa",
      borderRadius: 16,
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      border: "1px solid #e3e6ea",
    }}
  >
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        borderBottom: "1px solid #e3e6ea",
        paddingBottom: "1.5rem",
        marginBottom: "2rem",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "2.5rem", margin: 0 }}>{cvData.name}</h1>
        <h2
          style={{
            color: "#3a3a3a",
            fontWeight: 500,
            fontSize: "1.3rem",
            margin: "0.5rem 0 0 0",
          }}
        >
          {cvData.title}
        </h2>
        <div style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
          <span style={{ marginRight: "1.2rem" }}>
            <strong>Email:</strong> {cvData.contact.email}
          </span>
          <span style={{ marginRight: "1.2rem" }}>
            <strong>Phone:</strong> {cvData.contact.phone}
          </span>
          <span style={{ marginRight: "1.2rem" }}>
            <strong>Location:</strong> {cvData.contact.location}
          </span>
          <span>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={`https://${cvData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b5" }}
            >
              {cvData.contact.linkedin}
            </a>
          </span>
        </div>
      </div>
    </header>
    <section style={{ marginBottom: "2rem" }}>
      <h3
        style={{ color: "#0077b5", fontSize: "1.2rem", marginBottom: "0.5rem" }}
      >
        Profile
      </h3>
      <p style={{ color: "#333", fontSize: "1.05rem", lineHeight: 1.6 }}>
        {cvData.summary}
      </p>
    </section>
    <section style={{ marginBottom: "2rem" }}>
      <h3
        style={{ color: "#0077b5", fontSize: "1.2rem", marginBottom: "0.5rem" }}
      >
        Skills
      </h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.7rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {cvData.skills.map((skill) => (
          <li
            key={skill}
            style={{
              background: "#e3e6ea",
              color: "#0077b5",
              padding: "0.4rem 1rem",
              borderRadius: 20,
              fontWeight: 500,
              fontSize: "1rem",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
    <section style={{ marginBottom: "2rem" }}>
      <h3
        style={{ color: "#0077b5", fontSize: "1.2rem", marginBottom: "0.5rem" }}
      >
        Experience
      </h3>
      {cvData.experience.map((exp, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "1.2rem",
            background: "#fff",
            borderRadius: 8,
            padding: "1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid #e3e6ea",
          }}
        >
          <strong style={{ fontSize: "1.1rem" }}>{exp.role}</strong> at{" "}
          <em>{exp.company}</em>{" "}
          <span style={{ color: "#888" }}>({exp.period})</span>
          <p style={{ margin: "0.5rem 0 0 0", color: "#444" }}>
            {exp.description}
          </p>
        </div>
      ))}
    </section>
    <section>
      <h3
        style={{ color: "#0077b5", fontSize: "1.2rem", marginBottom: "0.5rem" }}
      >
        Education
      </h3>
      {cvData.education.map((edu, idx) => (
        <div
          key={idx}
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid #e3e6ea",
          }}
        >
          <strong style={{ fontSize: "1.05rem" }}>{edu.degree}</strong>,{" "}
          {edu.institution}{" "}
          <span style={{ color: "#888" }}>({edu.period})</span>
        </div>
      ))}
    </section>
  </div>
);

export default App;
