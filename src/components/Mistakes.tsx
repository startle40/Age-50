import { motion } from 'motion/react';
import { OctagonX, CheckCircle, Info } from 'lucide-react';

export default function Mistakes() {
  const mistakes = [
    {
      title: 'Going too heavy too fast',
      desc: 'Start light to protect your joints and ligaments. You can always increase weight later.',
      icon: <OctagonX className="text-red-500" />
    },
    {
      title: 'Rushing the repetitions',
      desc: 'Speed is your enemy. Slow, controlled movement is what builds real senior strength.',
      icon: <OctagonX className="text-red-500" />
    },
    {
      title: 'Skipping because of mild soreness',
      desc: 'Light soreness is healthy. Only skip if you feel sharp or joint pain.',
      icon: <OctagonX className="text-red-500" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 p-12 lg:p-20 rounded-[3rem] border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl mb-8">Common Mistakes to Avoid</h2>
              <div className="space-y-8">
                {mistakes.map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{m.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{m.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-center">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-2xl mb-4 text-brand-primary">Coach Tip: Muscle Recovery</h3>
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                "After age 60, recovery takes a little longer but is just as crucial. Make sure you are sleeping at least 7-8 hours and staying hydrated. Your muscles grow while you rest, not while you work."
              </p>
              <div className="flex items-center gap-3 text-slate-800 font-bold">
                <CheckCircle className="text-emerald-500" />
                <span>Scientifically Proven Routine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
