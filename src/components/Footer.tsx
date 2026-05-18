import { Mail, Instagram, Youtube, Facebook, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display mb-6">BoomerHealth <span className="text-brand-accent">Essentials</span></h2>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              A healthcare-first approach to movement for the baby boomer generation. Simple, safe, and science-backed routines for quality longevity.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"><Youtube className="w-5 h-5" /></div>
              <div className="p-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"><Instagram className="w-5 h-5" /></div>
              <div className="p-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"><Facebook className="w-5 h-5" /></div>
              <div className="p-2 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"><Mail className="w-5 h-5" /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-accent mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Full Exercise Guide</li>
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Nutrition for Seniors</li>
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Balance & Mobility</li>
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Sleep Quality Study</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-brand-accent mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Mission & Vision</li>
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Medical Board</li>
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-white/10">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} BoomerHealth Essentials. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500 text-xs bg-white/5 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Medical Disclaimer: Consult your doctor before starting any new exercise routine.
          </div>
        </div>
      </div>
    </footer>
  );
}
