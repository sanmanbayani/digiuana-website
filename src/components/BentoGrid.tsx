import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { Box, Search, Video, Palette, Globe, Zap, ArrowRight, Type, MousePointer2 } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with modern frameworks.",
    icon: Box,
    size: "col-span-1 md:col-span-2 row-span-2",
    bgColor: "bg-brand-900/20",
    iconColor: "text-brand-400",
  },
  {
    title: "SEO Strategy",
    description: "Data-driven optimization to dominate search rankings.",
    icon: Search,
    size: "col-span-1 row-span-1",
    bgColor: "bg-slate-800/50",
    iconColor: "text-slate-300",
  },
  {
    title: "Content Marketing",
    description: "Compelling narratives that convert visitors into loyal customers.",
    icon: Video,
    size: "col-span-1 row-span-2",
    bgColor: "bg-slate-800/50",
    iconColor: "text-slate-300",
  },
  {
    title: "Brand Identity",
    description: "Sophisticated visual systems that communicate trust.",
    icon: Palette,
    size: "col-span-1 row-span-1",
    bgColor: "bg-slate-800/50",
    iconColor: "text-slate-300",
  },
  {
    title: "Global Campaigns",
    description: "Targeted advertising strategies for international market penetration.",
    icon: Globe,
    size: "col-span-1 row-span-1",
    bgColor: "bg-brand-600/20",
    iconColor: "text-brand-400",
    textColor: "text-white",
    descColor: "text-brand-100/70",
  },
  {
    title: "Conversion Optimization",
    description: "A/B testing and UX refinements to maximize ROI.",
    icon: Zap,
    size: "col-span-1 row-span-1",
    bgColor: "bg-slate-800/50",
    iconColor: "text-slate-300",
  },
];

function InteractiveShowcaseBox() {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const slides = [
    {
      id: "typography",
      title: "Dynamic Typography",
      icon: Type,
      cursorText: "EXPLORE",
      cursorClass: "bg-brand-400 mix-blend-difference text-slate-900 rounded-full",
      content: (
        <div className="space-y-6 flex-grow">
          <motion.div animate={{ x: isHovered ? 10 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <p className="font-sans text-sm text-slate-400 mb-1">Inter (Sans)</p>
            <p className="font-sans text-xl text-slate-200 font-light">Clean, readable, and versatile.</p>
          </motion.div>
          
          <motion.div animate={{ x: isHovered ? 20 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.05 }}>
            <p className="font-sans text-sm text-slate-400 mb-1">Outfit (Display)</p>
            <p className="font-display text-3xl text-white font-bold tracking-tight">Bold & Modern</p>
          </motion.div>
          
          <motion.div animate={{ x: isHovered ? 30 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}>
            <p className="font-sans text-sm text-slate-400 mb-1">JetBrains (Mono)</p>
            <p className="font-mono text-lg text-brand-400 tracking-widest uppercase">Technical Precision</p>
          </motion.div>
        </div>
      )
    },
    {
      id: "animation",
      title: "Fluid Motion",
      icon: MousePointer2,
      cursorText: "DRAG",
      cursorClass: "bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl",
      content: (
        <div className="space-y-6 flex-grow flex flex-col justify-center items-center">
          <motion.div 
            animate={{ 
              rotate: isHovered ? 180 : 0,
              scale: isHovered ? 1.2 : 1,
              borderRadius: isHovered ? "50%" : "20%"
            }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-24 h-24 bg-gradient-to-tr from-brand-600 to-brand-400 shadow-[0_0_30px_rgba(0,109,91,0.5)]"
          />
          <p className="font-display text-xl text-center text-white mt-8">Physics-based interactions</p>
        </div>
      )
    },
    {
      id: "colors",
      title: "Vibrant Palette",
      icon: Palette,
      cursorText: "VIEW",
      cursorClass: "bg-transparent border-2 border-brand-400 text-brand-400 rounded-full",
      content: (
        <div className="space-y-4 flex-grow flex flex-col justify-center">
          {[
            { color: "bg-brand-400", name: "Primary", hex: "#26a69a" },
            { color: "bg-brand-600", name: "Brand", hex: "#006D5B" },
            { color: "bg-brand-900", name: "Dark", hex: "#001a15" }
          ].map((c, i) => (
            <motion.div 
              key={c.name}
              animate={{ x: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0.5 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className={`w-12 h-12 rounded-full ${c.color} shadow-lg`} />
              <div>
                <p className="font-display font-bold text-white">{c.name}</p>
                <p className="font-mono text-sm text-slate-400">{c.hex}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  const currentSlide = slides[activeSlide];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="col-span-1 md:col-span-2 row-span-2"
    >
      <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="group relative h-full rounded-3xl p-8 flex flex-col justify-between border border-brand-500/30 bg-slate-900/80 backdrop-blur-sm overflow-hidden cursor-none hover:shadow-[0_0_40px_rgba(0,109,91,0.2)] transition-all duration-500"
      >
        {/* Custom Cursor */}
        <motion.div 
          className={`absolute top-0 left-0 w-32 h-32 pointer-events-none z-50 flex items-center justify-center font-bold text-sm tracking-widest transition-all duration-300 ${currentSlide.cursorClass}`}
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
        >
          {currentSlide.cursorText}
        </motion.div>
        
        {/* Content */}
        <div className="relative z-10 pointer-events-none h-full flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-900 border border-brand-500/30 shadow-sm text-brand-400">
              <currentSlide.icon className="w-6 h-6" />
            </div>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === activeSlide ? 'bg-brand-400' : 'bg-slate-700'}`} />
              ))}
            </div>
          </div>
          
          <h3 className="text-3xl font-display font-bold mb-6 text-white">
            {currentSlide.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-glow">{currentSlide.title.split(' ')[1]}</span>
          </h3>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-grow flex flex-col"
            >
              {currentSlide.content}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center text-sm font-semibold mt-8 text-brand-400">
            Click to slide
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Background Animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent pointer-events-none"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative z-10 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
          Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-glow">Solutions</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          An integrated approach to digital growth, combining technical excellence with strategic marketing.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`${service.size}`}
          >
            <div className={`group h-full rounded-3xl p-8 flex flex-col justify-between border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:border-brand-500/30 hover:shadow-[0_0_30px_rgba(0,109,91,0.15)] ${service.bgColor}`}>
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-slate-900 border border-slate-700/50 shadow-sm ${service.iconColor}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-2xl font-display font-bold mb-3 ${service.textColor || 'text-white'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.descColor || 'text-slate-400'}`}>
                  {service.description}
                </p>
              </div>

              <div className={`flex items-center text-sm font-semibold mt-8 ${service.textColor || 'text-brand-400'}`}>
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Interactive Showcase Box */}
        <InteractiveShowcaseBox />
      </div>
    </section>
  );
}
