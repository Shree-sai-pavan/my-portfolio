export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  metrics?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'academic' | 'internship' | 'certification';
}