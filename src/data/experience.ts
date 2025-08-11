export interface Experience {
    company: string;
    position: string;
    startDate: string; // Format: YYYY-MM
    endDate?: string;  // Format: YYYY-MM or undefined if current
    location?: string;
    description?: string;
    responsibilities?: string[];
    technologies?: string[];
}

export const experiences: Experience[] = [
    // Example entry:
    // {
    //   company: "Acme Corp",
    //   position: "Software Engineer",
    //   startDate: "2021-06",
    //   endDate: "2023-04",
    //   location: "New York, NY",
    //   description: "Worked on web applications.",
    //   responsibilities: [
    //     "Developed new features",
    //     "Collaborated with cross-functional teams"
    //   ],
    //   technologies: ["TypeScript", "React", "Node.js"]
    // }
];