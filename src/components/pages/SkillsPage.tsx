import React, { useState } from 'react';
import { skills, skillCategories } from '@/data/skills';
import '@/styles/components/SkillsPage.css';

const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getSkillsByCategory = (category: string) => {
    if (category === 'all') return skills;
    return skills.filter((skill) => skill.category === category);
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return '#28a745';
      case 'Advanced':
        return '#17a2b8';
      case 'Intermediate':
        return '#ffc107';
      case 'Beginner':
        return '#6c757d';
      default:
        return '#6c757d';
    }
  };

  const getSkillLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return '95%';
      case 'Advanced':
        return '80%';
      case 'Intermediate':
        return '60%';
      case 'Beginner':
        return '40%';
      default:
        return '40%';
    }
  };

  const categories = Object.keys(skillCategories);
  const filteredSkills = getSkillsByCategory(selectedCategory);

  return (
    <div className="skills-page">
      <header className="page-header">
        <h1>🛠️ Technical Skills</h1>
        <p>Technologies and tools I work with, organized by proficiency level</p>
      </header>

      <div className="skills-filter">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Skills
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className="skill-level" style={{ color: getSkillLevelColor(skill.level) }}>
                {skill.level}
              </span>
            </div>

            <div className="skill-progress">
              <div
                className="skill-progress-bar"
                style={{
                  width: getSkillLevelWidth(skill.level),
                  backgroundColor: getSkillLevelColor(skill.level),
                }}
              ></div>
            </div>

            <p className="skill-category">{skill.category}</p>

            {skill.description && <p className="skill-description">{skill.description}</p>}

            {skill.years && (
              <p className="skill-experience">
                {skill.years} year{skill.years > 1 ? 's' : ''} experience
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <h2>Skill Level Guide</h2>
        <div className="level-guide">
          <div className="level-item">
            <span className="level-indicator expert"></span>
            <strong>Expert:</strong> Can lead projects and mentor others
          </div>
          <div className="level-item">
            <span className="level-indicator advanced"></span>
            <strong>Advanced:</strong> Proficient in complex implementations
          </div>
          <div className="level-item">
            <span className="level-indicator intermediate"></span>
            <strong>Intermediate:</strong> Comfortable with most features
          </div>
          <div className="level-item">
            <span className="level-indicator beginner"></span>
            <strong>Beginner:</strong> Basic understanding and usage
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
