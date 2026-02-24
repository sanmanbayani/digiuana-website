import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "https://picsum.photos/seed/fintech/800/600",
  },
  {
    title: "E-Commerce Platform",
    category: "Conversion Optimization",
    image: "https://picsum.photos/seed/ecommerce/800/600",
  },
  {
    title: "SaaS Landing Page",
    category: "Web Development",
    image: "https://picsum.photos/seed/saas/800/600",
  },
  {
    title: "Global Brand Identity",
    category: "Brand Strategy",
    image: "https://picsum.photos/seed/brand/800/600",
  },
  {
    title: "B2B Marketing Campaign",
    category: "SEO & Content",
    image: "https://picsum.photos/seed/b2b/800/600",
  },
];

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-900">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-12 mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-glow">Work</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg font-sans">
            Explore our recent projects where we've helped brands scale through strategic design and engineering.
          </p>
        </motion.div>

        <motion.div style={{ x }} className="flex gap-8 px-12 items-center">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group relative flex-shrink-0 w-[85vw] md:w-[600px] rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>
              
              <div className="p-8 flex justify-between items-start bg-slate-900/80 backdrop-blur-md border-t border-slate-700/50">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-2 block font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-500 group-hover:shadow-[0_0_20px_rgba(0,109,91,0.5)] transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
