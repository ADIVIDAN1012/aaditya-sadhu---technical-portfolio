
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { askAadityaAI } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm Aaditya's AI Twin. Want to know about the Beacon compiler or Combatlas?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askAadityaAI(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || "Neural sync failed." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 w-[320px] sm:w-[380px] h-[450px] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/20"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#7028e4] flex items-center justify-center">
                  <Bot size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-sm">Aaditya AI</h4>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Neural Link Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                    ? 'bg-[#7028e4] text-white rounded-tr-none' 
                    : 'bg-white/10 text-white/80 border border-white/10 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/10 flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me something technical..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#00f2fe]/50 transition-colors pr-12"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#00f2fe] hover:bg-[#00f2fe]/10 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#7028e4] flex items-center justify-center shadow-lg shadow-cyan-500/20"
      >
        <MessageSquare className="text-black" />
      </motion.button>
    </div>
  );
};

export default ChatBot;
