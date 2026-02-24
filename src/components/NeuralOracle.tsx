import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Send, ImagePlus, X } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function NeuralOracle() {
  const [input, setInput] = useState('');
  const [vision, setVision] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVision = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if ((!input.trim() && !image) || loading) return;
    setLoading(true);
    setVision('');
    
    try {
      const parts: any[] = [];
      
      if (image) {
        const base64Data = image.split(',')[1];
        const mimeType = image.split(';')[0].split(':')[1];
        parts.push({
          inlineData: {
            data: base64Data,
            mimeType,
          }
        });
      }

      parts.push({
        text: `You are the Neural Oracle of DIGIUANA, a high-end bioluminescent tech agency. 
A potential client has approached you with this idea/industry: "${input || 'Analyze this image'}".
Generate a short, poetic, and highly creative 3-sentence brand vision for them. 
If an image is provided, analyze its core essence and suggest how to evolve it into a bioluminescent, futuristic brand identity.
Use organic tech and evolutionary metaphors. 
Make it sound visionary, premium, and slightly mysterious.`
      });

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.1-pro-preview',
        contents: { parts },
      });
      
      for await (const chunk of responseStream) {
        setVision((prev) => prev + (chunk.text || ''));
      }
    } catch (error) {
      console.error(error);
      setVision('The neural link was disrupted. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-obsidian">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-green/10 text-neon-green mb-6 border border-neon-green/30 shadow-[0_0_30px_rgba(0,255,133,0.2)]"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            The Neural <span className="text-neon-green">Oracle</span>
          </motion.h2>
          <p className="text-white/50 uppercase tracking-widest text-xs font-bold">
            Powered by Gemini 3.1 Pro
          </p>
        </div>

        <div className="bg-glass rounded-[2rem] p-8 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Scanning line effect */}
          {loading && (
            <motion.div 
              className="absolute left-0 right-0 h-0.5 bg-neon-green/50 shadow-[0_0_10px_#00FF85] z-20"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          )}

          <form onSubmit={generateVision} className="relative mb-8 z-10 flex flex-col gap-4">
            <AnimatePresence>
              {image && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative w-32 h-32 rounded-xl overflow-hidden border border-neon-green/30"
                >
                  <img src={image} alt="Upload preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setImage(null)}
                    className="absolute top-1 right-1 p-1 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative flex items-center gap-2">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-white/50 hover:text-neon-green hover:border-neon-green/50 transition-colors"
                title="Upload image for analysis"
              >
                <ImagePlus className="w-5 h-5" />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your industry or idea (e.g., Sustainable Fashion)..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-16 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-green/50 focus:ring-1 focus:ring-neon-green/50 transition-all font-mono text-sm"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || (!input.trim() && !image)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-neon-green text-obsidian rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:hover:bg-neon-green"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {vision ? (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl bg-neon-green/5 border border-neon-green/20 relative z-10"
              >
                <p className="font-body text-lg text-white/90 leading-relaxed">
                  {vision}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 text-center relative z-10"
              >
                <p className="font-mono text-sm text-white/30">
                  Awaiting input to synthesize your digital evolution...
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
