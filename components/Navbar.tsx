
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Connect', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-black/60 shadow-lg' : 'bg-white/5'}`}>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#7028e4] flex items-center justify-center font-bold text-black text-sm">
              AS
            </div>
            <span className="font-outfit font-bold text-lg tracking-tight hidden sm:block">Aaditya Sadhu</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-[#00f2fe] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com/ADIVIDAN1012/aaditya-sadhu---technical-portfolio" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github size={18} /></a>
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass rounded-2xl p-6 flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-[#00f2fe]"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
