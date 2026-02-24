import { motion, AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Portfolio from './components/Portfolio';
import GrowthEngine from './components/GrowthEngine';

export default function App() {
  return (
    <div className="relative bg-slate-900 text-slate-300 selection:bg-brand-500/30 selection:text-brand-100">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20 transition-all duration-300">
        <div className="px-6 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center shadow-[0_0_10px_rgba(0,109,91,0.5)]">
                <span className="text-white font-bold text-xl leading-none">D</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">DIGIUANA</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#work" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</a>
              <a href="#framework" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Framework</a>
              <button className="px-5 py-2 text-sm font-medium text-white bg-brand-600 rounded-full hover:bg-brand-500 transition-all shadow-[0_0_15px_rgba(0,109,91,0.3)] hover:shadow-[0_0_25px_rgba(0,109,91,0.5)]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          
          <div className="relative z-10 bg-slate-900">
            <div id="services">
              <BentoGrid />
            </div>
            <div id="work">
              <Portfolio />
            </div>
            <div id="framework">
              <GrowthEngine />
            </div>
            
            <footer className="py-24 px-4 border-t border-slate-800 text-center bg-slate-950">
              <div className="max-w-7xl mx-auto">
                <h2 className="font-display text-4xl md:text-8xl font-black mb-8 text-white/5">
                  DIGIUANA
                </h2>
                <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-500 mb-12">
                  <a href="#" className="hover:text-brand-400 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">Behance</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-brand-400 transition-colors">Twitter</a>
                </div>
                <p className="text-slate-500 text-xs">
                  © 2026 DIGIUANA. ALL RIGHTS RESERVED. DIGITAL MARKETING AGENCY.
                </p>
              </div>
            </footer>
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
