import React from 'react';

const Footer: React.FC = () => (
  <footer
    style={{
      padding: '1rem',
      textAlign: 'center',
      background: '#f5f5f5',
      color: '#333',
      fontSize: '0.9rem',
    }}
  >
    © {new Date().getFullYear()} Chris | Curriculum Vitae
  </footer>
);

export default Footer;
