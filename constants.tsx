
import React from 'react';
import { Project, Skill } from './types';
import { Cpu, Shield, Zap, Code, Terminal, Brain, Database, Globe } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'beacon',
    title: 'Beacon',
    description: 'A custom, human-centric programming language designed for clarity and systems-level efficiency. Built with a Python-based parser and a robust C runtime for bare-metal performance.',
    tags: ['C', 'Python', 'Systems', 'Compiler'],
    icon: 'Terminal',
    github: 'https://github.com/ADIVIDAN1012/Beacon-Code-Engine-BCE',
    color: 'cyan'
  },
  {
    id: 'combatlas',
    title: 'Combatlas',
    description: 'A comprehensive AI-driven defense encyclopedia. Features real-time Wikipedia scraping integrated with Llama 3 for strategic military insights and historical defense analysis.',
    tags: ['AI', 'Llama 3', 'Python', 'NLP'],
    icon: 'Shield',
    github: 'https://github.com/ADIVIDAN1012/GDI-Combatlas',
    color: 'purple'
  },
  {
    id: 'matoolox',
    title: 'Matoolox',
    description: 'A comprehensive mathematical toolbox (MA-TOOL-OX) for computational engineering. Features advanced scientific calculation modules and an academic submission pipeline for generating physical project documentation.',
    tags: ['Mathematics', 'Computational', 'React', 'Documentation'],
    icon: 'Brain',
    github: 'https://github.com/ADIVIDAN1012/matoolox',
    color: 'indigo'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Languages', level: 95 },
  { name: 'C / C++', category: 'Languages', level: 85 },
  { name: 'TypeScript', category: 'Languages', level: 90 },
  { name: 'React', category: 'Frameworks', level: 92 },
  { name: 'Next.js', category: 'Frameworks', level: 88 },
  { name: 'PyTorch', category: 'Tools', level: 80 },
  { name: 'Docker', category: 'Tools', level: 75 },
  { name: 'Linux Kernel', category: 'Systems', level: 70 },
  { name: 'LLM Orchestration', category: 'Systems', level: 85 }
];

export const getIcon = (name: string, className?: string) => {
  switch (name) {
    case 'Cpu': return <Cpu className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Database': return <Database className={className} />;
    case 'Globe': return <Globe className={className} />;
    default: return <Code className={className} />;
  }
};
