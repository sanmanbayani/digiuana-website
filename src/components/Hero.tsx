import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-20 pb-20">
      {/* Huge Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0 opacity-[0.03]">
        <h1 className="font-display text-[15vw] font-bold text-white whitespace-nowrap tracking-tighter">
          DIGIUANA
        </h1>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-600/10 blur-[120px]" />
        
        {/* Futuristic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-900/20 backdrop-blur-md shadow-[0_0_15px_rgba(0,109,91,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-100">
              DIGIUANA • Enterprise Digital Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Engineer your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-glow">digital future.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed"
          >
            We build high-converting websites, execute data-driven SEO strategies, 
            and scale brands to global dominance with precision and expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-500 transition-all shadow-[0_0_20px_rgba(0,109,91,0.4)] hover:shadow-[0_0_30px_rgba(0,109,91,0.6)] border border-brand-500/50">
              Start Your Project
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 text-white font-medium rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors backdrop-blur-sm">
              View Case Studies
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Bioluminescent Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 w-full h-[500px] flex items-center justify-center perspective-[1000px]"
        >
          {/* Glowing Aura */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-80 h-80 bg-brand-500/20 rounded-full blur-[100px]"
          />
          
          {/* 3D Core Structure */}
          <motion.div
            animate={{ 
              rotateX: [0, 360],
              rotateY: [0, 360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="relative w-64 h-64"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Inner Core */}
            <div className="absolute inset-0 m-auto w-16 h-16 bg-brand-300 rounded-full shadow-[0_0_60px_rgba(45,212,191,1)] animate-pulse" style={{ transform: 'translateZ(0px)' }} />
            
            {/* Orbital Rings */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border border-brand-400/30 rounded-full"
                style={{
                  transform: `rotateX(${i * 45}deg) rotateY(${i * 45}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Bioluminescent Nodes on Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-200 rounded-full shadow-[0_0_20px_rgba(45,212,191,1)]" style={{ transform: 'rotateX(90deg)' }} />
                  {i % 2 === 0 && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.8)]" style={{ transform: 'rotateX(90deg)' }} />
                  )}
                </motion.div>
              </motion.div>
            ))}

            {/* Floating Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                animate={{
                  y: [0, Math.random() * -60 - 20, 0],
                  x: [0, (i % 2 === 0 ? Math.random() * 40 + 10 : Math.random() * -40 - 10), 0],
                  scale: [1, Math.random() * 1.5 + 0.5, 1],
                  opacity: [0.1, 0.8, 0.1]
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute w-1.5 h-1.5 bg-brand-100 rounded-full shadow-[0_0_12px_rgba(45,212,191,0.9)]"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translateZ(${(Math.random() - 0.5) * 200}px)`
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
