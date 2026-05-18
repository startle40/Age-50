import { motion } from 'motion/react';
import { Calendar, Clock, RotateCcw } from 'lucide-react';

export default function Routine() {
  const schedule = [
    { day: 'Monday', action: 'Routine Active', active: true },
    { day: 'Tuesday', action: 'Rest & Recovery', active: false },
    { day: 'Wednesday', action: 'Walking / Active Rest', active: false },
    { day: 'Thursday', action: 'Routine Active', active: true },
    { day: 'Friday', action: 'Rest & Recovery', active: false },
    { day: 'Saturday', action: 'Active Living', active: false },
    { day: 'Sunday', action: 'Rest', active: false },
  ];

  return (
    <section id="routine" className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl mb-8 leading-tight">Your 20-Minute Weekly Routine</h2>
            <p className="text-brand-primary/20 text-lg mb-10 leading-relaxed text-blue-100/70">
              Consistency is more important than Intensity. Follow this structure twice a week to see noticeable strength gains within 4 to 6 weeks.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Time Commitment</h4>
                  <p className="text-blue-100/60">Just 20 minutes per session including light warm-up.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <RotateCcw className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Rest Periods</h4>
                  <p className="text-blue-100/60">Rest 60 seconds between each set to allow muscle recovery.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Frequency</h4>
                  <p className="text-blue-100/60">Twice a week is the sweet spot for safety and growth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-[3rem] border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center">Suggested Weekly Schedule</h3>
            <div className="space-y-3">
              {schedule.map((item) => (
                <div 
                  key={item.day}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${
                    item.active 
                    ? 'bg-brand-accent border-brand-accent text-white shadow-lg scale-[1.02]' 
                    : 'bg-white/5 border-white/10 text-white/40'
                  }`}
                >
                  <span className="font-bold">{item.day}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${item.active ? 'text-white' : 'text-white/20'}`}>
                    {item.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
