export interface ContactInfo {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    linkedIn?: string;
    github?: string;
}

export const contact: ContactInfo = {
    name: "Your Name",
    email: "your.email@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    linkedIn: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
};