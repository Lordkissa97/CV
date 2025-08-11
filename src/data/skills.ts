export interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    category?: string;
    description?: string;
}

export const skills: Skill[] = [
    {
        name: 'TypeScript',
        level: 'Expert',
        category: 'Programming Language',
        description: 'Strong experience building scalable applications with TypeScript.',
    },
    {
        name: 'React',
        level: 'Advanced',
        category: 'Frontend Framework',
        description: 'Developed multiple production-grade React applications.',
    },
    {
        name: 'Node.js',
        level: 'Advanced',
        category: 'Backend',
        description: 'Built REST APIs and backend services using Node.js.',
    },
    // Add more skills as needed
];