export interface Project {
    id: number;
    name: string;
    image: string;
    resume: string;
    description: string;
    challenges: string;
    lessons: string;
    type: string;
    alt?: string;
    images: string[];
    showGithubRepo: boolean;
    technologies: string[]
    features: string[],
    link: string;
}