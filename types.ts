
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  link?: string;
  github?: string;
  color: 'cyan' | 'purple' | 'indigo';
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Systems';
  level: number;
}
