import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/experience', label: 'Experience', icon: '💼' },
    { path: '/skills', label: 'Skills', icon: '🛠️' },
    { path: '/education', label: 'Education', icon: '🎓' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>Christian Eieland Ålykkja</h2>
        <p>Software Developer</p>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
