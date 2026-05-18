import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              EXCLUSIVELY FOR OVER 60s
            </div>
            <h1 className="text-5xl lg:text-7xl mb-6 leading-[1.1]">
              The <span className="text-brand-primary italic">Only</span> Arm Exercises You Need After 60
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Stop doing the wrong routines. Build stronger, functional arms that keep you independent and active. No gym required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#exercises" className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:translate-y-[-2px] hover:shadow-lg transition-all">
                View Routine <ArrowRight className="w-5 h-5" />
              </a>
              <button className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                <Play className="w-5 h-5 fill-slate-700" /> Watch Demo
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/seed/senior-fitness/800/1000" 
                alt="Active senior exercising" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <p className="text-brand-primary font-bold text-lg mb-1">Coach Insight</p>
                <p className="text-slate-600 text-sm">"Functional strength isn't about vanity—it's about independence."</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
