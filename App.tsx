
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Rocket, Code2, ShieldAlert, Cpu, BookOpen } from 'lucide-react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ChatBot from './components/ChatBot';
import { PROJECTS, SKILLS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-[#7028e4]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-[#00f2fe]/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/[0.02] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-white/[0.02] rounded-full"></div>
      </div>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-6xl w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/5 text-[#00f2fe] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                6th-Semester Integrated Systems Review: 2024-2025
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-outfit font-extrabold mb-8 tracking-tighter leading-tight">
                Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#7028e4]">Computing Architecture</span> & Strategic AI.
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed font-inter">
                A formal synthesis of low-level systems engineering, heuristic intelligence, and mathematical computational suites developed under the MPIT technical workspace.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all flex items-center space-x-3 group"
                >
                  <BookOpen size={18} />
                  <span>Review Analysis</span>
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all border border-white/20"
                >
                  Academic Collaboration
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-2">Scroll to analyze</span>
            <ChevronDown className="text-white/20 animate-bounce" />
          </motion.div>
        </section>

        {/* Featured Projects Grid */}
        <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Project Taxonomy</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#7028e4] rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section id="expertise" className="py-24 px-4 bg-white/[0.01] border-y border-white/[0.05]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">Technical Arsenal</h2>
              <p className="text-white/50 mb-10 leading-relaxed text-lg">
                Comprehensive mastery across the full computational stack. Bridging the gap between hardware-level efficiency and strategic informatics.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl border-l-4 border-l-[#00f2fe]">
                  <Code2 className="text-[#00f2fe] mb-4" />
                  <h4 className="font-bold mb-2">Systems Level</h4>
                  <p className="text-xs text-white/40">Compilers, OS kernels, and performance-critical runtime development.</p>
                </div>
                <div className="glass p-6 rounded-2xl border-l-4 border-l-[#7028e4]">
                  <ShieldAlert className="text-[#7028e4] mb-4" />
                  <h4 className="font-bold mb-2">Defense AI</h4>
                  <p className="text-xs text-white/40">Strategic NLP applications and heuristic knowledge management systems.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 glass rounded-xl border border-white/10 hover:border-[#00f2fe]/50 transition-all cursor-default group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-white/80 group-hover:text-white">{skill.name}</span>
                    <span className="text-[10px] text-white/20 font-bold px-2 py-0.5 rounded bg-white/5">{skill.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center glass rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#7028e4]/10 rounded-full blur-[100px]"></div>

            <h2 className="text-4xl md:text-6xl font-outfit font-bold mb-8">Inquiry & Dialogue</h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Open to academic discourse, systems-level research opportunities, or architectural consultation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:aadityasadhu50@gmail.com" className="px-8 py-4 bg-[#7028e4] text-white font-bold rounded-full flex items-center space-x-3 hover:scale-105 transition-transform">
                <Mail size={20} />
                <span>Academic Inquiry</span>
              </a>
              <a href="https://www.linkedin.com/in/aaditya-sadhu-33b33b2a6/" className="px-8 py-4 glass text-white font-bold rounded-full flex items-center space-x-3 hover:bg-white/10 transition-all">
                <Linkedin size={20} />
                <span>Professional Profile</span>
              </a>
              <a href="https://github.com/ADIVIDAN1012/aaditya-sadhu---technical-portfolio" className="px-8 py-4 glass text-white font-bold rounded-full flex items-center space-x-3 hover:bg-white/10 transition-all">
                <Github size={20} />
                <span>Source Repositories</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs font-bold tracking-[0.2em] uppercase">
        <p>&copy; {new Date().getFullYear()} Aaditya Sadhu. Technical Portfolio | MPIT Analysis.</p>
        <p className="mt-2 text-[10px] opacity-50">Synthesized with React & Gemini Generative Models</p>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;
