export interface Profile {
    fullName: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        phone?: string;
        location?: string;
        website?: string;
        linkedIn?: string;
        github?: string;
    };
    skills: string[];
    experience: Array<{
        company: string;
        position: string;
        startDate: string;
        endDate?: string;
        description: string;
        achievements?: string[];
    }>;
    education: Array<{
        institution: string;
        degree: string;
        fieldOfStudy: string;
        startDate: string;
        endDate?: string;
        grade?: string;
    }>;
    certifications?: Array<{
        name: string;
        issuer: string;
        date: string;
    }>;
    languages?: Array<{
        name: string;
        proficiency: string;
    }>;
    interests?: string[];
}