import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/pages/HomePage';
import ExperiencePage from '@/components/pages/ExperiencePage';
import SkillsPage from '@/components/pages/SkillsPage';
import '@/styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<div>Education page coming soon...</div>} />
            <Route path="/projects" element={<div>Projects page coming soon...</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
