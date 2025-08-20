export interface Document {
  name: string;
  type: 'pdf' | 'image' | 'link';
  url: string;
  description?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  achievements?: string[];
  documents?: Document[];
}

export const experiences: Experience[] = [
  {
    company: 'Phonero',
    position: 'Frontend Developer: Bachelor Project',
    startDate: 'Jan. 2025',
    endDate: 'Jun. 2025',
    location: 'Norway, Kristiansand',
    description:
      'Bachelor project with two other team members, focusing on migrating a product from a legacy system to a modern customer self-service web application.',
    responsibilities: [
      'Frontend development using TypeScript and React',
      'Designed user interfaces using Figma and Phonero s UX library',
      'Managed project documentation and risk analysis',
    ],
    technologies: ['TypeScript', 'React', 'GraphQL', 'Figma', 'GitHub'],
    achievements: [
      'Successfully migrated and redesigned a legacy product to a modern customer self-service web application',
      'Gained real-life project management experience',
      'Improved teamwork and analytical skills',
      'Enhanced problem-solving abilities',
      'Gained experience in user-centered design principles',
    ],
    documents: [
      {
        name: 'Bachelor Project Report',
        type: 'pdf',
        url: '/documents/bachelor-project-phonero.pdf',
        description: 'Detailed report of the legacy system migration project'
      },
      {
        name: 'Project Presentation',
        type: 'pdf',
        url: '/documents/phonero-presentation.pdf',
        description: 'Final presentation slides for the project'
      },
      {
        name: 'Work Attestation',
        type: 'pdf',
        url: '/documents/phonero-work-attestation.pdf',
        description: 'Official work attestation from Phonero'
      }
    ]
  },
  {
    company: 'Norwegian Defence',
    position: 'Security Officer',
    startDate: 'Jan. 2018',
    endDate: 'Jul. 2020',
    location: 'Norway',
    description:
      'Worked on various security projects with focus on physical security for defence structures.',
    responsibilities: [
      'Conducted security assessments for defence facilities',
      'Implemented physical security measures',
      'Collaborated with security teams on various projects',
      'Maintained security protocols and procedures',
    ],
    achievements: [
      'Successfully completed multiple security projects',
      'Developed strong attention to detail and discipline',
    ],
    documents: [
      {
        name: 'Service Certificate',
        type: 'pdf',
        url: '/documents/norwegian-defence-certificate.pdf',
        description: 'Official service certificate from Norwegian Defence'
      }
    ]
  },
  {
    company: 'Apcoa Norway AS',
    position: 'Parking Officer',
    startDate: 'Sep. 2020',
    endDate: 'Present',
    location: 'Southern Norway',
    description:
      'Parking officer with focus on drift management and customer service of parking lots in Southern Norway.',
    responsibilities: [
      'Manage daily operations of parking facilities',
      'Provide excellent customer service to clients',
      'Plan and coordinate new parking lot implementations',
      'Oversee both physical and digital infrastructure planning',
    ],
    achievements: [
      'Improved customer satisfaction through better service delivery',
      'Successfully planned and implemented new parking solutions',
    ],
  },
];
