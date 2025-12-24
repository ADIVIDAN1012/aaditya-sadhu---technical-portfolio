
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { getIcon } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const accentColor = project.color === 'cyan' ? '#00f2fe' : project.color === 'purple' ? '#7028e4' : '#4f46e5';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="glass rounded-3xl p-8 group relative overflow-hidden"
    >
      <div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-20 transition-all group-hover:opacity-40"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
        >
          {getIcon(project.icon, `w-7 h-7 text-white`)}
        </div>

        <h3 className="text-2xl font-outfit font-bold mb-3">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/10 text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {project.github && (
              <a href={project.github} className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="p-2 glass rounded-lg hover:bg-white/10 transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <a 
            href={project.link || project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors"
          >
            <span>Explore</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
