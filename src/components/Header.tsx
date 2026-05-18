import { motion } from 'motion/react';
import { Dumbbell, ShieldCheck, UserCheck } from 'lucide-react';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary p-1.5 rounded-lg">
              <Dumbbell className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold font-display text-brand-primary">BoomerHealth <span className="text-brand-accent">Essentials</span></span>
          </div>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            <a href="#exercises" className="hover:text-brand-primary transition-colors">Exercises</a>
            <a href="#routine" className="hover:text-brand-primary transition-colors">Daily Routine</a>
            <a href="#coach" className="bg-brand-primary text-white px-4 py-2 rounded-full hover:bg-brand-primary/90 transition-all">Free Coach</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
