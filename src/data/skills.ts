export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: string;
  description?: string;
  years?: number;
}

export const skillCategories = {
  'Programming Languages': 'languages',
  'Frontend Technologies': 'frontend',
  'Backend & Tools': 'backend',
  'Design & UX': 'design',
  'Other Technologies': 'other',
};

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'TypeScript',
    level: 'Beginner',
    category: 'Programming Languages',
    description: 'Strong experience building scalable applications with TypeScript.',
    years: -1,
  },
  {
    name: 'JavaScript',
    level: 'Beginner',
    category: 'Programming Languages',
    description: 'Extensive experience with modern JavaScript (ES6+).',
    years: 1,
  },
  {
    name: 'C#',
    level: 'Beginner',
    category: 'Programming Languages',
    description: 'Experience with C# for backend development.',
    years: -1,
  },
  {
    name: 'SQL',
    level: 'Beginner',
    category: 'Programming Languages',
    description: 'Database querying and management with SQL.',
    years: 2,
  },
  {
    name: 'PSQL',
    level: 'Beginner',
    category: 'Programming Languages',
    description: 'PostgreSQL database administration and querying.',
    years: -1,
  },

  // Frontend Technologies
  {
    name: 'React',
    level: 'Beginner',
    category: 'Frontend Technologies',
    description: 'Building complex user interfaces with React hooks and context.',
    years: -1,
  },
  {
    name: 'PHP',
    level: 'Beginner',
    category: 'Frontend Technologies',
    description: 'Building user interfaces with PHP.',
    years: -1,
  },
  {
    name: 'HTML',
    level: 'Beginner',
    category: 'Frontend Technologies',
    description: 'Semantic HTML5 and accessibility best practices.',
    years: 3,
  },
  {
    name: 'CSS',
    level: 'Beginner',
    category: 'Frontend Technologies',
    description: 'Modern CSS including Flexbox, Grid, and responsive design.',
    years: 3,
  },
  {
    name: 'GraphQL',
    level: 'Beginner',
    category: 'Frontend Technologies',
    description: 'API integration and data fetching with GraphQL.',
    years: -1,
  },

  // Backend & Tools
  {
    name: 'Node.js',
    level: 'Beginner',
    category: 'Backend & Tools',
    description: 'Server-side JavaScript development.',
    years: -1,
  },
  {
    name: 'Git',
    level: 'Intermediate',
    category: 'Backend & Tools',
    description: 'Version control and collaborative development.',
    years: 3,
  },
  {
    name: 'Docker',
    level: 'Beginner',
    category: 'Backend & Tools',
    description: 'Containerization and deployment.',
    years: 2,
  },
  {
    name: 'Vercel',
    level: 'Beginner',
    category: 'Backend & Tools',
    description: 'Frontend deployment and hosting.',
    years: -1,
  },

  // Design & UX
  {
    name: 'UX/UI Design',
    level: 'Intermediate',
    category: 'Design & UX',
    description: 'User experience design and interface development.',
    years: 3,
  },
  {
    name: 'Figma',
    level: 'Intermediate',
    category: 'Design & UX',
    description: 'Design tools and prototyping.',
    years: 3,
  },
];
