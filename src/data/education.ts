export interface EducationEntry {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startYear: number;
    endYear?: number;
    description?: string;
}

export const education: EducationEntry[] = [
    // Example entry:
    // {
    //   institution: "University Name",
    //   degree: "Bachelor of Science",
    //   fieldOfStudy: "Computer Science",
    //   startYear: 2018,
    //   endYear: 2022,
    //   description: "Relevant coursework and achievements."
    // }
];