import { motion, useScroll, useTransform, useVelocity, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function GrowthEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const wobble = useTransform(smoothVelocity, [-0.5, 0.5], [-25, 25]);

  // Smooth growth animations synchronized with scroll
  const treeGrowth = useTransform(smoothProgress, [0.2, 0.6], [0, 1]);
  const leavesGrowth = useTransform(smoothProgress, [0.5, 0.75], [0, 1]);
  const seedOpacity = useTransform(smoothProgress, [0.2, 0.3], [1, 0]);
  
  // Digiuana text glow animation
  const textGlowOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
  const textScale = useTransform(smoothProgress, [0.75, 0.9], [0.9, 1]);

  const leaves = [
    // Branch 1
    { cx: 80, cy: 180, r: 16 },
    { cx: 60, cy: 190, r: 12 },
    { cx: 90, cy: 160, r: 10 },
    { cx: 140, cy: 250, r: 10 },
    { cx: 70, cy: 170, r: 14 },
    { cx: 100, cy: 190, r: 12 },
    // Branch 2
    { cx: 320, cy: 120, r: 18 },
    { cx: 340, cy: 130, r: 14 },
    { cx: 310, cy: 100, r: 12 },
    { cx: 260, cy: 190, r: 12 },
    { cx: 330, cy: 110, r: 16 },
    { cx: 290, cy: 140, r: 14 },
    // Branch 3
    { cx: 110, cy: 80, r: 16 },
    { cx: 90, cy: 90, r: 12 },
    { cx: 120, cy: 60, r: 10 },
    { cx: 150, cy: 140, r: 10 },
    { cx: 100, cy: 70, r: 14 },
    { cx: 130, cy: 90, r: 12 },
    // Branch 4
    { cx: 280, cy: 50, r: 16 },
    { cx: 300, cy: 60, r: 12 },
    { cx: 270, cy: 30, r: 10 },
    { cx: 240, cy: 110, r: 10 },
    { cx: 290, cy: 40, r: 14 },
    { cx: 260, cy: 70, r: 12 },
    // Branch 5
    { cx: 200, cy: 20, r: 22 },
    { cx: 180, cy: 30, r: 14 },
    { cx: 220, cy: 30, r: 14 },
    { cx: 190, cy: 10, r: 18 },
    { cx: 210, cy: 10, r: 18 },
    { cx: 200, cy: 40, r: 16 },
  ];

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-slate-900">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Glowing DIGIUANA Text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          style={{ opacity: textGlowOpacity, scale: textScale }}
        >
          <h2 className="font-display text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-brand-400/20 to-brand-600/5 tracking-tighter" style={{ textShadow: '0 0 80px rgba(0, 109, 91, 0.4)' }}>
            DIGIUANA
          </h2>
        </motion.div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* Text Content */}
          <div className="h-32 relative w-full flex justify-center items-center text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Growing your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-glow">digital empire.</span>
            </h2>
          </div>

          {/* Animation Container */}
          <div className="relative w-full max-w-md aspect-square flex items-end justify-center">
            
            {/* The Ground */}
            <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />
            <div className="absolute bottom-0 w-32 h-8 bg-brand-900/50 blur-xl rounded-full" />

            {/* Seed */}
            <motion.div 
              style={{ opacity: seedOpacity }}
              className="absolute bottom-0 w-6 h-4 bg-brand-500 rounded-full shadow-[0_0_15px_rgba(0,109,91,0.8)]"
            />

            {/* Tree SVG */}
            <svg viewBox="0 0 400 400" className="absolute bottom-0 w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(0,109,91,0.4)]">
              
              {/* Trunk */}
              <motion.path 
                d="M 200 400 C 220 300, 180 200, 200 150" 
                fill="none" 
                stroke="url(#treeGradient)" 
                strokeWidth="14" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: treeGrowth }}
              />
              {/* Branch 1 (Left) */}
              <motion.path 
                d="M 206 320 C 160 320, 120 260, 80 180" 
                fill="none" 
                stroke="url(#treeGradient)" 
                strokeWidth="10" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: treeGrowth }}
              />
              {/* Branch 2 (Right) */}
              <motion.path 
                d="M 196 260 C 250 260, 280 200, 320 120" 
                fill="none" 
                stroke="url(#treeGradient)" 
                strokeWidth="9" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: treeGrowth }}
              />
              {/* Branch 3 (Left High) */}
              <motion.path 
                d="M 198 200 C 150 190, 130 140, 110 80" 
                fill="none" 
                stroke="url(#treeGradient)" 
                strokeWidth="8" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: treeGrowth }}
              />
              {/* Branch 4 (Right High) */}
              <motion.path 
                d="M 200 160 C 240 150, 260 100, 280 50" 
                fill="none" 
                stroke="url(#treeGradient)" 
                strokeWidth="7" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: treeGrowth }}
              />
              {/* Branch 5 (Top) */}
              <motion.path 
                d="M 200 150 C 180 110, 220 70, 200 20" 
                fill="none" 
                stroke="url(#treeGradient)" 
                strokeWidth="6" 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pathLength: treeGrowth }}
              />

              {/* Leaves */}
              {leaves.map((leaf, i) => (
                <motion.circle 
                  key={i}
                  cx={leaf.cx} 
                  cy={leaf.cy} 
                  r={leaf.r} 
                  fill="#2dd4bf" 
                  className="drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]"
                  style={{ 
                    scale: leavesGrowth, 
                    opacity: leavesGrowth,
                    rotate: wobble,
                    transformOrigin: `${leaf.cx}px ${leaf.cy}px`
                  }} 
                />
              ))}

              {/* Glowing Nodes (Futuristic touch) */}
              {leaves.map((leaf, i) => (
                <motion.circle 
                  key={`node-${i}`}
                  cx={leaf.cx} 
                  cy={leaf.cy} 
                  r={leaf.r / 3} 
                  fill="#fff" 
                  className="drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
                  style={{ 
                    scale: leavesGrowth, 
                    opacity: leavesGrowth,
                    rotate: wobble,
                    transformOrigin: `${leaf.cx}px ${leaf.cy}px`
                  }} 
                />
              ))}

              <defs>
                <linearGradient id="treeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#004d40" />
                  <stop offset="50%" stopColor="#006D5B" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
}
