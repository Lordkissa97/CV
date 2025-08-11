export interface Skill {
    id: string;
    name: string;
    proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    category?: string;
    description?: string;
}