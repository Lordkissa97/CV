export interface Profile {
    name: string;
    title: string;
    contact: {
        email: string;
        phone?: string;
        location?: string;
        website?: string;
        linkedin?: string;
        github?: string;
    };
    summary: string;
    skills: string[];
    experience: Array<{
        company: string;
        position: string;
        startDate: string;
        endDate?: string;
        description: string;
        technologies?: string[];
    }>;
    education: Array<{
        institution: string;
        degree: string;
        startDate: string;
        endDate?: string;
        description?: string;
    }>;
    certifications?: Array<{
        name: string;
        issuer: string;
        date: string;
    }>;
    languages?: Array<{
        language: string;
        proficiency: string;
    }>;
}

export const profile: Profile = {
    name: "",
    title: "",
    contact: {
        email: "",
    },
    summary: "",
    skills: [],
    experience: [],
    education: [],
};