export interface EducationEntry {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  description?: string;
  grade?: string;
  coursework?: string[];
  achievements?: string[];
}

export const education: EducationEntry[] = [
  {
    institution: 'University of Agder',
    degree: 'B.Sc. IT and Information Systems',
    fieldOfStudy: 'IT and Information Systems',
    startDate: 'Aug. 2022',
    endDate: 'Jun. 2025',
    description:
      'Comprehensive program covering software development, system design, database management, and project management.',
    coursework: [
      'Software Engineering',
      'Database Systems',
      'Web Development',
      'Project Management',
      'System Architecture',
      'User Experience Design',
      'Information Security',
      'Agile Development Methods',
    ],
    achievements: [
      'Bachelor project: Frontend development for Phonero',
      'Focus on modern web technologies and frameworks',
      'Strong emphasis on practical project work',
    ],
  },
];
