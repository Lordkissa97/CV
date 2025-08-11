export interface Experience {
    company: string;
    position: string;
    startDate: string; // ISO format: YYYY-MM-DD
    endDate?: string;  // ISO format or undefined if current
    location?: string;
    description?: string;
    responsibilities?: string[];
    technologies?: string[];
}