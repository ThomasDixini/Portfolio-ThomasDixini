export interface Project {
    id: number;
    name: string;
    image: string;
    description: string;
    resume: string;
    type: string;
    alt?: string;
    technologies: string[]
}